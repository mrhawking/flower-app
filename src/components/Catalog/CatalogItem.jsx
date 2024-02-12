import { currencyFormatter } from '../util/format';
import ButtonCart from '../UI/ButtonCart';
import { useContext } from 'react';
import FavoriteContext from '../../store/FavoriteContext';
import CartContext from '../../store/CartContext';
import classes from './CatalogItem.module.css';
import Emblem from '../UI/Emblem';

export default function CatalogItem({ flower, isFavorite }) {
  const { handleStatus } = useContext(FavoriteContext);
  const { items: flowers, addItem } = useContext(CartContext);

  const catalogPriceClasses = flower.isSale ? classes.prevPrice : classes.activePrice;

  const catalogPrice = <span className={catalogPriceClasses}>{currencyFormatter.format(flower.price)}</span>;
  const salePrice = flower.isSale && <span className={classes.activePrice}>{currencyFormatter.format(flower.price * 90 / 100)}</span>

  function handleAddToCart(flower) {
    addItem(flower, 1);
  }

  return (
    <li className={classes.flower}>
      <article className={classes.flowerInner}>
        <a href="#">
          <div className={classes.imgWrapper}>
            <img src={`http://localhost:3000/images/${flower.image}`} alt={flower.title} />
          </div>
          <p className={classes.price}>
            {salePrice}
            {catalogPrice}
          </p>
          <p className={classes.title}>{flower.title}</p>
          {flower.isSale && <Emblem isSale positionClass={classes.catalogEmblem}>Акция</Emblem>}
          {flower.isNew && <Emblem isNew positionClass={classes.catalogEmblem}>Новинка</Emblem>}
        </a>
        <button onClick={() => handleStatus(flower.id, isFavorite)} className={`${classes.favoriteBtn} ${isFavorite && classes.favoriteBtnChosen}`}>
          <span className="visually-hidden">Добавить в избранное</span>
          <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.2656 2.94531C23.2578 0.429688 18.8281 0.8125 16.0391 3.71094L15 4.80469L13.9062 3.71094C11.6641 1.41406 7.17969 -0.0078125 3.67969 2.94531C0.234375 5.89844 0.0703125 11.1484 3.13281 14.3203L13.7422 25.2578C14.0703 25.5859 14.5078 25.75 14.9453 25.75C15.4375 25.75 15.875 25.5859 16.2031 25.2578L26.8125 14.3203C29.875 11.1484 29.7109 5.89844 26.2656 2.94531ZM25.5547 13.1172L15 24.0547L4.39062 13.1172C2.3125 10.9297 1.875 6.82812 4.82812 4.3125C7.83594 1.74219 11.3359 3.60156 12.6484 4.91406L15 7.32031L17.2969 4.91406C18.5547 3.60156 22.1094 1.74219 25.1172 4.3125C28.0703 6.82812 27.6328 10.9297 25.5547 13.1172Z" />
          </svg>
        </button>
        {flowers.some(item => item.id === flower.id) ? (
          <ButtonCart onClick={() => handleAddToCart(flower)} type="button" isClicked disabled>В корзине</ButtonCart>
        ) : (
          <ButtonCart onClick={() => handleAddToCart(flower)} type="button">В корзину</ButtonCart>
        )
        }


      </article>
    </li>
  );
}
