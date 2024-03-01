import { Link } from 'react-router-dom';
import BreadCrumbs from '../components/UI/BreadCrumbs';
import classes from './Payment.module.css';

export default function Payment() {
  return (
    <section className={classes.payment}>
      <div className="container">
        <div className={classes.paymentInner}>
        <BreadCrumbs>
        <li><Link to="/">Главная</Link></li>
              <span>&gt;</span>
              <li>Способы оплаты</li>
        </BreadCrumbs>
        <h2 className="title margin-30">Способы оплаты</h2>
        <p className="text lastText">
          Виды оплаты товаров в инернет-магазине стандартно делятся на наличный и безналичный расчет.
        </p>
        <ol className={classes.paymentList}>
          <li>
            <h3 className="title title--m">
              Наличный расчет
            </h3>
            <p className={classes.text}>
              Наличными можно расплатиться в торговом <b>оптово-розничном центре</b> или непосредственно <b>с курьером</b>, доставившим товар.
            </p>
          </li>
          <li>
            <h3 className="title title--m">
              Безналичный расчет
            </h3>
            <ul className={classes.banksList}>
              <li>
                <p className={classes.text}>
                  <span><b>Сбербанк. </b></span>
                  Оплата через Сбербанк онлайн (выставление счета по реквизитам, указанным на сайте магазина) требует времени. Операция занимает несколько рабочих дней.
                </p>
              </li>
              <li>
                <p className={classes.text}>
                  <span><b>Кредитной карточкой </b></span>
                  можно оплатить покупку в торговом оптово-розничном центре (через терминал) или через сайт онлайн-платеж.
                </p>
              </li>
              <li>
                <p className={classes.text}>
                  <span><b>Со счета в банке по реквизитам, </b></span>
                  указанным на сайте. Эта операция также займет несколько рабочих дней.
                </p>
                <p>
                  <span><b>ООО «СП Букет»</b></span><br />
                    Юридический адрес: 107553, г.Москва, ул. Большая Черкизовская, д. 93, стр. 1<br />
                    ИНН: 7718885232<br />
                    КПП: 771801001<br />
                    Расчетный счет: 40702810300080016673<br />
                    Кор. счет: 30101810900000000521<br />
                    Банк: в АКБ МОСОБЛБАНК ОАО<br />
                    БИК: 044525521<br />
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="title title--m">
              Электронные деньги
            </h3>
            <ul className={classes.electronicMoneyList}>
              <li>
                <p className={classes.text}>
                  <span><b>Яндекс деньги. </b></span>
                  Это наиболее простой, современный и безопасный способ оплаты в режиме реального времени. Для оплаты через ЯД необходимо зарегистрироваться на сайте yandex.ru и пополнить счет, который прикрепится к почтовому ящику автоматически. Пополнить счет можно через банковскую карту, денежный перевод или через терминалы. Перед тем, как оплатить заказ, убедитесь, что средств на счете достаточно.</p>
              </li>
              <li>
                <p className={classes.text}>
                  <span><b>WebMoney. </b></span>
                  Система WM позволяет завести кошельки в рублях, евро и долларах. Для оплаты в интернет-магазине нужен кошелек в рублях.</p>
              </li>
            </ul>
          </li>
        </ol>
        </div>
      </div>
    </section>
  );
}