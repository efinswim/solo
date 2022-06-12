import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<SignIn />} />
      <Route path='register' element={<SignUp />} />
    </Routes>
  );
}

export default App;
