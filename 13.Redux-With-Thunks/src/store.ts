import { createStore } from 'redux';
import userListReducer from './features/usersList/userListSlice';

const store = createStore(
  userListReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
