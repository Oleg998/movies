import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '4b0d88e4e438af6c90a79ac0bd3bce13';
const END_POINT = 'trending/movie/day';

export const getTrendig = () => {
  return axios.get(`${BASE_URL}${END_POINT}?api_key=${KEY}`);
};

export const getMoviesById = id => {
  return axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`);
};
