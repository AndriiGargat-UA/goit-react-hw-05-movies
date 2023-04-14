import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import { HomeContainer, HomeTitle, MovieLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('start');
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    fetchMovie();
  }, []);

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }
  if (status === 'rejected') {
    return <h2>Sorry, something went wrong: {error}</h2>;
  }
  if (status === 'resolved') {
    return (
      <HomeContainer>
        {' '}
        <HomeTitle>Trending today</HomeTitle>
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <MovieLink to={`movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </MovieLink>
              </li>
            );
          })}
        </ul>
      </HomeContainer>
    );
  }
};

export default Home;
