import { cleanScreen } from "./cleanScreen.js";
import { showData } from "./showData.js";
import { getData } from "./getData.js";

export async function createPost(name, description, price, image) {
  price = `$${price}`;
  const ul = document.querySelector(".ul");
  //   const plantsArray = JSON.parse(localStorage.getItem("plants")!).plants;
  const id = crypto.randomUUID();
  const postObject = {
    id,
    name,
    description,
    price,
    image,
  };
  // console.log(postObject);
  const response = await fetch(
    "https://673bb8a096b8dcd5f3f73ee7.mockapi.io/plants",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObject),
    }
  );
  let plantsData = await getData();
  cleanScreen(ul);
  showData(plantsData);
}
