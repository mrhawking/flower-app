import { useEffect, useState, useMemo } from "react";
import { useNavigation } from "react-router-dom";
import CatalogBlock from "../components/Catalog/CatalogBlock";
import Slogan from "../components/Slogan";
import Spinner from "../components/UI/Spinner";
import ButtonLight from "../components/UI/ButtonLight";
import Addresses from "../components/Addresses";
import Partners from "../components/Partners";
import { fetchAvailableFlowers } from "../http";

export default function HomePage() {
  const navigation = useNavigation();
  const [seasonFlowers, setSeasonFlowers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  const queryParams = useMemo(() => ({
    orderBy: '"isSeason"',
    equalTo: true,
    limitToFirst: 6
  }), []);

  useEffect(() => {
    async function getFlowers() {
      setIsFetching(true);
      try {
        const flowers = await fetchAvailableFlowers(queryParams);
        setSeasonFlowers(flowers)
      } catch (error) {
        setError(error.message || 'Ошибка загрузки данных');
      }
      setIsFetching(false);
    }
    getFlowers();
  }, [queryParams]);
  return (
    <>
      <Slogan />
      <h1 className="title align-center">Сеть цветочных баз Флорамаркт</h1>
      {navigation.state === 'loading' && <Spinner />}
      <div className="container margin-30 align-center">
        <CatalogBlock isFetching={isFetching} error={error} availableFlowers={seasonFlowers} />
        <ButtonLight path="/catalog">Смотреть все</ButtonLight>
      </div>
      <Addresses />
      <Partners />
    </>
  );
}