import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiShoppingBasketLine } from 'react-icons/ri';
import Logo from '../components/Logo';

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <div className='nav'>
        <Logo />
        <input type='checkbox' id='nav-check' />
        <div className='nav-btn'>
          <label htmlFor='nav-check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className='nav-links'>
          <ul>
            <NavLink
              to='/'
              style={{ textDecoration: 'none' }}
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <li>ACCUEIL</li>
            </NavLink>
            <NavLink
              to='/Figurines'
              style={{ textDecoration: 'none' }}
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <li>FIGURINES</li>
            </NavLink>
            <NavLink
              to='/Posters'
              style={{ textDecoration: 'none' }}
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <li>POSTERS</li>
            </NavLink>
            <NavLink
              to='/Mangas'
              style={{ textDecoration: 'none' }}
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <li>MANGAS</li>
            </NavLink>
            <NavLink
              to='/Contact'
              style={{ textDecoration: 'none' }}
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <li>CONTACT</li>
            </NavLink>
            <NavLink to='/Shop' style={{ textDecoration: 'none' }}>
              <RiShoppingBasketLine
                className={`IconPanier ${location.pathname === '/Shop' ? 'active' : ''}`}
              />
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
