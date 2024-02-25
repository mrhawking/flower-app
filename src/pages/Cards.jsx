import { Link } from 'react-router-dom';
import BreadCrumbs from '../components/UI/BreadCrumbs';
import greenCard from '../assets/card-green.jpg';
import vipCard from '../assets/card-vip.jpg';
import classes from "./Cards.module.css";

export default function Cards() {
  return (
    <section className={classes.cards}>
      <div className="container">
        <BreadCrumbs>
          <li><Link to="/">Главная</Link></li>
          <span>&gt;</span>
          <li>Дисконтные карты</li>
        </BreadCrumbs>
        <h2 className="title">Дисконтные карты</h2>
        <p className="text">Магазин «ФлораМаркт» предлагает своим покупателям дисконтные карты.</p>
        <p className="text">При покупке на сумму от
          1500 рублей вы получаете дисконтную карту с 5% скидкой на все товары.</p>
        <p className="text lastText">При покупке свыше
          5000 рублей вы получаете дисконтную карту с 10% скидкой на все товары.</p>
        <div className={classes.imgWrapper}>
          <img src={greenCard} alt="Карта скидка 5%" />
          <img src={vipCard} alt="Карта Вип скидка 10%" />
        </div>
        <p className="text">На товары участвующие в акции скидки не распространяются.</p>
        <p className="text"> Карта дает право на получении скидки в магазинах Флорамаркт.</p>
        <p className="text">Внимание! Скидок по карте при заказе в интернет-магазине нет!</p>
      </div>
    </section>
  );
}