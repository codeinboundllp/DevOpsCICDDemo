import React from 'react';

import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div>
              <div className='hero'>
                  <div className='mask'>
                    <img className='into-img' src='/images/soft.jpg' alt='introimg'/></div>
                     <div className='content'>
                       <h2>DevOps with AWS </h2>
                        <p>Live Training Course!</p>
      
                      </div>
              </div>
        </div>
  );
}

export default HeroSection;
