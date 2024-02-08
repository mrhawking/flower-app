import CartItem from './CartItem';
import OrderForm from './OrderForm';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

export default function Cart() {
  const { items: flowersCart, addItem, removeItem, removeEntireItem } = useContext(CartContext);

  function handleAddItem(flower) {
    addItem(flower);
  }

  function handleRemoveItem(flowerId) {
    removeItem(flowerId);
  }

  function handleRemoveEntireItem(flowerId) {
    removeEntireItem(flowerId);
  }

  return (
    <>
      <section className={classes.cart}>
        <div className="container">
          <h2 className="title">Корзина</h2>
          {flowersCart.length === 0 && (
            <div className={classes.emptyCart}>
              <p>В вашей корзине пусто</p>
            </div>
          )}
          {flowersCart.length > 0 && (<div className={classes.cartInner}>
            <ul className={classes.cartList}>
              {flowersCart.map(flower => (
                <CartItem
                  flower={flower}
                  key={flower.id}
                  addItem={handleAddItem}
                  removeItem={handleRemoveItem}
                  removeEntireItem={handleRemoveEntireItem}
                />
              ))}
            </ul>
            <OrderForm />
          </div>
          )}
        </div>
      </section>
    </>
  );
}
