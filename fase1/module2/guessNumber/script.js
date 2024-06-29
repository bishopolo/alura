let numberattemps = 5;
let maxNumberGuess = 10;
const $hearts = document.querySelectorAll(".beat");
const $form = document.querySelector(".form");
const $information = document.querySelector(".information");
const $guessBtn = document.querySelector(".guessBtn");
const $gameBtn = document.querySelector(".gameBtn");
const $guess = document.querySelector(".numbers");
const $input = document.querySelector("input");
const guessedNumbers = [];
let secretNumber = getRandomNumber();

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(secretNumber);
  const input = +$input.value;

  if (input === secretNumber) {
    $information.innerHTML = `Great you guessed the number <span class='secretNumber'>${secretNumber}<span>`;
    animation();

    let tmpText =
      guessedNumbers.length > 0 && guessedNumbers.length < maxNumberGuess
        ? `${guessedNumbers.at(-1)}, `
        : guessedNumbers.at(-1);

    $guess.textContent += tmpText;
    $guessBtn.setAttribute("disabled", true);
    $gameBtn.removeAttribute("disabled");
  } else if (input >= 1 && input <= maxNumberGuess) {
    if (input > secretNumber) {
      $information.textContent = "the secret number is lower";
    } else {
      $information.textContent = "the secret number is higher";
    }
  } else {
    $information.textContent = `sorry, dude \n the number ${input} is out range, try it again!!!`;
  }

  numberattemps--;
  $hearts[numberattemps].src = "./images/heart32.png";

  if (numberattemps === 0) {
    $information.textContent =
      "sorry dude, you do not have more lives, try it again";
    window.location.reload();
  }
});

function getRandomNumber() {
  const secretNumber = Math.floor(Math.random() * maxNumberGuess) + 1;

  if (guessedNumbers.length === maxNumberGuess) {
    $information.textContent = `hey dude, you guessed all numbers between 1 and 10, refresh the page to play again`;
  } else if (guessedNumbers.includes(secretNumber)) {
    return getRandomNumber();
  } else {
    guessedNumbers.push(secretNumber);
    return secretNumber;
  }
}

$gameBtn.addEventListener("click", (e) => {
  $hearts.forEach((element) => (element.src = "./images/heart32color.png"));
  numberattemps = 5;
  secretNumber = getRandomNumber();
  // console.log(secretNumber);
  $input.value = "";
  if (!secretNumber) {
    $guessBtn.setAttribute("disabled", true);
  } else {
    $guessBtn.removeAttribute("disabled");
  }
  $gameBtn.setAttribute("disabled", true);
});

function animation() {
  const end = Date.now() + 20 * 500;

  const colors = ["#bb0000", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });

    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
