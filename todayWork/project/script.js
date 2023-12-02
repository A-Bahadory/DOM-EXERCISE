//let whichUser = 0;
// userDiv.innerHTML =
//   "Hello, " +
//   users[0].user.name.title +
//   users[0].user.name.first +
//   "" +
//   users[0].user.name.last +
//   "!";
// const userName = users[whichUser].user.name;
// userDiv.innerHTML =
//   "hello," + userName.title + " " + userName.first + "" + userName.last + "!";
const userDiv = document.getElementById("user");

const header = document.createElement("h1");
const image = document.createElement("img");
const address = document.createElement("p");
userDiv.appendChild(header);
userDiv.appendChild(image);
userDiv.appendChild(address);

function displayName(num) {
  const userName = users[num].user.name;
  header.innerText = `${userName.title} ${userName.first} ${userName.last} !`;

  image.src = users[num].user.picture.large;
  let userLocation = users[num].user.location;
  address.innerText = `${userLocation.street}:
  ${userLocation.city}: 
  ${userLocation.state}: 
  ${userLocation.zip}:`;
}
displayName(0);

const forwardButton = document.getElementById("forward-btn");
let num = 0;
forwardButton.addEventListener("click", function () {
  if (num === users.length - 1) {
    num = 0;
  } else {
    num++;
  }
  displayName(num);
});

const backwardBtn = document.getElementById("backward-btn");
backwardBtn.addEventListener("click", function () {
  if (num === 0) {
    num = users.length - 1;
  } else {
    num--;
  }
  displayName(num);
});
