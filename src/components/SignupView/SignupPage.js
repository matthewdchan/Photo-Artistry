import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';

import Signup from '../Form/Signup';


function SignupPage(props){

    const setIsLoggedInHandler = () => {
        props.setIsLoggedIn(true);
    }

    return(
        <>
            <Header>
                <Link to='/non-auth-user'>Back</Link>
            </Header>
            <Main>
                <Signup onIsLoggedIn={setIsLoggedInHandler} />
            </Main>
            <Footer />
        </>
    );
}

export default SignupPage;
