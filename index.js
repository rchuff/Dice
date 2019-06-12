
//generate number for dice
function diceGen () {
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 6) + 1;
  return randomNumber;
}

//image for dice roll
function imageGen(randNum, diceNum) {
  var randomImage = "images/dice" + randNum + ".png";

  document.querySelectorAll("div img")[diceNum - 1].setAttribute("src", randomImage);
}

var randomNumber1 = diceGen();
var randomNumber2 = diceGen();


imageGen(randomNumber1, 1);
imageGen(randomNumber2, 2);

//Outputs for draw and each player winning
if (randomNumber1 === randomNumber2) {
  document.querySelector("div h1").textContent = "Draw!";
}

else if (randomNumber1 > randomNumber2) {
  document.querySelector("div h1").textContent = "Player 1 Wins!";
}

else {
  document.querySelector("div h1").textContent = "Player 2 Wins!";
}
