import { useState, useEffect, useRef } from 'react';
import classes from './Catalog.module.css';
import CatalogBlock from './CatalogBlock';
import Filter from "../Filter";
import { fetchAvailableFlowers } from "../../http.js";

export default function Catalog() {
  const availableFlowers = useRef([]);
  const [currentFlowers, setCurrentFlowers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getFlowers() {
      setIsFetching(true);
      try {
        const flowers = await fetchAvailableFlowers();
        availableFlowers.current.value = flowers;
        setCurrentFlowers(flowers)
      } catch (error) {
        setError(error.message || 'Ошибка загрузки данных');
      }
      setIsFetching(false);
    }
    getFlowers();
  }, []);

  function handleFilteredFlowers(updatedFlowers) {
    setCurrentFlowers(updatedFlowers)
  }

  return (
    <section className={classes.catalog}>
      <div className="container">
        <h1 className="title">Доставка цветов<span className="visually-hidden">Флора Маркт</span></h1>
        <Filter onChangeFilter={handleFilteredFlowers} availableFlowers={availableFlowers}/>
        <CatalogBlock isFetching={isFetching} error={error} availableFlowers={currentFlowers} />
      </div>
    </section>
  );
}