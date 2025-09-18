import SelectedUserDetails from './features/userDetails/SelectedUserDetails';
import AddUserForm from './features/usersList/AddUserForm';
import UserList from './features/usersList/UserList';

function App() {
  return (
    <div className="app-container">
      <h1>User Management App</h1>
      <AddUserForm />
      <SelectedUserDetails />
      <UserList />
    </div>
  );
}

export default App;
