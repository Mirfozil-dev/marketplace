import React from 'react';
import './BuyerNavbar.css';
import logo from '../../images/Logo.png';
import { NavLink } from 'react-router-dom';

function BuyerNavbar({ className }) {
  return (
    <div className={className}>
      <div className="cabinet_navbar">
        <div className="navigation_column d-flex flex-column align-items-center">
          <NavLink className="mr-auto" to="/buyer">
            <img className="navigation_column_logo" src={logo} alt="" />
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/buyer">
            <button className="navigation_column_btn w-100 d-flex align-items-center">
              <i className="fas fa-home fa-2x mr-auto" />
              <p>Home</p>
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/buyer/orders">
            <button className="navigation_column_btn w-100 d-flex align-items-center">
              <i className="fas fa-th-large fa-2x mr-auto" />
              <p>Products</p>
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/buyer/chat">
            <button className="navigation_column_btn w-100 d-flex align-items-center">
              <i className="fas fa-comment-alt fa-2x mr-auto" />
              <p>Communications</p>
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/buyer/help">
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
          <NavLink className="w-100 d-flex align-items-center" to="/buyer-home">
            <button className="navigation_row_btn justify-content-center w-100 d-flex align-items-center">
              <i className="fas fa-home fa-2x" />
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/buyer-orders">
            <button className="navigation_row_btn justify-content-center w-100 d-flex align-items-center">
              <i className="fas fa-th-large fa-2x" />
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/buyer-chat">
            <button className="navigation_row_btn justify-content-center w-100 d-flex align-items-center">
              <i className="fas fa-comment-alt fa-2x" />
            </button>
          </NavLink>
          <NavLink className="w-100 d-flex align-items-center" to="/help-manager">
            <button className="navigation_row_btn justify-content-center w-100 d-flex align-items-center">
              <i className="fas fa-headset fa-2x" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BuyerNavbar;