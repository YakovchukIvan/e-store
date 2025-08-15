import { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      // Встановлюємо таймер, якщо він включений
      timer = setInterval(() => {
        console.log('Timer running:', count);
        setCount((prev) => prev + 1);
      }, 1000);
    }
    // Функція очищення таймера
    return () => {
      if (timer) {
        console.log('Cleaning up the timer');
        clearInterval(timer);
      }
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
