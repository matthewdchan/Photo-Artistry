// CSS
import './AddItem.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import NewItem from '../Form/NewItem';

function AddItem(){
    return(
        <>
            <Header>
                <Link to='/login'>Log In</Link>
            </Header>
            <Main>
                <p>THIS IS THE ADD ITEM PAGE</p>
                <NewItem/>
                <Link to='/auth-user'>Nevermind, return to authView</Link>
            </Main>
            <Footer />
        </>
    );
} 

export default AddItem;