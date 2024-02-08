import { useState, useEffect, useContext } from "react";
import { fetchAvailableFlowers, fetchFavoriteFlowers } from "../../http.js";
import CatalogItem from './CatalogItem';
import classes from './catalogBlock.module.css';
import FavoriteContext from '../../store/FavoriteContext';

export default function CatalogBlock() {
  const [availableFlowers, setAvailableFlowers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const { favorites, setFavoriteIds } = useContext(FavoriteContext);

  useEffect(() => {
    async function getFlowers() {
      setIsFetching(true);
      try {
        const [availableFlowers, favoriteFlowers] = await Promise.all([
          fetchAvailableFlowers(),
          fetchFavoriteFlowers()
        ]);

        setAvailableFlowers(availableFlowers);
        setFavoriteIds(favoriteFlowers);
      } catch (error) {
        setError(error.message || 'Ошибка загрузки данных');
      }
      setIsFetching(false);
    }
    getFlowers();
  }, []);

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
