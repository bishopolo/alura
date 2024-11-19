import { getData } from "./utils/getData.js";
import { showData } from "./utils/showData.js";
import { validateForm } from "./utils/validateForm.js";
import { cleanScreen } from "./utils/cleanScreen.js";
import { deleteItem } from "./utils/deleteItem.js";
import { restoreData } from "./utils/restoreData.js";
import { updatePost } from "./utils/updatePost.js";
import { createPost } from "./utils/ createPost.js";

const ul = document.querySelector(".ul");
const $ = (element) => document.querySelector(element);
const $$ = (element) => document.querySelectorAll(element);
const id = (element) => document.getElementById(element);
const inputs = $$(".input");
let isValidForm = false;
let isValid = false;
const form = $(".form");
const loader = $(".loader");
const searchForm = $(".searchForm");
const btnSubmit = $(".btnSubmit");
const inputHidden = id("hidden");
const popover = id("formPopover");

document.addEventListener("DOMContentLoaded", async (e) => {
  let plantsData = await getData();
  showData(plantsData);

  document.addEventListener("click", (e) => {
    const self = e.target;
    if (self.matches(".delete")) {
      let confirmation = confirm("Are you sure to delete this item? 🤨🤨🤨");
      if (confirmation) {
        let id = self.dataset.id;
        deleteItem(id);
      }
    }

    if (self.matches(".restore")) {
      loader.style.display = "block";
      restoreData(loader);
    }

    if (self.matches(".update")) {
      let confirmation = confirm("Are you sure to update this item? 🤨🤨🤨");
      if (confirmation) {
        let id = self.dataset.id;
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
    let newInput = input;
    newInput.addEventListener("input", () => {
      isValid = validateForm(newInput, form, isValidForm, btnSubmit);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (inputHidden.value) {
      inputs.forEach((input) => {
        let newInput = input;
        newInput.addEventListener("input", () => {
          isValid = validateForm(newInput, form, isValidForm, btnSubmit);
        });
      });

      if (isValid) {
        const name = id("name").value.trim();
        const description = id("description").value.trim();
        const price = id("price").value.trim();
        const img = id("img").value.trim();
        const idPost = inputHidden.value;
        // console.log(idPost);

        const postUpdated = {
          name: name,
          description: description,
          price: `$${price}`,
          image: img,
        };

        // console.log(postUpdated);

        const response = await fetch(
          `https://673bb8a096b8dcd5f3f73ee7.mockapi.io/plants/${idPost}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postUpdated),
          }
        );

        const newDataUpdated = await getData();
        cleanScreen(ul);
        showData(newDataUpdated);

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

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchValue = id("search").value.toLowerCase().trim();

    const api = await fetch(
      `https://673bb8a096b8dcd5f3f73ee7.mockapi.io/plants?name=${searchValue}`
    );
    const data = await api.json();

    if (typeof data !== "string") {
      cleanScreen(ul);
      showData(data);
    } else {
      alert(`sorry, we do not have plants called ${searchValue} 😔😔😔`);
    }
  });
});
