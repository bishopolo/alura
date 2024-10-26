export function validateForm(
  input: HTMLInputElement,
  form: HTMLFormElement,
  isValid: boolean,
  btnSubmit: HTMLButtonElement
) {
  if (!input.validity.valid) {
    input.parentElement!.classList.add("error");
  } else {
    input.parentElement!.classList.remove("error");
  }

  if (form.checkValidity()) {
    isValid = true;
    btnSubmit.disabled = false;
  } else {
    isValid = false;
    btnSubmit.disabled = true;
  }

  return isValid;
}
