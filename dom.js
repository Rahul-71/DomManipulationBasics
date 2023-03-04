// GETELEMENTBYID
let head = document.getElementById("main-header");
head.style.borderBottom = "solid 2px black";

document.getElementById("header-title").innerHTML = "Welcome to the Item Lister";

// getElementsByClassName
let items = document.getElementsByClassName("list-group-item");
// console.log(items);
items[1].style.backgroundColor = "lightgreen";

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "lightblue";
    items[i].style.fontWeight = 'bold';
}