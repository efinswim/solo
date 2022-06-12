import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          navigate('/'),
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
      <Button onClick={() => handleRegister(email, password)}>
        зареєструватись
      </Button>
      <p>
        Вже маєте аккаунт?
        <Link to='/login'>Вхід</Link>
      </p>
    </div>
  );
}

export default SignUp;
