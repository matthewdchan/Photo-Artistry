// CSS
import './LoginPage.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../Header';
import Footer from '../Footer';

function LoginPage(){
    return(
        <>
            <Header>
                <Link to='/non-auth-user'>View as Guest</Link>
            </Header>
            <p>THIS IS THE LOGIN PAGE</p>
            <Link to='/auth-user'>Successful Signin (do later)</Link>
            <Footer />
        </>
    );
}

export default LoginPage;