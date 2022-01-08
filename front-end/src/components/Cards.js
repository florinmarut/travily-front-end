import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Go and Share your Experiences!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
                               
             <CardItem
              src='images/img-9_1.jpg'
              text='Discover the most visited places'
              label='Blog'
              path='/services'
            />

            <CardItem
              src='images/img-2_1.jpg'
              text='Share your memories with loved ones'
              label='Socialize'
              path='/services'
            />
            </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-4_1.jpg'
              text='Plan your next destination in the Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8_1.jpg'
              text='Write a review for that Coffee Shop you have visited'
              label='Taste your trips'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;