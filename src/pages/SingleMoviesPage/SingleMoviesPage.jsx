
import MovieDetails from 'components/MovieDetails/MovieDetails';
import css from "./single-movies-page.module.css"
const SingleMoviesPage = () => {
  return (
    <div className={css.bg}>
      <MovieDetails />
      
    </div>
  );
};

export default SingleMoviesPage;
