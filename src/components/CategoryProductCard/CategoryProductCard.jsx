import React from 'react';
import './CategoryProductCard.css';
import CategoryProductImg from '../../images/category_product.png';
import CartIcon from '../../images/cart_icon.svg';
import LikeIcon from '../../images/like_icon_outline.svg';

function CategoryProductCard({ className }) {
  return (
    <div className={className}>
      <div className="category_product_card h-100">
        <div className="category_product_card_img_wrapper d-flex flex-column align-items-center justify-content-center">
          <div
            className="category_product_card_img_buy w-100 d-flex align-items-center justify-content-center text-white font-weight-bold">
            Buy
          </div>
          <img className="category_product_card_img w-100" src={CategoryProductImg} alt="" />
        </div>
        <h6>Pink WSF</h6>
        <p>Viverra porta donec litora </p>
        <div className="d-flex justify-content-between category_product_card_nav">
          <p>﹩52.22</p>
          <div className="d-flex">
            <button>
              <img className="w-100 h-100" src={LikeIcon} alt="" />
            </button>
            <button>
              <img className="w-100 h-100" src={CartIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductCard;