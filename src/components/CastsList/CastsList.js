import { useState, useEffect } from "react";
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

export default CastsList;
