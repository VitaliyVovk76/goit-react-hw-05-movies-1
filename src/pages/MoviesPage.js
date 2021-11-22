import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Searchbar from "../components/SearchBar/SearchBar";
import { useRouteMatch } from "react-router-dom";

import MoviesList from "../components/MoviesList/MoviesList";
import { fetchMovieOfName } from "../services/moviesshelf-api";

function MoviesPage() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [moviesCollection, setmoviesCollection] = useState([]);
  const btnName = "Назад к фильмам";

  const hendleFormSubmit = (query) => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  useEffect(() => {
    const historyQuery =
      history.location.search && history.location.search.match(/[a-z0-9]+$/)[0];
    if (historyQuery === "") {
      return;
    }
    fetchMovieOfName(historyQuery).then(setmoviesCollection);
  }, [history.location.search]);

  return (
    <>
      <Searchbar onSubmit={hendleFormSubmit} />
      {moviesCollection && (
        <MoviesList
          movies={moviesCollection}
          url={url}
          location={location}
          btnName={btnName}
        />
      )}
    </>
  );
}

export default MoviesPage;
