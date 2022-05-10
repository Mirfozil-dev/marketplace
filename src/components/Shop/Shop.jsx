import React from 'react';
import './Shop.css';
import searchIcon from '../../images/search_icon.png';
import timerIcon from '../../images/timerIcon.svg';
import addressCardIcon from '../../images/addressCardIcon.svg';
import mainProductionIcon from '../../images/mainProductionIcon.svg';
import creditCardIcon from '../../images/creditCardIcon.svg';
import marketIcon from '../../images/marketsIcon.svg';
import locationIconBlack from '../../images/location_icon_black.svg';
import sellerShopAvatar from '../../images/seller_shop_avatar.png';
import CollectionCard from '../CollectionCard/CollectionCard.jsx';
import SellerShopCard from '../SellerShopCard/SellerShopCard.jsx';
import Footer from '../Footer/Footer.jsx';

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.classname}>
        <div style={{ background: `url("${this.props.data.headerBg}") no-repeat`, backgroundSize: 'cover' }}
             className="seller_shop_top_content w-100">
          <div className="seller_shop_black_tint w-100 h-100">
            <div className="seller_shop_navbar seller_shop_container d-flex align-items-center justify-content-between">
              <img src={this.props.data.logo} alt="" />
              <div className="d-flex">
                <div className="seller_shop_search_input d-flex align-items-center">
                  <input placeholder="Search Product" className="w-100" type="text" />
                  <img src={searchIcon} alt="" />
                </div>
                <div className="seller_shop_lang_select d-flex align-items-center">
                  <p>English</p>
                  <i className="fas fa-chevron-down" />
                </div>
              </div>
              <ul className="d-flex">
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Catalog PDF</li>
              </ul>
            </div>
            <div className="seller_shop_top_title w-100 d-flex flex-column align-items-center">
              <div className="seller_shop_container d-flex flex-column align-items-center">
                <h1>{this.props.data.headerTitle}</h1>
                <p className="text-center">{this.props.data.headerSubTitle}</p>
              </div>
            </div>
            <div className="d-flex justify-content-around seller_shop_container">
              {
                this.props.data.companyStars.map(item => {
                  return (
                    <div className="seller_shop_top_subtitle text-center text-white">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>

                  );
                })
              }
            </div>
            <div
              className="d-flex seller_shop_why_choose seller_shop_container justify-content-center align-items-center">
              <img src={this.props.data.whyChoose.image} alt="" />
              <div className="seller_shop_why_choose_paragraph text-white">
                <h3>Why Choose Us</h3>
                <p>{this.props.data.whyChoose.paragraph}</p>
                <button className="view_more_btn text-white">
                  View more
                  <i className="fas fa-chevron-down" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="seller_shop_products">
          <div className="seller_shop_products_by_category">
            <div className="d-flex justify-content-between align-items-end text-white seller_shop_container">
              <h3>Our Products</h3>
              <h1>MEN’S WEAR</h1>
            </div>
            <div className="d-flex w-100 seller_shop_container seller_shop_products_row">
              <CollectionCard className="seller_shop_collection_card" />
              <div className="d-flex flex-wrap justify-content-between seller_shop_product_cards">
                <SellerShopCard className="seller_shop_product_card" />
                <SellerShopCard className="seller_shop_product_card" />
                <SellerShopCard className="seller_shop_product_card" />
                <SellerShopCard className="seller_shop_product_card" />
              </div>
            </div>
          </div>
          <div className="seller_shop_products_by_category">
            <div className="d-flex justify-content-end align-items-end text-white seller_shop_container">
              <h1>WOMEN’S WEAR</h1>
            </div>
            <div className="d-flex w-100 seller_shop_container seller_shop_products_row">
              <CollectionCard className="seller_shop_collection_card" />
              <div className="d-flex flex-wrap justify-content-between seller_shop_product_cards">
                <SellerShopCard className="seller_shop_product_card" />
                <SellerShopCard className="seller_shop_product_card" />
                <SellerShopCard className="seller_shop_product_card" />
                <SellerShopCard className="seller_shop_product_card" />
              </div>
            </div>
          </div>
          <div className="seller_shop_products_by_category">
            <div className="d-flex justify-content-end align-items-end text-white seller_shop_container">
              <h1>BABY’S WEAR</h1>
            </div>
            <div className="d-flex w-100 seller_shop_container seller_shop_products_row">
              <CollectionCard className="seller_shop_collection_card" />
              <div className="d-flex flex-wrap justify-content-between seller_shop_product_cards">
                <SellerShopCard className="seller_shop_product_card" />
                <SellerShopCard className="seller_shop_product_card" />
                <SellerShopCard className="seller_shop_product_card" />
                <SellerShopCard className="seller_shop_product_card" />
              </div>
            </div>
          </div>
        </div>
        <div className="seller_shop_connect_supplier">
          <div className="seller_shop_container">
            <h2 className="text-white">Connect With Supplier</h2>
            <div className="seller_shop_connect_supplier_card w-100 d-flex justify-content-between align-items-center">
              <div className="seller_shop_send_quote h-100">
                <h4>Send Quote</h4>
                <input className="w-100 d-flex align-items-center" placeholder="What are you looking for…"
                       type="text" />
                <div className="d-flex justify-content-between">
                  <input className="seller_shop_send_quote_input_sm d-flex align-items-center" placeholder="Quantity"
                         type="text" />
                  <input className="seller_shop_send_quote_input_sm d-flex align-items-center"
                         placeholder="Piece/Pieces"
                         type="text" />
                </div>
              </div>
              <span className="seller_shop_divider" />
              <div className="seller_shop_send_message d-flex flex-column h-100">
                <h4>Send Message </h4>
                <p className="seller_shop_seller_name">
                  To:
                  <span>Ali Safarov</span>
                </p>
                <textarea className="w-100"
                          placeholder="Enter your inquiry details such as product name, color, size, etc " />
                <button type="submit">Send</button>
              </div>
              <span className="seller_shop_divider" />
              <div className="seller_shop_seller_avatar d-flex flex-column align-items-center">
                <img src={sellerShopAvatar} alt="" />
                <h6 className="text-center">Ali Safarov</h6>
                <p>Chat Now!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="seller_shop_about_us">
          <div className="seller_shop_container">
            <h2 className="text-white">About Us</h2>
            <div className="seller_shop_about_us_content w-100">
              <div
                className="seller_shop_about_black_tint w-100 h-100 text-white d-flex flex-column justify-content-between">
                <p>{this.props.data.aboutUs}</p>
                <div className="d-flex justify-content-between">
                  <div className="seller_shop_about_item d-flex align-items-center">
                    Founded in {this.props.data.foundedYear}
                  </div>
                  <div className="seller_shop_about_item d-flex align-items-center">
                    {this.props.data.employees} People
                  </div>
                  <div className="seller_shop_about_item d-flex align-items-center">
                    {this.props.data.responseRate} Quick Response Rate
                  </div>
                  <div className="seller_shop_about_item d-flex align-items-center">
                    {this.props.data.workplaceLength} square meters
                  </div>
                  <div className="seller_shop_about_item d-flex align-items-center">
                    {this.props.data.exhibition} exhibition
                  </div>
                </div>
              </div>
            </div>
            <div className="seller_shop_about_card_row d-flex flex-wrap justify-content-between">
              <div className="seller_shop_about_card d-flex align-items-center">
                <img src={locationIconBlack} alt="" />
                <p>
                  <b>Country / Region</b><br />
                  {this.props.data.country}
                </p>
              </div>
              <div className="seller_shop_about_card d-flex align-items-center">
                <img src={timerIcon} alt="" />
                <p>
                  <b>Year Established</b><br />
                  {this.props.data.establishedYear}
                </p>
              </div>
              <div className="seller_shop_about_card d-flex align-items-center">
                <img src={addressCardIcon} alt="" />
                <p>
                  <b>Business Type:</b><br />
                  {this.props.data.businessType}
                </p>
              </div>
              <div className="seller_shop_about_card d-flex align-items-center">
                <img src={mainProductionIcon} alt="" />
                <p>
                  <b>Main Production</b><br />
                  {this.props.data.production}
                </p>
              </div>
              <div className="seller_shop_about_card d-flex align-items-center">
                <img src={creditCardIcon} alt="" />
                <p>
                  <b>Accepted Payment</b><br />
                  {this.props.data.payments}
                </p>
              </div>
              <div className="seller_shop_about_card d-flex align-items-center">
                <img src={marketIcon} alt="" />
                <p>
                  <b>Main Markets</b><br />
                  {this.props.data.mainMarket}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="seller_shop_gallery">
          <div className="seller_shop_container">
            <h2 className="text-white m-0">Gallery</h2>
            <div className="d-flex w-100">
              <div className="seller_shop_gallery_col">
                <div className="seller_shop_gallery_col1_img1 w-100">
                </div>
                <div className="d-flex justify-content-between">
                  <div className="seller_shop_gallery_col1_img2">
                  </div>
                  <div className="seller_shop_gallery_col1_img3">
                  </div>
                </div>
              </div>
              <div className="seller_shop_gallery_col">
                <div className="seller_shop_gallery_col2_img1 w-100">
                </div>
                <div className="seller_shop_gallery_col2_img2 w-100">
                </div>
              </div>
              <div className="seller_shop_gallery_col">
                <div className="seller_shop_gallery_col3_img1 w-100">
                </div>
                <div className="seller_shop_gallery_col3_img2 w-100">
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default Shop;