import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('start');
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    const getMovieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    getMovieReviews();
  }, [movieId]);

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }

  if (status === 'rejected') {
    return <h2>Sorry, something went wrong: {error}</h2>;
  }

  if (status === 'resolved') {
    if (reviews.length === 0) {
      return <p>Sorry, we don't have any reviews for this movie</p>;
    }

    return (
      <ul>
        {reviews.map(review => {
          const { id, author, content } = review;
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Reviews;
