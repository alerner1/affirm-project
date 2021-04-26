import React, { useState } from 'react';
import EmptyStar from './assets/empty-star.svg';
import FilledStar from './assets/filled-star.svg';
import './styles.css';


const RatingSystem = ({ activeRating, handleHover, handleClick }) => {
  
  // creates an array of Star components based on whether they should be filled
  const mapStars = () => {
    
    // initialize array to be filled with Star components
    const starsArr = [];

    // i represents current star
    // ranges from 1-5 to easily correspond with rating system
    for (let i = 1; i <= 5; i++) {
      
      /* If the current star is less than or equal to the activeRating 
      (the final filled star to be rendered),
      render a Star component with filled prop set to true.
      NOTE: While I would prefer to use uuid for keys, install new npm packages 
      doesn't seem to work with HackerRank's system. */
      if (i <= activeRating) {
        starsArr.push(
          <Star 
            key={i} 
            id={i} 
            filled={true} 
            handleHover={handleHover} 
            handleClick={handleClick} 
          />
        );

      /* If the current star is greater than the activeRating, render a Star component
      with the filled prop set to false */
      } else {
        starsArr.push(
          <Star 
            key={i} 
            id={i} 
            filled={false} 
            handleHover={handleHover} 
            handleClick={handleClick} 
          />
        );
      }
    }

    return starsArr;
  };

  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
      {mapStars()}
    </div>
  );
};

// Star component
const Star = ({filled, handleHover, handleClick, id}) => {

  // when filled is true, renders a filled star
  // otherwise, renders an empty star
  // this is handled by ternaries for the src and alt props
  // the id prop allows us to keep track of the rating corresponding to each star
  return (
    <img 
      src={filled ? FilledStar : EmptyStar} 
      alt={filled ? "filled star" : "empty star"} 
      onMouseEnter={e => handleHover(e.target.id, 'enter')} 
      onMouseLeave={e => handleHover(e.target.id, 'leave')} 
      onClick={e => handleClick(e.target.id)} 
      id={id} 
    />
  )
};

export default function App() {
  // activeRating tracks the number of filled and empty stars to be rendered
  const [activeRating, setActiveRating] = useState(0);
  
  // savedRating tracks the most recent rating the user has actually clicked/saved
  const [savedRating, setSavedRating] = useState(0);

  // called when the mouse enters or leaves a star
  const handleHover = (id, movement) => {
    /* When the mouse enters the star, activeRating is set to that star.
    Therefore, filled stars are rendered up to the star the mouse entered. */
    if (movement === 'enter') {
      setActiveRating(id);

    /* When the mouse leaves the star, activeRating is reset to the most recent 
    rating clicked by the user. */
    } else {
      setActiveRating(savedRating);
    }
  }

  // called when a star is clicked
  const handleClick = (id) => {
    // if the clicked star is identical to the saved rating, reset selected stars
    if (id === savedRating) {
      setSavedRating(0);

    // otherwise just change saved rating to the new star that was clicked
    } else {
      setSavedRating(id);
    }
  }

  return (
    <div className="App">
      <RatingSystem activeRating={activeRating} handleHover={handleHover} handleClick={handleClick} />
    </div>
  )
};
