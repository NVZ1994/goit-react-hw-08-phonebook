import { NavTag, StyledNavLink, List } from './Navigation.styled';

export function Navigation() {
  return (
    <NavTag>
      <List>
        <li>
          <StyledNavLink to="/login">login</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/register">register</StyledNavLink>
        </li>
      </List>
    </NavTag>
  );
}
