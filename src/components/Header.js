import React from 'react';
import { NavLink } from "react-router-dom";


export default function Header ()  {

    return (
        <div className='header'>
            <NavLink to={'/all-characters'}>All Characters</NavLink>
            <NavLink to={'/liked-characters'}>Liked Characters</NavLink>
        </div>
    )
}