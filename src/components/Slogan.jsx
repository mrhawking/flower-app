import { Link } from 'react-router-dom';
import classes from './Slogan.module.css';

export default function Slogan() {
  return (
    <div className={classes.slogan}>
      <div className="container">
        <div className={classes.inner}>
          <p className={classes.text}>Всегда в продаже более 100 готовых дизайнерских букетов</p>
          <Link className={classes.link} to="/catalog">Перейти в каталог &gt;</Link>
        </div>
      </div>
    </div>
  );
}