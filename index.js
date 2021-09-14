if (window.performance.navigation.type === 1) {
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var randomNumner1 = getRandom(1, 6);
  var randomNumner2 = getRandom(1, 6);
  var player1Dice = document.querySelector(".img1");
  var player2Dice = document.querySelector(".img2");

  switch (randomNumner1) {
    case 1:
      player1Dice.setAttribute("src", "images/dice1.png");
      break;
    case 2:
      player1Dice.setAttribute("src", "images/dice2.png");
      break;
    case 3:
      player1Dice.setAttribute("src", "images/dice3.png");
      break;
    case 4:
      player1Dice.setAttribute("src", "images/dice4.png");
      break;
    case 5:
      player1Dice.setAttribute("src", "images/dice5.png");
      break;
    case 6:
      player1Dice.setAttribute("src", "images/dice6.png");
      break;
  }
  switch (randomNumner2) {
    case 1:
      player2Dice.setAttribute("src", "images/dice1.png");
      break;
    case 2:
      player2Dice.setAttribute("src", "images/dice2.png");
      break;
    case 3:
      player2Dice.setAttribute("src", "images/dice3.png");
      break;
    case 4:
      player2Dice.setAttribute("src", "images/dice4.png");
      break;
    case 5:
      player2Dice.setAttribute("src", "images/dice5.png");
      break;
    case 6:
      player2Dice.setAttribute("src", "images/dice6.png");
      break;
  }

  var h1 = document.querySelector("h1");
  var winImg1 = document.querySelectorAll("img")[0];
  var winImg2 = document.querySelectorAll("img")[1];

  if (randomNumner1 > randomNumner2) {
    h1.innerHTML = "Player 1";
    winImg1.classList.add("show");
  } else if (randomNumner1 < randomNumner2) {
    h1.innerHTML = "Player 2";
    winImg2.classList.add("show");
  } else {
    h1.innerHTML = "Draw";
    winImg2.classList.add("show");
    winImg1.classList.add("show");
  }
}
