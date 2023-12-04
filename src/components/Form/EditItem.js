import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // for navigation back to orig view
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArtContext } from '../../ArtContext';
// packaging form data into json object
import axios from 'axios';

import Card from '../Card';
import './Form.css';
/*
the form should auto populate with the values for the given art from the database
and allow the user to edit the fields then submit the form which sends an axios request
*/
function EditItem (props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { artblocks, setArtblocks } = useArtContext();
    console.log(id);

    // all states for object attributes
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

    useEffect(() => {
        const encodedId = encodeURIComponent(id);
        
        // server request to get the specific artwork and populate form
        axios
        .get(`http://localhost:4000/arts/${encodedId}`)
        .then((res) => {
            console.log(res.data);
            const data = res.data;
            console.log(data);

            setName(data.name);
            setImg(data.img);
            setArtist(data.artist);
            setDate(data.date);
        })
        .catch((err) => {
            console.log('Error in retrieving item');
        });
    }, [id]);


    const submitHandler = (event) => {
        // prevent default
        event.preventDefault();

        // build updated data from user
        const data = {
            name: name,
            img: img,
            artist: artist,
            date: date,
        };

        // store updated data to original object in database
        axios
        .put(`http://localhost:4000/arts/${id}`, data)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setArtblocks((prevArtblocks) => {
                return prevArtblocks.map((artblock) => {
                    return artblock._id === id ? {...artblock, ...data} : artblock;
            });
        });
            navigate('/my-submissions');
        })
        .catch((err) => {
            console.log('Error in updating item', err);
        });

        
        // console.log for now
        console.log(data);

    }


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
                    required
                />
                 <br></br>
                 <label>Date</label>
                <input
                    id="date"
                    type="text"
                    value={date}
                    onChange={dateChangeHandler}
                    required
                />
                <br></br>
                <button type="submit">Submit Changes</button>
            </form>
        </Card>
    );  
}
export default EditItem;