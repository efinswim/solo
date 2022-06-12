import React from 'react';

import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';

function SignUp() {
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleRegister = (email, password) => {
    console.log('auth', auth);
    createUserWithEmailAndPassword(auth, email, password)
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
      <Form title='sign up' handleClick={handleRegister} />
    </div>
  );
}

export default SignUp;
