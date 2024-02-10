import css from './single-movies-page.module.css';
import { Link } from 'react-router-dom';
import SingleMovies from 'components/SingleMovies/SingleMovies';
const SingleMoviesPage = () => {
  return (
    <div>
      <h1>This is movies page</h1>
      <Link to="/" className={css.link_back}>
        &lt;&lt; Go to Home Page
      </Link>
      <SingleMovies />
    </div>
  );
};

export default SingleMoviesPage;
