import React from 'react';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

function Home() {
  const { isAuth, email } = useAuth();
  console.log(isAuth)

  return isAuth ? (
    <div>
      PRIVET {email}
      <img src='https://images.pexels.com/photos/12360542/pexels-photo-12360542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
    </div>
  ) : (
    <div>
      <Link to='/login'>Вхід</Link>
      <Link to='/register'>Реєстрація</Link>
    </div>
  );
}

export default Home;
