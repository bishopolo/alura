import KEYS from "./keys.js";

const $input = document.getElementById("textArea");
const $btnEncrypt = document.getElementById("encrypt");
const $btnDecrypt = document.getElementById("decrypt");
const $information = document.getElementById("information");
const $length = document.querySelector(".length");
const $dialog = document.getElementById("dialog");
const $header = document.getElementById("header");
const $cards = document.querySelector("#cards");
let isLengthAllowed = false;
let warningText =
  "  the text cannot contain uppercase letters, numbers or special characters";

// console.log(KEYS);

$btnEncrypt.addEventListener("click", (e) => {
  if (!isLengthAllowed) return showAlert("Encrypt");

  resetDialog();

  let textToEncrypt = isInRange($input.value.trim());
  let textEncrypted = "";
  const { text } = textToEncrypt;

  if (textToEncrypt.isRange) {
    for (let char of text) {
      textEncrypted += encrypt(char);
    }
    if (textEncrypted.trim().length === 0) return alert("add some text");
    // console.log(textEncrypted.trim().length);
    $cards.insertAdjacentHTML("afterbegin", Card(textEncrypted));
    // console.log(`great your text is ${text} now is encrypted ${textEncrypted}`);
    let lengthChildren = $cards.children.length;
    if (lengthChildren === 0) {
      $header.style.display = "block";
    } else {
      $header.style.display = "none";
    }
    resetInitialValues();
  } else {
    $dialog.showModal();
    let title = `<p class='warningText'> ${warningText}</p>`;
    let p = `<p id='msg'> ${text} </p>`;
    let tmpHtml = `${title} ${p}`;
    $dialog.insertAdjacentHTML("beforeend", tmpHtml);
  }
});

$btnDecrypt.addEventListener("click", (e) => {
  if (!isLengthAllowed) return showAlert("Decrypt");
  resetDialog();
  let textToDecrypt = isInRange($input.value.trim());
  let textDecrypted = "";
  const { text } = textToDecrypt;
  if (textToDecrypt.isRange) {
    textDecrypted += decrypt(text).textDecrypted;
    $dialog.showModal();
    let title = `<p class='warningText'>your decrypted text is: </p>`;
    let p = `<p id='msg'>  ${textDecrypted}</p>`;
    let tmpHtml = `${title} ${p}`;
    $dialog.insertAdjacentHTML("beforeend", tmpHtml);
    resetInitialValues();
  } else {
    $dialog.showModal();
    let title = `<p class='warningText'> ${warningText}</p>`;
    let p = `<p id='msg'> ${text} </p>`;
    let tmpHtml = `${title} ${p}`;
    $dialog.insertAdjacentHTML("beforeend", tmpHtml);
  }
});

function resetInitialValues() {
  $input.value = "";
  $length.textContent = 0;
  isLengthAllowed = false;
}

function isInRange(msg) {
  let isRange = true;
  let text = "";

  for (let char of msg) {
    if (isAscii(char)) {
      text += char;
    } else {
      isRange = false;
      text += `<span class='error'>${char}</span>`;
    }
  }

  return {
    isRange,
    text,
  };
}

function isAscii(char) {
  if (
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
    char.charCodeAt(0) === 32 ||
    char.charCodeAt(0) === 10 ||
    char.charCodeAt(0) === 241
  ) {
    return true;
  } else {
    return false;
  }
}

function encrypt(char) {
  if (char in KEYS) {
    return KEYS[char];
  } else if (char === " ") {
    return " ";
  } else {
    return char;
  }
}

function decrypt(textToDecrypt) {
  resetDialog();
  let textDecrypted = textToDecrypt;
  let isEqualText = false;
  for (let key in KEYS) {
    if (textDecrypted.includes(KEYS[key])) {
      // console.log(KEYS[key], key);
      textDecrypted = textDecrypted.replaceAll(KEYS[key], key);
      // console.log(textDecrypted);
    }
  }

  if (textDecrypted === textToDecrypt) {
    if (textDecrypted.trim().length === 0) return alert("add some text");
    isEqualText = true;
    $dialog.showModal();
    let title = `<p class='warningText'>Bad news 🫤🫤🫤 </p>`;
    let p = `<p id='msg'> the text <span class='info'> ${textToDecrypt}</span> is not encrypted </p>`;
    let tmpHtml = `${title} ${p}`;
    return $dialog.insertAdjacentHTML("beforeend", tmpHtml);
  }

  // console.log({ textDecrypted, textToDecrypt });
  return {
    textDecrypted,
    isEqualText,
  };
}

function showAlert(msgTypeAction) {
  return alert(
    `For ${msgTypeAction} the message must be at least 3 characters or maximun 300 characters`
  );
}

$input.addEventListener("input", (e) => {
  const length = e.target.value.length;
  $length.textContent = length;
  if (length > 300 || length < 3) {
    isLengthAllowed = false;
    // console.error("you cannot type more than 300 characters");
    $length.classList.add("error");
    $input.classList.add("errorInput");
  } else {
    isLengthAllowed = true;
    $length.classList.remove("error");
    $input.classList.remove("errorInput");
  }
  // console.log(e.target.value.length);
});

function Card(msg) {
  return `<div class="card">
            <p class="text">${msg}</p>
            <section class="actions">
              <button class="btnCard copy">📝</button>
              <button class="btnCard delete">🗑️</button>
            </section>
          </div>`;
}

function resetDialog() {
  const $msg = document.getElementById("msg");
  const $warningText = document.querySelector(".warningText");
  if ($msg) {
    if ($msg.textContent.length > 0) {
      $msg.remove();
      $warningText.remove();
    }
  }
}

$cards.addEventListener("click", (e) => {
  if (e.target.matches(".copy")) {
    const card = e.target.closest(".card");
    let txt = card.querySelector(".text").textContent;
    navigator.clipboard
      .writeText(txt)
      .then(() => {
        // console.log("texto copiado");
        alert("text copied 👍👍👍");
      })
      .catch((err) => {
        // console.error("error ", err);
        alert("sorry, try again or refresh the page");
      });
  }

  if (e.target.matches(".delete")) {
    let confirmation = confirm("do you want to delete it?");
    if (confirmation) {
      // console.log(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.remove();
      let lengthChildren = $cards.children.length;
      if (lengthChildren === 0) {
        $header.style.display = "block";
      }
    }
  }
});
