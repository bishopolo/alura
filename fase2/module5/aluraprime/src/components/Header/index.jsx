import { Navbar } from "../Navbar";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { contextMovies } from "../../context";
import { useAuth } from "../../context/authContext";
import { getData } from "../../utils/getData";

function Logo() {
  return (
    <h1 className="text-5xl title font-bold text-slate-900 border-0">
      <Link to="/home">Alura🎬Prime</Link>
    </h1>
  );
}

function Profile() {
  const { favorites, setFavorites, setMovies } = useContext(contextMovies);
  const { role } = useContext(useAuth);
  console.log(role);
  const classFavorites =
    favorites === null || favorites.length < 1 ? "hidden" : "block";

  function handleFavorites() {
    async function data() {
      let movies = await getData();
      setMovies(movies);
    }
    data();
    setFavorites([]);
  }

  return (
    <div className="border-0 border-red-500 items-center ">
      <ul className="flex  gap-3 text-2xl border-0 h-[40px] w-[80px] justify-center items-center">
        <li className={"border-0 " + classFavorites}>
          <Link to="/favorites" className="border-0 border-blue-500  relative">
            <svg
              fill="#000000"
              height="40px"
              width="40px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 297 297"
              className={"border-0 border-red-500 relative top-0 left-0 "}
            >
              <g>
                <path d="M148.5,0C85.646,0,34.511,51.136,34.511,113.989c0,25.11,8.008,48.926,23.157,68.873   c13.604,17.914,32.512,31.588,53.658,38.904l27.464,68.659c1.589,3.971,5.434,6.574,9.71,6.574c4.276,0,8.121-2.603,9.71-6.574   l27.464-68.659c21.147-7.316,40.054-20.99,53.658-38.904c15.149-19.947,23.157-43.763,23.157-68.873   C262.489,51.136,211.354,0,148.5,0z M174.839,203.279c-3.075,0.906-5.565,3.172-6.756,6.148L148.5,258.384l-19.583-48.956   c-1.19-2.977-3.681-5.242-6.756-6.148c-39.293-11.57-66.735-48.288-66.735-89.29c0-51.321,41.753-93.073,93.074-93.073   s93.074,41.752,93.074,93.073C241.574,154.991,214.132,191.709,174.839,203.279z" />
                <path d="M174.383,65.622c-10.12,0-19.287,4.158-25.883,10.856c-6.596-6.698-15.763-10.856-25.883-10.856   c-20.038,0-36.341,16.303-36.341,36.341c0,13.981,9.575,29.556,29.274,47.611c13.382,12.268,26.593,21.113,27.148,21.483   c1.757,1.171,3.778,1.757,5.801,1.757c2.022,0,4.044-0.586,5.801-1.757c0.556-0.37,13.767-9.216,27.148-21.483   c19.699-18.056,29.274-33.63,29.274-47.611C210.724,81.925,194.421,65.622,174.383,65.622z M148.495,149.61   c-18.777-13.618-41.303-34.994-41.303-47.647c0-8.505,6.92-15.425,15.425-15.425s15.425,6.92,15.425,15.425   c0,5.775,4.683,10.458,10.458,10.458c5.775,0,10.458-4.683,10.458-10.458c0-8.505,6.92-15.425,15.425-15.425   s15.425,6.92,15.425,15.425C189.808,114.581,167.274,135.971,148.495,149.61z" />
              </g>
            </svg>
            <div className="pulse"></div>
          </Link>
        </li>
        <li className="border-0">
          <a href="#" className="text-[30px]">
            {role === "admin" ? "🤴🏻" : "🤵🏻‍♂️"}
          </a>
        </li>
        <li>
          <Link
            to="/"
            className="border-0"
            title="exit"
            onClick={() => handleFavorites()}
          >
            🚪
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function Header() {
  const location = useLocation();
  // console.log(location);
  return (
    <header className="p-4  flex justify-between items-center border-0 ">
      <Logo />
      {location.pathname !== "/" && (
        <>
          <Navbar />
          <Profile />
        </>
      )}
    </header>
  );
}
