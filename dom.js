// GETELEMENTBYID
let head = document.getElementById("main-header");
head.style.borderBottom = "solid 2px black";

document.getElementById("header-title").innerHTML = "Welcome to the Item Lister";

// GETELEMENTSBYCLASSNAME
let items = document.getElementsByClassName("list-group-item");
items[1].style.backgroundColor = "lightgreen";

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "lightblue";
    items[i].style.fontWeight = 'bold';
}

// GETELEMENTSBYTAGNAME
let items1 = document.getElementsByTagName("li");
for (let i = 0; i < items1.length; i++) {
    items1[i].style.backgroundColor = "tomato";
}