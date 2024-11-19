import { showData } from "./showData.js";
import { cleanScreen } from "./cleanScreen.js";
export async function deleteItem(id) {
  const ul = document.querySelector(".ul");

  try {
    const response = await fetch(
      `https://673bb8a096b8dcd5f3f73ee7.mockapi.io/plants/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Occur an error trying to delete the item, try it again");
    }

    const api = await fetch(
      "https://673bb8a096b8dcd5f3f73ee7.mockapi.io/plants"
    );
    const data = await api.json();
    // console.log(data);
    cleanScreen(ul);
    showData(data);
  } catch (error) {
    alert("Error al eliminar la tarea:", error);
  }
}
