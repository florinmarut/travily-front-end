import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'


function HeroSection() {
  return (
    <div className='hero-container' style={{ 
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/land.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    }}>
      <div className='hero-container' style={{height: '100%',
    width: '100%',
    backgroundColor: 'rgba(153, 167, 167, 0.5)',}}>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
         <Button
             className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
             GET STARTED
         </Button>
        
         </div>
      </div>
    </div>
  );
}

export default HeroSection;