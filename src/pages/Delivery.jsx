import { Link } from 'react-router-dom';
import BreadCrumbs from '../components/UI/BreadCrumbs';
import classes from './Delivery.module.css';
import { ADDRESSES } from '../data/addresses';

export default function Delivery() {
  return (
    <section className={classes.delivery}>
      <div className="container">
        <BreadCrumbs>
          <li><Link to="/">Главная</Link></li>
          <span>&gt;</span>
          <li>Достаква</li>
        </BreadCrumbs>
        <h2 className="title">Доставка</h2>
        <p className="text lastText">
          Служба доставки компании «ФлораМаркт» осуществляет доставку цветов и букетов в любое удобное для Вас время 365 дней в году, мы работаем без выходных и праздников. Мы готовы нести красоту и радость каждому, кто обратится к нам.
        </p>
        <h3 className='title title--m'>Как оформить заказ с доставкой</h3>
        <p className="text">Оформить срочную или обычную заявку на доставку букета можно как по телефону, ежедневно с <b>9-00 до 21-00</b>, так и через сайт — круглосуточно. Если стоимость заказа <b>не менее 5000 рублей</b> — доставка цветов бесплатная.
        </p>
        <p className="text">Стоимость доставки цветочных букетов в пределах МКАД напрямую зависит от адреса заказчика и объема заказа.
        </p>
        <table className={classes.deliveryPrice}>
          <caption>Стоимость доставки заказа в пределах МКАД:</caption>
          <thead>
            <tr>
              <td>Время доставки</td>
              <td>Сумма заказа от 5000 &#8381;</td>
              <td>Сумма заказа до 5000 &#8381;</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Более 3 часов</td>
              <td>БЕСПЛАТНО</td>
              <td>500 &#8381;</td>
            </tr>
            <tr>
              <td>Срочная от 1-3 часов</td>
              <td>800 &#8381;</td>
              <td>800 &#8381;</td>
            </tr>
            <tr>
              <td>К определенному времени</td>
              <td>800 &#8381;</td>
              <td>800 &#8381;</td>
            </tr>
            <tr>
              <td>В метро</td>
              <td>БЕСПЛАТНО</td>
              <td>300 &#8381;</td>
            </tr>
            <tr>
              <td>Доставка ночью</td>
              <td>1000 &#8381;</td>
              <td>1000 &#8381;</td>
            </tr>
          </tbody>
        </table>
        <h3 className="title title--m">Особые условия</h3>
        <p className="text">Скидочные карты действуют только в магазинах, при предъявлении!
        </p>
        <p className="text">При бесплатной доставке, скидочные карты не действуют!
        </p>
        <p className="text">При заказе товаров по акции, бесплатная доставка не действует!
        </p>
        <p className="text">В том случае, если во время привоза вас не оказалось на месте, стоимость повторной доставки будет платной (500 рублей). В предпраздничные и праздничные (Новый год, Международный женский день, День Святого Валентина) оформление заявки на срочные заказы не принимается.
        </p>
        <p className="text">Если шкала пробок поднялась выше 8 баллов, мы не гарантируем, что сможем привезти цветы в пределах того временного промежутка, который был оговорен.
        </p>
        <p className="text lastText">В преддверии больших праздников, чтобы получить красивые и свежие цветы вовремя рекомендуется заранее оформлять заказ. Ярких и неожиданных вам моментов!
        </p>
        <h3 className="title title--m">Пункты самовывоза</h3>
        <ul className={classes.addressesList}>
          {ADDRESSES.map(address => (
            <li key={address.id}>{`${address.address.station}, ${address.address.street}`}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}