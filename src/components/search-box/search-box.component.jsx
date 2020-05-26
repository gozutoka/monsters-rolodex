import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className = 'search'
        type = 'search' 
        placeholder = {placeholder} 
        onChange = {handleChange}  //setState is async function because react engine sets it whenever it is optimized.
    />
);

