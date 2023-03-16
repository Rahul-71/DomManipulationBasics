// Define server ID for the API endpoint
var serverId = "a819f15b20094be3a24ea2c9de3e9ce7";

// Create an instance of the Axios library with the base URL for the API endpoint
var axiosInstance = axios.create({
    baseURL: `https://crudcrud.com/api/${serverId}/appointment`
});

// Select the form and submit button elements from the HTML document
const myform = document.getElementById('myForm');
let submitBtn = document.querySelector('input[type="submit"]');

// Add an event listener to the submit button to handle form submissions
submitBtn.addEventListener('click', saveInfo);

// Select the appointment table and its body element from the HTML document
const appointList = document.getElementById('appointmentTable');
const appointBody = document.getElementById('appointmentBody');

// Add an event listener to the appointment table body element to handle appointment modification (deletion and editing)
appointBody.addEventListener('click', modifyAppointment);

// Fetch all existing appointments when the page loads
getAllAppointments();

// Add a new appointment to the API endpoint
function addAppointment(appointmentBody) {
    axiosInstance.post('', appointmentBody)
        .then(response => {
            console.log("post response");
            console.log(response);
            displayToAppointment(response);
        })
        .catch(error => alert(error));
}

// Delete an appointment from the API endpoint by its ID
function deleteAppointment(id) {
    axiosInstance.delete(`/${id}`)
        .then(response => {
            console.log("delete response");
            console.log(response);
        })
        .catch(error => alert(error));
}

// Fetch all appointments from the API endpoint
function getAllAppointments() {
    axiosInstance.get('')
        .then(response => {
            console.log("get response");
            console.log(response);
            console.log("status: " + response.status);
            console.log("data: " + response.data);
            displayToAppointment(response);
        })
        .catch(error => {
            alert(error);
        });
}

// Fetch a single appointment from the API endpoint by its ID
function getAppointmentById(id) {
    return axiosInstance.get(`/${id}`)
        .then(response => {
            console.log("get by id response");
            console.log(response);
            return response;
        })
        .catch(error => {
            console.error(`GET BY ID error occurred: ${error}`);
            alert(error);
        });
}

// Save the appointment form data to the API endpoint
function saveInfo(e) {
    e.preventDefault();

    // Retrieve the user input from the form fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let time = document.getElementById('time').value;

    // Create an appointment object to store the user input
    const user = {
        "name": name,
        "email": email,
        "contact": phone,
        "timing": time
    };

    // Add the new appointment to the API endpoint
    addAppointment(user);

    // Reset the form fields
    myform.reset();
}

// This function displays appointment details in a table
function displayToAppointment(response) {
    if (response.status == 200) {
        // If the response status is 200, display all the appointments in the table
        console.log("inside displayToAppointment | response is null");
        console.log("allAppointments: " + response);
        if (response.data.length > 0) {
            // Loop through all the appointments and display them in the table
            const allInfo = response.data;
            allInfo.forEach(user => {
                // Create a new row
                const newRow = document.createElement('tr');
                newRow.setAttribute('id', user._id);

                // Create new cells for name, phone and time
                let name = document.createElement('td');
                name.textContent = user.name;
                let phone = document.createElement('td');
                phone.textContent = user.contact;
                let time = document.createElement('td');
                time.textContent = user.timing;

                // Add a delete button
                let deleteTd = document.createElement('td');
                let delbtn = document.createElement('button')
                delbtn.classList = "btn btn-sm btn-danger cancelCall";
                delbtn.textContent = 'X';
                deleteTd.appendChild(delbtn);

                // Add an edit button
                let editTd = document.createElement('td');
                let editbtn = document.createElement('button')
                editbtn.classList = "btn btn-sm btn-success editCall";
                editbtn.textContent = 'Edit';
                editTd.appendChild(editbtn);

                // Append all the cells to the row
                newRow.appendChild(name);
                newRow.appendChild(phone);
                newRow.appendChild(time);
                newRow.appendChild(editTd);
                newRow.appendChild(deleteTd);

                // Append the row to the appointment table
                appointBody.appendChild(newRow);
            });
        }
    } else if (response.status == 201) {
        // If the response status is 201, a new appointment has been created, so display it in the table
        console.log("inside displayToAppointment | response is not null");
        const user = response.data;

        // Create a new row for the new appointment
        const newRow = document.createElement('tr');
        newRow.setAttribute('id', user._id);

        // Create new cells for name, phone and time
        let nameTd = document.createElement('td');
        nameTd.textContent = user.name;
        let phoneTd = document.createElement('td');
        phoneTd.textContent = user.contact;
        let timeTd = document.createElement('td');
        timeTd.textContent = user.timing;

        // Add a delete button
        let deleteTd = document.createElement('td');
        let delbtn = document.createElement('button')
        delbtn.classList = "btn btn-sm btn-danger cancelCall";
        delbtn.textContent = 'X';
        deleteTd.appendChild(delbtn);

        // Add an edit button
        let editTd = document.createElement('td');
        let editbtn = document.createElement('button')
        editbtn.classList = "btn btn-sm btn-success editCall";
        editbtn.textContent = 'Edit';
        editTd.appendChild(editbtn);

        // Append all the cells to the row
        newRow.appendChild(nameTd);
        newRow.appendChild(phoneTd);
        newRow.appendChild(timeTd);
        newRow.appendChild(editTd);
        newRow.appendChild(deleteTd);

        // Append the row to the appointment table
        appointBody.appendChild(newRow);
    }
}

// Function to modify appointment (delete or edit)
function modifyAppointment(e) {
    e.preventDefault();

    if (Array.from(e.target.classList).includes("cancelCall")) {
        if (confirm("Are you sure you want to cancel the appointment?")) {
            deleteBooking(e);
        }
    } else if (Array.from(e.target.classList).includes("editCall")) {
        // Get the appointment id
        const id = e.target.parentNode.parentNode.getAttribute("id");
        // Get the appointment by id
        getAppointmentById(id)
            .then((res) => {
                // Delete the appointment from server and table row
                deleteBooking(e);

                // Populate values into the form fields
                const info = res.data;
                document.getElementById("name").value = info.name;
                document.getElementById("email").value = info.email;
                document.getElementById("phone").value = info.contact;
                document.getElementById("time").value = info.timing;
            })
            .catch((err) => console.error(err));
    }
}

// Function to delete booking
function deleteBooking(e) {
    // Get the row clicked
    const row = e.target.parentNode.parentNode;

    // Remove the row from the table
    const deleteRow = new Promise((resolve, reject) => {
        row.remove();
        resolve();
    });

    // Get the appointment id
    const id = row.getAttribute("id");

    // Delete the appointment from the server
    Promise.all([deleteAppointment(id), deleteRow])
        .then(() => console.log("Row deleted."))
        .catch((err) =>
            console.error(`Error while deleting row from table: ${err}`)
        );
}