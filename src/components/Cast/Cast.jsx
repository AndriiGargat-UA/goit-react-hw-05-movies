import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import avatarNotFound from 'images/profile-not-found.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('start');
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const PROFILE_PATH = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    setStatus('pending');
    const getMovieCast = async () => {
      try {
        const response = await fetchMovieCredits(movieId);
        setCast(response);
        console.log(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    getMovieCast();
  }, [movieId]);

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }
  if (status === 'rejected') {
    return <h2>Sorry, something went wrong: {error}</h2>;
  }

  if (status === 'resolved') {
    if (cast.length === 0) {
      return <p>Sorry, we don't have any cast for this movie</p>;
    }
    return (
      <ul>
        {cast.map(actor => {
          const { id, profile_path, name, character } = actor;
          return (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`${PROFILE_PATH}${profile_path}`}
                  alt="profile avatar"
                />
              ) : (
                <img src={avatarNotFound} alt="profile avatar" />
              )}

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Cast;
