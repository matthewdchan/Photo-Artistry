// CSS
import './Art.css';

// React 
import React from 'react';

// Needed Components
import Card from './Card';

function Art(props){
    return(
        <Card className={props.className}>
            <h2>{ props.name }</h2>
            <img src={props.img} alt="art piece" />
            <p> { props.artist } </p>
        </Card>
    );
}

export default Art;