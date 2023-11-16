// CSS
import './AuthUser.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../Header';
import Main from '../Main';
import Card from '../Card';
import Art from '../Art';
import Footer from '../Footer';

function AuthUser(props){
    return (
        <>
            <Header>
                <Link to='/login'>Log Out</Link>
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
                <Link to='/add-item'>+ Add Item</Link>
            </Main>
            <Footer />
        </>
    );
} 

export default AuthUser;