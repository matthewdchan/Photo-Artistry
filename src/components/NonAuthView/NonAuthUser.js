// CSS
import './NonAuthUser.css';

// React
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Needed Components
import Header from '../PageSections/Header';
import Main from '../PageSections/Main';
import Footer from '../PageSections/Footer';
import Card from '../Card';
import Art from '../Art';
import SearchBar from '../SearchBar';
import { useArtContext } from '../../ArtContext';


function NonAuthUser(props) {
    const { artblocks} = useArtContext();
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
    }

    if (props.isLoggedIn) {
        console.log("isLoggedIn = true");
    } else {
        console.log("isLoggedIn = false");
    } 
    useEffect(() => {
        console.log('Context Artblocks: ', artblocks);
    } , [artblocks]);

    return(
        <div>
            <Header>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
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
        </div>
    );
}

export default NonAuthUser;
