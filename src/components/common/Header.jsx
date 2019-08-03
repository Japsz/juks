import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css'

const Header = () => {
    return (
        <div className='nav'>
            <NavLink to={'/hero'} className='nav-item'>Heroes</NavLink>
            <NavLink to={'/location'} className='nav-item'>Lugares</NavLink>
        </div>
    );
}

export default Header;