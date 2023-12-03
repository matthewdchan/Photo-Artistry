import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import axios from 'axios';

/*
 A global state variable for the artblocks array
 used throughout every view in the app to ensure con
 and proper updates on change
*/

const ArtContext = createContext();

export const ArtProvider = ( {children}) => {
    const [artblocks, setArtblocks] = useState([]);

    useEffect(() => {
        console.log('Context Artblocks: ', artblocks);
        axios.get('http://localhost:4000/arts')
        .then((response) => {
          setArtblocks(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    , []);

    return (
        <ArtContext.Provider value={{artblocks, setArtblocks}}>
            {children}
        </ArtContext.Provider>
    );
};

export const useArtContext = () => {
    return useContext(ArtContext);
};