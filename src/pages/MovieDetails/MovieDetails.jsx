import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import poster from 'images/poster-not-found.png';
import {
  MovieDetailsContainer,
  BackLink,
  MoviePoster,
  MovieTitle,
  MovieContainer,
  DetailsTitle,
  DetailsLink,
} from './MovieDetails.styled';

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
      <MovieDetailsContainer>
        <BackLink to={backLinkLocationRef.current}>Go back</BackLink>

        <MovieContainer>
          {poster_path ? (
            <MoviePoster
              src={`${POSTER_PATH}${poster_path}`}
              alt="movie poster"
            />
          ) : (
            <MoviePoster src={poster} alt="movie poster" />
          )}

          <div>
            <MovieTitle>
              {title} ({release_date.slice(0, 4)})
            </MovieTitle>
            <p>User Score: {Math.round(vote_average * 10)} %</p>
            <DetailsTitle>Overview</DetailsTitle>
            <p>{overview}</p>
            <DetailsTitle>Genres</DetailsTitle>
            <ul>
              {genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </div>
        </MovieContainer>

        <DetailsTitle>Additional information</DetailsTitle>
        <ul>
          <li>
            <DetailsLink to="cast">Cast</DetailsLink>
          </li>
          <li>
            <DetailsLink to="reviews">Reviews</DetailsLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MovieDetailsContainer>
    );
  }
};

export default MovieDetails;
