import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IMAGE_URL } from "../../services/moviesshelf-api";
import s from "./MoviesList.module.css";

function MoviesList({ movies, url, location, btnName }) {
  return (
    <>
      <ul className={s.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.movieItem}>
            <Link
              to={{
                pathname: `${url}/${movie.id}`,
                state: {
                  from: {
                    location,
                    label: btnName,
                  },
                },
              }}
            >
              <img
                className={s.movieItemImg}
                src={movie.poster_path && `${IMAGE_URL}${movie.poster_path}`} ///////
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
