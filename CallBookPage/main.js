let submitBtn = document.querySelector('input[type="submit"]')

submitBtn.addEventListener('click', saveInfo);
const appointList = document.getElementById('appointmentTable');
const appointBody = document.getElementById('appointmentBody');

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
    // console.log(localStorage);

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

    newRow.appendChild(nameTd);
    newRow.appendChild(phoneTd);
    newRow.appendChild(timeTd);

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

            newRow.appendChild(name);
            newRow.appendChild(phone);
            newRow.appendChild(time);


            appointBody.appendChild(newRow);

        });

    }
}
