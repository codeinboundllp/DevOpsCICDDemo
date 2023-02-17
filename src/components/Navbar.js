import React, { useState,useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
          <img src="./images/logo.png" width="150" height="50px" alt='' />

            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className={click?'nav-item.active':'nav-item'}>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={click?'nav-item.active':'nav-item'}>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className={click?'nav-item.active':'nav-item'}>
              <Link
                to='/Contacts'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            
            <li className={click?'nav-item.active':'nav-item'}>
              <Link
                to='/Blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          <div className='hamburger' onClick={handleClick}>
            {click ? (
           <FaTimes size={20} style={{color:'#000'}}/>):(
           <FaBars size={20} style={{color:'#000'}}/>)}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
