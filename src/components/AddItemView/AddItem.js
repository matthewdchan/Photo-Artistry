// CSS
import './AddItem.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../Header';
import Footer from '../Footer';

function AddItem(){
    return(
        <>
            <Header>
                <Link to='/login'>Log In</Link>
            </Header>
            <p>THIS IS THE ADD ITEM PAGE</p>
            <Link to='/auth-user'>Nevermind, return to authView</Link>
            <Footer />
        </>
    );
} 

export default AddItem;