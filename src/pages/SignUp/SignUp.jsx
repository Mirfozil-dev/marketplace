import React from 'react';
import SignUpImg from '../../images/sign_up_img.png';
import './SignUp.css';
import { NavLink } from 'react-router-dom';

function SignUp() {
  return (
    <div className="sign_up_page_wrapper d-flex align-items-center">
      <div className="sign_up_page custom_container d-flex justify-content-between">
        <div className="sign_up_welcome visible_sm d-flex flex-column align-items-center justify-content-between">
          <h1>
            Welcome To Uzbekmart
          </h1>
          <img src={SignUpImg} alt="" />
        </div>
        <div className="sign_up_form_wrapper">
          <h1>
            Create Account
          </h1>
          <form className="w-100" action="">
            <input className="w-100" type="text" placeholder="Name" />
            <input className="w-100" type="text" placeholder="Email" />
            <input className="w-100" type="text" placeholder="Email" />
            <input className="w-100" type="text" placeholder="Password" />
            <input className="w-100" type="text" placeholder="Re-Enter Password" />
            <button className="w-100">
              <NavLink to="/seller">
                Create Your Account
              </NavLink>
            </button>
            <p className="text-white text-center">
              By creating an account, you agree to Uzbekmart’s Conditions of Use and Privacy Notice.
            </p>
          </form>
        </div>
        <div className="visible_sm w-100 d-flex flex-column align-items-center">
          <p className="text-white mb-2">
            Already Sign Up?
          </p>
          <button className="sign_up_welcome_btn">SIGN In</button>
        </div>
        <div className="sign_up_welcome visible_lg d-flex flex-column align-items-center justify-content-between">
          <h1>
            Welcome To Uzbekmart
          </h1>
          <img src={SignUpImg} alt="" />
          <div className="w-100 d-flex flex-column align-items-center">
            <p className="text-white mb-2">
              Already Sign Up?
            </p>
            <button className="sign_up_welcome_btn">
              <NavLink to="/sign-in">
                SIGN In
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;