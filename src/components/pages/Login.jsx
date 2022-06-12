import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../SignIn';

function Login() {
  return (
    <div>
      <h1>Вхід</h1>
      <SignIn />
      <p>
        Якщо не маєте аккаунт, то можете <Link to='/register'>зареєструватись</Link>
      </p>
    </div>
  );
}

export default Login;
