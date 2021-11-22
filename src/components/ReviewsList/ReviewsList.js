import { useState, useEffect } from "react";
import PropTypes from "prop-types";
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

ReviewsList.propTypes = { movieId: PropTypes.string.isRequired };

export default ReviewsList;
