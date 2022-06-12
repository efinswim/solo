import React from 'react';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

function Home() {
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>PRIVET {email}</div>
  ) : (
    <div>
      <Link to='/login'>Вхід</Link>
      <Link to='/register'>Реєстрація</Link>
    </div>
  );
}

export default Home;
