let usersName;
do {
  usersName = prompt("What`s your name?");
} while (usersName === "" || usersName === null);
document.getElementById("heading").innerText = `Hello, ${usersName}!`;
