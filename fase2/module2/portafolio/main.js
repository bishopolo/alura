const $cards = document.querySelectorAll(".card");
const MULTIPLICADOR = 25;
const getElement = (element) => document.getElementById(element);
// const $nameInput = getElement("name");
// const $emailInput = getElement("email");
// const $subjectInput = getElement("subject");
// const $messageInput = getElement("message");
const $inputs = document.querySelectorAll(".in");
const $submitBtn = getElement("submit");
const $listInfo = document.querySelector(".listInfo");
const $form = getElement("form");
let transform = "";
let isValidForm = false;
// console.log($cards);

$cards.forEach((card) => {
  transform = getComputedStyle(card).transform;
  // console.log(transform);
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // Coordenada X relativa a la tarjeta
    const mouseY = e.clientY - rect.top; // Coordenada Y relativa a la tarjeta

    // Calcular el centro de la tarjeta
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calcular los ángulos de rotación
    const rotateX = ((mouseY - centerY) / centerY) * MULTIPLICADOR;
    const rotateY = ((mouseX - centerX) / centerX) * -MULTIPLICADOR;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = transform;
  });
});

document.addEventListener("DOMContentLoaded", (e) => {
  $inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (!input.validity.valid) {
        input.parentElement.classList.add("error");
        input.parentElement.nextElementSibling
          .querySelector(".listInfo")
          .classList.add("show");
      } else {
        input.parentElement.classList.remove("error");
        input.parentElement.nextElementSibling
          .querySelector(".listInfo")
          .classList.remove("show");
      }

      if ($form.checkValidity()) {
        // console.log(input);
        $submitBtn.disabled = false;
        isValidForm = true;
      } else {
        $submitBtn.disabled = true;
        isValidForm = false;
      }
    });
  });

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isValidForm) {
      alert("enviando formulario");
      $form.reset();
      $submitBtn.disabled = true;
    }
  });

  // console.log({ $nameInput, $emailInput, $messageInput, $subjectInput });

  // function validateInput(e, minLength, maxLength) {
  //   let inputValue = e.value.trim();
  //   let lengthValue = inputValue.length;
  //   // console.log(inputValue, minLength, maxLength);

  //   if (lengthValue >= minLength && lengthValue <= maxLength) {
  //     isValidForm = true;
  //     return true;
  //   } else {
  //     isValidForm = false;
  //     return false;
  //   }
  // }

  // function validateForm(e) {
  //   let isValidInputName = validateInput($nameInput, 2, 15);
  //   let isValidInputEmail = validateInput($emailInput, 2, 30);
  //   let isValidInputSubject = validateInput($subjectInput, 3, 20);
  //   let isValidInputMessage = validateInput($messageInput, 5, 80);

  //   console.log(
  //     isValidInputName,
  //     isValidInputSubject,
  //     isValidInputEmail,
  //     isValidInputMessage
  //   );

  //   if (
  //     isValidInputName &&
  //     isValidInputEmail &&
  //     isValidInputSubject &&
  //     isValidInputMessage
  //   ) {
  //     $submitBtn.disabled = false;
  //   } else {
  //     $submitBtn.disabled = true;
  //   }
  // }

  // $nameInput.addEventListener("input", (e) => {
  //   validateForm(e);
  // });

  // $emailInput.addEventListener("input", (e) => {
  //   validateForm(e);
  // });
  // $subjectInput.addEventListener("input", (e) => {
  //   validateForm(e);
  // });
  // $messageInput.addEventListener("input", (e) => {
  //   validateForm(e);
  // });
});
