// CSS
import './ErrorPage.css';
import bg from './no_page_found2.png';



// React
import React from 'react';
import { Link } from 'react-router-dom';



function ErrorPage(props){
    if (props.isLoggedIn) {
        console.log("isLoggedIn = true");
    } else {
        console.log("isLoggedIn = false");
    } 
    
    const setIsLoggedInHandlerFalse = () => {
        props.setIsLoggedIn(false);
    }

    return(
        <>
            <div className="err-main"> 
                <h3>Looks like we found a silly goose.</h3>
                <p>The page you are looking for cannot be found...</p>
                <br /> <br />
                <h3>Click here to return to our login page:</h3>
                <Link to='/login' onClick={setIsLoggedInHandlerFalse}>Login</Link>
                <img src={bg} alt="background" />
            </div>
        </>
    );
}

export default ErrorPage;
