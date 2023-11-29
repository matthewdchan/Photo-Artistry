// CSS
import './MySubmissions.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';

// Needed Components
import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';
import Card from '../Card';
import Art from '../Art';
import button from '../Button';

const MySubmissions = (props) => {

    const handleEdit = (id) => {
        // Logic for handling edit
    };

    const handleDelete = (id) => {
        // Logic for handling delete
    };

    return(
        <>
            <Header>
                <Link to='/auth-user'>Home</Link>
            </Header>
            <Main>
                <h2>My Submissions</h2>
                <Card className="art-wrapper">
                    {props.artblocks.map((artblock) => (
                        <Art
                        className="art-block"
                        name={artblock.name}
                        artist={artblock.artist}
                        img={artblock.img}
                        date={artblock.date}
                        key={artblock.id}
                        showEditDelete={true}
                        onEdit={() => handleEdit(artblock.id)}
                        onDelete={() => handleDelete(artblock.id)}
                        />
                    ))}
                </Card>
            </Main>
            <Footer />
        </>
    );
}

export default MySubmissions;
