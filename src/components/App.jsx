import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from './SharedLayout/SharedLayout';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import HomePage from 'pages/HomePage/HomePage';
import SingleMoviesPage from 'pages/SingleMoviesPage/SingleMoviesPage';

import Coast from 'pages/SingleMoviesPageCoast/SingleMoviesPageCoast';
import Reviews from 'pages/SingleMoviesPageReviews/SingleMoviesPageReviews';
export const App = () => {
  return (
    <div>
      <ToastContainer autoClose={5000} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<HomePage/>} />
          <Route path="movies/:id" element={<SingleMoviesPage />}>
            <Route path="coast" element={<Coast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
