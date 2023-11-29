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
            {props.showEditDelete && (
                <div className="art-actions">
                    <Button onClick={props.onEdit}>Edit</Button>
                    <Button onClick={props.onDelete}>Delete</Button>
                </div>
            )}
        </Card>
    );
}

export default Art;
