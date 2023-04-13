import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import poster from 'images/poster-not-found.png';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('start');
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setStatus('pending');
    const getMovieDetails = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        setMovie(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }
  if (status === 'rejected') {
    return <h2>Sorry, something went wrong: {error}</h2>;
  }
  if (status === 'resolved') {
    const { title, release_date, vote_average, overview, genres, poster_path } =
      movie;

    return (
      <div>
        <Link to={backLinkLocationRef.current}>Go back</Link>
        {poster_path ? (
          <img src={`${POSTER_PATH}${poster_path}`} alt="movie poster" />
        ) : (
          <img src={poster} alt="movie poster" />
        )}

        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>User Score: {Math.round(vote_average * 10)} %</p>

        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(genre => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>

        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
  }
};

export default MovieDetails;
