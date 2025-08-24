import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category';
import Cart from './pages/Cart';
import About from './pages/About';
import Layout from './components/Layout';

// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: 'about', element: <About /> },
//   { path: 'cart', element: <Cart /> },
//   { path: 'Category', element: <Category /> },
//   { path: 'product', element: <ProductDetails /> },
//   { path: '*', element: <NotFound /> },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'cart', element: <Cart /> },
      { path: 'category', element: <div>Please select a category</div> },
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
