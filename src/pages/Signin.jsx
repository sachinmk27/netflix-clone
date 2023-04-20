/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        navigate(ROUTES.HOME);
      })
      .catch((err) => {
        setEmailAddress('');
        setPassword('');
        setError(err.message);
      });
  };

  const isInvalid = password === '' || emailAddress === '';

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              type="text"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => {
                setEmailAddress(target.value);
              }}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?{' '}
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
