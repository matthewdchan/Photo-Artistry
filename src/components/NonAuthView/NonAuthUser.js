// CSS
import './NonAuthUser.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../Header';
import Footer from '../Footer';

function NonAuthUser(){
    return(
        <div>
            <Header>
                <Link to='/login'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </Header>
            <p> This is the NONAUTHUSER page </p>
            <Footer />
        </div>
    );
}

export default NonAuthUser;