import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesById } from 'components/Api/api';
import css from './single-movies.module.css';

const SingleMovies = () => {
  const [state, setState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await getMoviesById(id);
        setState(data);
        setIsLoading(true);
      } catch (error) {
        setError(error.masage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
  const imgUrl = 'https://image.tmdb.org/t/p/w440_and_h660_face/';
  return (
    <>
      {state && (
        <div className={css.conteiner}>
          <div className={css.wrapper}>
            <img
              className={css.postrer_film}
              src={imgUrl + state.backdrop_path}
              alt={state.title}
            />
            <div className={css.cointeiner_info}>
              <h1 className={css.titel}>
                {state.title} ({state.release_date.slice(0, 4)})
              </h1>
              <p className={css.score}>
                User Score :{Math.floor(state.vote_average * 10)} %{' '}
              </p>
              <h3 className={css.subtitel}> Overview :</h3>
              <p>{state.overview}</p>
              <h3 className={css.subtitel}> Genres: </h3>
              <ul className={css.item_list}>
                {state.genres.map(({ id, name }) => (
                  <li className={css.item} key={id}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.info_conteiner}>
            <h3 className={css.subtitel}>Additional information:</h3>
            <Link className={css.link_info}>Coast</Link>
            <Link className={css.link_info}>Reviews</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMovies;
