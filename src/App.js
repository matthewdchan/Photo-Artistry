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

  //setArtblocks((prevArtblocks) => {
   //   return [artblocks, ...prevArtblocks];
   // });


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
          <Route exact path='/' element={<NonAuthUser artblocks={artblocks} />} />
          <Route exact path='/non-auth-user' element={<NonAuthUser artblocks={artblocks} isLoggedIn={isLoggedIn} />} />
          <Route path='/auth-user' element={isLoggedIn ? 
           ( <AuthUser artblocks={artblocks} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} /> )
            : <Navigate to={'/login'} />}  />
          <Route path='/add-item' element={<AddItem />} />
          <Route path='/edit-item/:id' element={<UpdateItem artblocks={artblocks}   />}  />
          <Route path='/my-submissions' element={<MySubmissions artblocks={artblocks}         isLoggedIn={isLoggedIn} />} />
          <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/signup' element={<SignupPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='*' element={<ErrorPage setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
