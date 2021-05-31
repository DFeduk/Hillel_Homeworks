function getUserName(string) {
  let userName;
  do {
    userName = prompt(string);
  } while (isNameValid(userName));
  return userName;
}

function isNameValid(userName) {
  return userName === "" || userName === null;
}
function getUserGreeting(userName) {
  return (document.getElementById("heading").innerText = `Hello, ${userName}!`);
}
const userName = getUserName("What`s your name?");
const greeting = getUserGreeting(userName);
