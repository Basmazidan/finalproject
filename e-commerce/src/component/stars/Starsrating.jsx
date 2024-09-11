import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './Starsrating.css'

const RatingStars = ({ rating = 0 }) => {
    return (
      <div className="rating">
        <ReactStars
          count={5}
          value={rating}
          size={24}
          activeColor="#ffd700"
          edit={false}
          name='rating'      

        />
      </div>
    );
  };

export default RatingStars;
