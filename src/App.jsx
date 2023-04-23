/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Signin, Signup, Browse } from './pages';
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Routes>
        <Route
          exact
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.HOME}>
              <Signin />
            </IsUserRedirect>
          }
        />
        <Route
          exact
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.HOME}>
              <Signup />
            </IsUserRedirect>
          }
        />
        <Route
          exact
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path={ROUTES.HOME}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Home />
            </IsUserRedirect>
          }
        />
      </Routes>
    </Router>
  );
}
