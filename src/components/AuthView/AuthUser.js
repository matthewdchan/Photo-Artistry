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
import Button from '../Button';
import { useArtContext } from '../../ArtContext';

function AuthUser(props) {
    const { artblocks, setArtblocks } = useArtContext();

    if (props.isLoggedIn) {
        console.log("isLoggedIn = true");
    } else {
        console.log("isLoggedIn = false");
    } 
    
    const setIsLoggedInHandlerFalse = () => {
        props.setIsLoggedIn(false);
    }


    return (
        <>
            <Header>
                <Link to='/non-auth-user' onClick={setIsLoggedInHandlerFalse}>Log Out</Link>
                <Link to='/add-item'>Add Art</Link>
                <Link to='/my-submissions'>My Submissions</Link>
            </Header>
            <Main>
                <Card className="art-wrapper">
                    {artblocks.map((artblock) => (
                        <Art
                        className="art-block"
                        name={artblock.name}
                        artist={artblock.artist}
                        img={artblock.img}
                        date={artblock.date}
                        key={artblock._id}
                        isLoggedIn={props.isLoggedIn}
                        />
                    ))}
                </Card>
            </Main>
            <Footer />
        </>
    );
} 

export default AuthUser;
