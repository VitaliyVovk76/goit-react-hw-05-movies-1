function MovieСard({ movie, imgUrl }) {
  const reliseDate = movie.release_date.split("-")[0];
  const voteAverage = movie.vote_average * 10;
  return (
    <div>
      <img
        src={movie.poster_path && `${imgUrl}${movie.poster_path}`} ///////
        alt={movie.title}
      />
      <h2>
        {movie.title} <span>{reliseDate}</span>
      </h2>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>
        Genres <span>{voteAverage}%</span>
      </h3>
      <hr />
    </div>
  );
}

export default MovieСard;
