import classes from './Slogan.module.css';

export default function Slogan() {
  return (
    <div className={classes.slogan}>
      <div className="container">
        <div className={classes.inner}>
          <p className={classes.text}>Всегда в продаже более 100 готовых дизайнерских букетов</p>
          <a className={classes.link} href="#">Перейти в каталог &gt;</a>
        </div>
      </div>
    </div>
  );
}