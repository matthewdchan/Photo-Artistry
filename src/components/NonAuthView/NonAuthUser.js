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
            <Header />
            <p> This is the NONAUTHUSER page </p>
            <Footer />
        </div>
    );
}

export default NonAuthUser;