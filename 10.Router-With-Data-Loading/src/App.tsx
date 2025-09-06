import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useLoaderData,
  useRouteError,
  Outlet,
  useNavigation,
} from 'react-router-dom';

//URL DATA "https://jsonplaceholder.typicode.com/posts"

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchData = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Помилка при запиті отримання постів');
  }
  return res.json();
};

const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === 'loading' && <p>Loading ...</p>}
      <Outlet />
    </>
  );
};

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>
        Go to the <Link to="/posts">Posts</Link> page to view the list of posts.
      </p>
    </div>
  );
}

// function Posts() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [error, setError] = useState<Error | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     async function loadPosts() {
//       try {
//         const data = await fetchData();
//         setPosts(data);
//       } catch (err) {
//         setError(err as Error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     loadPosts();
//   }, []);

//   if (isLoading) {
//     return <p>Loading ...</p>;
//   }

//   if (error) {
//     return (
//       <div>
//         <h1>Error</h1>
//         <p>{error.message || 'Something went wrong'}</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//       <Link to="/">Go back to Home</Link>
//     </div>
//   );
// }

const ErrorBoundary = (): JSX.Element => {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>Descr error: {error.message}</p>
      </div>
    );
  }
  // на випадок, якщо error не instanceof Error
  return (
    <div>
      <h1>Unknown Error</h1>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/posts',
        element: <Posts />,
        loader: fetchData,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '*',
        element: <h1>404: Page Not Found</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
