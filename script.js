const characterLimit = 200;
const textarea = document.querySelector("textarea");
const charactersLeftP = document.querySelector("#character-limit-info");
//const remainingCharacters = document.querySelector("#character-limit-info");

function updateCharacterLimit() {
  const charactersLeft = characterLimit - textarea.value.length;
  charactersLeftP.innerText = `You have ${charactersLeft} characters remaining`;
  //console.log(`You have ${charactersLeft} characters remaining`);
}

textarea.addEventListener("keyup", updateCharacterLimit);
