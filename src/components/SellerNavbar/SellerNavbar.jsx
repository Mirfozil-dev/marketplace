import React from 'react';
import './SellerNavbar.css';
import logo from '../../images/Logo.png';
import { NavLink } from 'react-router-dom';

function SellerNavbar({ className }) {
  return (
    <div className={className}>
      <div className="seller_cabinet_navbar">
        <div className="navigation_column d-flex flex-column align-items-center">
          <NavLink className="mr-auto navigation_column_logo" to="/seller">
            <img className="w-100 h-100" src={logo} alt="" />
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/seller">
            <button className="navigation_column_btn w-100 d-flex align-items-center">
              <i className="fas fa-home fa-2x mr-auto" />
              <p>Home</p>
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/shop">
            <button className="navigation_column_btn w-100 d-flex align-items-center">
              <i className="fas fa-store fa-2x mr-auto" />
              <p>Shop</p>
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/products">
            <button className="navigation_column_btn w-100 d-flex align-items-center">
              <i className="fas fa-th-large fa-2x mr-auto" />
              <p>Products</p>
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/chat">
            <button className="navigation_column_btn w-100 d-flex align-items-center">
              <i className="fas fa-comment-alt fa-2x mr-auto" />
              <p>Communications</p>
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/analytics">
            <button className="navigation_column_btn w-100 d-flex align-items-center">
              <i className="fas fa-chart-pie fa-2x mr-auto" />
              <p>Analytics</p>
            </button>
          </NavLink>
          <button className="navigation_column_btn w-100 d-flex align-items-center">
            <i className="fas fa-user-friends fa-2x mr-auto" />
            <p>Contacts</p>
          </button>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/help">
            <button className="navigation_column_btn w-100 d-flex align-items-center">
              <i className="fas fa-headset fa-2x mr-auto" />
              <p>Help Center</p>
            </button>
          </NavLink>
          <button className="navigation_column_more_btn w-100 d-flex align-items-center">
            <i className="fas fa-ellipsis-h fa-2x mr-auto" />
          </button>
        </div>
        <div className="navigation_row d-flex align-items-center justify-content-center">
          <NavLink className="w-100 d-flex align-items-center" to="/seller">
            <button className="navigation_row_btn w-100 d-flex align-items-center">
              <i className="fas fa-home fa-2x mr-auto" />
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/shop">
            <button className="navigation_row_btn w-100 d-flex align-items-center">
              <i className="fas fa-store fa-2x mr-auto" />
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/products">
            <button className="navigation_row_btn w-100 d-flex align-items-center">
              <i className="fas fa-th-large fa-2x mr-auto" />
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/chat">
            <button className="navigation_row_btn w-100 d-flex align-items-center">
              <i className="fas fa-comment-alt fa-2x mr-auto" />
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/analytics">
            <button className="navigation_row_btn w-100 d-flex align-items-center">
              <i className="fas fa-chart-pie fa-2x mr-auto" />
            </button>
          </NavLink>
          <button className="navigation_row_btn w-100 d-flex align-items-center">
            <i className="fas fa-user-friends fa-2x mr-auto" />
          </button>
          <NavLink className="w-100 d-flex align-items-center" to="/seller/help">
            <button className="navigation_row_btn w-100 d-flex align-items-center">
              <i className="fas fa-headset fa-2x mr-auto" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SellerNavbar;