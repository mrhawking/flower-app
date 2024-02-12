import classes from './CartItem.module.css';
import { currencyFormatter } from '../util/format';
import QuantityControl from '../UI/QuantityControl';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

export default function CartItem({ flower }) {
  const { addItem, removeItem, removeEntireItem } = useContext(CartContext);
  const fullCatalogPrice = currencyFormatter.format(flower.price * flower.quantity);
  const saleFullPrice = flower.isSale && currencyFormatter.format((flower.price * flower.quantity) * 90 / 100)

  function handleAdd() {
    addItem(flower, 1);
  }
  function handleRemove() {
    removeItem(flower.id)
  }

  return (
    <li className={classes.cartItem}>
      <button onClick={() => removeEntireItem(flower.id)} className={classes.deleteButton}>
        <span className="visually-hidden">Удалить товар из корзины</span>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
        </svg>
      </button>
      <div className={classes.imgWrapper}>
        <img src={`http://localhost:3000/images/${flower.image}`} alt={flower.title} />
      </div>
      <h3 className={classes.title}>
        <a href="#">{flower.title}</a>
      </h3>
      {/* <div className={classes.actions}>
        <button onClick={handleRemove} disabled={flower.quantity === 1}>-</button>
        <input type="text" name="count" id="count" value={flower.quantity} readOnly/>
        <label className="visually-hidden" htmlFor="count">Количество товара</label>
        <button onClick={handleAdd}>+</button>
      </div> */}
      <QuantityControl item={flower} onDecrease={handleRemove} onIncrease={handleAdd} disabled={flower.quantity === 1} cartInput/>
      <p className={classes.price}>
        <span className={classes.currentPrice}>{flower.isSale ? saleFullPrice : fullCatalogPrice}</span>
        {flower.isSale ? <span className={classes.catalogPrice}>{fullCatalogPrice}</span> : undefined}
      </p>
    </li>
  );
}