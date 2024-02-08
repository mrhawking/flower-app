import { useContext, useRef, useState } from 'react';
import ButtonCart from '../UI/ButtonCart';
import Input from '../UI/Input';
import { currencyFormatter } from '../util/format';
import { countTotalQuantity, countFullCatalogPrice, countFullSalePrice } from '../../util/util';
import { createOrder } from '../../http';
import CartContext from '../../store/CartContext';
import classes from './OrderForm.module.css';
import Modal from '../UI/Modal';

export default function OrderForm() {
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [nameIsValid, setNameIsValid] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendingError, setSendingError] = useState(false);

  const nameRef = useRef();
  const phoneRef = useRef();
  const { clearCart, items: flowersCart } = useContext(CartContext);

  const totalQuantity = countTotalQuantity(flowersCart);
  const fullCatalogPrice = countFullCatalogPrice(flowersCart);
  const fullSalePrice = countFullSalePrice(flowersCart);
  const discount = fullCatalogPrice - fullSalePrice;

  function handleFocus() {
    setNameIsValid(true);
    setPhoneIsValid(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const customerName = nameRef.current.value.trim()
    const customerPhone = phoneRef.current.value.trim()
    const nameValidity = customerName !== '';
    const phoneValidity = (customerPhone !== '') && (customerPhone.length > 6);

    nameValidity ? setNameIsValid(true) : setNameIsValid(false);
    phoneValidity ? setPhoneIsValid(true) : setPhoneIsValid(false);

    if (nameValidity && phoneValidity) {
      setIsLoading(true);
      try {
        await createOrder({
          order: {
            items: flowersCart,
            customer: {
              name: customerName,
              phone: customerPhone
            }
          }
        });
        setModalIsOpen(true);
      } catch (error) {
        setSendingError(error);
      }
      setIsLoading(false)
    }
  }

  function handleCloseModal() {
    setModalIsOpen(false);
    clearCart();
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleCloseModal}>
        <div>
          <h2 className="title">Отлично!</h2>
          <p className={classes.modalText}>Ваш заказ был успешно создан.</p>
          <p className={classes.modalText}>Наш менеджер свяжется с вами в течение 5 минут для уточнения деталей.</p>
          <ButtonCart onClick={handleCloseModal} className={classes.modalBtn}>OK</ButtonCart>
        </div>
      </Modal>
      <div>
        <form onSubmit={handleSubmit} className={classes.orderForm}>
          <h3 className={classes.formTitle}>
            Оформление заказа
          </h3>
          <dl className={classes.total}>
            <div className={classes.totalInner}>
              <dt>Стоимость товаров ({totalQuantity}):</dt>
              <dd>{currencyFormatter.format(fullCatalogPrice)}</dd>
            </div>
            <div className={classes.totalInner}>
              <dt>Доставка:</dt>
              <dd>Бесплатно</dd>
            </div>
            <div className={`${classes.discount} ${classes.totalInner}`}>
              <dt>Скидка:</dt>
              <dd>- {currencyFormatter.format(discount)}</dd>
            </div>
            <div className={classes.totalInner}>
              <dt>Итого:</dt>
              <dd className={classes.totalPrice}>{currencyFormatter.format(fullSalePrice)}</dd>
            </div>
          </dl>
          <div className={classes.customerData}>
            <Input
              onFocus={handleFocus}
              isValid={phoneIsValid}
              ref={phoneRef}
              label="Ваш телефон:"
              name="phone"
              type="tel"
              placeholder="+7(999)9999999" />
            <Input
              onFocus={handleFocus}
              isValid={nameIsValid}
              ref={nameRef}
              label="Ваше имя:"
              name="name"
              type="text"
              placeholder="Светлана" />
          </div>
          <ButtonCart disabled={isLoading} className={classes.orderButton} type='submit'>{isLoading ? 'Загрузка...' : 'Оформить заказ'}</ButtonCart>
          {sendingError ? <p style={{color: "red"}}>Ошибка, попробуйте снова</p> : undefined}
        </form>
      </div>
    </>

  );
}