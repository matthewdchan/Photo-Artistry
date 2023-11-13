// CSS
import './ErrorPage.css';

// React
import React from 'react';

// Needed Components
import Header from '../Header';
import Footer from '../Footer';


function ErrorPage(){
    return(
        <>
            <Header />
            <p>This is the error page. Page not found... </p>
            <Footer />
        </>
    );
}

export default ErrorPage;