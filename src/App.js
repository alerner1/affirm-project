import React, { useState, useEffect } from 'react';
import EmptyStar from './assets/empty-star.svg';
import FilledStar from './assets/filled-star.svg';
import './styles.css';


const RatingSystem = ({activeRating, handleHover, handleClick}) => {
  
  const mapStars = () => {
    const starsArr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= activeRating) {
        starsArr.push(<Star filled={true} handleHover={handleHover} handleClick={handleClick} id={i} />);
      } else {
        starsArr.push(<Star filled={false} handleHover={handleHover} handleClick={handleClick} id={i} />);
      }
    }
    return starsArr;
  }

  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
      {mapStars()}
    </div>
  );
};

const Star = ({filled, handleHover, handleClick, id}) => {
  if (filled) {
    return <img src={FilledStar} onMouseEnter={e => handleHover(e.target.id, 'enter')} onMouseLeave={e => handleHover(e.target.id, 'leave')} onClick={e => handleClick(e.target.id)} id={id} alt="filled star" />
  } else {
    return <img src={EmptyStar} onMouseEnter={e => handleHover(e.target.id, 'enter')} onMouseLeave={e => handleHover(e.target.id, 'leave')} onClick={e => handleClick(e.target.id)} id={id} alt="empty star" />
  }
}

export default function App() {
  const [activeRating, setActiveRating] = useState(0);
  const [savedRating, setSavedRating] = useState(0);

  const handleHover = (id, movement) => {
    if (movement === 'enter') {
      setActiveRating(id)
    } else {
      setActiveRating(savedRating)
    }
  }

  const handleClick = (id) => {
    if (id === savedRating) {
      setSavedRating(0)
    } else {
      setSavedRating(id)
    }
  }

  return (
    <div className="App">
      <RatingSystem activeRating={activeRating} handleHover={handleHover} handleClick={handleClick} />
    </div>
  )
};
