import React from 'react';
import './PostProduct2.css';
import ManageProductsBtns from '../../components/ManageProductsBtns/ManageProductsBtns.jsx';
import PostingSteps from '../../components/PostingSteps/PostingSteps.jsx';
import imgIcon from '../../images/img_icon.svg';
import videoIcon from '../../images/video_icon.svg';
import laptopIcon from '../../images/laptop_icon.svg';
import phoneIcon from '../../images/smartphone_icon.svg';
import ProductImgs from '../../components/ProductImgs/ProductImgs.jsx';
import { NavLink } from 'react-router-dom';

function PostProduct2() {

  function unitSelectToggle() {
    let unitSelectDropdown = document.querySelectorAll('.product_unit_dropdown')[0];
    unitSelectDropdown.classList.toggle('active');
  }

  function unitSelectClose() {
    let unitSelectDropdown = document.querySelectorAll('.product_unit_dropdown')[0];
    unitSelectDropdown.classList.remove('active');
  }

  function selectUnit(e) {
    let unitItem = e.target;
    let unitSelectHeader = document.querySelectorAll('.product_unit_select_placeholder')[0];

    unitSelectHeader.innerHTML = unitItem.innerHTML;
    unitSelectHeader.classList.add('text-dark');
    unitSelectClose();
  }
  return (
    <div className="post_product2_page_wrapper w-100 h-100">
      <div className="post_product2_page w-100 h-100">
        <ManageProductsBtns className="w-100 manage_product_btns_wrapper" />
        <PostingSteps />
        <p className="post_product2_selected_categories">
          Categories Selected: Agriculture>>Fresh Vegetables>>Fresh Broccoli
        </p>
        <p className="basic_info">
          <b>Basic Information: </b>
          Smart recommendations will appear beneath the text box for you to copy and paste manually. Auto-fill
          suggestions will appear within the text box, and the text box’s title will be write in bold text until you
          edit that box.Auto-filled information will be displayed in bold until you modify the text.
        </p>
        <form action="">
          <div className="d-flex post_product2_product_name">
            <p className="mt-2 product_form_input_title">Product name</p>
            <div className="product_name_input_wrapper">
              <input className="w-100" type="text" />
              <div className="d-flex our_suggestions">
                <span className="d-flex align-items-center justify-content-center">Our Suggestions</span>
                <p>New Broccoli Green Quantity Box Crop KOSHER Bulk Style Food Organic GAP Plastic Color Package Feature
                  Container Weight Natural</p>
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="d-flex post_product2_product_description flex-wrap">
            <p className="product_form_input_title">Product Description</p>
            <textarea name="" id="" cols="30" rows="10" />
            <div className="w-100 product_description_card bg-white">
              Product description
            </div>
          </div>
          <div className="d-flex post_product2_product_img">
            <p className="product_form_input_title">Product Photo</p>
            <div className="browse_product_img">
              <label for="product_img" className="d-flex align-items-center justify-content-center">
                Browse
                <input id="product_img" type="file" />
              </label>
              <p>
                Image file size should be less than 5MB. Supported formats: .jpeg .jpg .png Recommended image size is
                more than 640px * 640px. Images should be clear and easy for buyers to view at a glance.
              </p>
              <div className="product_imgs_row w-100 d-flex">
                <div className="product_file_card d-flex align-items-center justify-content-center">
                  <span className="text-center">Main</span>
                  <img src={imgIcon} alt="" />
                </div>
                <div className="product_file_card d-flex align-items-center justify-content-center">
                  <img src={imgIcon} alt="" />
                </div>
                <div className="product_file_card d-flex align-items-center justify-content-center">
                  <img src={imgIcon} alt="" />
                </div>
                <div className="product_file_card d-flex align-items-center justify-content-center">
                  <img src={imgIcon} alt="" />
                </div>
                <div className="product_file_card d-flex align-items-center justify-content-center">
                  <img src={imgIcon} alt="" />
                </div>
                <div className="product_file_card d-flex align-items-center justify-content-center">
                  <img src={imgIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex post_product2_product_video">
            <p className="product_form_input_title">Main picture video</p>
            <div className="product_form_video">
              <p>•The video length cannot exceed 45 seconds, and the video file size cannot exceed 100MB. The video will
                be displayed in the first position of the image carousel
                •The detail video length cannot exceed 10 minutes, and the video file size cannot exceed 500MB. The
                detail
                video will be displayed at the top of the product description
                3、Click the picture right below to add the visualization customization for your product; the
                visualization
                customization will be shown in the main picture.</p>
              <div className="d-flex">
                <div className="video_card_wrapper">
                  <p className="w-100">Select Main Picture Video</p>
                  <div className="product_file_card d-flex align-items-center justify-content-center">
                    <span className="text-center">Main</span>
                    <img src={videoIcon} alt="" />
                  </div>
                </div>
                <div className="video_card_wrapper">
                  <p className="w-100">Choose Detailed Video</p>
                  <div className="product_file_card d-flex align-items-center justify-content-center">
                    <img src={videoIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex product_form_detail">
            <p className="product_form_input_title">Product Detail</p>
            <p>Smart Editing upgrade to the new version ,view Tutorial andFAQ. <br />
              New version support wireless independent decoration and wireless link jump, improve the flow
              utilization.The marketing module assist in self-marketing. <br />
              For the best visual effects, we recommend keeping the image within 750px(width)*800px(height) and table
              width within 750px. (The exceeding width 750px will not be visible.)</p>
          </div>
          <div className="post_product2_product_preview d-flex">
            <p className="product_form_input_title">Preview</p>
            <div>
              <div className="d-flex">
                <button>
                  <img src={laptopIcon} alt="" />
                </button>
                <button>
                  <img src={phoneIcon} alt="" />
                </button>
              </div>
              <div className="d-flex">
                <ProductImgs className="post_product2_product_imgs" />
                <div className="product_info_preview">
                  <h5>Pink WSF</h5>
                  <p>Viverra porta donec litora </p>
                  <h6>$52.22</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="trade_information d-flex w-100 align-items-center">
            <h6>Trade Information</h6>
            <p>Complete trade information helps buyers make better sourcing decisions.Auto-filled information will be
              displayed in bold until you modify the text.</p>
          </div>
          <div className="w-100 d-flex post_product2_product_price">
            <p className="product_form_input_title">Price Setting</p>

            <div className="custom-control m-0 custom-radio custom-control-inline">
              <input type="radio" id="price_type1" name="price_type" className="custom-control-input" />
              <label className="custom-control-label" htmlFor="price_type1">Set uniform price of FOB</label>
            </div>
            <div className="custom-control m-0 custom-radio custom-control-inline">
              <input type="radio" id="price_type2" name="price_type" className="custom-control-input" />
              <label className="custom-control-label" htmlFor="price_type2">Set one FOB price</label>
            </div>
          </div>
          <div className="w-100 d-flex post_product2_product_unit">
            <p className="product_form_input_title">Unit</p>
            <div className="product_unit_select d-flex justify-content-between align-items-center">
              <div onClick={unitSelectToggle}
                   className="product_unit_select_header d-flex w-100 justify-content-between align-items-center">
                <p className="product_unit_select_placeholder">Piece/Pieces</p>
                <i className="fas fa-chevron-down" />
              </div>
              <div className="product_unit_dropdown">
                <p onClick={(e) => selectUnit(e)}>Acre/Acres</p>
                <p onClick={(e) => selectUnit(e)}>Ampere/Amperes</p>
                <p onClick={(e) => selectUnit(e)}>Bag/Bags</p>
                <p onClick={(e) => selectUnit(e)}>Barrel/Barrels</p>
                <p onClick={(e) => selectUnit(e)}>Blade/Blades</p>
                <p onClick={(e) => selectUnit(e)}>Box/Boxes</p>
                <p onClick={(e) => selectUnit(e)}>Bushel/Bushels</p>
                <p onClick={(e) => selectUnit(e)}>Carat/Carats</p>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex post_product2_quantity">
            <p className="product_form_input_title">Quantity Price</p>
            <div className="quantity_price_card_wrapper">
              <div className="quantity_price_card w-100 d-flex justify-content-between">
                <div className="quantity_price_moq">
                  <div className="d-flex align-items-end">
                    <h4>MOQ</h4>
                    <p>(Unit)</p>
                  </div>
                  <div className="quantity_price_input_wrapper">
                    <input className="d-flex align-items-center" type="number" />
                  </div>
                </div>
                <div className="quantity_price_fop d-flex flex-column align-items-center">
                  <div className="d-flex align-items-end">
                    <h4>FOB Price</h4>
                    <p>(Unit)</p>
                  </div>
                  <div className="d-flex quantity_price_input_wrapper align-items-center">
                    <h5>US $</h5>
                    <input className="d-flex align-items-center" type="number" />
                  </div>
                </div>
                <div className="quantity_price_preview d-flex flex-column align-items-center justify-content-between">
                  <div className="d-flex align-items-end">
                    <h4>Preview</h4>
                    <p>(Unit: Unit)</p>
                  </div>
                  <div>
                    <div className="d-flex quantity_price_preview_item">
                      <h5>
                        <i className="fas fa-greater-than-equal" />
                      </h5>
                      <h5>10000</h5>
                    </div>
                    <div className="d-flex quantity_price_preview_item">
                      <h5>US $</h5>
                      <h5>1.1</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="payment_option_item d-flex">
                  <input type="checkbox" />
                  <h5>L/C</h5>
                </div>
                <div className="payment_option_item d-flex">
                  <input type="checkbox" />
                  <h5>Western Union</h5>
                </div>
                <div className="payment_option_item d-flex">
                  <input type="checkbox" />
                  <h5>T/T</h5>
                </div>
                <div className="payment_option_item d-flex">
                  <input type="checkbox" />
                  <h5>MoneyGram</h5>
                </div>
                <div className="payment_option_item d-flex">
                  <input type="checkbox" />
                  <h5>D/A</h5>
                </div>
              </div>
              <div className="payment_option_add d-flex align-items-center">
                <input type="text" />
                <button>
                  <p>Add</p>
                </button>
              </div>
              <label className="shipping_service_upload">
                Upload Shipping Service as PDF
                <input type="file" />
              </label>
            </div>
          </div>
          <div className="w-100 d-flex post_product2_product_agreement align-items-center">
            <h6>Agreement</h6>
            <input type="checkbox" />
            <p>Please double check and confirm your submitted information does not violate any and all listing related
              policies before submission.You can edit this product once it has been posted online or returned.</p>
          </div>
          <div className="d-flex post_product2_product_submit d-flex">
            <button>Save</button>
            <NavLink to="/seller/post-product/step-3">
              <button>Submit</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostProduct2;