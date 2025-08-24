import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category';
import Cart from './pages/Cart';
import About from './pages/About';
import Layout from './components/Layout';
import Thanks from './pages/Thanks';

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
      { path: 'thanks', element: <Thanks /> },
      { path: 'category', element: <p>Please select a category</p> },
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

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
//   Link,
//   useSearchParams,
// } from 'react-router-dom';

// function Home() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   console.log(searchParams);
//   const name = searchParams.get('name') || '';

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchParams({ name: e.target.value });
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Home Page</h1>
//       <p>
//         Current value of the "name" parameter: <b>{name}</b>
//       </p>
//       <input
//         type="text"
//         value={name}
//         onChange={handleChange}
//         placeholder="Enter a name"
//         style={{ marginRight: '10px' }}
//       />
//       <p style={{ marginTop: '20px' }}>
//         <Link to="/other">Go to another page</Link>
//       </p>
//     </div>
//   );
// }

// function OtherPage() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Other Page</h1> <Link to="/">Back to Home</Link>
//     </div>
//   );
// }

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Home />} />
//       <Route path="/other" element={<OtherPage />} />
//     </>,
//   ),
// );

// export default function App() {
//   return <RouterProvider router={router} />;
// }
