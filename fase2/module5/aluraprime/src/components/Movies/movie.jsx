import { useContext } from "react";
import { contextMovies } from "../../context/index";
import { useState } from "react";

export function Movie({
  img,
  title,
  rating,
  quality,
  genre,
  duration,
  release,
  link,
  id,
  isLiked,
}) {
  const { setMovies, setFavorites, favorites } = useContext(contextMovies);
  const [isAnimating, setIsAnimating] = useState(false);
  const classAnimating = isAnimating ? "animation" : "";
  const liked = isLiked ? "liked " : " ";

  const updateLikeStatus = (data, type, id) => {
    // lo que hacemos es una copia del estado, y luego buscamos el item que queremos actualizar que está en cualquiera de las 3 caterogias (trending, movies, series), luego buscamos el item en la categoria de donde dieron click y ya cuando lo obtenemos modificamos el estado de isLiked, y luego retornamos el nuevo estado, esto funciona porque al manipular item sigue haciendo referencia a newData, y newData es una copia de data y esto no muta el estado original y es lo que devolvemos este nuevo estado.
    const newData = JSON.parse(JSON.stringify(data));
    const item = newData[type].find((item) => item.id === id);
    const newLikedState = !item.isLiked;
    const updatedItem = { ...item, isLiked: newLikedState };
    if (item) {
      item.isLiked = !item.isLiked;
    }

    if (newLikedState) {
      console.log("Agregando a favoritos:", updatedItem);
      setFavorites((prev) => {
        const exists = prev ? prev.some((item) => item.id === id) : false;
        if (exists) {
          return prev;
        }
        return prev ? [...prev, updatedItem] : [updatedItem];
      });
    } else {
      console.log("Removiendo de favoritos:", id);
      setFavorites((prev) =>
        prev ? prev.filter((item) => item.id !== id) : []
      );
    }
    // console.log(data, type, id);

    return newData;
  };

  function handleClick(e) {
    const self = e.target;
    const id = self.dataset.id;
    const category = id.split("-")[0];
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800);
    setMovies((prevData) => updateLikeStatus(prevData, category, id));

    console.log(favorites);
  }

  return (
    <div className="movie flex flex-col w-[180px] min-h-[400px] border-0 border-red-400 p-2 relative shadow-2xl rounded-md card">
      <img
        src={img}
        alt={title}
        className=" w-[99%] h-[220px] rounded-md object-cover mx-auto shadow-xl"
      />
      <footer className="flex flex-col justify-between h-full">
        <div>
          <section className="flex border-0 my-2 gap-2 justify-between">
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <div className="border-0 text-right text-slate-100">
              <p className="">({release})</p>
              <p className="text-[14px]">⭐️{rating}</p>
            </div>
          </section>
          <section className="text-slate-900 text-[14px] ">
            <p className="">🎭 {genre}</p>
            <div className="border-0 flex justify-between items-center">
              <p className="">⏱️ {duration}</p>
              <span
                className={`heart block border-0 ${classAnimating} ${liked}`}
                onDoubleClick={handleClick}
                data-id={id}
              ></span>
            </div>
          </section>
        </div>
        <p className="absolute top-2 left-2 backdrop-blur-md text-white rounded-md p-1 shadow-lg font-bold">
          ️{quality}
        </p>
        <a
          href={link}
          className="border-0  block w-full my-2 bg-slate-900  text-white py-2 rounded-md text-center font-bold shadow-2xl watch "
          target="_blank"
          rel="noreferrer"
        >
          Watch ▶️
        </a>
      </footer>
    </div>
  );
}
