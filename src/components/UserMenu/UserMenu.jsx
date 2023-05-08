import { useDispatch, useSelector } from 'react-redux';
import { Div, Ul, MobileButton, Button } from './UserMenu.styled';
import { nameSelector, tokenSelector } from 'redux/selectors';
import { signOut } from 'redux/auth/authOperations';

export function UserMenu() {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const name = useSelector(nameSelector);

  const onClick = () => {
    dispatch(signOut(token));
  };

  return (
    <Div>
      <MobileButton>mobile button</MobileButton>
      <Ul>
        <p>{name}</p>
        <Button onClick={onClick}>sign out</Button>
      </Ul>
    </Div>
  );
}
