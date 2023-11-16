// CSS
import './Main.css';

// React
import React from 'react';

// Needed Components
import Card from './Card';
import Art from './Art';

function Main(props){
    return (
        <main>
            <Card className="art-wrapper">
                {props.artblocks.map((artblock) => (
                    <Art
                    className="art-block"
                    name={artblock.name}
                    artist={artblock.artist}
                    img={artblock.img}
                    key={artblock.id}
                    />
                ))}
            </Card>
            { props.children }
        </main>
    );
}

export default Main;