
import Movies from 'components/Movies/Movies';
import css from "./movies-page.module.css"
const MoviesPage = () => {
  return (
    <div className={css.bg}>
      <Movies/>
    </div>
  );
};

export default MoviesPage;