import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiShoppingBasketLine } from 'react-icons/ri';
import Logo from '../components/Logo';

const Navigation = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  return (
    <div>
      <nav id="nav" className={isActive ? 'active' : ''}>
    <Logo />
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
            <NavLink
              to='/Register'
              style={{ textDecoration: 'none' }}
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              <li>CONNEXION / INSCRIPTION</li>
            </NavLink>
            <NavLink to='/Shop' style={{ textDecoration: 'none' }}>
              <RiShoppingBasketLine
                className={`IconPanier ${location.pathname === '/Shop' ? 'active' : ''}`}
              />
            </NavLink>
          </ul>
        <div id="icons" onClick={toggleActive}>
          {/* Ajoutez ici l'icône du bouton burger */}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
