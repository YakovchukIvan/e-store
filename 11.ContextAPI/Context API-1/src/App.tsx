import { createContext, useContext, useState } from 'react';

interface MyContextType {
  count: number;
  increment: () => void;
}

const MyContext = createContext<MyContextType | null>(null);

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <MyContext.Provider value={{ count, increment }}>
      <div style={{ border: '2px solid black', padding: '10px', margin: '10px', color: 'black' }}>
        <h1>Приклад Context API</h1>

        <ChildComponent />
      </div>
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  return (
    <div style={{ border: '2px solid blue', padding: '10px', margin: '10px', color: 'blue' }}>
      <h2>Дочірній Component</h2>
      <NestedChildComponent />
    </div>
  );
};

const NestedChildComponent = () => {
  const context = useContext(MyContext);

  if (!context) {
    return <p>No context available</p>; // якщо немає Provider
  }

  const { count, increment } = context;

  return (
    <div style={{ border: '2px solid green', padding: '10px', margin: '10px', color: 'green' }}>
      <h3>Вкладений Component</h3>
      <p>Counter value: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default App;
