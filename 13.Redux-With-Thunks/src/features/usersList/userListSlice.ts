const API = 'https://jsonplaceholder.typicode.com/users';

interface User {
  id: number;
  name: string;
  email: string;
}

interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  users: [],
  loading: false,
  error: null,
};

interface Action {
  type: string;
  payload?: any;
}

export default function userListReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'userList/fetchData':
      return { ...state, loading: true, error: null };
    case 'userList/fetchSuccess':
      return { ...state, loading: false, users: action.payload };
    case 'userList/fetchError':
      return { ...state, loading: false, error: action.payload };
    case 'userList/addUser':
      return { ...state, users: [...state.users, action.payload] };
    case 'userList/deleteUser':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
}

export function fetchData() {
  return async function (dispatch: any) {
    dispatch({ type: 'userList/fetchData' });
    try {
      const res = await fetch(API);
      const data = await res.json();
      dispatch({ type: 'userList/fetchSuccess', payload: data });
    } catch (error: any) {
      dispatch({ type: 'userList/fetchError', payload: error.message });
    }
  };
}

export function addUser(user: User) {
  return { type: 'userList/addUser', payload: user };
}

export function deleteUser(id: number) {
  return { type: 'userList/deleteUser', payload: id };
}
