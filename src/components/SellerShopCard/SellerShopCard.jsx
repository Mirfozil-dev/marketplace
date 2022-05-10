import React from 'react';
import './SellerShopCard.css';
import CollectionCardImg from '../../images/collection_card_img.png';
import likeIcon from '../../images/like_icon_outline.svg';
import cartIcon from '../../images/cart_icon.svg';


function SellerShopCard({ className }) {
  return (
    <div className={className}>
      <div className="w-100 h-100 seller_shop_card">
        <img className="w-100 h-100" src={CollectionCardImg} alt="" />
        <div className="seller_shop_card_body">
          <h6>Pink WSF</h6>
          <p>Viverra porta donec litora </p>
          <div className="d-flex justify-content-between">
            <h5>$52.22</h5>
            <div className="d-flex">
              <button>
                <img src={likeIcon} alt="" />
              </button>
              <button>
                <img src={cartIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerShopCard;