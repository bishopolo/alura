import dataPlants from "../../public/db.json"; // Ruta relativa al archivo JSON
import { showData } from "./showData";

export function restoreData() {
  localStorage.setItem("plants", JSON.stringify(dataPlants));
  const plantsArray = JSON.parse(localStorage.getItem("plants")!).plants;
  const ul = document.querySelector(".ul") as HTMLUListElement;
  showData(ul, plantsArray);
}
