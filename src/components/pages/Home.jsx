import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to='/login'>Вхід</Link>
      <Link to='/register'>Реєстрація</Link>
    </div>
  );
}

export default Home;
