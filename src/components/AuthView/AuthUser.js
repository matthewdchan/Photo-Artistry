// CSS
import './AuthUser.css';

// React
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// Needed Components
import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';
import Card from '../Card';
import Art from '../Art';
import SearchBar from '../SearchBar';
import { useArtContext } from '../../ArtContext';

function AuthUser(props) {
    const { artblocks, setArtblocks } = useArtContext();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(artblocks);
    }, [artblocks]);

    const handleSearch = (searchTerm) => {
        if (!searchTerm) {
            setFilteredData(artblocks);
        } else {
            const filtered = artblocks.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.artist.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };
    
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
                <SearchBar onSearch={handleSearch} />
                <Card className="art-wrapper">
                    {filteredData.map((artblock) => (
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
