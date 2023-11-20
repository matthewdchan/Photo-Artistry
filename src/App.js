// CSS
import './App.css';

// View Components 
import NonAuthUser from './components/NonAuthView/NonAuthUser';
import AddItem from './components/AddItemView/AddItem';
import AuthUser from './components/AuthView/AuthUser';
import LoginPage from './components/LoginView/LoginPage';
import ErrorPage from './components/ErrorPageView/ErrorPage';
import SignupPage from './components/SignupView/SignupPage';


// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // Dummy Data
  const DUMMY_ARRAY = [
    {
        name: 'name',
        artist: 'creator',
        img: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        id: Math.random().toString()
    },
    {
        name: 'name2',
        artist: 'creator2',
        img: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        id: Math.random().toString()
    },
    {
        name: 'name3',
        artist: 'creator3',
        img: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        id: Math.random().toString()
    },
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<NonAuthUser artblocks={DUMMY_ARRAY}/>} />
          <Route exact path='/non-auth-user' element={<NonAuthUser artblocks={DUMMY_ARRAY}/>} />
          <Route path='/auth-user' element={<AuthUser artblocks={DUMMY_ARRAY} />} />
          <Route path='/add-item' element={<AddItem />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
