import React from 'react';
import { useState } from 'react';

import Card from '../Card';
import './Form.css';

function NewItem () {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [artist, setArtist] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const imgChangeHandler = (event) => {
        setImg(event.target.value);
    };
    const artistChangeHandler = (event) => {    
        setArtist(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        // prevent default
        event.preventDefault();

        // build new item
        const newItem = {
            name: name,
            img: img,
            artist: artist,
            date: date,
            id: Math.random().toString(),
        };

        // console.log for now
        console.log(newItem);

        // clear fields
        setName('');
        setImg('');
        setArtist('');
        setDate('');
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
                    required
                />
                <br></br>
                <label>Image Link</label>
                <input
                    id="img"
                    type="text"
                    value={img}
                    onChange={imgChangeHandler}
                    required
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
                 <label>Date</label>
                <input
                    id="date"
                    type="text"
                    value={date}
                    onChange={dateChangeHandler}
                />
                <br></br>
                <button type="submit">Add Art</button>
            </form>
        </Card>
    );  
}
export default NewItem;