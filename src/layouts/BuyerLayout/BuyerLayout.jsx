import React from 'react';
import './BuyerLayout.css';
import BuyerNavbar from '../../components/BuyerNavbar/BuyerNavbar.jsx';

function BuyerLayout({ children }) {
  return (
    <div className="d-flex cabinet_pages_wrapper">
      <BuyerNavbar className="cabinet_navbar_wrapper" />
      {children}
    </div>
  );
}

export default BuyerLayout;