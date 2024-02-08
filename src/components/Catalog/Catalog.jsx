import classes from './Catalog.module.css';
import CatalogBlock from './CatalogBlock';

export default function Catalog() {
  

  return (
    <section className={classes.catalog}>
      <div className="container">
        <h1 className="title">Доставка цветов<span className="visually-hidden">Флора Маркт</span></h1>
        <p>ЗДЕСЬ БУДУ ФИЛЬТРЫ</p>
        <CatalogBlock/>
      </div>
    </section>
  );
}