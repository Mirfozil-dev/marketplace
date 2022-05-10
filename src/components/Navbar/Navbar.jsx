import React from 'react';
import Logo from '../../images/Logo.png';
import './Navbar.css';
import CategorySelect from '../CategorySelect/CategorySelect.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import NavbarBtns from '../NavbarBtns/NavbarBtns.jsx';
import Header from '../Header/Header.jsx';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-100">
      <Header />
      <div className="nav w-100">
        <div className="row w-100 custom_container h-100 justify-content-between">
          <NavLink to="/home" className="logo_wrapper h-100 d-flex align-items-center">
            <img src={Logo} alt="" />
          </NavLink>
          <CategorySelect />
          <SearchBar />
          <NavbarBtns />
          {/* MobileMenu is hidden in Desktop, Tablet Devices */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;