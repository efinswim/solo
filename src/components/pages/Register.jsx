import React from 'react';
import { Link } from 'react-router-dom'
import SignUp from '../SignUp';

function Register() {
  return (
    <div>
      <h1>Реєстрація</h1>
      <SignUp />
      <p>
        Вже маєте аккаунт?
        <Link to='/login'>Вхід</Link>
      </p>
    </div>
  );
}

export default Register;
