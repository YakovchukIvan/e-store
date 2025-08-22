import useFetch from './hooks/useFetch';
import useWindowSize from './hooks/useWindowSize';

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// function App() {
//   const { data, loading, error } = useFetch<Post[]>({
//     url: 'https://jsonplaceholder.typicode.com/posts',
//   });

//   if (loading) return <p>Loading ...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {data?.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;

export default function App(): JSX.Element {
  const minWidth = 500;
  const maxWidth = 1200;
  const isWithinRange = useWindowSize(minWidth, maxWidth);

  return (
    <div>
      <h1>
        Розмір вікна: від <mark>{minWidth}px</mark> до <mark>{maxWidth}px</mark> →{' '}
        {isWithinRange ? 'так' : 'ні'}
      </h1>
      {isWithinRange ? (
        <p>Ширина вікна знаходиться в межах заданого діапазону.</p>
      ) : (
        <p>Ширина вікна знаходиться поза межами заданого діапазону.</p>
      )}
    </div>
  );
}
