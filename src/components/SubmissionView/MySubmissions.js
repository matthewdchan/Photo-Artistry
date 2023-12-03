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
import { useNavigate } from 'react-router-dom';
import { useArtContext } from '../../ArtContext';

import axios from 'axios';

const MySubmissions = (props) => {
    const navigate = useNavigate();
    const { artblocks, setArtblocks } = useArtContext();
/*
read thru axios slides on editing
and deleting
a item
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleEdit = (id) => {
        // Logic for handling edit
        console.log('Editing artblock with id', id);
        navigate(`/edit-item/${id}`); // -> move to the edit item form for editing
        // add rest
    };

    // doesnt seem to work/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleDelete = (id) => {
        // Logic for handling delete
        console.log('Deleting artblock with id', id);
       
            axios
                .delete(`http://localhost:4000/arts/${id}`)
                .then((res) => {
                setArtblocks((prevArtblocks) => prevArtblocks.filter((artblock) => artblock._id !== id));
                navigate('/my-submissions'); // maybe change this
                })
                .catch(error => {
                    console.log('Error on deleting artblock', error);
                });

        
    };


    return(
        <>
            <Header>
                <Link to='/auth-user'>Home</Link>
            </Header>
            <Main>
                <h2>View your custom submissions here</h2>
                <Card className="art-wrapper">
                    {artblocks.map((artblock) => (
                        <Art
                        className="art-block"
                        name={artblock.name}
                        artist={artblock.artist}
                        img={artblock.img}
                        date={artblock.date}
                        key={artblock._id}
                        showEditDelete={true}
                        onEdit= {() => handleEdit(artblock._id)}
                        onDelete={() => handleDelete(artblock._id)}
                        />
                    ))}
                </Card>
            </Main>
            <Footer />
        </>
    );
}

export default MySubmissions;
