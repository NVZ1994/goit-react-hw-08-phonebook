import { useSelector } from 'react-redux';
import { userSelector } from '../redux/selectors';
import { Link } from 'react-router-dom';

export function ProfilePage() {
  const user = useSelector(userSelector);

  return (
    <div style={{ marginTop: '70px' }}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <img
        src={`http://localhost:8000/${user.avatar}`}
        alt="user avatar"
        width={250}
      />
      <Link to="update">Update profile</Link>
    </div>
  );
}
