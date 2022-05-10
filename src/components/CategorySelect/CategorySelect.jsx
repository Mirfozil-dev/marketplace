import React from 'react';
import './CategorySelect.css';
import plastic from '../../images/plastic.png';
import allCategoriesIcon from '../../images/allCategoriesIcon.svg';
import { NavLink } from 'react-router-dom';

function CategorySelect() {
  return (
    <div className="category_select d-flex justify-content-center align-items-center h-100 text-white">
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <p>
          Category
        </p>
        <i className="fas fa-chevron-down ml-2 mt-2 dropdown_icon" />
        <span className="w-100 category_underline mt-2" />
      </div>
      <div className="category_dropdown px-4 py-3">
        <div className="category_select_item d-flex w-100 align-items-center mb-3">
          <div className="w-25 d-flex">
            <img src={plastic} alt="" />
          </div>
          <div className="w-75 d-flex align-items-center justify-content-end">
            <NavLink to="/category">
              <p>Rubber & Plastics</p>
            </NavLink>
            <i className="fas fa-chevron-right mt-1 ml-2" />
          </div>
          <div className="select_subcategories d-flex justify-content-around">
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
          </div>
        </div>
        <div className="category_select_item d-flex w-100 align-items-center mb-3">
          <div className="w-25 d-flex">
            <img src={plastic} alt="" />
          </div>
          <div className="w-75 d-flex align-items-center justify-content-end">
            <NavLink to="/category">
              <p>Rubber & Plastics</p>
            </NavLink>
            <i className="fas fa-chevron-right mt-1 ml-2" />
          </div>
          <div className="select_subcategories d-flex justify-content-around">
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
          </div>
        </div>
        <div className="category_select_item d-flex w-100 align-items-center mb-3">
          <div className="w-25 d-flex">
            <img src={plastic} alt="" />
          </div>
          <div className="w-75 d-flex align-items-center justify-content-end">
            <NavLink to="/category">
              <p>Rubber & Plastics</p>
            </NavLink>
            <i className="fas fa-chevron-right mt-1 ml-2" />
          </div>
          <div className="select_subcategories d-flex justify-content-around">
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
          </div>
        </div>
        <div className="category_select_item d-flex w-100 align-items-center mb-3">
          <div className="w-25 d-flex">
            <img src={plastic} alt="" />
          </div>
          <div className="w-75 d-flex align-items-center justify-content-end">
            <NavLink to="/category">
              <p>Rubber & Plastics</p>
            </NavLink>
            <i className="fas fa-chevron-right mt-1 ml-2" />
          </div>
          <div className="select_subcategories d-flex justify-content-around">
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
          </div>
        </div>
        <div className="category_select_item d-flex w-100 align-items-center mb-3">
          <div className="w-25 d-flex">
            <img src={plastic} alt="" />
          </div>
          <div className="w-75 d-flex align-items-center justify-content-end">
            <NavLink to="/category">
              <p>Rubber & Plastics</p>
            </NavLink>
            <i className="fas fa-chevron-right mt-1 ml-2" />
          </div>
          <div className="select_subcategories d-flex justify-content-around">
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
          </div>
        </div>
        <div className="category_select_item d-flex w-100 align-items-center mb-3">
          <div className="w-25 d-flex">
            <img src={plastic} alt="" />
          </div>
          <div className="w-75 d-flex align-items-center justify-content-end">
            <NavLink to="/category">
              <p>Rubber & Plastics</p>
            </NavLink>
            <i className="fas fa-chevron-right mt-1 ml-2" />
          </div>
          <div className="select_subcategories d-flex justify-content-around">
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
          </div>
        </div>
        <div className="category_select_item d-flex w-100 align-items-center mb-3">
          <div className="w-25 d-flex">
            <img src={plastic} alt="" />
          </div>
          <div className="w-75 d-flex align-items-center justify-content-end">
            <NavLink to="/category">
              <p>Rubber & Plastics</p>
            </NavLink>
            <i className="fas fa-chevron-right mt-1 ml-2" />
          </div>
          <div className="select_subcategories d-flex justify-content-around">
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
            <div>
              <h6>Rubbers</h6>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
              <NavLink to="/sub-category"><p>Plastic Products</p></NavLink>
            </div>
          </div>
        </div>
        <div className="category_select_item d-flex w-100 align-items-center mb-3">
          <div className="w-25 d-flex">
            <img src={allCategoriesIcon} alt="" />
          </div>
          <div className="w-75 d-flex align-items-center justify-content-end">
            <NavLink to="/all-categories">
              <p>All Categories</p>
            </NavLink>
            <i className="fas fa-chevron-right mt-1 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySelect;