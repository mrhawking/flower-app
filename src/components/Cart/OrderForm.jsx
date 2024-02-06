import ButtonCart from '../UI/ButtonCart';
import Input from '../UI/Input';
import { currencyFormatter } from '../util/format';
import classes from './OrderForm.module.css';

export default function OrderForm({ flowersCart }) {

  const totalCount = flowersCart.reduce((acc, flower) => {
    return acc + flower.quantity;
  }, 0);

  const fullCatalogPrice = flowersCart.reduce((acc, flower) => {
    return acc + flower.price * flower.quantity;
  }, 0);

  const fullSalePrice = flowersCart.reduce((acc, flower) => {
    const price = (flower.isSale ? (flower.price * 90 / 100) : flower.price).toFixed(0);
    return acc + price * flower.quantity;
  }, 0);

  const discount = fullCatalogPrice - fullSalePrice;


  return (
    <div>
      <form className={classes.orderForm}>
        <h3 className={classes.formTitle}>
          Оформление заказа
        </h3>
        <table className={classes.total}>
          <tr>
            <td>Стоимость товаров ({totalCount}):</td>
            <td>{currencyFormatter.format(fullCatalogPrice)}</td>
          </tr>
          <tr>
            <td>Доставка:</td>
            <td>Бесплатно</td>
          </tr>
          <tr className={classes.discount}>
            <td>Скидка:</td>
            <td>- {currencyFormatter.format(discount)}</td>
          </tr>
          <tr>
            <td>Итого:</td>
            <td className={classes.totalPrice}>{currencyFormatter.format(fullSalePrice)}</td>
          </tr>
        </table>
        <div className={classes.customerData}>
          <Input label="Ваш телефон:" name="phone" type="tel" placeholder="+7(911)5465525" />
          <Input label="Ваше имя:" name="name" type="text" placeholder="Светлана" />
        </div>
        <ButtonCart className={classes.orderButton} type='submit'>Оформить заказ</ButtonCart>
      </form>
    </div>
  );
}