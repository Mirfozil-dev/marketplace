import React from 'react';
import menuIcon from '../../images/menu_icon.svg';
import searchIcon from '../../images/mobileSearchIcon.svg';
import './MobileMenu.css';

function mobileMenuOpen(e) {
  e.target.closest('.mobile_menu_btn').parentElement.querySelectorAll('.mobile_menu')[0].classList.add('menu_active');
}

function mobileMenuClose(e) {
  e.target.closest('.close_menu_btn').parentElement.parentElement.classList.remove('menu_active');
}

function MobileMenu() {
  return (
    <div className="mobile_menu_btn_wrapper d-flex justify-content-end">
      <button className="mobile_menu_btn" onClick={mobileMenuOpen}>
        <img className="w-100" src={menuIcon} alt="" />
      </button>
      <div className="mobile_menu">
        <div className="mobile_menu_header d-flex align-items-center justify-content-between">
          <div className="mobile_search_input d-flex align-items-center">
            <input placeholder="Search" className="w-100" type="text" />
            <img src={searchIcon} alt="" />
          </div>
          <button className="close_menu_btn" onClick={mobileMenuClose}>
            <i className="fas fa-times" />
          </button>
        </div>
        <p className="mobile_search_link">
          Language & Currency
        </p>
        <p className="mobile_search_link">
          Sell Product
        </p>
        <p className="mobile_search_link">
          Sign In
        </p>
        <p className="mobile_search_link">
          Help
        </p>
      </div>
    </div>
  );
}

export default MobileMenu;