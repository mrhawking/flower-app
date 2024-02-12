import classes from './SingleItem.module.css';
import { currencyFormatter } from './util/format';
import Emblem from './UI/Emblem';
import ButtonCart from './UI/ButtonCart';
import { useContext, useState } from 'react';
import FavoriteContext from '../store/FavoriteContext';
import CartContext from '../store/CartContext';
import QuantityControl from './UI/QuantityControl';


const flower = {
  "id": "f2",
  "image": "image-2.jpg",
  "title": "Букет номер 2",
  "price": 1900,
  "isSeason": true,
  "isNew": false,
  "isSale": true,
  "size": {
    "sizeOne": 30,
    "sizeTwo": 25,
    "sizeThree": 30
  },
  "composition": [
    {
      "name": "Роза",
      "count": 3
    },
    {
      "name": "Лилия",
      "count": 5
    },
    {
      "name": "Гербер",
      "count": 3
    }
  ]
}

export default function SingleItem() {
  //Здесь будет запрос на определенный id
  //проверить favoritee это или нет

  const [value, setValue] = useState(1);
  const { addItem } = useContext(CartContext);
  const { favorites, handleStatus } = useContext(FavoriteContext);
  console.log(favorites)

  const catalogPriceClasses = flower.isSale ? classes.prevPrice : classes.activePrice;
  const catalogPrice = <span className={catalogPriceClasses}>{currencyFormatter.format(flower.price)}</span>;
  const salePrice = flower.isSale && <span className={classes.activePrice}>{currencyFormatter.format(flower.price * 90 / 100)}</span>
  const isFavorite = favorites.some(id => id === flower.id);

  function handleIncrease() {
    setValue(prevValue => prevValue + 1);
  }

  function handleDecrease() {
    if (value > 1) {
      setValue(prevValue => prevValue - 1);
    }
  }

  function handleAddToCart(flower) {

    addItem(flower, value);
  }

  return (
    <section className={classes.flowerItem}>
      <div className="container">
        <div className={classes.flowerItemInner}>
          <div className={classes.imgWrapper}>
            <img src={`http://localhost:3000/images/${flower.image}`} alt={flower.title} />
          </div>
          <div className={classes.description}>
            <h2 className={classes.title}>&#171;{flower.title}&#187;</h2>
            <div className={classes.priceWrapper}>
              <p className={classes.price}>
                {salePrice}
                {catalogPrice}
              </p>
              {flower.isSale && <Emblem isSale>Акция</Emblem>}
              {flower.isNew && <Emblem isNew>Новинка</Emblem>}
            </div>
            <div className={classes.actions}>
              <QuantityControl
                onDecrease={handleDecrease}
                onIncrease={handleIncrease}
                item={flower}
                disabled={value < 2}
                value={value}
              />
              <ButtonCart onClick={() => handleAddToCart(flower)} type="button">В корзину</ButtonCart>
              <button
                onClick={() => handleStatus(flower.id, isFavorite)}
                className={`${classes.favoriteBtn} ${isFavorite && classes.favoriteBtnChosen}`}>
                <span className="visually-hidden">Добавить в избранное</span>
                <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.2656 2.94531C23.2578 0.429688 18.8281 0.8125 16.0391 3.71094L15 4.80469L13.9062 3.71094C11.6641 1.41406 7.17969 -0.0078125 3.67969 2.94531C0.234375 5.89844 0.0703125 11.1484 3.13281 14.3203L13.7422 25.2578C14.0703 25.5859 14.5078 25.75 14.9453 25.75C15.4375 25.75 15.875 25.5859 16.2031 25.2578L26.8125 14.3203C29.875 11.1484 29.7109 5.89844 26.2656 2.94531ZM25.5547 13.1172L15 24.0547L4.39062 13.1172C2.3125 10.9297 1.875 6.82812 4.82812 4.3125C7.83594 1.74219 11.3359 3.60156 12.6484 4.91406L15 7.32031L17.2969 4.91406C18.5547 3.60156 22.1094 1.74219 25.1172 4.3125C28.0703 6.82812 27.6328 10.9297 25.5547 13.1172Z" />
                </svg>
              </button>
            </div>
            <dl className={classes.propertiesList}>
              <div className={classes.itemWrapper}>
                <dt>Состав</dt>
                <dd>
                  <ul className={classes.composition}>
                    {flower.composition.map((item, index) => (
                      <li key={index}>
                        <span>{item.name}</span>
                        <span>{item.count} шт.</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className={classes.itemWrapper}>
                <dt>Размер</dt>
                <dd>{Object.values(flower.size).join("x")} см</dd>
              </div>
              <div className={classes.itemWrapper}>
                <dt>Доставка</dt>
                <dd>Бесплатно</dd>
              </div>
              <div className={classes.itemWrapper}>
                <dt>Способы оплаты</dt>
                <dd>
                  <ul className={classes.payment}>
                    <li className={classes.cash}>Наличными</li>
                    <li className={classes.card}>Картой</li>
                    <li className={classes.bank}>На р/с</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

