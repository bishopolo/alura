import dataPlants from "../public/db.json"; // Ruta relativa al archivo JSON
import { createPost } from "./utils/createPost";
import { deleteItem } from "./utils/deleteItem";
import { restoreData } from "./utils/restoreData";
import { showData } from "./utils/showData";
import { updatePost } from "./utils/updatePost";
import { validateForm } from "./utils/validateForm";
import { Plant } from "./utils/types";
import { cleanScreen } from "./utils/cleanScreen";

const ul = document.querySelector(".ul") as HTMLUListElement;
const $ = (element: string) => document.querySelector(element);
const $$ = (element: string) => document.querySelectorAll(element);
const id = (element: string) =>
  document.getElementById(element) as HTMLInputElement;
const inputs = $$(".input");
let isValidForm = false;
let isValid = false;
const form = $(".form") as HTMLFormElement;
const searchForm = $(".searchForm");
const btnSubmit = $(".btnSubmit") as HTMLButtonElement;
const inputHidden = id("hidden");
const popover = id("formPopover");

window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("plants")) {
    localStorage.setItem("plants", JSON.stringify(dataPlants));
  }

  const plantsArray: Plant[] = JSON.parse(
    localStorage.getItem("plants")!
  ).plants;
  showData(ul, plantsArray);

  document.addEventListener("click", (e) => {
    const self = e.target as HTMLElement;
    if (self.matches(".delete")) {
      let confirmation = confirm("Are you sure to delete this item? 🤨🤨🤨");
      if (confirmation) {
        let id = self.dataset.id!;
        deleteItem(id);
      }
    }

    if (self.matches(".restore")) {
      restoreData();
    }

    if (self.matches(".update")) {
      let confirmation = confirm("Are you sure to update this item? 🤨🤨🤨");
      if (confirmation) {
        let id = self.dataset.id!;
        // console.log(id);
        updatePost(id);
        popover.showPopover();
      }
    }

    if (self.matches(".closePopover")) {
      form.reset();
      btnSubmit.disabled = true;
    }
  });

  inputs.forEach((input) => {
    let newInput = input as HTMLInputElement;

    newInput.addEventListener("input", () => {
      isValid = validateForm(newInput, form, isValidForm, btnSubmit);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputHidden.value) {
      inputs.forEach((input) => {
        let newInput = input as HTMLInputElement;

        newInput.addEventListener("input", () => {
          isValid = validateForm(newInput, form, isValidForm, btnSubmit);
        });
      });

      if (isValid) {
        const name = id("name").value.trim();
        const description = id("description").value.trim();
        const price = id("price").value.trim();
        const img = id("img").value.trim();
        const plantsArray: Plant[] = JSON.parse(
          localStorage.getItem("plants")!
        ).plants;
        const idPost = inputHidden.value;

        const idPostUpdate = plantsArray.findIndex(
          (plant: { id: string }) => plant.id == idPost
        );

        const post = plantsArray[idPostUpdate];

        post.name = name;
        post.description = description;
        post.price = `$${price}`;
        post.image = img;

        // console.log(plantsArray);
        localStorage.setItem("plants", JSON.stringify({ plants: plantsArray }));
        cleanScreen(ul);
        showData(ul, plantsArray);

        form.reset();

        btnSubmit.textContent = "create";
        btnSubmit.disabled = true;
        inputHidden.value = "";
        alert("post updated 🥳🥳🥳");
        popover.hidePopover();
      }

      return;
    }

    if (isValid) {
      const name = id("name").value.trim();
      const description = id("description").value.trim();
      const price = id("price").value.trim();
      const imgInput = id("img").value.trim();

      createPost(name, description, price, imgInput);
      alert("post created 🥳🥳🥳");
      form.reset();
      btnSubmit.disabled = true;
      popover.hidePopover();
    }
  });

  searchForm!.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = id("search").value.toLowerCase().trim();
    const newPlants = plantsArray.filter((plant) =>
      plant.name.toLowerCase().includes(searchValue)
    );

    if (newPlants.length > 0) {
      cleanScreen(ul);
      showData(ul, newPlants);
    } else {
      alert(`sorry, we do not have plants called ${searchValue} 😔😔😔`);
    }
    // console.log(searchValue, newPlants);
  });

  // console.log(localStorage.getItem("plants"));
});

console.log(
  "%c ⛔️⛔️⛔️ No hay nada que ver por acá ⛔️⛔️⛔️",
  "background-color:#232425; color : #bada55; font-size:30px");
