// CSS
import './LoginPage.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';
import Login from '../Form/Login';

function LoginPage(props){

    const setIsLoggedInHandler = () => {
        props.setIsLoggedIn(true);
    }

    return(
        <>
            <Header>
                <Link to='/non-auth-user'>View as Guest</Link>
            </Header>
            <Main>
                <p>THIS IS THE LOGIN PAGE</p>
                <Login onIsLoggedIn={setIsLoggedInHandler} />
                <Link to='/auth-user' onclick={props.setIsLoggedIn(true)}>Successful Login (do later)</Link>
            </Main>
            <Footer />
        </>
    );
}

export default LoginPage;