import { useNavigation } from "react-router-dom";
import Catalog from "../components/Catalog/Catalog";
import Slogan from "../components/Slogan";
import Spinner from "../components/UI/Spinner";

export default function HomePage() {
  const navigation = useNavigation();
  return (
    <>
      <Slogan />
      {navigation.state === 'loading' && <Spinner />}
      <Catalog />
    </>
  );
}