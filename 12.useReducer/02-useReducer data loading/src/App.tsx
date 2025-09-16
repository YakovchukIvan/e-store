import { useEffect, useReducer } from 'react';

// Кандидат
type Candidate = {
  id: number;
  name: string;
  votes: number;
};

// Стан
type State = {
  candidates: Candidate[];
  newCandidate: string;
  status?: 'ready' | 'error' | 'loading';
};

// Дії
type Action =
  | { type: 'reset_votes' }
  | { type: 'update_new_candidate'; payload: string }
  | { type: 'add_candidate'; payload: string }
  | { type: 'dataReceived'; payload: Candidate[] }
  | { type: 'vote_up'; payload: string }
  | { type: 'vote_down'; payload: string }
  | { type: 'dataFaild' };

// Початковий стан
const initialState: State = {
  candidates: [],
  newCandidate: '',
  status: 'loading',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'reset_votes': {
      return {
        ...state,
        candidates: state.candidates.map((candidate) => ({
          ...candidate,
          votes: 0,
        })),
      };
    }
    case 'update_new_candidate': {
      return { ...state, newCandidate: action.payload };
    }
    case 'add_candidate': {
      if (
        !action.payload.trim() ||
        state.candidates.some(
          (candidate) => candidate.name.toLowerCase() === action.payload.toLowerCase(),
        )
      ) {
        return state;
      }
      return {
        ...state,
        candidates: [
          ...state.candidates,
          {
            id: Date.now(),
            name: action.payload,
            votes: 0,
          },
        ],
        newCandidate: '',
      };
    }
    case 'vote_up':
      return incrementVote(state, action.payload);
    case 'vote_down':
      return decrementVote(state, action.payload);
    case 'dataReceived': {
      return {
        ...state,
        candidates: action.payload,
        status: 'ready',
      };
    }
    case 'dataFaild': {
      return { ...state, status: 'error' };
    }
    default:
      return state;
  }
}

function incrementVote(state: State, name: string): State {
  return {
    ...state,
    candidates: state.candidates.map((candidate) =>
      candidate.name === name ? { ...candidate, votes: candidate.votes + 1 } : candidate,
    ),
  };
}

function decrementVote(state: State, name: string): State {
  return {
    ...state,
    candidates: state.candidates.map((candidate) =>
      candidate.name === name
        ? { ...candidate, votes: Math.max(candidate.votes - 1, 0) }
        : candidate,
    ),
  };
}

function VoteTracker() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:9000/candidates');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: Candidate[] = await res.json();
        dispatch({ type: 'dataReceived', payload: data });
      } catch (err) {
        console.error(err);
        dispatch({ type: 'dataFaild' });
      }
    }
    fetchData();
  }, []);

  if (state.status === 'loading') {
    return <p>Loading...</p>;
  }
  if (state.status === 'error') {
    return <p style={{ color: 'red' }}>Error loading data</p>;
  }

  return (
    <>
      <h1>Vote Tracker</h1>

      <ul>
        {state.candidates.map((candidate) => (
          <li key={candidate.id} className="candidate-item">
            <span className="candidate-name">
              {candidate.name}: {candidate.votes} votes
            </span>
            <button
              className="increment"
              onClick={() => dispatch({ type: 'vote_up', payload: candidate.name })}
            >
              +
            </button>
            <button
              className="decrement"
              onClick={() => dispatch({ type: 'vote_down', payload: candidate.name })}
            >
              -
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch({ type: 'reset_votes' })}>Reset Votes</button>

      <div>
        <h2>Add Candidate</h2>
        <input
          type="text"
          placeholder="Candidate name"
          value={state.newCandidate}
          onChange={(e) => dispatch({ type: 'update_new_candidate', payload: e.target.value })}
        />
        <button onClick={() => dispatch({ type: 'add_candidate', payload: state.newCandidate })}>
          Add
        </button>
      </div>
    </>
  );
}

export default VoteTracker;
