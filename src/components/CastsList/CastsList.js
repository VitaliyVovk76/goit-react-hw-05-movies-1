import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchMovieActors, IMAGE_URL } from "../../services/moviesshelf-api";
import s from "./CastsList.module.css";

function CastsList({ movieId }) {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieActors(movieId).then(setActors);
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul className={s.list}>
          {actors.map((actor) => (
            <li className={s.item} key={actor.id}>
              <img
                src={actor.profile_path && `${IMAGE_URL}${actor.profile_path}`}
                alt={actor.name}
              />
              <p>name: {actor.name}</p>
              <p>character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

CastsList.propTypes = { movieId: PropTypes.string.isRequired };

export default CastsList;
