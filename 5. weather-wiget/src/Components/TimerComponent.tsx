import { useEffect, useState } from 'react';

const TimerComponent = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: number | undefined;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div className="container timer-container">
      <h1>Timer: {count}</h1>

      <button className="btn-timer" onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? 'Stop Timer' : 'Start Timer'}
      </button>

      <button className="btn-timer" onClick={() => setCount(0)} disabled={isRunning}>
        Reset Timer
      </button>
    </div>
  );
};

export default TimerComponent;
