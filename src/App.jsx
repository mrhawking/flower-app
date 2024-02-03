import { useState, useEffect } from "react";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import { updateFavoriteFlowersIds, fetchAvailableFlowers, fetchFavoriteFlowers } from "./http";


function App() {
  const [availableFlowers, setAvailableFlowers] = useState([]);
  const [favoriteFlowersIds, setFavoriteFlowersIds] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function getFlowers() {
      setIsFetching(true);
      try {
        const [availableFlowers, favoriteFlowers] = await Promise.all([
          fetchAvailableFlowers(),
          fetchFavoriteFlowers()
        ]);

        setAvailableFlowers(availableFlowers);
        setFavoriteFlowersIds(favoriteFlowers);
      } catch (error) {
        setError((error.message || 'Ошибка загрузки данных'));
      }
      setIsFetching(false);
    }
    getFlowers();
  }, []);

  // useEffect(() => {
  //   async function getFlowers() {
  //     try {
  //       const availableFlowers = await fetchAvailableFlowers();
  //       setAvailableFlowers(availableFlowers);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   async function getFavoriteFlowers() {
  //     try {
  //       const favoriteFlowers = await fetchFavoriteFlowers();
  //       setFavoriteFlowersIds(favoriteFlowers);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getFlowers();
  //   getFavoriteFlowers();
  // }, []);


  async function handleAddFavorite(flowerId) {
    setFavoriteFlowersIds((prevFavoriteFlowersIds) => {
      return [...prevFavoriteFlowersIds, flowerId]
    });

    try {
      await updateFavoriteFlowersIds([...favoriteFlowersIds, flowerId])
    } catch (error) {
      setFavoriteFlowersIds(favoriteFlowersIds);
      console.log(error)
    }
  }

  async function handleRemoveFavorite(flowerId) {
    setFavoriteFlowersIds((prevFavoriteFlowersIds) => {
      return prevFavoriteFlowersIds.filter(id => id !== flowerId)
    });

    try {
      await updateFavoriteFlowersIds(favoriteFlowersIds.filter(id => id !== flowerId));
    } catch (error) {
      setFavoriteFlowersIds(favoriteFlowersIds);
      console.log(error)
    }
  }

  function handleFavoriteStatus(flowerId, isFavorite) {
    if (!isFavorite) {
      handleAddFavorite(flowerId);
    } else {
      handleRemoveFavorite(flowerId);
    }
  } 


  return (
    <>
      <Header />
      <main>
        <Slogan />
        {error && <p>Ошибка</p>}
        {!error && <Catalog isLoading={isFetching} flowers={availableFlowers} favorites={favoriteFlowersIds} onchangeFavorite={handleFavoriteStatus} />}
      </main>
      <Footer />
    </>
  );
}

// function App() {
//   const [availableFlowers, setAvailableFlowers] = useState([]);
//   const [favoriteFlowers, setFavoriteFlowers] = useState([]);

//   useEffect(() => {
//     async function getFlowers() {
//       const res = await fetch('http://localhost:3000/flowers');
//       const data = await res.json();
//       setAvailableFlowers(data);
//     }
//     getFlowers();
//   }, []);


//   useEffect(() => {
//     async function getFavoriteFlowers() {
//       const res = await fetch('http://localhost:3000/favorite');
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error('Ошибка загрузки избранного');
//       }
//       setFavoriteFlowers(data);
//     }
//     getFavoriteFlowers();
//   }, []);

//   async function handleAddFavorite(flower) {
//     setFavoriteFlowers((prevFavoriteFlowers) => {
//       return [...prevFavoriteFlowers, flower]
//     });

//     try {
//       await updateFavoriteFlowers([...favoriteFlowers, flower])
//     } catch (error) {
//       setFavoriteFlowers(favoriteFlowers);
//       console.log(error)
//     }
//   }

//   async function handleRemoveFavorite(id) {
//     setFavoriteFlowers((prevFavoriteFlowers) => {
//         return prevFavoriteFlowers.filter(item => item.id !== id)
//     });

//     try {
//       await updateFavoriteFlowers(favoriteFlowers.filter(item => item.id !== id));
//     } catch(error) {
//       setFavoriteFlowers(favoriteFlowers);
//       console.log(error)
//     }   
//   }

//   function handleFavoriteStatus(flower, isFavorite) {
//     console.log(flower, isFavorite)
//     if (!isFavorite) {
//       handleAddFavorite(flower);
//     } else {
//       handleRemoveFavorite(flower.id);
//     }
//   }

//   return (
//     <>
//       <Header />
//       <main>
//         <Slogan />
//         <Catalog flowers={availableFlowers} favorites={favoriteFlowers} onchangeFavorite={handleFavoriteStatus} />
//       </main>
//       <Footer />
//     </>
//   );
// }

export default App
