import React from 'react';
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
      <h1>Реєстрація</h1>
      <p>
        Вже маєте аккаунт?
        <Link to='/login'>Вхід</Link>
      </p>
    </div>
  );
}

export default Register;
