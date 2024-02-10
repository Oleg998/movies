import { Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu/MainMenu';

import MoviesPage from 'pages/MoviesPage/MoviesPage';
import HomePage from 'pages/HomePage/HomePage';
import SingleMoviesPage from 'pages/SingleMoviesPage/SingleMoviesPage';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/movies/:id' element={<SingleMoviesPage/>}/>
      </Routes>
    </div>
  );
};
