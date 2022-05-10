import React from 'react';
import searchIcon from '../../images/search_icon.png';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search_wrapper h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="search d-flex justify-content-between align-items-center px-3">
        <input className="" type="text" placeholder="Enter product name" />
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}

export default SearchBar;