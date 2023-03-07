let submitBtn = document.querySelector('input[type="submit"]')

submitBtn.addEventListener('click', saveInfo);
const appointList = document.getElementById('appointmentTable');
const appointBody = document.getElementById('appointmentBody');

appointBody.addEventListener('click', updateAppointment);


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

    let editTd = document.createElement('td');
    let editbtn = document.createElement('button')
    editbtn.classList = "btn btn-sm btn-success editCall";
    editbtn.textContent = 'Edit';
    editTd.appendChild(editbtn);

    newRow.appendChild(nameTd);
    newRow.appendChild(phoneTd);
    newRow.appendChild(timeTd);
    newRow.appendChild(editTd);
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

            let editTd = document.createElement('td');
            let editbtn = document.createElement('button')
            editbtn.classList = "btn btn-sm btn-success editCall";
            editbtn.textContent = 'Edit';
            editTd.appendChild(editbtn);

            newRow.appendChild(name);
            newRow.appendChild(phone);
            newRow.appendChild(time);
            newRow.appendChild(editTd);
            newRow.appendChild(deleteTd);

            appointBody.appendChild(newRow);

        });
    }
}

// delete appointment while click of delete btn
function updateAppointment(e) {
    e.preventDefault();

    if (Array.from(e.target.classList).includes('cancelCall')) {
        if (confirm("Are you sure to cancel the appointment ?")) {
            deleteBooking(e);
        }
    } else if (Array.from(e.target.classList).includes('editCall')) {
        // console.log("editing....");
        let info = deleteBooking(e);
        // console.log("deleted....");

        // console.log("editing info : " + info.name);

        document.getElementById('name').value = info.name;
        document.getElementById('email').value = info.email;
        document.getElementById('phone').value = info.contact;
        document.getElementById('time').value = info.time;

        // saveInfo(e);
    }

}

function deleteBooking(e) {

    // getting row of using del btn
    const row = e.target.parentNode.parentNode;
    // get the index of this row using 'rowIndex' property of table row
    const rowIndx = row.rowIndex;

    // fetch the userDetails from localStorage
    let userDetails = localStorage.getItem("users");
    userDetails = JSON.parse(userDetails);

    let removedElement = userDetails.splice(rowIndx - 1, 1)[0];

    // console.log("typeof removedElement : " + typeof removedElement);
    // console.log("removedElement : " + removedElement.name);

    localStorage.setItem("users", JSON.stringify(userDetails));

    row.remove();

    return removedElement;
}