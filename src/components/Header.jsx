import { useContext } from "react";
import CartContext from "../store/CartContext";
import { countFullSalePrice } from "../util/util";
import { currencyFormatter } from "./util/format";
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/logo.png';
import logoSmall from '../assets/logo-tablet.png';
import classes from "./Header.module.css";

export default function Header() {
  const { items: flowersCart } = useContext(CartContext);

  const fullSalePrice = countFullSalePrice(flowersCart);

  return (
    <header className={classes.mainHeader}>
      <div className={`${classes.headerInner} container`}>
        <nav className={classes.mainNav}>
          <div className={classes.siteNav}>
            <input type="checkbox" id="burger-checkbox" className={classes.navToggleCheckbox} />
            <label className={classes.navToggle} htmlFor="burger-checkbox"><span className="visually-hidden">Menu</span></label>
            <ul className={classes.navList}>
              <li>
                <NavLink to="/catalog" className={({ isActive }) => isActive ? classes.active : undefined}>Каталог</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? classes.active : undefined}>О компании</NavLink>
              </li>
              <li>
                <NavLink to="/payment" className={({ isActive }) => isActive ? classes.active : undefined}>Способы оплаты</NavLink>
              </li>
              <li>
                <NavLink to="/delivery" className={({ isActive }) => isActive ? classes.active : undefined}>Доставка</NavLink>
              </li>
              <li>
                <NavLink to="/cards" className={({ isActive }) => isActive ? classes.active : undefined}>Дисконтные карты</NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className={({ isActive }) => isActive ? classes.active : undefined}>Контакты</NavLink>
              </li>
            </ul>
          </div>
          <ul className={classes.userNav}>
            <li>
              <NavLink to="favorites" className={({ isActive }) => isActive ? `${classes.favorites} ${classes.active}` : classes.favorites}>Избранное</NavLink>
            </li>
            <li>
              <NavLink to="cart" className={({ isActive }) => isActive ? `${classes.cart} ${classes.active}` : classes.cart}>
                <span className="visually-hidden">Корзина</span>
                {currencyFormatter.format(fullSalePrice)}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.contacts}>
          <Link to="/" className={classes.logo}>
            <picture>
              <source srcSet={logo} alt="logo" width={206} height={42} media="(min-width: 769px)" />
              <img src={logoSmall} width={156} height={32}/>
            </picture>
            <span>сеть цветочных оптово-розничных центров</span>
          </Link>
          <p className={classes.phone}><a href="tel:+79651511839"> +7 965 151 18 39</a></p>
          <p className={classes.hours}>Ждем вас с 8:00 до 22:00</p>
        </div>
      </div>
    </header>
  );
}