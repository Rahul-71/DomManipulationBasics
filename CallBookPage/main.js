let submitBtn = document.querySelector('input[type="submit"]')

submitBtn.addEventListener('click', saveInfo);


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
}
