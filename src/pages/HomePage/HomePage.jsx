
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import css from "./home-page.module.css"
const HomePage = () => {
  return (
    <div className={css.bg}>
      <TrendingMovies />
    </div>
  );
};

export default HomePage;
