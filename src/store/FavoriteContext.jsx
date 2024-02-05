import { createContext, useState } from "react";
import { updateFavoriteFlowersIds } from "../http";

const FavoriteContext = createContext({
  favorites: [],
  error: "", 
  // eslint-disable-next-line no-unused-vars
  handleStatus: (id, isFavorite) => { },
  // eslint-disable-next-line no-unused-vars
  setFavoriteIds: (favorites) => {}
});


export function FavoriteContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [errorUpdatingFavorites, setErrorUpdatingFavorites] = useState();

  async function addFavoriteId(flowerId) {
    setFavoriteIds((prevFavoriteIds) => {
      return [...prevFavoriteIds, flowerId]
    });

    try {
      await updateFavoriteFlowersIds([...favoriteIds, flowerId])
    } catch (error) {
      setFavoriteIds(favoriteIds);
      setErrorUpdatingFavorites(error.message || 'Ошибка загрузки данных');
    }
  }

  async function removeFavoriteId(flowerId) {
    setFavoriteIds((prevFavoriteIds) => {
      return prevFavoriteIds.filter(id => id !== flowerId)
    });

    try {
      await updateFavoriteFlowersIds(favoriteIds.filter(id => id !== flowerId));
    } catch (error) {
      setFavoriteIds(favoriteIds);
      console.log(error)
    }
  }

  function handleStatus(flowerId, isFavorite) {
    if (!isFavorite) {
      addFavoriteId(flowerId);
    } else {
      removeFavoriteId(flowerId);
    }
  } 


  const favoriteContext = {
    favorites: favoriteIds,
    error: errorUpdatingFavorites,
    handleStatus,
    setFavoriteIds,
  };

  return <FavoriteContext.Provider value={favoriteContext}>{children}</FavoriteContext.Provider>
}

export default FavoriteContext;