import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../services/moviesshelf-api";

function ReviewsList({ movieId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length > 0) {
    return (
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
  return <h3>There are no reviews yet</h3>;
}

export default ReviewsList;
