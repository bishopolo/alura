export function cleanScreen(element: HTMLUListElement) {
  while (element.firstElementChild) {
    element.removeChild(element.firstElementChild);
  }
}
