import { Movie } from "./movie";

export function Movies({ title, movies }) {
  return (
    <article>
      <Title title={title} />
      <section
        className="flex border-0 gap-2 p-2 flex-wrap justify-evenly"
        id={title}
      >
        {movies.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </section>
    </article>
  );
}

function Title({ title }) {
  return <h2 className="text-3xl font-bold text-white my-4">{title}</h2>;
}
