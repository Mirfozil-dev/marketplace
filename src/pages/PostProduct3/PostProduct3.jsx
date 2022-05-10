import React from 'react';
import './PostProduct3.css';
import ManageProductsBtns from '../../components/ManageProductsBtns/ManageProductsBtns.jsx';
import PostingSteps from '../../components/PostingSteps/PostingSteps.jsx';
import newProductImg from '../../images/new_product_img.png';
import { NavLink } from 'react-router-dom';

function PostProduct3() {
  return (
    <div className="post_product3_page_wrapper w-100 h-100">
      <div className="post_product3_page">
        <ManageProductsBtns />
        <PostingSteps />
        <div className="display_new_product_card d-flex flex-column justify-content-between">
          <div>
            <h4>Your product information has been submitted.</h4>
            <h5>Your product is being checked and the result will be available in 24 hours.</h5>
            <p>You can optimize the existing products information on the Manage Products page to increase product
              exposure
              and help convert inquiries into orders.</p>
          </div>
          <div className="d-flex">
            <NavLink to="/seller/products">
              <button className="d-flex align-items-center justify-content-center">Back To Manage Products</button>
            </NavLink>
            <button className="d-flex align-items-center justify-content-center">Display a New Product</button>
          </div>
        </div>
        <div className="new_product_info">
          <h4>Product information</h4>
          <div className="new_product_info_card">
            <div className="new_product_info_card_header d-flex w-100 align-items-center">
              <div className="new_product_name">Product Name</div>
              <div className="new_product_price">Price</div>
              <div className="new_product_owner">Owner</div>
              <div className="new_product_updated">Last updated</div>
              <div className="new_product_status">Status</div>
              <div className="new_product_action">Action</div>
            </div>
            <div className="d-flex align-items-center new_product_info_card_body w-100">
              <div className="new_product_name d-flex align-items-center">
                <img src={newProductImg} alt="" />
                <p>New-Broccoli-Green-Quantity-
                  Box-Crop-KOSHER</p>
              </div>
              <div className="new_product_price">US $1.10 / Acre</div>
              <div className="new_product_owner">Ali Safarov</div>
              <div className="new_product_updated">31/01/2021</div>
              <div className="new_product_status">Approval Pending</div>
              <div className="new_product_action">
              </div>
            </div>
          </div>
        </div>
        <h5 className="attend_training_title">
          Attend Online Training to Learn How to Display High Quality Products and Get More Inquiries.
        </h5>
      </div>
    </div>
  );
}

export default PostProduct3;