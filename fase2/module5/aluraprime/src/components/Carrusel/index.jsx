export function Carrusel() {
  const movies = [
    {
      id: 1,
      title: "Gladiator II",
      img: "https://image.tmdb.org/t/p/original/uT3jb2exALtaWrlhi8AMcBwvYph.jpg",
      quality: "Cam",
      link: "https://2flix.lol/gladiator-ii/",
      rating: 68,
      genre: "Action, Adventure, Drama",
      duration: "2h 28m",
      release: 2024,
    },
    {
      id: 2,
      title: "Deadpool & Wolverine",
      img: "https://image.tmdb.org/t/p/original/ajnzOECvXpa7VcVx0RSlq39XgHe.jpg",
      quality: "HD",
      link: "https://2flix.lol/deadpool-wolverine/",
      rating: 76,
      genre: "Action, Comedy, Science Fiction",
      duration: "2h 8m",
      release: 2024,
    },
    {
      id: 3,
      title: "Venom: The Last Dance",
      img: "https://image.tmdb.org/t/p/original/5DyWG4TrSmnrCw4ppViUyEfdLxV.jpg",
      quality: "Cam",
      link: "https://2flix.lol/venom-the-last-dance/",
      rating: 70,
      genre: "Action, Science Fiction, Adventure",
      duration: "1h 49m",
      release: 2024,
    },
    {
      id: 4,
      title: "Moana 2",
      img: "https://image.tmdb.org/t/p/original/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg",
      quality: "Cam",
      link: "https://2flix.lol/moana-2/",
      rating: 70,
      genre: "Animation, Adventure, Family, Comedy",
      duration: "1h 40m",
      release: 2024,
    },
    {
      id: 5,
      title: "Alien: Romulus",
      img: "https://image.tmdb.org/t/p/original/gUJ5O8rux8ZZfHluElFPzTAWQqS.jpg",
      quality: "HD",
      link: "https://2flix.lol/alien-romulus/",
      rating: 72,
      genre: "Horror, Science Fiction",
      duration: "1h 59m",
      release: 2024,
    },

    //
  ];

  return (
    <section>
      <div className="flex h-[600px] my-10 shadow-2xl rounded-md border-0 overflow-hidden">
        {movies.map((movie) => (
          <Poster movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}

function Poster({ movie }) {
  return (
    <div className="poster">
      <img src={movie.img} alt={movie.title} className=" " />
      {/* <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full  flex justify-center items-center text-white text-2xl">
        <span>⭐️ {movie.rating}</span>
      </div> */}
    </div>
  );
}
