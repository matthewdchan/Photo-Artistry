// CSS
import '../AddItemView/AddItem.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';
import EditItem from '../Form/EditItem';

function UpdateItem(){

    return(
        <>
            <Header>
                <Link to='/my-submissions'>Home</Link>
            </Header>
            <Main>
                <EditItem />
            </Main>
            <Footer />
        </>
    );
} 

export default UpdateItem;
