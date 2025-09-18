import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = userListSlice.actions;

export default userListSlice.reducer;
