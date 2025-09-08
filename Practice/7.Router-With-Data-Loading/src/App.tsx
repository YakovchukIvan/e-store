import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Thanks from './pages/Thanks';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import { fetchCategories, fetchProducts, productDetailsLoader } from './api/categoriesProductsApi';
import ErrorFallback from './components/ErrorFallback';

// 1. Запустіть JSON-сервер (інструкції наведено у відео та у файлі посилань).
// 2. Створіть дві окремі функції fetch для отримання даних для категорій та продуктів.
// 3. Видаліть стару функціональність використання даних категорій та продуктів у магазині та замініть її отриманням даних за допомогою завантажувача в параметрах маршрутизатора.
// 4. Створіть універсальний обробник помилок за допомогою errorElement.
// 5. Отримайте дані для категорій та продуктів з API за допомогою хука useLoaderData() та використовуйте їх на сторінках «Головна» та «Категорія».
// 6. Використовуйте state для передачі масиву продуктів на сторінку ProductDetails. Отримайте дані за допомогою хука useLocation() та відфільтруйте їх для конкретного продукту на основі параметра URL.

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, loader: fetchCategories, errorElement: <ErrorFallback /> },
      { path: 'old-home', element: <Navigate to={'/'} /> }, // Якщо у випадку колись була інша назва і користувач введе її, ми перенаправимо його на новий шлях URL адресу
      { path: 'about', element: <About /> },
      { path: 'cart', element: <Cart /> },
      { path: 'thanks', element: <Thanks /> },
      {
        path: 'category/:categoryId',
        element: <Category />,
        loader: fetchProducts,
        errorElement: <ErrorFallback />,
      },
      {
        path: 'product/:productId',
        element: <ProductDetails />,
        loader: productDetailsLoader,
        errorElement: <ErrorFallback />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
