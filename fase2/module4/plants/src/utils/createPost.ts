import { cleanScreen } from "./cleanScreen";
import { showData } from "./showData";

export function createPost(
  name: string,
  description: string,
  price: string,
  image: string
) {
  price = `$${price}`;
  const ul = document.querySelector(".ul") as HTMLUListElement;
  const plantsArray = JSON.parse(localStorage.getItem("plants")!).plants;
  const id = crypto.randomUUID();
  const postObject = {
    id,
    name,
    description,
    price,
    image,
  };
  // console.log(postObject);
  plantsArray.unshift(postObject);
  localStorage.setItem("plants", JSON.stringify({ plants: plantsArray }));
  cleanScreen(ul);
  showData(ul, plantsArray);

  // console.log(plantsArray);
}
