import React from 'react';
import './NavbarBtns.css';
import uzbIcon from '../../images/uzbIcon.svg';
import rusIcon from '../../images/rusIcon.svg';
import engIcon from '../../images/engIcon.svg';
import { NavLink } from 'react-router-dom';

function selectOpen(e) {
  e.target.closest('.select__header').parentElement.querySelectorAll('.select__body')[0].classList.toggle('is-active');
  if (e.target.closest('.select__header').parentElement.querySelectorAll('.select__body')[0].classList.contains('is-active')) {
    e.target.closest('.select__header').parentElement.querySelectorAll('.select__icon_element')[0].classList.remove('fa-chevron-down');
    e.target.closest('.select__header').parentElement.querySelectorAll('.select__icon_element')[0].classList.add('fa-chevron-up');
  } else {
    e.target.closest('.select__header').parentElement.querySelectorAll('.select__icon_element')[0].classList.remove('fa-chevron-up');
    e.target.closest('.select__header').parentElement.querySelectorAll('.select__icon_element')[0].classList.add('fa-chevron-down');
  }
}

function selectItem(e) {
  let current = e.target.closest('.select').querySelectorAll('.select__current')[0];
  current.innerText = e.target.innerText;
  e.target.closest('.select__item').parentElement.classList.remove('is-active');
  let active = e.target.closest('.select__item').parentElement.querySelectorAll('.select__item_active');
  if (active.length > 0) {
    active[0].classList.remove('select__item_active');
  }
  e.target.closest('.select__item').classList.add('select__item_active');
}

function NavbarBtns() {
  return (
    <div className="btn_nav h-100 d-flex align-items-center justify-content-end">
      <div className="d-flex flex-column align-items-center mx-3 currency_lang">
        <div
          className="currency_lang_icon custom_icon d-flex justify-content-center align-items-center font-weight-bold">
          Ru/$
        </div>
        <p className="">Lang/Cur</p>
        <div className="currency_dropdown">
          <h6>Language</h6>
          <div className="select">
            <div className="select__header d-flex justify-content-between px-2" onClick={selectOpen}>
              <span className="select__current">English</span>
              <div className="select__icon float-right">
                <i className="fas fa-chevron-down select__icon_element" />
              </div>
            </div>
            <div className="select__body">
              <div className="select__item" onClick={selectItem}>
                <img src={uzbIcon} alt="" />
                Uzbek
              </div>
              <div className="select__item" onClick={selectItem}>
                <img src={rusIcon} alt="" />
                Russian
              </div>
              <div className="select__item select__item_active" onClick={selectItem}>
                <img src={engIcon} alt="" />
                English
              </div>
            </div>
          </div>
          <h6>Currency</h6>
          <div className="select">
            <div className="select__header d-flex justify-content-between px-2" onClick={selectOpen}>
              <span className="select__current">Sum</span>
              <div className="select__icon float-right">
                <i className="fas fa-chevron-down select__icon_element" />
              </div>
            </div>
            <div className="select__body">
              <div className="select__item" onClick={selectItem}>Dollar</div>
              <div className="select__item" onClick={selectItem}>Euro</div>
              <div className="select__item" onClick={selectItem}>Ruble</div>
              <div className="select__item select__item_active" onClick={selectItem}>Sum</div>
            </div>
          </div>
          <button className="float-right currency_submit mt-3">submit</button>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mx-3 sell_product">
        <div
          className="sell_product_icon custom_icon d-flex justify-content-center align-items-center font-weight-bold">
          Sell
        </div>
        <p>Sell Product</p>
      </div>
      <div className="d-flex flex-column align-items-center mx-3 sign_in">
        <div className="sign_in_icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="43.245" height="43.245" viewBox="0 0 43.245 43.245">
            <path id="user"
                  d="M23.373,3A20.373,20.373,0,1,0,43.745,23.373,20.38,20.38,0,0,0,23.373,3Zm0,6.112a6.112,6.112,0,1,1-6.112,6.112A6.1,6.1,0,0,1,23.373,9.112Zm0,28.929a14.669,14.669,0,0,1-12.224-6.56c.061-4.054,8.149-6.275,12.224-6.275,4.054,0,12.162,2.221,12.224,6.275A14.669,14.669,0,0,1,23.373,38.041Z"
                  transform="translate(-1.75 -1.75)" fill="none" stroke="#fff" strokeWidth="2.5" />
          </svg>
        </div>
        <p>Sign in</p>
        <div className="sign_in_dropdown d-flex flex-column align-items-center">
          <NavLink to="/sign-in">
            <button className="nav_sign_in_btn mb-1">Sign In</button>
          </NavLink>
          <h6>Your Account</h6>
          <p>Account</p>
          <p>Order</p>
          <p>Wishlist</p>
          <p>Switch Accounts</p>
          <p>Sign out</p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center ml-3 help">
        <div className="help_icon">
          <svg id="Icon_ionic-ios-help-circle-outline" data-name="Icon ionic-ios-help-circle-outline"
               xmlns="http://www.w3.org/2000/svg" width="43.463" height="43.463" viewBox="0 0 43.463 43.463">
            <path id="Path_5" data-name="Path 5"
                  d="M25.106,6.3a18.8,18.8,0,1,1-13.3,5.506A18.682,18.682,0,0,1,25.106,6.3m0-2.925A21.731,21.731,0,1,0,46.838,25.106,21.728,21.728,0,0,0,25.106,3.375Z"
                  transform="translate(-3.375 -3.375)" fill="#fff" />
            <path id="Path_6" data-name="Path 6"
                  d="M20.26,11.25c3.918,0,6.613,2.173,6.613,5.3a5.11,5.11,0,0,1-2.936,4.639c-1.818,1.055-2.434,1.828-2.434,3.166v.825H17.878l-.031-.9a4.349,4.349,0,0,1,2.466-4.6c1.766-1.055,2.507-1.724,2.507-3.019s-1.254-2.246-2.81-2.246a2.643,2.643,0,0,0-2.8,2.57H13.5C13.573,13.622,16.06,11.25,20.26,11.25ZM17.512,29.157a2.243,2.243,0,1,1,2.236,2.152A2.188,2.188,0,0,1,17.512,29.157Z"
                  transform="translate(1.545 0.451)" fill="#fff" />
          </svg>
        </div>
        <p>Help</p>
      </div>
    </div>
  );
}

export default NavbarBtns;