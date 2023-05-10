import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavTag = styled.nav``;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  :hover {
    font-weight: 800;
  }

  &.active {
    color: white;
  }
`;
export const NavigationItem = styled.li`
  min-width: 64px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
