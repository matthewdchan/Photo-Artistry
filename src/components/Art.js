// CSS
import './Art.css';

// React 
import React from 'react';

// Needed Components
import Card from './Card';
import Button from './Button'

function Art(props){
    const isLoggedIn = props.isLoggedIn;
    console.log(isLoggedIn);

    return(
        <Card className={props.className}>
            <h2>{ props.name }</h2>
            <img src={props.img} alt="art piece" />
            <p> { props.artist } </p>
            <p> { props.date } </p>
            { isLoggedIn ? 
            (
                <>
                <div className='button-group'>
                    <Button>Edit</Button> 
                    <Button>Delete</Button>
                </div>
                </>
            ) 
            : null }
        </Card>
    );
}

export default Art;
