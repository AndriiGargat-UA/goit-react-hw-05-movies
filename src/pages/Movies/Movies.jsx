import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'services/api';
import { MoviesContainer, MovieLink, SearchInput } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('start');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieSearch(movieName);
        setStatus('resolved');
        setMovies(response);
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    fetchMovie();
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.elements.query.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }

  if (status === 'rejected') {
    return <h2>Sorry, something went wrong: {error}</h2>;
  }

  if (status === 'resolved') {
    return (
      <MoviesContainer>
        <form onSubmit={handleSubmit}>
          <SearchInput type="text" name="query" />
          <button type="submit">Search</button>
        </form>

        <ul>
          {movies.map(movie => {
            const { id, title } = movie;
            return (
              <li key={id}>
                <MovieLink to={`${id}`} state={{ from: location }}>
                  {title}
                </MovieLink>
              </li>
            );
          })}
        </ul>
      </MoviesContainer>
    );
  }

  return (
    <MoviesContainer>
      {' '}
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </MoviesContainer>
  );
};

export default Movies;
