let submitBtn = document.querySelector('input[type="submit"]')

submitBtn.addEventListener('click', saveInfo);
const appointList = document.getElementById('appointmentTable');
const appointBody = document.getElementById('appointmentBody');

appointBody.addEventListener('click', deleteAppointment);


displayToAppointment();

function saveInfo(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let time = document.getElementById('time').value;

    const user = {
        "name": name,
        "email": email,
        "contact": phone,
        "time": time
    };

    let userArr = localStorage.getItem("users");

    if (userArr == null) {
        userArr = [];
    } else {
        userArr = JSON.parse(userArr);
    }
    userArr.push(user);

    localStorage.setItem("users", JSON.stringify(userArr));

    // display info into appointment list
    // create a row element first
    const newRow = document.createElement('tr');
    // create new cells
    let nameTd = document.createElement('td');
    nameTd.textContent = user.name;
    let phoneTd = document.createElement('td');
    phoneTd.textContent = user.contact;
    let timeTd = document.createElement('td');
    timeTd.textContent = user.time;

    let deleteTd = document.createElement('td');
    let delbtn = document.createElement('button')
    delbtn.classList = "btn btn-sm btn-danger cancelCall";
    delbtn.textContent = 'X';
    deleteTd.appendChild(delbtn);

    newRow.appendChild(nameTd);
    newRow.appendChild(phoneTd);
    newRow.appendChild(timeTd);
    newRow.appendChild(deleteTd);

    appointBody.appendChild(newRow);
}


function displayToAppointment() {
    let userDetails = localStorage.getItem("users");

    if (userDetails != null) {
        let userArr = JSON.parse(userDetails);

        userArr.forEach(user => {

            // create a row element first
            const newRow = document.createElement('tr');
            // create new cells
            let name = document.createElement('td');
            name.textContent = user.name;
            let phone = document.createElement('td');
            phone.textContent = user.contact;
            let time = document.createElement('td');
            time.textContent = user.time;

            let deleteTd = document.createElement('td');
            let delbtn = document.createElement('button')
            delbtn.classList = "btn btn-sm btn-danger cancelCall";
            delbtn.textContent = 'X';
            deleteTd.appendChild(delbtn);

            newRow.appendChild(name);
            newRow.appendChild(phone);
            newRow.appendChild(time);
            newRow.appendChild(deleteTd);

            appointBody.appendChild(newRow);

        });
    }
}

// delete appointment while click of delete btn
function deleteAppointment(e) {
    e.preventDefault();

    if (Array.from(e.target.classList).includes('cancelCall')) {
        if (confirm("Are you sure to cancel the appointment ?")) {
            // getting row of using del btn
            const row = e.target.parentNode.parentNode;
            // get the index of this row using 'rowIndex' property of table row
            const rowIndx = row.rowIndex;

            // fetch the userDetails from localStorage
            let userDetails = localStorage.getItem("users");
            userDetails = JSON.parse(userDetails);

            userDetails.splice(rowIndx - 1, 1);

            localStorage.setItem("users", JSON.stringify(userDetails));

            row.remove();
        }
    }

}