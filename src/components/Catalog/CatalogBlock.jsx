import { useContext } from "react";
import CatalogItem from './CatalogItem';
import classes from './CatalogBlock.module.css';
import FavoriteContext from '../../store/FavoriteContext';

export default function CatalogBlock({isFetching, error, availableFlowers}) {
  const { favorites } = useContext(FavoriteContext);

  return (
    <>
      {isFetching && <p>ЗАГРУЗКА!!!!!</p>}
      {error && <p>ОШИБКА</p>}
      {!isFetching && !error && availableFlowers.length === 0 && <p>Похоже нет подходящих вариантов</p>}
      {!isFetching && !error && availableFlowers.length > 0 && (
        <div className={classes.catalogBlock}>
          <ul className={classes.catalogList}>
            {availableFlowers.map((flower) => (
              <CatalogItem
                key={flower.id}
                isFavorite={favorites.some((favFlowerId) => flower.id === favFlowerId)}
                flower={flower} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
