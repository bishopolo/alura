import { useContext } from "react";
import { contextMovies } from "../context/index";
import { Movie } from "../components/Movies/movie";

export function Favorites() {
  const { favorites } = useContext(contextMovies);

  return (
    <>
      <article className="my-4">
        <section className="flex border-0 gap-2 p-2 flex-wrap justify-evenly">
          {favorites.length > 0 ? (
            favorites.map((movie) => <Movie {...movie} key={movie.id} />)
          ) : (
            <h1 className="txt-4xl ">You do not have favorites yet 😔😔😔</h1>
          )}
        </section>
      </article>
    </>
  );
}
