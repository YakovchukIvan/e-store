import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { clearSelectedUser } from './userDetailSlice';

function SelectedUserDetails() {
  const dispatch = useDispatch();

  const selectedUserId = useSelector((state: RootState) => state.userDetail.selectedUserId);
  const users = useSelector((state: RootState) => state.userData.users);

  if (!selectedUserId) {
    return <p>No user selected</p>;
  }

  const user = users.find((user) => user.id === selectedUserId);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="selected-user-details">
      <h2>Selected User</h2>
      <p>
        <strong>Name: </strong>
        {user.name}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>

      <button onClick={() => dispatch(clearSelectedUser())} className="clear-btn">
        Clear Selection
      </button>
    </div>
  );
}

export default SelectedUserDetails;
