import { createContext, useContext } from 'react';
import { ITaskContextType } from './types';

export const MyContext = createContext<ITaskContextType | undefined>(undefined);

export const useTasks = (): ITaskContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useTasks must be used within a MyContext.Provider');
  }
  return context;
};
