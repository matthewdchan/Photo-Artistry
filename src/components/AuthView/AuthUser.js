// CSS
import './AuthUser.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function AuthUser(){
    return (
        <>
            <Header>
                <Link to='/login'>Log Out</Link>
            </Header>
            <Main>
                <p>THIS IS THE AUTH USER PAGE</p>
                <Link to='/add-item'>+ Add Item</Link>
            </Main>
            <Footer />
        </>
    );
} 

export default AuthUser;