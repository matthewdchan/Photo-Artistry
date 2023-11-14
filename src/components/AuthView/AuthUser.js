// CSS
import './AuthUser.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../Header';
import Footer from '../Footer';

function AuthUser(){
    return (
        <>
            <Header>
                <Link to='/login'>Log Out</Link>
            </Header>
            <p>THIS IS THE AUTH USER PAGE</p>
            <Link to='/add-item'>+ Add Item</Link>
            <Footer />
        </>
    );
} 

export default AuthUser;