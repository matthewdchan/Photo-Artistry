// CSS
import './ErrorPage.css';

// React
import React from 'react';

// Needed Components
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';


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
