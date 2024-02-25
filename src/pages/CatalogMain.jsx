import { useNavigation } from "react-router-dom";
import Catalog from "../components/Catalog/Catalog";
import Spinner from "../components/UI/Spinner";

export default function CatalogMainPage() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === 'loading' && <Spinner />}
      <Catalog />
    </>
  );
}