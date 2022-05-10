import React from 'react';
import left from '../../images/left.png';
import './SignIn.css';
import { NavLink } from 'react-router-dom';

function SignIn(props) {
  return (
    <div className="sign_in_page_wrapper d-flex align-items-center">
      <div className="sign_in_page custom_container d-flex align-items-center">
        <div className="welcome_wrapper d-flex flex-column align-items-center justify-content-between">
          <h1 className="text-white">Welcome Back</h1>
          <img className="w-100" src={left} alt="" />
          <div className="d-flex flex-column align-items-center w-100 sign_up_lg">
            <h6 className="text-white">Not A Member? Sign Up Now</h6>
            <button className="sign_up_btn">
              <NavLink to="/sign-up">
                SIGN Up
              </NavLink>
            </button>
          </div>
        </div>
        <div className="sign_in_form_wrapper d-flex flex-column justify-content-between align-items-center">
          <h1 className="text-white">Enter Your Password & Email</h1>
          <form className="d-flex flex-column align-items-center" action="">
            <div className="sign_in_inputs_wrapper d-flex flex-column">
              <input className="w-100" type="text" placeholder="Email" />
              <input className="w-100" type="text" placeholder="Password" />
            </div>
          </form>
          <div className="w-100 d-flex flex-column align-items-center">
            <NavLink to="/forgot-password">
              <p className="text-white">Forgot Password?</p>
            </NavLink>
            <button className="sign_in_btn text-white bg-transparent">
              <NavLink to="/seller">
                Sign In
              </NavLink>
            </button>
          </div>
          <div className="d-flex flex-column align-items-center w-100 sign_up_sm">
            <h6 className="text-white">Not A Member? Sign Up Now</h6>
            <button className="sign_up_btn">
              <NavLink to="/sign-up">
                SIGN Up
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;