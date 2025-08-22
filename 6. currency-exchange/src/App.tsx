import { useState, useEffect, ChangeEvent } from 'react';

const API_URL = 'https://api.frankfurter.app/latest';

type Rates = {
  [key: string]: number;
};

type CurrencyResponse = {
  rates: Rates;
  base: string;
  date: string;
};

function App(): JSX.Element {
  const [currency, setCurrency] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>('GBP');
  const [toCurrency, setToCurrency] = useState<string>('USD');
  const [inputAmount, setInputAmount] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState<boolean>(false);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setCurrency(Object.keys(data.rates));
      } catch {
        setError('Failed to fetch currencies');
      }
    };
    getCurrency();
  }, []);

  const handleConvert = async () => {
    const amountNumber = parseFloat(inputAmount);
    if (!inputAmount || amountNumber <= 0) {
      setError('Amount must be greater than zero');
      return;
    }

    setError(null);
    setIsConverting(true);

    setAmount(inputAmount);

    try {
      const res = await fetch(
        `${API_URL}?amount=${amountNumber}&from=${fromCurrency}&to=${toCurrency}`,
      );
      const data: CurrencyResponse = await res.json();
      setConvertedAmount(data.rates[toCurrency] ?? null);
    } catch {
      setError('Failed to convert currencies');
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="app">
      <h1>Currency Exchange Calculator</h1>

      <div className="converter-container">
        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <input
            type="number"
            placeholder="Amount"
            className="input-field"
            value={inputAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInputAmount(e.target.value)}
          />

          <select
            className="dropdown"
            value={fromCurrency}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setFromCurrency(e.target.value)}
          >
            {currency.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <span className="arrow">→</span>

          <select
            className="dropdown"
            value={toCurrency}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setToCurrency(e.target.value)}
          >
            {currency.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <button className="convert-button" onClick={handleConvert}>
          Convert
        </button>

        {isConverting && <p className="loading">Converting...</p>}

        {convertedAmount !== null && !isConverting && (
          <p className="result">
            {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
