import { dbPlants } from "../../public/db.js";
import { showData } from "./showData.js";

export async function restoreData(loader) {
  for (const plant of dbPlants) {
    const response = await fetch(
      "https://673bb8a096b8dcd5f3f73ee7.mockapi.io/plants",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plant),
      }
    );
  }
  const api = await fetch("https://673bb8a096b8dcd5f3f73ee7.mockapi.io/plants");
  const data = await api.json();
  //   console.log(data);
  showData(data);
  loader.style.display = "none";

  //   console.log(JSON.stringify(dbPlants));
}
