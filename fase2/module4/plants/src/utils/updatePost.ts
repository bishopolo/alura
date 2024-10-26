import { Plant } from "./types";

export function updatePost(id: string) {
  const plantsArray: Plant[] = JSON.parse(
    localStorage.getItem("plants")!
  ).plants;

  let element: Plant | undefined = plantsArray.find(
    (plant: { id: string }) => plant.id == id
  );
  //   console.log(element);

  document.querySelectorAll(".form div").forEach((div) => {
    if (div.classList.contains("error")) {
      div.classList.remove("error");
    }
  });

  const ID = (element: string) =>
    document.getElementById(element) as HTMLInputElement;
  const nameInput = ID("name");
  const descriptionInput = ID("description");
  const priceInput = ID("price");
  const imageInput = ID("img");
  const hiddenInput = ID("hidden");
  const btnSubmit = ID("btnSubmit");

  if (element) {
    nameInput.value = element.name;
    descriptionInput.value = element.description;
    priceInput.value = element.price.slice(1);
    imageInput.value = element.image;
    hiddenInput.value = element.id;
    btnSubmit.textContent = "update";
    // btnSubmit.disabled = false;
  }
}
