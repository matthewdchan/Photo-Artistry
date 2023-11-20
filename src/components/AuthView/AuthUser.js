// CSS
import './AuthUser.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';
import Card from '../Card';
import Art from '../Art';

function AuthUser(props){

    const setIsLoggedInHandlerFalse = () => {
        props.setIsLoggedIn(false);
    }

    return (
        <>
            <Header>
                <Link to='/non-auth-user' onClick={setIsLoggedInHandlerFalse}>Log Out</Link>
                <Link to='/add-item'>Add Art</Link>
            </Header>
            <Main>
                <Card className="art-wrapper">
                    {props.artblocks.map((artblock) => (
                        <Art
                        className="art-block"
                        name={artblock.name}
                        artist={artblock.artist}
                        img={artblock.img}
                        key={artblock.id}
                        />
                    ))}
                </Card>
                <p>THIS IS THE AUTH USER PAGE</p>
            </Main>
            <Footer />
        </>
    );
} 

export default AuthUser;