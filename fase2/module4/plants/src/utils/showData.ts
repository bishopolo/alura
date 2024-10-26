import { Plant } from "./types";

export function showData(element: HTMLUListElement, plantsArray: Plant[]) {
  //   console.log(plantsArray);

  const buttonRestore = document.querySelector(".restore") as HTMLButtonElement;

  if (buttonRestore) {
    buttonRestore.remove();
  }

  if (!plantsArray.length) {
    const button = `
        <button class='border-2 px-4 py-2 rounded-sm restore'> restore data </button> 
    `;
    element.innerHTML = button;
  }

  for (let plant of plantsArray) {
    // console.log(plant.image);
    let li = `
        <li class='shadow-xl rounded-lg my-5 card border-0 border-red-400 w-[250px]' > 
            <div>
              <figure class=' relative   size-[200px] border-0 mx-auto '>
                <img src='${plant.image}' class=' rounded-lg object-cover block border-0 border-red-400 img  absolute  bottom-0  w-full max-w-full'>
              </figure>

              <section class='bg-slate-200 rounded-tl-3xl rounded-tr-3xl p-4  rounded-b-lg'>
                <p class='text-2xl font-bold  '> ${plant.name}</p> 
                <p class='text-gray-400 my-4'> ${plant.description}</p> 
                <div class='flex justify-between items-end'>
                  <p class='font-bold'> ${plant.price}</p> 
                  <div>
                    <button data-id=${plant.id}  class='cursor-pointer ml-4 delete bg-green-100 shadow-lg border-0 border-black rounded-lg p-1'>🗑️</button>
                    <button data-id=${plant.id}  class='cursor-pointer ml-4 update bg-green-100 shadow-lg border-0 border-black rounded-lg p-1'>📝</button>
                  </div>
                </div>
              </section>
            </div>
        </li>
    `;

    element.innerHTML += li;
  }
}
