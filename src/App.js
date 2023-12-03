// CSS
import './App.css';

// View Components 
import NonAuthUser from './components/NonAuthView/NonAuthUser';
import AddItem from './components/AddItemView/AddItem';
import AuthUser from './components/AuthView/AuthUser';
import LoginPage from './components/LoginView/LoginPage';
import ErrorPage from './components/ErrorPageView/ErrorPage';
import SignupPage from './components/SignupView/SignupPage';
import MySubmissions from './components/SubmissionView/MySubmissions';
import UpdateItem from './components/EditItemView/UpdateItem';


// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

function App() {

  // Dummy Data
  const DUMMY_ARRAY = [
    {
        name: 'Girl with a Pearl Earring',
        artist: 'Jonannes Vermeer',
        img: 'https://cdn.britannica.com/33/194733-050-4CF75F31/Girl-with-a-Pearl-Earring-canvas-Johannes-1665.jpg',
        date: '1665',
        id: Math.random().toString()
    },
    {
        name: 'Wanderer above the Sea of Fog',
        artist: 'Caspar David Friedrich',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg',
        date: '1818',
        id: Math.random().toString()
    },
    {
        name: 'Me IRL',
        artist: 'Unknown',
        img: 'https://i.pinimg.com/736x/87/be/25/87be25487e6cd1a0fc7a3518544e876a.jpg',
        date: '-',
        id: Math.random().toString()
    },
    {
        name: 'Impression, Sunrise',
        artist: 'Claude Monet',
        img: 'https://smarthistory.org/wp-content/uploads/2023/07/dezoomify-result-27-scaled.jpg',
        date: '1872-1874',
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

  const [artblocks, setArtblocks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/arts')
    .then((response) => {
      setArtblocks(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<NonAuthUser artblocks={artblocks} setArtblocks={setArtblocks}/>} />
          <Route exact path='/non-auth-user' element={<NonAuthUser artblocks={artblocks} setArtblocks={setArtblocks} isLoggedIn={isLoggedIn} />} />
          <Route path='/auth-user' element={isLoggedIn ? 
            <AuthUser artblocks={artblocks} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} /> 
            : <Navigate to={'/login'} />} artblocks={artblocks} setArtblocks={setArtblocks} />
          <Route path='/add-item' element={<AddItem />} />
          <Route path='/edit-item/:id' element={<UpdateItem />} artblocks={artblocks} setArtblocks={setArtblocks}  />
          <Route path='/my-submissions' element={<MySubmissions artblocks={artblocks} setArtblocks={setArtblocks}         isLoggedIn={isLoggedIn} />} />
          <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/signup' element={<SignupPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='*' element={<ErrorPage setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
