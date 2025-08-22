import { useEffect, useRef } from 'react';

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   console.log(inputRef.current);
  //   inputRef.current?.focus();
  // }, []);

  const handleFocus = (): void => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App;
