import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function UserList() {
  const users = useSelector((state: RootState) => state.users);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);

  return (
    <div className="user-list">
      <h2>User List</h2>

      <button className="load-btn">Load Users</button>

      {loading && <p>Loading ...</p>}
      {error && <p>Error ...</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.email}
            </span>

            <div className="btn-group">
              <button className="select-btn">Select</button>

              <button className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
