import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SingleMoviesPage = lazy(() =>
  import('pages/SingleMoviesPage/SingleMoviesPage')
);

const Coast = lazy(() =>
  import('pages/SingleMoviesPageCoast/SingleMoviesPageCoast')
);
const Reviews = lazy(() =>
  import('pages/SingleMoviesPageReviews/SingleMoviesPageReviews')
);
export const App = () => {
  return (
    <div>
      <ToastContainer autoClose={5000} />
      <Suspense fallback={Loader}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="movies/:id" element={<SingleMoviesPage />}>
              <Route path="coast" element={<Coast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
