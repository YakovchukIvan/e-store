import { useState, useEffect } from 'react';
import './index.css';

//https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD

const API_URL = 'https://api.frankfurter.app/latest';

function App() {
  const [currency, setCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('GBP');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCurrency = async () => {
      try {
        const res = await fetch(`${API_URL}`);
        const data = await res.json();
        setCurrency(Object.keys(data.rates));
      } catch {
        setError('Failed to fetch currencies');
      } finally {
        setIsLoading(false);
      }
    };

    getCurrency();
  }, []);

  const handleConvert = async () => {
    if (!amount || amount <= 0) {
      setError('Amount must be greater than zero');
      return;
    }
    setError(null);

    try {
      const res = await fetch(`${API_URL}?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();
      console.log(data);

      setConvertedAmount(data.rates[toCurrency]);
    } catch {
      setError('Failed to convert currencies');
    } finally {
      setIsLoading(false);
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            className="dropdown"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currency.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>

          <span className="arrow">→</span>

          <select
            className="dropdown"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currency.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <button className="convert-button" onClick={() => handleConvert()}>
          Convert
        </button>

        {isLoading && <p className="loading">Converting...</p>}

        {convertedAmount !== null && !isLoading && (
          <p className="result">
            {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
