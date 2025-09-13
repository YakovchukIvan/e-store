import { useReducer } from 'react';
import './index.css';

// 1. Використовуючи хук useReducer, створіть віджет для відображення поточної дати.
// 2. Абзац повинен відображати поточну дату у форматі: Fri Dec 27 2025.
// 3. Кнопка «Скинути» повинна скинути дату до поточної.
// 4. У полі введення користувач вводить кількість днів, яку потрібно додати до поточної дати.
// 5. Після натискання кнопки «Показати результат» має відображатися дата, отримана після додавання введеної кількості днів до поточної дати.

type State = {
  date: Date;
  inputValue: string;
};

type Action =
  | { type: 'updateInput'; payload: string }
  | { type: 'showResult'; payload: Date }
  | { type: 'reset' };

const initialState: State = {
  date: new Date(),
  inputValue: '',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'updateInput':
      return { ...state, inputValue: action.payload };
    case 'showResult': {
      return { ...state, date: action.payload };
    }
    case 'reset':
      return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleShowResult() {
    const days = parseInt(state.inputValue, 10);

    if (!Number.isNaN(days)) {
      const newDate = new Date(state.date);
      newDate.setDate(newDate.getDate() + days);

      dispatch({ type: 'showResult', payload: newDate });
    }

    dispatch({ type: 'updateInput', payload: '' });
  }

  return (
    <div className="app-container">
      <p className="date-text">{state.date.toDateString()}</p>

      <button className="btn" onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>

      <div className="input-group">
        <input
          value={state.inputValue}
          onChange={(e) => dispatch({ type: 'updateInput', payload: e.target.value })}
          className="input"
          type="number"
          placeholder="Days after today"
        />
        <button className="btn primary-btn" onClick={handleShowResult}>
          Show result
        </button>
      </div>
    </div>
  );
}

export default App;
