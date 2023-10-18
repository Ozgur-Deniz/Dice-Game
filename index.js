var name1, name2;

function addName() {
  name1 = prompt("Please, enter the first player name: ");
  name2 = prompt("Please, enter the second player name: ");
  document.querySelector(".addBtn").remove();
  document.querySelector(".p1").innerHTML = name1;
  document.querySelector(".p2").innerHTML = name2;
}

function game() {
  var randomNumber1 = Math.floor(Math.random() * 6);
  var randomNumber2 = Math.floor(Math.random() * 6);
  randomNumber1++;
  randomNumber2++;
  document
    .querySelector(".dice1")
    .setAttribute("src", "photos/dice" + randomNumber1 + ".png");
  document
    .querySelector(".dice2")
    .setAttribute("src", "photos/dice" + randomNumber2 + ".png");

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector(".btn").innerHTML = "Draw again!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 " + name1 + " wins!";
    document.querySelector(".btn").innerHTML = "Again huh ?";
  } else {
    document.querySelector("h1").innerHTML = name2 + " wins! 🚩";
    document.querySelector(".btn").innerHTML = "Again huh ?";
  }
}

var myNameButton = document.querySelector(".addBtn");
myNameButton.addEventListener("click", addName);

var myDrawButton = document.querySelector(".btn");
myDrawButton.addEventListener("click", game);
