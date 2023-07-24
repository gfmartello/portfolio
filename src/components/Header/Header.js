import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Gaetano Martello</h1>
      <nav className='nav'>
        <Link className='nav__link' to='/'>
          <li>HOME</li>
        </Link>
        <li>ABOUT ME</li>
        <li>RESUMÉ</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </nav>
    </header>
  );
};

export default Header;