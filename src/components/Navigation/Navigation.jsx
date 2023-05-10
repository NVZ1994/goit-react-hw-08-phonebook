import {
  NavTag,
  StyledNavLink,
  List,
  NavigationItem,
} from './Navigation.styled';

export function Navigation() {
  return (
    <NavTag>
      <List>
        <NavigationItem>
          <StyledNavLink to="/login">login</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink to="/register">register</StyledNavLink>
        </NavigationItem>
      </List>
    </NavTag>
  );
}
