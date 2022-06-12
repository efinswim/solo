import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function Form({title, handleClick}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Button onClick={() => handleClick(email, password)}>{title}</Button>
    </div>
  );
}

export default Form;
