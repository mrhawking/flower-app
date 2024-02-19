import logo from '../assets/logo.png';
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { countFullSalePrice } from "../util/util";
import { currencyFormatter } from "./util/format";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  const { items: flowersCart } = useContext(CartContext);

  const fullSalePrice = countFullSalePrice(flowersCart);

  return (
    <header className={classes.mainHeader}>
      <div className={`${classes.headerInner} container`}>
        <nav className={classes.mainNav}>
          <div className={classes.siteNav}>
            <button className={`${classes.navToggle} hidden`}><span className="visually-hidden">Open menu</span></button>
            <ul className={classes.navList}>
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined}>Каталог</NavLink>
              </li>
              <li>
                <a>О компании</a>
              </li>
              <li>
                <a>Способы оплаты</a>
              </li>
              <li>
                <a>Доставка</a>
              </li>
              <li>
                <a>Отзывы</a>
              </li>
              <li>
                <a>Дисконтные карты</a>
              </li>
              <li>
                <a>Видео</a>
              </li>
              <li>
                <a>Контакты</a>
              </li>
            </ul>
          </div>
          <ul className={classes.userNav}>
            <li>
              <NavLink to="favorites" className={({isActive}) => isActive ? `${classes.favorites} ${classes.active}` : classes.favorites}>Избранное</NavLink>
            </li>
            <li>
              <NavLink to="cart" className={({isActive}) => isActive ? `${classes.cart} ${classes.active}` : classes.cart}>
                <span className="visually-hidden">Корзина</span>
                {currencyFormatter.format(fullSalePrice)}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.contacts}>
          <p to="/" className={classes.logo}>
            <img src={logo} alt="logo" width={206} height={42} />
            <span>сеть цветочных оптово-розничных центров</span>
          </p>
          <p className={classes.phone}><a href="tel:+79651511839"> +7 965 151 18 39</a></p>
          <p className={classes.hours}>Ждем вас с 8:00 до 22:00</p>
        </div>
      </div>
    </header>
  );
}