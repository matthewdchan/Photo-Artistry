// CSS
import './ErrorPage.css';

// React
import React from 'react';

// Needed Components
import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';


function ErrorPage(){
    return(
        <>
            <Header />
            <Main>
                <p>This is the error page. Page not found... </p>
            </Main>
            <Footer />
        </>
    );
}

export default ErrorPage;
