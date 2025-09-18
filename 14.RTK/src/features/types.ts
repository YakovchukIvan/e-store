export interface User {
  id: number;
  name: string;
  email: string;
}

export interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}
