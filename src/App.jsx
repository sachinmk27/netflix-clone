import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home } from './pages';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
        <Route exact path={ROUTES.SIGN_UP} element={<Signup />} />
      </Routes>
    </Router>
  );
}
