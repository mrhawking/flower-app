import { FavoriteContextProvider } from "./store/FavoriteContext";
import { CartContextProvider } from "./store/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import CartPage from "./pages/Cart";
import ErrorPage from "./pages/Error";
import FlowerDetailsPage from "./pages/FlowerDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'catalog/:flowerId', element: <FlowerDetailsPage /> },
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

export default App
