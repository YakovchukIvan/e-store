import { configureStore } from '@reduxjs/toolkit';
import userListSlice from './features/usersList/userListSlice';

const store = configureStore({
  reducer: {
    userList: userListSlice,
  },
  devTools: import.meta.env.MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
