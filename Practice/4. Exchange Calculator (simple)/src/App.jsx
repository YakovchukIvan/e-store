// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from 'react';

const currencies = ['USD', 'EUR', 'CAD', 'INR'];

export default function App() {
  const [currencyData, setCurrencyData] = useState('');
  const [sum, setSum] = useState(10);
  const [currencyOne, setCurrencyOne] = useState('EUR');
  const [currencyTwo, setCurrencyTwo] = useState('USD');

  useEffect(() => {
    const currencyExchange = async () => {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${sum}&from=${currencyOne}&to=${currencyTwo}`,
        );
        const data = await res.json();
        setCurrencyData(Number(data.rates[currencyTwo].toFixed(2)));
      } catch (error) {
        console.log('Error:', error);
      }
    };

    currencyExchange();
  }, [sum, currencyOne, currencyTwo]);

  return (
    <div>
      <input type="number" value={sum} onChange={(e) => setSum(e.target.value)} />

      <select value={currencyOne} onChange={(e) => setCurrencyOne(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency} disabled={currency === currencyTwo}>
            {currency}
          </option>
        ))}
      </select>

      <select value={currencyTwo} onChange={(e) => setCurrencyTwo(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency} disabled={currency === currencyOne}>
            {currency}
          </option>
        ))}
      </select>

      <p>
        {currencyTwo}: {currencyData}
      </p>
    </div>
  );
}
