// // GETELEMENTBYID
// let head = document.getElementById("main-header");
// head.style.borderBottom = "solid 2px black";

// document.getElementById("header-title").innerHTML = "Welcome to the Item Lister";

// // GETELEMENTSBYCLASSNAME
// let items = document.getElementsByClassName("list-group-item");
// items[1].style.backgroundColor = "lightgreen";

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "lightblue";
//     items[i].style.fontWeight = 'bold';
// }

// // GETELEMENTSBYTAGNAME
// let items1 = document.getElementsByTagName("li");
// for (let i = 0; i < items1.length; i++) {
//     items1[i].style.backgroundColor = "tomato";
// }


// // using query selector
// // 1. Make the 2nd item have green background color
// items[1].style.backgroundColor = "lightgreen";

// // 2. Make the 3rd item invisible
// items[2].style.display = "none";

// // Using QuerySelectorALL change the font color to green for 2nd item in the item list
// items = document.querySelectorAll(".list-group-item");
// items[1].style.backgroundColor = "darkgreen";

// // Choose all the odd elements and make their background green using QuerySelectorALL
// items = document.querySelectorAll(".list-group-item:nth-child(odd)");
// items.forEach(item => {
//     item.style.backgroundColor = "lightgreen";
// });



// TRAVERSING THE DOM
let itemList = document.querySelector("#items");
// console.log(itemList);

// // PARENTNODE
// console.log(itemList.parentNode);
// itemList.parentNode.style.background="#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// // CHILDNODE
// // childNode considers line break as a child node, so not recommended instead use children
// console.log(itemList.childNodes);

// // CHILDREN
// console.log(itemList.children);

// // FIRSTCHILD   
// // gives first child based on CHILDNODE property, so it'll give "text" node, instead use FIRSTELEMENTNODE
// console.log(itemList.firstChild);  

// // FIRSTELEMENTCHILD
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello, world";
// console.log(itemList.lastElementChild);


// // NEXTSIBLINGS
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// // PREVIOUSSIBLING
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";


// CREATEELEMENT

// create a div
let div = document.createElement("div");
div.className = "new div";
div.id = "newDiv";
// div.textContent = "Hello, world";
div.style.color = "red";
div.style.fontSize = "20px";
div.style.fontWeight = "bold";
div.style.textAlign = "center";

// appending a textNode element into newly created div 
let newDivText = document.createTextNode("HEllo world");
// add text to div
div.appendChild(newDivText);
console.log(div);

// okay lets try to insert it into the DOM
let secondContainer = document.querySelector("header .container");
console.log(secondContainer);
secondContainer.insertBefore(div, secondContainer.firstChild);

let ul = document.querySelector("ul");
let newLi = document.createElement("li");
newLi.textContent = "new Hello list";
ul.insertBefore(newLi, ul.firstChild);
