import React from 'react';
import EmptyStar from './assets/empty-star.svg';
import './styles.css';


const RatingSystem = () => {
  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
      <img src={EmptyStar} alt="empty star" />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <RatingSystem />
    </div>
  )
};
