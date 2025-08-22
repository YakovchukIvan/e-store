import { useState, useRef } from 'react';

function CounterApp() {
  const [count, setCount] = useState<number>(0);

  let clickCount: number = 0;
  const clickRef = useRef<number>(0);

  const handleClick = (): void => {
    setCount((prev: number) => prev + 1);
    clickCount++;
    clickRef.current++;
    console.log('clickRef:', clickRef);
  };

  console.log('Component re-rendered');

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Counter Example</h1>
      <p>Current Count (useState): {count}</p>
      <p>Total Clicks (variable): {clickCount}</p>
      <p>Total Clicks (useRef): {clickRef.current}</p>

      <button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default CounterApp;
