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
