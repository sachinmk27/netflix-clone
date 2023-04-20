/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';

import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '' || firstName === '';

  const handleSignUp = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((resp) =>
        updateProfile(resp.user, {
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
      )
      .then(() => {
        navigate(ROUTES.SIGN_IN);
      })
      .catch((err) => {
        setEmailAddress('');
        setPassword('');
        setFirstName('');
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => {
                setFirstName(target.value);
              }}
            />
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
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?{' '}
            <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
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
