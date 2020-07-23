import React from 'react';
import './ratingStars.css';

const Star = ({ starId, rating }) => {
    let styleClass = "star-rating-blank";
    if (starId!==rating ) {
      styleClass = "star-rating-filled";
    }
  
    return (
      <div
        className="star"
        
      >
        <svg
          height="11px"
          width="12px"
          class={styleClass}
          viewBox="0 0 25 23"
          data-rating="1"
        >
          <polygon
            stroke-width="0"
            points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          />
        </svg>
      </div>
    );
  };

  const StarRating = ({rating})=> {
      const stars=[1,2,3,4,5];
      return (
        <div class="flex-container">
        {stars.map((star, i) => (
          <Star
            key={i}
            starId={i===rating?i:rating}
            rating={i===rating?rating:i}
            
          />
        ))}
      </div>
      )
  }
  export default StarRating;