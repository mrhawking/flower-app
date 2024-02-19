import CartItem from '../components/Cart/CartItem';
import OrderForm from '../components/Cart/OrderForm';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

export default function CartPage() {
  const { items: flowersCart } = useContext(CartContext);

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
