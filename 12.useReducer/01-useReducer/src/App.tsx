// function App() {
//   return (
//     <div>
//       <p>Count</p>
//       <button onClick={() => console.log('+1')}>+</button>
//       <button onClick={() => console.log('-1')}>-</button>
//       <button onClick={() => console.log('Reset')}>Reset</button>
//     </div>
//   );
// }

// export default App;

import { useReducer } from 'react';

type State = {
  count: number;
  inputValue: string;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'incrementByFive'; payload: number }
  | { type: 'incrementBy'; payload: number }
  | { type: 'updateInput'; payload: string };

const initialState: State = { count: 0, inputValue: '' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'incrementByFive':
      return { ...state, count: state.count + action.payload };
    case 'incrementBy':
      return { ...state, count: state.count + action.payload };
    case 'updateInput':
      return { ...state, inputValue: action.payload };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrementBy() {
    const value = parseInt(state.inputValue, 10);

    if (!Number.isNaN(value)) {
      dispatch({ type: 'incrementBy', payload: value });
    }

    dispatch({ type: 'updateInput', payload: '' });
  }

  return (
    <div>
      <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'incrementByFive', payload: 5 })}>+5</button>
      </div>
      <div>
        <input
          type="number"
          value={state.inputValue}
          onChange={(e) => dispatch({ type: 'updateInput', payload: e.target.value })}
        />
        <button onClick={handleIncrementBy}>incrementBy</button>
      </div>
    </div>
  );
}

export default App;
