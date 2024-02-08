import classes from './Footer.module.css';
import logo from '../assets/logo-light.png';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footerInner}>
          <p className={classes.logo}>
            <img src={logo} alt="Logo" width={190} height={40}/>
            <span>© ФлораМаркт, 2012-2024</span>
          </p>
          <p className={classes.phone}><a href="tel:+79651511839"> +7 965 151 18 39</a></p>
          <p className={classes.links}>
            <a href="#">Адреса цветочных центров</a>
            <a href="#">Политика конфиденциальности</a>
          </p>
        </div>
      </div>
    </footer>
  );
}