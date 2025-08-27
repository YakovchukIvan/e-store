// 01. Побудуйте маршрутизатор відповідно до цієї структури
// src/
// ├── components/
// │   ├── Header.tsx           // Навігаційне меню с Link/NavLink
// │   ├── Footer.tsx           // Футер сторінки
// ├── pages/
// │   ├── HomePage.tsx         // Головна сторінка
// │   ├── AboutPage.tsx        // Статична сторінка "О нас"
// │   ├── ProductsPage.tsx     // Сторінка зі списком продуктів
// │   ├── ProductDetails.tsx   // Сторінка с детальною інформацією про продукт
// │   ├── SearchPage.tsx       // Сторінка пошуку з використанням query string
// │   ├── LoginPage.tsx        // Приклад редиректу при логіну
// │   └── NotFoundPage.tsx     // Сторінка 404
// ├── App.tsx                  // Корневий компонент с <Router> і маршрутизацією

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetails from './pages/ProductDetails';
import SearchPage from './pages/SearchPage';

// 02. Створіть посилання на сторінки в компоненті Header і розмістіть їх на всіх сторінках будь-яким зручним способом.
// 03. Налаштуйте шлях на сторінку ProductDetails динамічним. Відображте на сторінці параметр із шляху поточної сторінки.
// 04. Подивіться завдання по рядку запиту в компоненті searchPage.tsx.
// 05. У компоненті LoginPage налаштуйте кнопку "Увійти" з використанням <Link></Link>, щоб вона перенаправляла користувача на головну сторінку і передавала стан об'єкта {login: "Ви увійшли"}.
// 06. У компоненті LoginPage програмно налаштуйте кнопку "Забули логін", щоб вона перенаправляла користувача на головну сторінку і передавала стан об'єкта {login: "Ви не ввійшли"}.
// 07. На головній сторінці відображте значення state login всередині тега <p></p>.
// 08. Перенаправте всі неіснуючі сторінки на головну сторінку.

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productName', element: <ProductDetails /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
