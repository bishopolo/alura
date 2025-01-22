// import { useState } from "react";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header";
import { Carrusel } from "./components/Carrusel";
import { Movies } from "./components/Movies";
import { useEffect, useContext } from "react";
import { contextMovies } from "./context/index";
import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/favorites";
import { NotFound } from "./pages/notFound";
import { SelectRole } from "./pages/selectRole";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Edit } from "./pages/edit";
import { Footer } from "./components/Footer";
import { getData } from "./utils/getData";

function App() {
  const { setMovies } = useContext(contextMovies);

  useEffect(() => {
    async function data() {
      let movies = await getData();
      setMovies(movies);
    }
    data();
  }, []);
  // console.log(movies);

  return (
    <>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<SelectRole />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute requiredRole={["admin", "guest"]}>
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit"
            element={
              <ProtectedRoute requiredRole={["admin"]}>
                <Edit />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Wrapper>
    </>
  );
}

function Home() {
  const { movies } = useContext(contextMovies);

  return (
    <>
      <Carrusel />
      {movies !== null && (
        <>
          <Movies title="Trending" movies={movies.trending} />
          <Movies title="Movies" movies={movies.movies} />
          <Movies title="Series" movies={movies.series} />
        </>
      )}
    </>
  );
}

export default App;
