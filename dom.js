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


// using query selector
// 1. Make the 2nd item have green background color
items[1].style.backgroundColor = "lightgreen";

// 2. Make the 3rd item invisible
items[2].style.display = "none";

// Using QuerySelectorALL change the font color to green for 2nd item in the item list
items = document.querySelectorAll(".list-group-item");
items[1].style.backgroundColor = "darkgreen";

// Choose all the odd elements and make their background green using QuerySelectorALL
items.forEach(item => {
    item.style.backgroundColor = "lightgreen";
});

