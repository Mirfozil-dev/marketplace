import React from 'react';
import './ManageProductsBtns.css';
import { NavLink } from 'react-router-dom';

function ManageProductsBtns({ className }) {
  return (
    <div className={className}>
      <div className="w-100 d-flex justify-content-end seller_products_nav">
        <NavLink activeClassName="active" to="/seller/products">
          <button className="w-100 h-100">
            Manage Products
          </button>
        </NavLink>
        <NavLink activeClassName="active" to="/seller/post-product">
          <button className="w-100 h-100">
            Post Products
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ManageProductsBtns;