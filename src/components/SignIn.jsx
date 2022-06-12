import React from 'react';

import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';

function SignIn() {
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log('user', user);
        dispatch(
          setUser({
            firstName: 'Andrii',
            lastName: 'Rastorhuiev',
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div>
      <Form title='sign in' handleClick={handleLogin} />
    </div>
  );
}

export default SignIn;
