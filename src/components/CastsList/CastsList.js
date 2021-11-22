import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchMovieActors, IMAGE_URL } from "../../services/moviesshelf-api";

function CastsList({ movieId }) {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieActors(movieId).then(setActors);
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul>
          {actors.map((actor) => (
            <li key={actor.id}>
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
