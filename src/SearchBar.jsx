import React from 'react';
import {FaSearch} from "react-icons/fa"
import './App.css'
import { useState, useEffect } from "react";

export const SearchBar = ({input, setInput}) => {

const handleChange = (value) => {
    setInput(value)

}





    return(
        <>
        <div className = 'input-wrapper'>
            <FaSearch id = 'search-icon'/>
            <input id = "search-bar" placeholder = "type to search..."
            value = {input}
            onChange = {(e) => handleChange(e.target.value)}></input>
        </div>



        </>
    )
}
