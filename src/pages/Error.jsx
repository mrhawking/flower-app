import { Link } from "react-router-dom";
import arrow from "../assets/dashed-arrow.png";
import classes from "./Error.module.css";

export default function ErrorPage() {
  return (
    <div className={classes.error}>
      <div className={classes.inner}>
        <h2 className={classes.title}>Упс, кажется вы заблудились!</h2>
        <p className={classes.text}>Перейдите по ссылке, чтобы попасть на главную страницу сайта ФлораМаркт</p>
        <div className={classes.imgWrapper}>
          <img src={arrow} alt="Пунктирная стрелка" />
          <Link to="/">Вернуться на главную</Link>
        </div>
      </div>
    </div>
  );
}