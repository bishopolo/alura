import { cleanScreen } from "./cleanScreen.js";
import { showData } from "./showData";

export function deleteItem(id: string) {
  const plantsArray = JSON.parse(localStorage.getItem("plants")!).plants;
  const newPlantsArray = plantsArray.filter(
    (plant: { id: string }) => plant.id != id
  );
  const ul = document.querySelector(".ul") as HTMLUListElement;
  const plantsObject = { plants: newPlantsArray };
  localStorage.setItem("plants", JSON.stringify(plantsObject));

  cleanScreen(ul);
  showData(ul, newPlantsArray);
  // console.log(id, newPlantsArray);
}
