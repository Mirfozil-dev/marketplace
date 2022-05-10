import React from 'react';
import logo from '../../images/Logo.png';
import './Footer.css';

function Footer({ className }) {
  return (
    <div className={className}>
      <div className="footer_wrapper">
        <div className="custom_container d-flex justify-content-between h-100 flex-wrap">
          <div className="company_info">
            <img src={logo} alt="" />
            <p className="text-white">
              The first in Uzbekistan online showroom of the Association of Exporters of Uzbekistan
            </p>
          </div>
          <div className="pages text-white">
            <h5>Pages</h5>
            <p className="text-white">
              FAQ
            </p>
          </div>
          <div className="contacts text-white ">
            <h5>Contacts</h5>
            <div className="d-flex flex-column justify-content-between contacts_data">
              <div className="d-flex align-items-center justify-content-between w-100">
                <i className="fas fa-map-marker-alt fa-2x" />
                <p>Address:8A Korakamish Str., Almazar <br /> region, Tashkent city, Uzbekistan</p>
              </div>
              <div className="d-flex align-items-center justify-content-between w-100">
                <i className="fas fa-phone-alt fa-2x" />
                <p>Phone: +99895 145 45 02</p>
              </div>
              <div className="d-flex align-items-center justify-content-between w-100">
                <i className="fas fa-envelope fa-2x" />
                <p>E-mail: info@uzbekmart.com</p>
              </div>
            </div>
          </div>
          <div className="subscribe_news text-white">
            <h5>
              SUBSCRIBE FOR NEWS
            </h5>
            <p>
              Subscribe to our newsletters now and stay up-to-date with new collections
            </p>
            <div className="subscribe_input d-flex align-items-center justify-content-between">
              <input type="text" placeholder="Email" />
              <button className="text-white">Subscribe</button>
            </div>
          </div>
          <div className="w-100 copyrights">
            <p className="text-center text-white">© Copyright 2021. All rights are reserved. Powered by MBM It
              Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;