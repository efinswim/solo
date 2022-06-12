import React, { useState } from 'react';

import { Button, TextField } from '@mui/material';

import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div>
      <h1>Вхід</h1>
      <TextField
        required
        label='Email'
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        required
        label='Password'
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={() => handleLogin(email, password)}>війти</Button>
      <p>
        Якщо не маєте аккаунт, то можете
        <Link to='/register'>зареєструватись</Link>
      </p>
    </div>
  );
}

export default SignIn;
