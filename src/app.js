/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here ♦ ♥ ♠ ♣
  createCard();
  let buttonCreate = document.querySelector("#generador");
  buttonCreate.addEventListener("click", function(event) {
    createCard();
  });
  let buttonSize = document.querySelector("#size");
  let height = document.querySelector("#height-number");
  let width = document.querySelector("#width-number");
  let card = document.querySelector(".card");
  console.log(height.innerHTML);

  buttonSize.addEventListener("click", function(event) {
    console.log(height.value);
    if (height.value > 299 && width.value > 299) {
      card.style.height = `${height.value}px`;
      card.style.width = `${width.value}px`;
      createCard();
    }
  });
  setInterval(createCard, 10000);
};

function createCard() {
  let randomNumber = Math.floor(Math.random() * 13);
  let randomSuit = Math.floor(Math.random() * 4);
  let numberArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suitArray = ["♦", "♥", "♠", "♣"];

  let number = document.querySelector(".number");
  number.innerHTML = numberArray[randomNumber];

  let suitTop = document.querySelector(".suitTop");
  let suitBottom = document.querySelector(".suitBottom");

  let suit = suitArray[randomSuit];

  let paragraphs = document.querySelectorAll('[class*="suit"]');

  if (randomSuit <= 1) {
    paragraphs[0].style.color = "red";
    paragraphs[1].style.color = "red";
  } else {
    paragraphs[0].style.color = "black";
    paragraphs[1].style.color = "black";
  }

  suitTop.innerHTML = suit;
  suitBottom.innerHTML = suit;
}
