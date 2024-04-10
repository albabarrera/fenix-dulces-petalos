import React from "react";

import './Search.css';

interface Props {
    onChange: (value: string) => void;
}


export const Search:React.FC<Props> = ({ onChange }) => {
    return ( 
        <input 
        className="searchBar"
        id="seachBar"
        placeholder="¿Qué planta estás buscando?"
        onChange={e => onChange(e.target.value)} 
        />
    )
};