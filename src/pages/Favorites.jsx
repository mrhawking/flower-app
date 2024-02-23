import { useContext, useEffect, useState } from 'react';
import CatalogItem from '../components/Catalog/CatalogItem';
import classes from './Favorites.module.css';
import FavoriteContext from '../store/FavoriteContext';
import { fetchFlower } from '../http';

export default function FavoritesPage() {

  //Запросит с сервака ТОЛЬКО ТЕ карточки, которые ейсть в favorites
  // тогда нафиг не нужен будет двойной цикл
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const { favorites: favoriteIds } = useContext(FavoriteContext);

  useEffect(() => {
    async function fetchFavoriteItems() {
      const fethedFlowersItems = [];
      setIsFetching(true);
      try {
        for (let id of favoriteIds) {
          const singleFlower = fetchFlower(id);
          fethedFlowersItems.push(singleFlower);
        }
      } catch(error) {
        setError(error.message || 'Ошибка загрузки данных');
      }
      setFavoriteItems(await Promise.all(fethedFlowersItems));
      setIsFetching(false);
    }
    fetchFavoriteItems();
  }, [favoriteIds])

  return (
    <>
      <div className={classes.favoritesBlock}>
        <div className="container">
          <h2 className="title">Избранное</h2>
          {isFetching && <p>ЗАГРУЗКА!!!!!</p>}
          {error && <p>ОШИБКА</p>}
          {!isFetching && !error && favoriteIds.length === 0 && <p className={classes.message}>Нет избранных товаров</p>}
          {!isFetching && !error && favoriteIds.length > 0 && (
            <ul className={classes.favoritesList}>
              {favoriteItems.map(item => <CatalogItem key={item.id} flower={item} isFavorite={favoriteIds.some((favFlowerId) => item.id === favFlowerId)} />)}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}