import React from 'react';
import image from '../../images/buyer_recommened_product.png';
import './BuyerRecommendedCard.css';
import likeIconWhite from '../../images/likeIconWhite.svg';
import cartIconWhite from '../../images/cartIconWhite.svg';

function BuyerRecommendedCard({ className }) {
  return (
    <div className={className}>
      <div className="buyer_recommended_card w-100 h-100">
        <img className="w-100 h-100" src={image} alt="" />
        <div className="buyer_recommended_card_footer w-100 d-flex justify-content-between">
          <div>
            <h5>Jacket</h5>
            <p>Viverra porta donec litora</p>
          </div>
          <div className="d-flex align-items-end">
            <p className="buyer_recommended_card_price">
              $52.22
            </p>
            <button className="d-flex justify-content-center align-items-center">
              <img className="w-100 h-100" src={likeIconWhite} alt="" />
            </button>
            <button className="d-flex justify-content-center align-items-center">
              <img className="w-100 h-100" src={cartIconWhite} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerRecommendedCard;