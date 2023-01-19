import React, { useState, createContext } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { ErrorFallback } from "./components/ErrorFallback";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { movie } from "./types";

const defaultMovies = [
  {
    name: "Avengers",
    rating: "95",
    duration: "2hrs",
    hidden: false,
  },
  {
    name: "Thor",
    rating: "90",
    duration: "2.3hrs",
    hidden: false,
  },
  {
    name: "AntMan",
    rating: "87",
    duration: "2hrs",
    hidden: false,
  },
];

interface Context {
  movies: movie[];
  setMovies: React.Dispatch<React.SetStateAction<movie[]>> | null;
  setNotFound: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export const MoviesContext = createContext<Context>({
  movies: [],
  setMovies: null,
  setNotFound: null,
});

function App() {
  const [movies, setMovies] = useState<movie[]>(defaultMovies);
  const [notFound, setNotFound] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar navbar-light bg-dark bg-gradient ">
        <div className="container-fluid">
          <span className="navbar-brand text-light">Favourite Movie Directory</span>
        </div>
      </nav>
      <div className="App d-flex align-items-start justify-content-center border border-2 pt-2">
        <MoviesContext.Provider
          value={{
            movies: movies,
            setMovies: setMovies,
            setNotFound: setNotFound,
          }}
        >
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            resetKeys={[notFound]}
            onReset={() => {
              setNotFound(false);
            }}
          >
            <MovieForm />
            <div className="m-2 App__childs d-flex flex-column align-items-center">
              <MovieSearch />
              {notFound ? (
                <div className="alert alert-warning w-100" role="alert">
                  No movies found!! :(
                </div>
              ) : (
                <MovieList />
              )}
            </div>
          </ErrorBoundary>
        </MoviesContext.Provider>
      </div>
    </>
  );
}

export default App;
