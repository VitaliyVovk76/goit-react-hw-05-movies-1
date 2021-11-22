import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import * as moviesShelfAPI from "../services/moviesshelf-api";
import MoviesList from "../components/MoviesList/MoviesList";
import Title from "../components/Title/Title";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const url = "movies";
  const location = useLocation();
  const btnName = "Назад на главную";
  useEffect(() => {
    moviesShelfAPI.fetchMoviesTrending().then(setMovies);
  }, []);

  return (
    <>
      <Title title="Trending today" />
      {movies && (
        <MoviesList
          movies={movies}
          url={url}
          location={location}
          btnName={btnName}
        />
      )}
    </>
  );
}
