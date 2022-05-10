import React from 'react';
import './CategoryCard.css';
import categoryIcon from '../../images/agriculture&food.png';

function CategoryCard({ className }) {
  return (
    <div className={className}>
      <div className="category_card w-100 h-100 d-flex align-items-center justify-content-around">
        <img src={categoryIcon} alt="" />
        <p className="text-center">Agriculture & Food</p>
      </div>
    </div>
  );
}

export default CategoryCard;