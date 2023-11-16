// CSS
import './LoginPage.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function LoginPage(){
    return(
        <>
            <Header>
                <Link to='/non-auth-user'>View as Guest</Link>
            </Header>
            <Main>
                <p>THIS IS THE LOGIN PAGE</p>
                <Link to='/auth-user'>Successful Signin (do later)</Link>
            </Main>
            <Footer />
        </>
    );
}

export default LoginPage;