import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
    return (
        <>
        <div className='nav'> 
        <input type="checkbox" id="nav-check" />
    <div className="nav-btn">
        <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </div>
        
            <div className='nav-links'>
            <Logo />
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>ACCUEIL</li>
                </NavLink>
                <NavLink to="/Figurines" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>FIGURINES</li>
                </NavLink>
                <NavLink to="/Posters" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>POSTERS</li>
                </NavLink>
                <NavLink to="/Mangas" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>MANGAS</li>
                </NavLink>
                <NavLink to="/Contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>CONTACT</li>
                </NavLink>
            </ul>
            </div>
        </div>
        </>

        
    );
    
};

export default Navigation;