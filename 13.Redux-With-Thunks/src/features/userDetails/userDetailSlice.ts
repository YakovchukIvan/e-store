interface State {
  selectedUserId: null;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  selectedUserId: null,
};

export default function userDetailReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'userDetail/selectUser': {
      return { ...state, selectedUserId: action.payload };
    }
    case 'userDetail/clearSelectedUser': {
      return { ...state, selectedUserId: null };
    }
    default:
      return state;
  }
}

export function selectUser(userId: number) {
  return { type: 'userDetail/selectUser', payload: userId };
}
export function clearSelectedUser() {
  return { type: 'userDetail/clearSelectedUser' };
}
