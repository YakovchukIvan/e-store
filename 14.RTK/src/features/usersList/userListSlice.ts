import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State, User } from '../types';

const API = 'https://jsonplaceholder.typicode.com/users';

const initialState: State = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<User[], void>('userList/fetchUsers', async () => {
  const res = await fetch(API);
  if (!res.ok) {
    throw new Error('Server error');
  }
  const data: User[] = await res.json();
  return data;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Unknown error';
    });
  },
});

export const { addUser, deleteUser } = userListSlice.actions;

export default userListSlice.reducer;
