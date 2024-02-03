import classes from "./Header.module.css";
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className={classes.mainHeader}>
      <div className={`${classes.headerInner} container`}>
        <nav className={classes.mainNav}>
          <div className={classes.siteNav}>
            <button className={`${classes.navToggle} hidden`}><span className="visually-hidden">Open menu</span></button>
            <ul className={classes.navList}>
              <li>
                <a href="#">Каталог</a>
              </li>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Способы оплаты</a>
              </li>
              <li>
                <a href="#">Доставка</a>
              </li>
              <li>
                <a href="#">Отзывы</a>
              </li>
              <li>
                <a href="#">Дисконтные карты</a>
              </li>
              <li>
                <a href="#">Видео</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <ul className={classes.userNav}>
            <li>
              <a className={classes.favorites} href="#">Избранное</a>
            </li>
            <li>
              <a className={classes.cart} href="#"><span className="visually-hidden">Корзина</span>0 Р</a>
            </li>
          </ul>
        </nav>
        <div className={classes.contacts}>
          <a href="#" className={classes.logo}>
            <img src={logo} alt="logo" width={206} height={42}/>
            <span>сеть цветочных оптово-розничных центров</span>
          </a>
          <p className={classes.phone}><a href="tel:+79651511839"> +7 965 151 18 39</a></p>
          <p className={classes.hours}>Ждем вас с 8:00 до 22:00</p>
        </div>
      </div>
    </header>
  );
}