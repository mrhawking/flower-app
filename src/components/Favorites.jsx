import { useContext, useEffect, useState } from 'react';
import CatalogItem from './Catalog/CatalogItem';
import classes from './Favorites.module.css';
import FavoriteContext from '../store/FavoriteContext';
import { fetchAvailableFlowers, fetchFavoriteFlowers } from '../http';

export default function Favorites() {
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

  function getFavoriteItems() {
    let favoriteItems = [];
    for (let i = 0; i < favorites.length; i++) {
      for (let j = 0; j < availableFlowers.length; j++) {
        if (favorites[i] === availableFlowers[j].id) {
          favoriteItems.push(availableFlowers[j])
        }
      }
    }
    return favoriteItems;
  }

  const favoriteFlowersItems = getFavoriteItems();

  return (
    <>
      <div className={classes.favoritesBlock}>
        <div className="container">
          <h2 className="title">Избранное</h2>
          {isFetching && <p>ЗАГРУЗКА!!!!!</p>}
          {error && <p>ОШИБКА</p>}
          {!isFetching && !error && favorites.length === 0 && <p className={classes.message}>Нет избранных товаров</p>}
          {!isFetching && !error && favorites.length > 0 && (
            <ul className={classes.favoritesList}>
              {favoriteFlowersItems.map(item => <CatalogItem key={item.id} flower={item} isFavorite={favorites.some((favFlowerId) => item.id === favFlowerId)} />)}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}