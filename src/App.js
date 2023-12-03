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

import { useArtContext, ArtProvider } from './ArtContext';


// Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';


function App() {
const { artblocks} = useArtContext();
 

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
    <ArtProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<NonAuthUser  />} />
          <Route exact path='/non-auth-user' element={<NonAuthUser  isLoggedIn={isLoggedIn} />} />
          <Route path='/auth-user' element={isLoggedIn ? 
           ( <AuthUser  setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}  /> )
            : <Navigate to={'/login'} />}  />
          <Route path='/add-item' element={<AddItem />} />
          <Route path='/edit-item/:id' element={<UpdateItem artblocks={artblocks}   />}  />
          <Route path='/my-submissions' element={<MySubmissions        isLoggedIn={isLoggedIn} />} />
          <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/signup' element={<SignupPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='*' element={<ErrorPage setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
      </div>
    </Router>
    </ArtProvider>
  );
}

export default App;
