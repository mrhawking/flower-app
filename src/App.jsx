import { FavoriteContextProvider } from "./store/FavoriteContext";
import { CartContextProvider } from "./store/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import CatalogMainPage from "./pages/CatalogMain";
import FavoritesPage from "./pages/Favorites";
import CartPage from "./pages/Cart";
import ErrorPage from "./pages/Error";
import FlowerDetailsPage from "./pages/FlowerDetails";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Delivery from "./pages/Delivery";
import Cards from "./pages/Cards";
import Contacts from "./pages/Contacts";
import { flowerLoader } from "./loader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'catalog', element: <CatalogMainPage />},
      { path: 'catalog/:flowerId', element: <FlowerDetailsPage />, loader: flowerLoader },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'about', element: <About /> },
      { path: 'payment', element: <Payment /> },
      { path: 'delivery', element: <Delivery /> },
      { path: 'cards', element: <Cards /> },
      { path: 'contacts', element: <Contacts /> },
    ],
  },

]);

function App() {

  return (
    <CartContextProvider>
      <FavoriteContextProvider>
        <RouterProvider router={router} />
      </FavoriteContextProvider>
    </CartContextProvider>
  );
}

export default App;
