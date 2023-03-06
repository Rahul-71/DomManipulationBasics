let submitBtn = document.querySelector('input[type="submit"]')

submitBtn.addEventListener('click', saveInfo);


function saveInfo(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let time = document.getElementById('time').value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("time", time);

    // console.log(localStorage);
}
