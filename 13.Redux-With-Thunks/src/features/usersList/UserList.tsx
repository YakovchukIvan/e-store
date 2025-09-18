import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { deleteUser, fetchData } from './userListSlice';
import { selectUser } from '../userDetails/userDetailSlice';

function UserList() {
  const users = useSelector((state: RootState) => state.userData.users);
  const loading = useSelector((state: RootState) => state.userData.loading);
  const error = useSelector((state: RootState) => state.userData.error);

  const dispatch: any = useDispatch();

  return (
    <div className="user-list">
      <h2>User List</h2>

      <button onClick={() => dispatch(fetchData())} className="load-btn">
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
              <button onClick={() => dispatch(selectUser(user.id))} className="select-btn">
                Select
              </button>

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
