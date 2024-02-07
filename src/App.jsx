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
