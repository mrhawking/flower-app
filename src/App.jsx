import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Cart from "./components/Cart/Cart";
import { FavoriteContextProvider } from "./store/FavoriteContext";
import { CartContextProvider } from "./store/CartContext";


function App() {

  return (
    <CartContextProvider>
      <FavoriteContextProvider>
        <Header />
        <main>
          <Slogan />
          <Cart />
          <Catalog />
        </main>
        <Footer />
      </FavoriteContextProvider>
    </CartContextProvider>
  );
}

export default App

// import { useState, useEffect } from "react";
// import Catalog from "./components/Catalog/Catalog";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Slogan from "./components/Slogan";
// import { updateFavoriteFlowersIds, fetchAvailableFlowers, fetchFavoriteFlowers } from "./http";


// function App() {
//   const [availableFlowers, setAvailableFlowers] = useState([]);
//   const [favoriteFlowersIds, setFavoriteFlowersIds] = useState([]);
//   const [isFetching, setIsFetching] = useState(false);
//   const [error, setError] = useState();
//   const [errorUpdatingFavorites, setErrorUpdatingFavorites] = useState();


//   useEffect(() => {
//     async function getFlowers() {
//       setIsFetching(true);
//       try {
//         const [availableFlowers, favoriteFlowers] = await Promise.all([
//           fetchAvailableFlowers(),
//           fetchFavoriteFlowers()
//         ]);

//         setAvailableFlowers(availableFlowers);
//         setFavoriteFlowersIds(favoriteFlowers);
//       } catch (error) {
//         setError(error.message || 'Ошибка загрузки данных');
//       }
//       setIsFetching(false);
//     }
//     getFlowers();
//   }, []);

//   async function handleAddFavorite(flowerId) {
//     setFavoriteFlowersIds((prevFavoriteFlowersIds) => {
//       return [...prevFavoriteFlowersIds, flowerId]
//     });

//     try {
//       await updateFavoriteFlowersIds([...favoriteFlowersIds, flowerId])
//     } catch (error) {
//       setFavoriteFlowersIds(favoriteFlowersIds);
//       setErrorUpdatingFavorites(error.message || 'Ошибка загрузки данных');
//     }
//   }

//   async function handleRemoveFavorite(flowerId) {
//     setFavoriteFlowersIds((prevFavoriteFlowersIds) => {
//       return prevFavoriteFlowersIds.filter(id => id !== flowerId)
//     });

//     try {
//       await updateFavoriteFlowersIds(favoriteFlowersIds.filter(id => id !== flowerId));
//     } catch (error) {
//       setFavoriteFlowersIds(favoriteFlowersIds);
//       console.log(error)
//     }
//   }

//   function handleFavoriteStatus(flowerId, isFavorite) {
//     if (!isFavorite) {
//       handleAddFavorite(flowerId);
//     } else {
//       handleRemoveFavorite(flowerId);
//     }
//   } 


//   return (
//     <>
//       <Header />
//       <main>
//         <Slogan />
//         {error && <p>Ошибка</p>}
//         {!error && <Catalog isLoading={isFetching} flowers={availableFlowers} favorites={favoriteFlowersIds} onchangeFavorite={handleFavoriteStatus} />}
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App
