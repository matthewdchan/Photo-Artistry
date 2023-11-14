// CSS
import './Header.css';

// React
import React from 'react';

// Needed Components

function Header(props){
    return(
        <header>
            <h2>PhotoArtistry</h2>
            { props.children }            
        </header>
    );
}

export default Header;