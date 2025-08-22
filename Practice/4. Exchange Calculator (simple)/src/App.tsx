import { useEffect, useState, ChangeEvent } from 'react';

const currencies: string[] = ['USD', 'EUR', 'CAD', 'INR'];

type ApiResponse = {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
};

export default function App() {
  const [currencyData, setCurrencyData] = useState<number>(0);
  const [sum, setSum] = useState<number>(10);
  const [currencyOne, setCurrencyOne] = useState<string>('EUR');
  const [currencyTwo, setCurrencyTwo] = useState<string>('USD');

  useEffect(() => {
    const currencyExchange = async () => {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${sum}&from=${currencyOne}&to=${currencyTwo}`,
        );
        const data: ApiResponse = await res.json();

        const rate = data.rates[currencyTwo];
        if (rate !== undefined) {
          setCurrencyData(Number(rate.toFixed(2)));
        } else {
          setCurrencyData(0);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    currencyExchange();
  }, [sum, currencyOne, currencyTwo]);

  const handleSumChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSum(Number(e.target.value));
  };

  const handleCurrencyOneChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrencyOne(e.target.value);
  };

  const handleCurrencyTwoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrencyTwo(e.target.value);
  };

  return (
    <div>
      <input type="number" value={sum} onChange={handleSumChange} />

      <select value={currencyOne} onChange={handleCurrencyOneChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency} disabled={currency === currencyTwo}>
            {currency}
          </option>
        ))}
      </select>

      <select value={currencyTwo} onChange={handleCurrencyTwoChange}>
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
