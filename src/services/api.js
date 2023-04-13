import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '7eaebca790602b6b3aca45d915bff38d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

export const fetchMovieSearch = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  );
  return response.data.results;
};

fetchMovieDetails.PropTypes = {
  movieId: PropTypes.string,
};
fetchMovieCredits.PropTypes = {
  movieId: PropTypes.string,
};
fetchMovieReviews.PropTypes = {
  movieId: PropTypes.string,
};
fetchMovieSearch.PropTypes = {
  query: PropTypes.string,
};
