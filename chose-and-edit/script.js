//let controlsDiv = document.querySelector("#controls");const addButton = document.querySelector("#addButton");
const textInput = document.querySelector("#textInput");
const tagName = document.querySelector("#tagName");
const divPage = document.querySelector("#webpage");

addButton.addEventListener("click", function () {
  const createNewElement = document.createElement(tagName.value);
  createNewElement.textContent = textInput.value;
  createNewElement.onclick = function () {
    console.log(createNewElement);
  };
  divPage.appendChild(createNewElement);
});

/////
const pageDiv = document.getElementById("webpage");
const option = document.getElementById("tagName");
const button = document.getElementById("addButton");
const input = document.getElementById("textInput");

function respondToClick() {
  console.log("respondToClick");
  let newElement = document.createElement(option.value);
  newElement.innerHTML = input.value;
  newElement.optionValue = option.value;
  newElement.onclick = function () {
    console.log("clicked " + newElement.textContent);
    input.value = newElement.textContent;
    option.value = newElement.optionValue;
    button.innerHTML = "Edit";
    button.onclick = function () {
      console.log("edit function" + input.value);
      newElement.innerHTML = input.value;
      button.innerHTML = "Add";
      button.onclick = respondToClick;
    };
  };
  pageDiv.appendChild(newElement);
}

window.onload = function () {
  button.onclick = respondToClick;
};
