import { useDispatch, useSelector } from 'react-redux';
import { Div, Ul, MobileButton, Button, NameWrap } from './UserMenu.styled';
import { nameSelector, tokenSelector } from 'redux/selectors';
import { signOut } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';

export function UserMenu() {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const name = useSelector(nameSelector);

  const onClick = () => {
    dispatch(signOut(token));
  };

  return (
    <Div>
      <Link to="/profile">Profile</Link>
      <MobileButton>mobile button</MobileButton>
      <Ul>
        <NameWrap>Welcome, {name}</NameWrap>
        <Button onClick={onClick}>Sign out</Button>
      </Ul>
    </Div>
  );
}
