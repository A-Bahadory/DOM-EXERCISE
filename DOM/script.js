// const title = document.getElementById("main-heading");
// const tagName = document.getElementsByTagName("div");

// title.style.color = "green";

//creating element
const heading = document.getElementById("main-heading");
const ul = document.querySelector(".container");
const h1 = document.createElement("h1");
ul.append(h1);
h1.setAttribute("id", "main-heading");
h1.textContent = "goode luck!";
h1.removeAttribute("id");

const listOf = document.querySelector("ul");
const creatingLi = document.createElement("li");
listOf.append(creatingLi);
creatingLi.classList.add("list-items");
creatingLi.innerText = "new lock";
creatingLi.style.color = "black";

// console.log(ul.getAttribute("class"));
// gerAttribute('class or id'); by this can see the element (id) if we write id, (class) if write class
