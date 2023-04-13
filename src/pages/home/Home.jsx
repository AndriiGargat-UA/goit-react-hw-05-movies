import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

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
      <>
        <h1>Trending today</h1>
        <ul>
          {movies.map(movie => {
            // console.log(movie);
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Home;
