import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { NotFound } from 'pages/NotFound';
import { isRefreshingSelector } from 'redux/selectors';
import { refreshUser } from 'redux/auth/authOperations';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ProfilePage } from 'pages/ProfilePage';
import { UpdateProfile } from 'pages/UpdateProfile';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(isRefreshingSelector);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="profile"
          element={
            <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
          }
        />
        <Route
          path="profile/update"
          element={
            <PrivateRoute redirectTo="/login" component={<UpdateProfile />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
