import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Thanks from './pages/Thanks';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'old-home', element: <Navigate to={'/'} /> },
      { path: 'about', element: <About /> },
      { path: 'cart', element: <Cart /> },
      { path: 'thanks', element: <Thanks /> },
      { path: 'category/:categoryId', element: <Category /> },
      { path: 'product/:productId', element: <ProductDetails /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
