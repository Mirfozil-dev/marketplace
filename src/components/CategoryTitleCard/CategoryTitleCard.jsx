import React from 'react';
import './CategoryTitleCard.css';
import categoryIcon from '../../images/agriculture&food.png';

function CategoryTitleCard({ className }) {
  return (
    <div className={className}>
      <div className="category_title_card w-100 h-100 d-flex justify-content-end">
        <div className="category_title_card_body h-100 d-flex justify-content-around align-items-center">
          <img src={categoryIcon} alt="" />
          <p>Agriculture & Food</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryTitleCard;