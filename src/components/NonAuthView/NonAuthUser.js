// CSS
import './NonAuthUser.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';
import Card from '../Card';
import Art from '../Art';


function NonAuthUser(props) {

    if (props.isLoggedIn) {
        console.log("isLoggedIn = true");
    } else {
        console.log("isLoggedIn = false");
    } 

    return(
        <div>
            <Header>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </Header>
            <Main>
                <Card className="art-wrapper">
                    {props.artblocks.map((artblock) => (
                        <Art
                        className="art-block"
                        name={artblock.name}
                        artist={artblock.artist}
                         img={artblock.img}
                        date={artblock.date}
                        key={artblock.id}
                        />
                    ))}
                </Card>
            </Main>
            <Footer />
        </div>
    );
}

export default NonAuthUser;