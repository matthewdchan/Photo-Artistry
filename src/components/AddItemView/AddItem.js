// CSS
import './AddItem.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';
import NewItem from '../Form/NewItem';

function AddItem(){
    return(
        <>
            <Header>
                <Link to='/auth-user'>Home</Link>
            </Header>
            <Main>
                <NewItem/>
            </Main>
            <Footer />
        </>
    );
} 

export default AddItem;
