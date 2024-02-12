import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Cart from "./components/Cart/Cart";
import { FavoriteContextProvider } from "./store/FavoriteContext";
import { CartContextProvider } from "./store/CartContext";
import Favorites from "./components/Favorites";
import SingleItem from "./components/SingleItem";


function App() {

  return (
    <CartContextProvider>
      <FavoriteContextProvider>
        <Header />
        <main className="main">
          <Slogan />
          <SingleItem />
          <Favorites />
          <Cart />
          <Catalog />
        </main>
        <Footer />
      </FavoriteContextProvider>
    </CartContextProvider>
  );
}

export default App
