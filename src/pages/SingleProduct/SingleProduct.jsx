import './SingleProduct.css';
import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.jsx';
import ProductImgs from '../../components/ProductImgs/ProductImgs.jsx';
import image from '../../images/product_img2.png';
import cart from '../../images/cart_icon.svg';
import tradeAssurance from '../../images/trade-assurance.png';
import visa from '../../images/visa.png';
import humo from '../../images/humo.png';
import uzcard from '../../images/uzcard.png';
import payme from '../../images/payme.png';
import highlightImg1 from '../../images/company_highlights1.png';
import highlightImg2 from '../../images/company_highlights2.png';
import highlightLogo from '../../images/company_highlights_logo.png';
import coat from '../../images/coat.png';
import Counter from '../../components/Counter/Counter.jsx';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard.jsx';

function SingleProduct() {
  return (
    <div className="single_product_page_wrapper">
      <div className="custom_container">
        <BreadCrumbs
          className="breadcrumbs_wrapper w-100"
          items={['All Categories', 'Apparel,Textiles & Accessories', 'Men’s Clothing', 'Men’s Coat']}
        />
        <div className="d-flex w-100 justify-content-between product_main_content_wrapper">
          <div className="w-25 product_imgs_wrapper">
            <ProductImgs />
            <div className="product_colors d-flex visible_sm">
              <p>Colors:</p>
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
            </div>

          </div>
          <div className="product_content">
            <p className="product_content_header">zm50247c Korean version style stand collar short coat thickening men
              short coat</p>
            <hr />
            <div className="product_content_title">
              <h4>Pink WSF</h4>
              <p>Keeps warm and makes love</p>
            </div>
            <div className="product_prices d-flex">
              <div className="product_prices_item">
                <p>1-5 pieces</p>
                <p>﹩5.22</p>
              </div>
              <div className="product_prices_item">
                <p>1-5 pieces</p>
                <p>﹩5.22</p>
              </div>
              <div className="product_prices_item">
                <p>1-5 pieces</p>
                <p>﹩5.22</p>
              </div>
            </div>
            <div className="product_colors d-flex visible_lg">
              <p>Colors:</p>
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
            </div>
            <div className="w-100 d-flex flex-wrap">
              <div className="product_sizes d-flex justify-content-between flex-wrap">
                <div>Size:</div>
                <div>
                  <div className="product_size_item d-flex align-items-center">
                    <b>S</b>
                    <p>﹩00.00</p>
                    <Counter />
                  </div>
                  <div className="product_size_item d-flex align-items-center">
                    <b>M</b>
                    <p>﹩00.00</p>
                    <Counter />
                  </div>
                  <div className="product_size_item d-flex align-items-center">
                    <b>L</b>
                    <p>﹩00.00</p>
                    <Counter />
                  </div>
                  <div className="product_size_item d-flex align-items-center">
                    <b>XL</b>
                    <p>﹩00.00</p>
                    <Counter />
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <button className="d-flex align-items-center view_more_options_btn">
                    View More Options
                    <i className="fas fa-chevron-down" />
                  </button>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center w-50 justify-content-center contact_supplier_btn_wrapper">
                <button className="contact_supplier_btn">Contact Supplier</button>
                <button className="product_page_wishlist_btn d-flex align-items-center justify-content-center">
                  <img src={cart} alt="" />
                  <p>Add to Wishlist</p>
                </button>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-between visible_lg">
              <div className="d-flex flex-column trade_assurance">
                <p>
                  <b>Customization: </b>
                  Customized logo (Min. Order: 1000 Pieces)
                </p>
                <p className="d-flex align-items-center">
                  <img src={tradeAssurance} alt="" />
                  Trade Assurance protects your Uzbekmart.com orders
                </p>
              </div>
              <div className="payment_options d-flex align-items-center flex-wrap">
                <p>Payments:</p>
                <div className="d-flex">
                  <img src={visa} alt="" />
                  <img src={humo} alt="" />
                  <img src={uzcard} alt="" />
                  <img src={payme} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-between visible_sm flex-wrap">
            <div className="d-flex flex-column trade_assurance">
              <p>
                <b>Customization: </b>
                Customized logo (Min. Order: 1000 Pieces)
              </p>
              <p className="d-flex align-items-center">
                <img src={tradeAssurance} alt="" />
                Trade Assurance protects your Uzbekmart.com orders
              </p>
            </div>
            <div className="payment_options d-flex align-items-center flex-wrap">
              <p>Payments:</p>
              <div className="d-flex">
                <img src={visa} alt="" />
                <img src={humo} alt="" />
                <img src={uzcard} alt="" />
                <img src={payme} alt="" />
              </div>
            </div>
          </div>
          <div className="company_highlights d-flex flex-column justify-content-between">
            <div className="company_highlights_header d-flex justify-content-between w-100 align-items-end">
              <h2>Company highlights</h2>
              <button className="view_company_profile d-flex align-items-center">
                View company profile
                <i className="fas fa-chevron-right" />
              </button>
            </div>
            <div className="company_highlights_content d-flex flex-wrap justify-content-between">
              <div>
                <img className="h-100 w-100" src={highlightImg1} alt="" />
              </div>
              <div>
                <img className="h-100 w-100" src={highlightImg2} alt="" />
              </div>
              <div>
                <img className="h-100 w-100" src={highlightImg2} alt="" />
              </div>
              <div>
                <img className="h-100 w-100" src={highlightImg1} alt="" />
              </div>
            </div>
            <div className="company_highlights_footer w-100">
              <div className="d-flex justify-content-between">
                <div className="company_highlights_footer_item">
                  <p>Employees</p>
                  <p>51-100</p>
                </div>
                <div className="company_highlights_footer_item">
                  <p>R&D staffs</p>
                  <p>5-10</p>
                </div>
                <div className="company_highlights_footer_item">
                  <p>Patents</p>
                  <p>-</p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="company_highlights_footer_item company_certification">
                  <div className="w-100">
                    <p>Certifications (2)</p>
                    <p>BSCI、Merlin SocialAudit Report2019</p>
                  </div>
                  <img src={highlightLogo} alt="" />
                </div>
                <div>
                  <button className="company_go_webstite_btn">Go Website</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 you_may_like">
        <div className="custom_container d-flex flex-wrap justify-content-between w-100">
          <div className="w-100">
            <h2>You May Also Like</h2>
          </div>
          <div className="recommendation_card_row d-flex w-100">
            <RecommendationCard className="recommendation_card_wrapper" />
            <RecommendationCard className="recommendation_card_wrapper" />
            <RecommendationCard className="recommendation_card_wrapper" />
            <RecommendationCard className="recommendation_card_wrapper" />
            <RecommendationCard className="recommendation_card_wrapper" />
            <RecommendationCard className="recommendation_card_wrapper" />
            <RecommendationCard className="recommendation_card_wrapper" />
          </div>
        </div>
      </div>
      <div className="custom_container">
        <div className="product_details_header">
          Product Details
        </div>
        <div className="product_details_content">
          <div className="d-flex product_details_nav">
            <a href={'#product_description'}>
              <div className="product_details_nav_item_bg" />
              Product Description
            </a>
            <a href={'#MostAskedQuestions'}>
              <div className="product_details_nav_item_bg" />
              FAQ
            </a>
          </div>
          <div className="product_overview">
            <p className="product_details_title">Overview</p>
            <br />
            <div className="product_overview_item d-flex w-100">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item d-flex">
              <p>Place of Origin:</p>
              <p>Guangdong, China</p>
            </div>
            <div className="product_overview_item_wrapper">
              <h3>Supply Ability</h3>
              <div className="product_overview_item d-flex">
                <p>Supply Ability:</p>
                <p>6000 Piece/Pieces per Month</p>
              </div>
            </div>
            <div className="product_overview_item_wrapper">
              <h3>Packaging & Delivery</h3>
              <div className="product_overview_item d-flex">
                <p>Packaging Details:</p>
                <p>one piece in one polybag, 30pieces in a standard carton box.
                  Packaging in accordance with customer’s requests.</p>
              </div>
              <div className="product_overview_item d-flex">
                <p>Port:</p>
                <p>Shenzhen / Guangzhou</p>
              </div>
            </div>
          </div>
          <br />
          <p className="product_details_title">High quality warm duck down Jacket winter coat fur hooded men coat </p>
          <div id="product_description" className="product_description">
            <div className="title_square_element">
              <h4>Product Description</h4>
              <span />
            </div>
            <div className="product_description_item d-flex">
              <p>Service:</p>
              <p>Welcome OEM/ODM service Patten, logo, brand design, fabirc…etc. all up to you!</p>
            </div>
            <div className="product_description_item d-flex">
              <p>Service:</p>
              <p>Welcome OEM/ODM service Patten, logo, brand design, fabirc…etc. all up to you!</p>
            </div>
            <div className="product_description_item d-flex">
              <p>Service:</p>
              <p>Welcome OEM/ODM service Patten, logo, brand design, fabirc…etc. all up to you!</p>
            </div>
            <div className="product_description_item d-flex">
              <p>Service:</p>
              <p>Welcome OEM/ODM service Patten, logo, brand design, fabirc…etc. all up to you!</p>
            </div>
            <div className="product_description_item d-flex">
              <p>Service:</p>
              <p>Welcome OEM/ODM service Patten, logo, brand design, fabirc…etc. all up to you!</p>
            </div>
            <div className="product_description_item d-flex">
              <p>Service:</p>
              <p>Welcome OEM/ODM service Patten, logo, brand design, fabirc…etc. all up to you!</p>
            </div>
            <div className="product_description_item d-flex">
              <p>Service:</p>
              <p>Welcome OEM/ODM service Patten, logo, brand design, fabirc…etc. all up to you!</p>
            </div>
          </div>
          <div className="little_about_us">
            <h3>Little About Us</h3>
            <p>We can produce the garments as your deisgns, drawings, artworks, samples etc. We can aslo supply with
              OEM/ODM SERVICE with your own labels for your brands. High Quality, Best Price, Excellent Service, Latest
              Designs are our advantage. Please feel free to contace us if any questions. Welcome to visit our factory
              anytime.</p>
          </div>
          <div className="product_images">
            <p className="product_details_title">Images</p>
            <img src={coat} alt="" />
            <img src={coat} alt="" />
            <img src={coat} alt="" />
            <img src={coat} alt="" />
          </div>
          <div id="faq" className="faq">
            <div className="title_square_element">
              <h4>Frequently Ask Question</h4>
              <span />
            </div>
            <ul>
              <li>
                About Products specification:
                <p>1). Model: OEM</p>
                <p>2). Minimum order quantity: 1 PC</p>
                <p>3). Material:Polyester, Cotton or Nylon material, any other material can be custom made.</p>
                <p>4). Length of chain: Free size(according to your size)</p>
              </li>
              <li>
                About price range:
                <p>It’s just a range, depends some things as the quantity, exchange rate, material price of the time
                  etc…About the latest price, send a inquiry to us please. We’ll try our best to reply this ASAP.</p>
              </li>
              <li>
                About package:
                <p>1 PC/OPP bag then 12PCS/bubble bag and then in a paper carton, but sometime it depends the quantity
                  and demand from customer.</p>
              </li>
              <li>
                About shipping:
                <p>Usually we ship the goods via DHL, UPS, FedEx, TNT. It is door to door service and shipping time is
                  within 4-6 days, also if you want shipping by sea, it is ok too.</p>
              </li>
              <li>
                About shipping fee:
                <p>If by direct freight express, the shipping cost will be depended on the weight of the order and the
                  location to which it is being shipped.</p>
              </li>
              <li>
                About delivery time:
                <p>Sample order: Within 4 to 7 workdays after receive the payment. Bulk order: Within 15 to 35 workdays
                  upon receipt of your payment.</p>
              </li>
              <li>
                About sample order:
                <p>We accept sample order. If we haven’t stock on your choosing design, we need extra sample fee and the
                  lead time of sample depends on your design.</p>
              </li>
              <li>
                About OEM&ODM:
                <p>1). We can do the product according your design.</p>
                <p> 2). We can design some styles according your idea, the design is free if you place the order
                  follow.</p>
              </li>
              <li>
                About after-sales service:
                <p>If any quality problems, please inform us and take photo after receiving the goods at the first time.
                  Then we can sincerely consider to improve our service.
                  Our staff will keep tracking the goods after shipment, we will tell you the further information by
                  email. Also for your more requirements about any item, please feel free to contact us! </p>
              </li>
            </ul>
          </div>
          <form className="supplier_form">
            <h3>Send your message to this supplier</h3>
            <div className="d-flex">
              <p className="supplier_form_title d-flex justify-content-end">To:</p>
              <p className="supplier_name">Jerry Kim</p>
            </div>
            <div className="d-flex">
              <p className="supplier_form_title d-flex justify-content-end">Message:</p>
              <textarea
                name=""
                id=""
                placeholder="Enter your enquiry details such as product name, color, size, MOQ, FOB, etc." />
            </div>
            <div className="d-flex">
              <p className="supplier_form_title" />
              <p className="textarea_caution">Your message must be between 20-8000 characters</p>

            </div>
            <div className="d-flex supplier_form_quantity">
              <p className="supplier_form_title">
                Quantity:
              </p>
              <input type="text" placeholder="100" />
              <input type="text" />
            </div>
            <div className="d-flex align-items-center supplier_from_agreements">
              <p className="supplier_form_title" />
              <input className="supplier_form_checkbox" type="checkbox" />
              <p className="supplier_from_agreements_title">Recommend matching suppliers if this supplier doesn’t
                contact me on Message Center within 24 hours.</p>
            </div>
            <div className="d-flex align-items-center supplier_from_agreements">
              <p className="supplier_form_title" />
              <input className="supplier_form_checkbox" type="checkbox" />
              <p>I agree to share my Business Card to the supplier.</p>
            </div>
            <div className="d-flex align-items-center supplier_from_agreements supplier_from_submit_wrapper">
              <p className="supplier_form_title" />
              <button type="submit" className="supplier_from_submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;