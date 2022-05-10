import React from 'react';
import pharma2 from '../../images/pharma2.png';
import pharma3 from '../../images/pharma3.png';
import pharma4 from '../../images/pharma4.png';
import pharma5 from '../../images/pharma5.png';
import './FullCard.css';

function FullCard({ className }) {
  return (
    <div className={className}>
      <div className="full_card w-100 d-flex flex-wrap">
        <h1 className="full_card_title">Medical, Safety & Protective Clothing and Apparel</h1>
        <div className="d-flex w-100">
          <div className="full_card_item1 d-flex align-items-end justify-content-end">
            <div className="full_card_item1_title w-100">
              <p>Pharma Raw material pharmaceutical chemical clinical trial services X-Ray Services</p>
            </div>
          </div>
          <div className="full_card_item2 d-flex flex-column justify-content-between">
            <div className="item2_item w-100 d-flex">
              <img src={pharma2} alt="" />
              <div>
                <h6>Face Mask</h6>
                <p>Towels</p>
                <p>Mouse</p>
                <p>Small Concrete</p>
                <p>Fish</p>
              </div>
            </div>
            <div className="item2_item w-100 d-flex">
              <img src={pharma3} alt="" />
              <div>
                <h6>Face Mask</h6>
                <p>Towels</p>
                <p>Mouse</p>
                <p>Small Concrete</p>
                <p>Fish</p>
              </div>
            </div>
          </div>
          <div className="full_card_item3 d-flex flex-column justify-content-between">
            <div className="item3_item w-100 d-flex">
              <img src={pharma4} alt="" />
              <div>
                <h6>Face Mask</h6>
                <p>Towels</p>
                <p>Mouse</p>
                <p>Small Concrete</p>
                <p>Fish</p>
              </div>
            </div>
            <div className="item3_item w-100 d-flex">
              <img src={pharma5} alt="" />
              <div>
                <h6>Face Mask</h6>
                <p>Towels</p>
                <p>Mouse</p>
                <p>Small Concrete</p>
                <p>Fish</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-end align-items-end">
          <button className="full_card_more_btn">More</button>
        </div>
      </div>
    </div>
  );
}

export default FullCard;