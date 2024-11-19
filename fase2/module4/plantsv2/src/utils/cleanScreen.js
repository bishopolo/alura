export function cleanScreen(element) {
  while (element.firstElementChild) {
    element.removeChild(element.firstElementChild);
  }
}
