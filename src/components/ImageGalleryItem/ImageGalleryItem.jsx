import css from './ImmageGalleryItem.module.css';
import { Link } from 'react-router-dom';

const ImmageGalleryItem = ({ titel, img, id }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w440_and_h660_face/';
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <Link to={`/movies/${id}`} className={css.link_text}>
          <img
            className={css.ImageGalleryItemImage}
            src={imgUrl + img}
            alt={titel}
          />
          <p className={css.img_text}>{titel}</p>
        </Link>
      </li>
    </>
  );
};
export default ImmageGalleryItem;
