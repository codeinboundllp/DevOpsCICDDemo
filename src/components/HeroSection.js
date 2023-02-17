import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (<div>
      <div className='hero'>
        <div className='mask'>
          <img className='into-img' src='/images/soft.jpg' alt='introimg'/></div>
     <div className='content'>
      
     <h2> Software Devolopment Company</h2>
      <p>Transform Your Business with us, Today!</p>
      <div>
        <Link to="/projects" className='btn'>
          Projects
        </Link>
        <Link to="/Contacts" className='btn btn-light'>
          Contacts
        </Link>
        </div>
      </div>
      </div>
      </div>
  );
}

export default HeroSection;
