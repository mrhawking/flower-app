import { Link } from "react-router-dom";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import CustomerDepartment from "../components/CustomerDepartment";
import classes from "./About.module.css";
import Partners from "../components/Partners";

export default function About() {
  return (
    <section className={classes.about}>
      <div className="container">
        <BreadCrumbs>
          <li><Link to="/">Главная</Link></li>
          <span>&gt;</span>
          <li>О компании</li>
        </BreadCrumbs>
        <h2 className="title margin-30">О компании</h2>
        <p className="text lastText">
          Уважаемые Дамы и Господа, Компания ФлораМаркт рада приветствовать Вас на своем сайте!
        </p>
        <h3 className="title title--m">
          Цветочная оптово розничная компания «ФлораМаркт»
        </h3>
        <p className="text">
          Одна из ведущих компаний, успешно работающих в цветочной индустрии России более 15
        </p>
        <p className="text">
          Основное направление — это оптовая торговля срезанными цветами, горшечными растениями, посадочным материалом, луковицами, семенами газонных трав, искусственными растениями, сухоцветами и сопутствующими товарами.
        </p>
        <p className="text">
          Многолетнее сотрудничество c производителями и лучшими брокерами из Голландии, Италии, Дании, Израиля, Латинской Америки, Африки и России позволяет постоянно поддерживать широкий ассортимент, продаваемой нами продукции, включающий в себя несколько тысяч наименований.
        </p>
        <p className="text lastText">Являясь лидером в области создания и доставки букетов и композиций из цветов, ФлораМаркт по праву гордится такими своими конкурентными преимуществами, как богатый ассортимент и высокое качество цветов, профессионализм операторов и флористов, оперативность доставки, конкурентные цены и широкая линейка скидок, удобство оформления и оплаты заказа цветов.
        </p>
        <h3 className="title title--m">
          Богатый ассортимент и высокое качество цветов
        </h3>
        <p className="text lastText">
        Работая напрямую c цветочными плантациями и обладая собственными прекрасными условиями для содержания цветов, ФлораМаркт имеет возможность всегда предлагать своим клиентам лучшее — высокое качество и отличный ассортимент. В каталоге компании Вы всегда найдете, как классические розы, лилии и гвоздики, так и экзотические и полевые цветы. Также компания предлагает композиции из сухоцветов и комнатные цветочные растения в горшках и кашпо.
        </p>
        <h3 className="title title--m">
          Профессионализм операторов и флористов
        </h3>
        <p className="text">
        Компания ФлораМаркт во главу угла ставит не только высокое качество самих цветов, но и качество предоставляемых услуг. Именно поэтому в компании работают только профессионалы.
        </p>
        <p className="text lastText">
        Опытные операторы на телефоне всегда помогут подобрать подходящий букет по случаю, а профессиональные флористы, победители многочисленных флористических конкурсов, создадут для Вас оригинальные и неповторимые букеты и цветочные композиции на заказ.
        </p>
        <h3 className="title title--m">
          Удобство оформления и оплаты заказа цветов
        </h3>
        <p className="text">
        При организации работы компании в целом и сайте www.флорамаркт.рф в частности одним из важнейших моментов было и остается по сей день удобство заказа и оплаты услуг компании.
        </p>
        <p className="text">
        Сделать заказ цветов в ФлораМаркт можно по телефонам +7 965 151-18-39, 8 977 499 18 18 или через сайт компании. Опытные операторы обязательно помогут Вам определить и +правильно подобрать букет для предстоящего торжества. Вы также можете заказать выезд менеджера к Вам домой или в офис.
        </p>
        <p className="text lastText">Оплата заказа осуществляется в ФлораМаркт любым удобным для Вас способом: наличными при доставке, курьеру, безналичным способом, при помощи кредитной карты, электронным платежом.
        </p>
      </div>
      <CustomerDepartment />
      <Partners />
    </section>
  );
}