// CSS
import './Header.css';

// React
import React from 'react';

// Needed Components

function Header(props){
    return(
        <header>
            <h2>PhotoArtistry</h2>
            <div class="button-wrapper">
                { props.children }  
            </div>          
        </header>
    );
}

export default Header;