const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Assuming you have a list element with id "myList"
//var myList = document.getElementById("myList");

// Add a click event listener to the list
// deleteButton.addEventListener("click", function (e) {
//   deleteListItem(e);
// });

// Your deleteListItem function
// function deleteListItem(e) {
//   if (e.target.classList.contains("checked")) {
//     e.target.parentElement.remove();
//   } else {
//     alert("You must select a task");
//   }
// }

function addTask() {
  if (inputBox.value === "") {
    alert("You must write a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "🗑";
    // cross code \u00d7
    li.appendChild(span);
  }
  inputBox.value = "";
  // after type in input it should  kep empty the input filed
  saveData();
}
// writing test for click function
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //to check if the tag name of a target element is "LI" (list item)
      e.target.classList.toggle("checked");
      // we call the toggle function to toggle if the chec
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// we save our data in the local storage through saveData function
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// to display data we write localStorage.getItem("data")

// display the data whenever we open or refresh the browser

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();
// calling the function
