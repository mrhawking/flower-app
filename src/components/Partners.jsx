import classes from "./Partners.module.css";
import partner1 from "../assets/partners/1.png";
import partner2 from "../assets/partners/2.png";
import partner3 from "../assets/partners/3.png";
import partner4 from "../assets/partners/4.png";
import partner5 from "../assets/partners/5.png";
import partner6 from "../assets/partners/6.png";
import partner7 from "../assets/partners/7.png";
import partner8 from "../assets/partners/8.png";
import partner9 from "../assets/partners/9.png";
import partner10 from "../assets/partners/10.png";
import partner11 from "../assets/partners/11.png";
import partner12 from "../assets/partners/12.png";

export default function Partners() {
  return (
    <section className={classes.partners}>
      <div className="container">
        <h2 className="title align-center">Наши клиенты и партнеры</h2>
        <ul className={classes.partnersList}>
          <li>
            <img src={partner1} alt="Аэрофлот логотип" />
          </li>
          <li>
            <img src={partner2} alt="Урал эйрлайнс логотип" />
          </li>
          <li>
            <img src={partner3} alt="Билайн логотип" />
          </li>
          <li>
            <img src={partner4} alt="Евросеть логотип" />
          </li>
          <li>
            <img src={partner5} alt="Цфт логотип" />
          </li>
          <li>
            <img src={partner6} alt="Тугис логотип" />
          </li>
          <li>
            <img src={partner7} alt="Кэт логотип" />
          </li>
          <li>
            <img src={partner8} alt="Мвидео логотип" />
          </li>
          <li>
            <img src={partner9} alt="Сдэк логотип" />
          </li>
          <li>
            <img src={partner10} alt="Санлайт логотип" />
          </li>
          <li>
            <img src={partner11} alt="Сбербанк логотип" />
          </li>
          <li>
            <img src={partner12} alt="Перси логотип" />
          </li>
        </ul>
      </div>
    </section>
  );
}