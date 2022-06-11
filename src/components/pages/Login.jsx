import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Вхід</h1>
      <p>
        Якщо не маєте аккаунт, то можете <Link to='/register'>зареєструватись</Link>
      </p>
    </div>
  );
}

export default Login;
