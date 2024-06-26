let numberattemps = 5;
let maxNumberGuess = 10;
const $hearts = document.querySelectorAll(".beat");

window.document.addEventListener("DOMContentLoaded", async (e) => {
  let waiting = await time(1000);

  let numberUser = +prompt(
    "Welcome to guess the secret number 🎲🔮 \n  untill what number do you want to guess? by default is untill 10",
    10
  );
  maxNumberGuess = !numberUser ? maxNumberGuess : numberUser;
  const secretNumber = Math.floor(Math.random() * maxNumberGuess) + 1;
  //   console.log({ numberUser, maxNumberGuess, secretNumber });

  while (numberattemps >= 1) {
    let userNumber = +prompt(
      `Give me a number between 1 and ${maxNumberGuess}`
    );

    if (userNumber === secretNumber) {
      alert(`Great you guessed the number ${secretNumber}`);
      animation();
      break;
    } else if (userNumber >= 1 && userNumber <= maxNumberGuess) {
      if (userNumber > secretNumber) {
        alert("the secret number is lower");
      } else {
        alert("the secret number is higher");
      }
    } else {
      alert(
        `sorry, dude \n the number ${userNumber} is out range, try again!!!`
      );
    }

    numberattemps--;
    $hearts[numberattemps].src = "./images/heart32.png";
    await time(300);
  }
  if (numberattemps === 0) {
    alert("sorry dude, you do not have more lives, try again");
    window.location.reload();
  }
});

function time(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

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
