import React from 'react';
import './CollectionCard.css';
import CollectionCardImg from '../../images/collection_card_img.png';
import LongArrowRight from '../../images/long_arrow_right.svg';
import LikeIcon from '../../images/like_icon_outline.svg';

function CollectionCard({ className }) {
  return (
    <div className={className}>
      <div className="collection_card w-100 h-100 d-flex flex-column align-items-center">
        <img className="w-100 h-100 collection_card_img" src={CollectionCardImg} alt="" />
        <div className="collection_card_body d-flex flex-column justify-content-between">
          <div>
            <h6>New Collection</h6>
            <p>Colored Slide Sandals</p>
            <div className="collection_card_colors d-flex">
              <span style={{ background: '#CC0000' }} />
              <span style={{ background: '#AC7E00' }} />
              <span style={{ background: '#00B4CC' }} />
              <span style={{ background: '#5D5D5D' }} />
            </div>
            <div className="collection_card_sizes d-flex">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
          </div>
          <div className="collection_card_btns d-flex justify-content-between">
            <button className="collection_card_like_btn">
              <img className="w-100 h-100" src={LikeIcon} alt="" />
            </button>
            <button className="d-flex align-items-center collection_card_more_btn">
              More
              <img className="mt-1 ml-1" src={LongArrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;