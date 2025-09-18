import { useDispatch } from 'react-redux';
import { addUser } from './userListSlice';
import { useState } from 'react';

function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email };
    dispatch(addUser(newUser));
    setName('');
    setEmail('');
  }

  return (
    <form className="add-user-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit">
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;
