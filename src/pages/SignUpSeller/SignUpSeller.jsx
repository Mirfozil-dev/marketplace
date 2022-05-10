import React from 'react';
import './SignUpSeller.css';
import signUpSellerWelcome from '../../images/signUpSeller.png';

function SignUpSeller() {
  // let [logo, setLogo] = useState('');
  //
  // let logoInput = document.querySelectorAll('label.sign_up_seller_input > input')[0];
  //
  // useEffect(() => {
  //   console.log(document.querySelectorAll('label.sign_up_seller_input > input')[0].value);
  // }, []);

  return (
    <div>
      <div className="custom_container sign_up_seller_content w-100 h-100 d-flex justify-content-between flex-wrap">
        <div className="sign_up_seller_welcome visible_md d-flex align-items-center">
          <img className="w-100" src={signUpSellerWelcome} alt="" />
          <div>
            <h1>Welcome to Uzbekmart</h1>
            <h3>First B2B platform in Uzbekistan</h3>
          </div>
        </div>
        <div className="sign_up_seller_form">
          <h3>Regestration For Seller</h3>
          <form action="">
            <input className="sign_up_seller_input w-100" placeholder="Company name" type="text" />
            <input className="sign_up_seller_input w-100" placeholder="Number" type="tel" />
            <input className="sign_up_seller_input w-100" placeholder="Email" type="email" />
            <label className="sign_up_seller_input d-flex align-items-center">
              Upload your logo
              <input className="sign_up_seller_input w-100" placeholder="Upload your logo" type="file" />
            </label>
            <div className="sign_up_seller_input d-flex align-items-center justify-content-between">
              <p>Choose category</p>
              <i className="fas fa-chevron-down" />
            </div>
            <textarea placeholder="Description about your company" className="sign_up_seller_textarea w-100" />
            <div className="d-flex justify-content-between sign_up_seller_form_footer">
              <div className="d-flex align-items-center">
                <input className="sign_up_seller_checkbox" type="checkbox" />
                <p className="ml-1">Remember</p>
              </div>
              <button className="seller_signup_btn">Sign Up</button>
            </div>
          </form>
        </div>
        <div className="sign_up_seller_welcome visible_lg d-flex align-items-center">
          <img className="w-100" src={signUpSellerWelcome} alt="" />
          <div>
            <h1>Welcome to Uzbekmart</h1>
            <h3>First B2B platform in Uzbekistan</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSeller;