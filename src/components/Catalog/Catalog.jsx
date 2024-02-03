import classes from './Catalog.module.css';
import CatalogBlock from './CatalogBlock';

export default function Catalog({ flowers, favorites, onchangeFavorite, isLoading }) {
  return (
    <section className={classes.catalog}>
      <div className="container">
        <h1 className={classes.title}>Доставка цветов<span className="visually-hidden">Флора Маркт</span></h1>
        <p>ЗДЕСЬ БУДУ ФИЛЬТРЫ</p>
        {isLoading && <p>ЗАГРУЗКА!!!!!</p>}
        {!isLoading && flowers.length === 0 && 'Похоже нет подходящих вариантов'}
        {!isLoading && flowers.length > 0 && (<CatalogBlock flowers={flowers} favorites={favorites} onchangeFavorite={onchangeFavorite} />)}
      </div>
    </section>
  );
}