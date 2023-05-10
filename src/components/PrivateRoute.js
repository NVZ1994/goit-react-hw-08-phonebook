import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector, isRefreshingSelector } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const isRefreshing = useSelector(isRefreshingSelector);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log('isLoggedIn:', isLoggedIn);
  console.log('isRefreshing:', isRefreshing);
  console.log('shouldRedirect: ', shouldRedirect);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
