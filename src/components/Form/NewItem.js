import React from 'react';
import { useState } from 'react';

import Card from '../Card';
import './Form.css';

function NewItem () {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [artist, setArtist] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const imgChangeHandler = (event) => {
        setImg(event.target.value);
    };
    const artistChangeHandler = (event) => {    
        setArtist(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newItem = {
            name: name,
            img: img,
            artist: artist,
            id: Math.random().toString(),
        };
        console.log(newItem);
        setName('');
        setImg('');
        setArtist('');
    };


    return (
        <Card className="newitem-wrapper">
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={nameChangeHandler}
                />
                <br></br>
                <label>Image Link</label>
                <input
                    id="img"
                    type="text"
                    value={img}
                    onChange={imgChangeHandler}
                />
                 <br></br>
                <label>Artist</label>
                <input
                    id="artist"
                    type="text"
                    value={artist}
                    onChange={artistChangeHandler}
                />
                 <br></br>
                <button type="submit">Add Art</button>
            </form>
        </Card>
    );  
}
export default NewItem;