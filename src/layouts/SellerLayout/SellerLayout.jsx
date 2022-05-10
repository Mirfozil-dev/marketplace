import React from 'react';
import './SellerLayout.css';
import SellerNavbar from '../../components/SellerNavbar/SellerNavbar.jsx';

function SellerLayout({ children }) {
  return (
    <div className="d-flex cabinet_pages_wrapper">
      <SellerNavbar className="cabinet_navbar_wrapper" />
      {children}
    </div>
  );
}

export default SellerLayout;