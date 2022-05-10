import React from 'react';
import './SellerProducts.css';
import sellerProduct from '../../images/seller_product.png';
import trashIcon from '../../images/trashIcon.svg';
import editIcon from '../../images/editIcon.svg';
import moveIcon from '../../images/moveIcon.svg';
import ManageProductsBtns from '../../components/ManageProductsBtns/ManageProductsBtns.jsx';

function SellerProducts() {
  return (
    <div className="seller_products_page_wrapper w-100">
      <div className="seller_products_page w-100">
        <ManageProductsBtns className="w-100" />
        <div className="seller_products_table">
          <h4 className="seller_products_table_title">
            All Products
          </h4>
          <div className="seller_products_table_head d-flex w-100">
            <div className="seller_products_name">Product Name</div>
            <div className="seller_products_price">Price</div>
            <div className="seller_products_owner">Owner</div>
            <div className="seller_products_updated">Last updated</div>
            <div className="seller_products_level">Product Level</div>
            <div className="seller_products_status">Status</div>
            <div className="seller_products_action">Action</div>
          </div>
          <div className="seller_products_table_row d-flex align-items-center">
            <div className="seller_products_name d-flex align-items-center">
              <img src={sellerProduct} alt="" />
              <p>New-Broccoli-Green-Quantity-
                Box-Crop-KOSHER</p>
            </div>
            <div className="seller_products_price d-flex align-items-center">US $1.10 / Acre</div>
            <div className="seller_products_owner d-flex align-items-center">Ali Safarov</div>
            <div className="seller_products_updated d-flex align-items-center">31/01/2021</div>
            <div className="seller_products_level d-flex align-items-center">High-quality Posting</div>
            <div className="seller_products_status d-flex align-items-center">Approval Pending</div>
            <div className="seller_products_action d-flex align-items-center justify-content-between">
              <button>
                <img className="w-100 h-100" src={trashIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={editIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={moveIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="seller_products_table_row d-flex align-items-center">
            <div className="seller_products_name d-flex align-items-center">
              <img src={sellerProduct} alt="" />
              <p>New-Broccoli-Green-Quantity-
                Box-Crop-KOSHER</p>
            </div>
            <div className="seller_products_price d-flex align-items-center">US $1.10 / Acre</div>
            <div className="seller_products_owner d-flex align-items-center">Ali Safarov</div>
            <div className="seller_products_updated d-flex align-items-center">31/01/2021</div>
            <div className="seller_products_level d-flex align-items-center">High-quality Posting</div>
            <div className="seller_products_status d-flex align-items-center">Approval Pending</div>
            <div className="seller_products_action d-flex align-items-center justify-content-between">
              <button>
                <img className="w-100 h-100" src={trashIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={editIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={moveIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="seller_products_table_row d-flex align-items-center">
            <div className="seller_products_name d-flex align-items-center">
              <img src={sellerProduct} alt="" />
              <p>New-Broccoli-Green-Quantity-
                Box-Crop-KOSHER</p>
            </div>
            <div className="seller_products_price d-flex align-items-center">US $1.10 / Acre</div>
            <div className="seller_products_owner d-flex align-items-center">Ali Safarov</div>
            <div className="seller_products_updated d-flex align-items-center">31/01/2021</div>
            <div className="seller_products_level d-flex align-items-center">High-quality Posting</div>
            <div className="seller_products_status d-flex align-items-center">Approval Pending</div>
            <div className="seller_products_action d-flex align-items-center justify-content-between">
              <button>
                <img className="w-100 h-100" src={trashIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={editIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={moveIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="seller_products_table_row d-flex align-items-center">
            <div className="seller_products_name d-flex align-items-center">
              <img src={sellerProduct} alt="" />
              <p>New-Broccoli-Green-Quantity-
                Box-Crop-KOSHER</p>
            </div>
            <div className="seller_products_price d-flex align-items-center">US $1.10 / Acre</div>
            <div className="seller_products_owner d-flex align-items-center">Ali Safarov</div>
            <div className="seller_products_updated d-flex align-items-center">31/01/2021</div>
            <div className="seller_products_level d-flex align-items-center">High-quality Posting</div>
            <div className="seller_products_status d-flex align-items-center">Approval Pending</div>
            <div className="seller_products_action d-flex align-items-center justify-content-between">
              <button>
                <img className="w-100 h-100" src={trashIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={editIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={moveIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="seller_products_table_row d-flex align-items-center">
            <div className="seller_products_name d-flex align-items-center">
              <img src={sellerProduct} alt="" />
              <p>New-Broccoli-Green-Quantity-
                Box-Crop-KOSHER</p>
            </div>
            <div className="seller_products_price d-flex align-items-center">US $1.10 / Acre</div>
            <div className="seller_products_owner d-flex align-items-center">Ali Safarov</div>
            <div className="seller_products_updated d-flex align-items-center">31/01/2021</div>
            <div className="seller_products_level d-flex align-items-center">High-quality Posting</div>
            <div className="seller_products_status d-flex align-items-center">Approval Pending</div>
            <div className="seller_products_action d-flex align-items-center justify-content-between">
              <button>
                <img className="w-100 h-100" src={trashIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={editIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={moveIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="seller_products_table_row d-flex align-items-center">
            <div className="seller_products_name d-flex align-items-center">
              <img src={sellerProduct} alt="" />
              <p>New-Broccoli-Green-Quantity-
                Box-Crop-KOSHER</p>
            </div>
            <div className="seller_products_price d-flex align-items-center">US $1.10 / Acre</div>
            <div className="seller_products_owner d-flex align-items-center">Ali Safarov</div>
            <div className="seller_products_updated d-flex align-items-center">31/01/2021</div>
            <div className="seller_products_level d-flex align-items-center">High-quality Posting</div>
            <div className="seller_products_status d-flex align-items-center">Approval Pending</div>
            <div className="seller_products_action d-flex align-items-center justify-content-between">
              <button>
                <img className="w-100 h-100" src={trashIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={editIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={moveIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="seller_products_table_row d-flex align-items-center">
            <div className="seller_products_name d-flex align-items-center">
              <img src={sellerProduct} alt="" />
              <p>New-Broccoli-Green-Quantity-
                Box-Crop-KOSHER</p>
            </div>
            <div className="seller_products_price d-flex align-items-center">US $1.10 / Acre</div>
            <div className="seller_products_owner d-flex align-items-center">Ali Safarov</div>
            <div className="seller_products_updated d-flex align-items-center">31/01/2021</div>
            <div className="seller_products_level d-flex align-items-center">High-quality Posting</div>
            <div className="seller_products_status d-flex align-items-center">Approval Pending</div>
            <div className="seller_products_action d-flex align-items-center justify-content-between">
              <button>
                <img className="w-100 h-100" src={trashIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={editIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={moveIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="seller_products_table_row d-flex align-items-center">
            <div className="seller_products_name d-flex align-items-center">
              <img src={sellerProduct} alt="" />
              <p>New-Broccoli-Green-Quantity-
                Box-Crop-KOSHER</p>
            </div>
            <div className="seller_products_price d-flex align-items-center">US $1.10 / Acre</div>
            <div className="seller_products_owner d-flex align-items-center">Ali Safarov</div>
            <div className="seller_products_updated d-flex align-items-center">31/01/2021</div>
            <div className="seller_products_level d-flex align-items-center">High-quality Posting</div>
            <div className="seller_products_status d-flex align-items-center">Approval Pending</div>
            <div className="seller_products_action d-flex align-items-center justify-content-between">
              <button>
                <img className="w-100 h-100" src={trashIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={editIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={moveIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="seller_products_table_row d-flex align-items-center">
            <div className="seller_products_name d-flex align-items-center">
              <img src={sellerProduct} alt="" />
              <p>New-Broccoli-Green-Quantity-
                Box-Crop-KOSHER</p>
            </div>
            <div className="seller_products_price d-flex align-items-center">US $1.10 / Acre</div>
            <div className="seller_products_owner d-flex align-items-center">Ali Safarov</div>
            <div className="seller_products_updated d-flex align-items-center">31/01/2021</div>
            <div className="seller_products_level d-flex align-items-center">High-quality Posting</div>
            <div className="seller_products_status d-flex align-items-center">Approval Pending</div>
            <div className="seller_products_action d-flex align-items-center justify-content-between">
              <button>
                <img className="w-100 h-100" src={trashIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={editIcon} alt="" />
              </button>
              <button>
                <img className="w-100 h-100" src={moveIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerProducts;