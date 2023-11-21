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
import { Navigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

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
        img: 'https://i.pinimg.com/736x/87/be/25/87be25487e6cd1a0fc7a3518544e876a.jpg',
        id: Math.random().toString()
    },
    {
        name: 'name3',
        artist: 'creator3',
        img: 'https://i.pinimg.com/736x/9e/2a/87/9e2a8718e2a8ee4bc45f26955eabb7e4.jpg',
        id: Math.random().toString()
    },
    {
        name: 'name4',
        artist: 'creator4',
        img: 'https://i.pinimg.com/736x/32/58/0d/32580d7766d719e12ffda84a11ce53b7.jpg',
        id: Math.random().toString()
    }
  ];

  /*
  * MANUAL AUTHENTICATION
  *
  * isLoggedInDefault = false: /auth-user cannot be accessed by typing in the URL
  * isLoggedInDefault = true: /auth-user can be accessed by typing in the URL
  */
  const isLoggedInDefault = false;
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInDefault); // [state, function
  // do something with this to fix it

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<NonAuthUser artblocks={DUMMY_ARRAY}/>} />
          <Route exact path='/non-auth-user' element={<NonAuthUser artblocks={DUMMY_ARRAY} isLoggedIn={isLoggedIn} />} />
          <Route path='/auth-user' element={isLoggedIn ? 
            <AuthUser artblocks={DUMMY_ARRAY} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} /> 
            : <Navigate to={'/login'} />} />
          <Route path='/add-item' element={<AddItem />} />
          <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/signup' element={<SignupPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
