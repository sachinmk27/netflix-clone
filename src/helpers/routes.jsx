/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (!user) return children;
  if (user) return <Navigate to={loggedInPath} />;
  return null;
}

export function ProtectedRoute({ user, children }) {
  const location = useLocation();
  if (user) return children;
  if (!user) return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} />;
  return null;
}
