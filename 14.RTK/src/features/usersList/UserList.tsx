import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { deleteUser, fetchUsers } from './userListSlice';

function UserList() {
  const users = useSelector((state: RootState) => state.userList.users);
  const loading = useSelector((state: RootState) => state.userList.loading);
  const error = useSelector((state: RootState) => state.userList.error);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="user-list">
      <h2>User List</h2>

      <button onClick={() => dispatch(fetchUsers())} className="load-btn">
        Load Users
      </button>

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

              <button onClick={() => dispatch(deleteUser(user.id))} className="delete-btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
