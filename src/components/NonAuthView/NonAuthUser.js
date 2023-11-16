// CSS
import './NonAuthUser.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function NonAuthUser(){

    // Dummy Data
    const DUMMY = [
        {
            name: 'name',
            artist: 'creator',
            img: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
            id: Math.random().toString()
        },
        {
            name: 'name2',
            artist: 'creator2',
            img: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
            id: Math.random().toString()
        },
        {
            name: 'name3',
            artist: 'creator3',
            img: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
            id: Math.random().toString()
        },
    ];
    return(
        <div>
            <Header>
                <Link to='/login'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </Header>
            <Main>
                <p>This is the nonauth user page</p>
            </Main>
            <Footer />
        </div>
    );
}

export default NonAuthUser;