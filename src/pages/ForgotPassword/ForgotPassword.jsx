import React from 'react';
import './ForgotPassword.css';
import { NavLink } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="forgot_password_page_wrapper d-flex align-items-center">
      <div className="forgot_password_page custom_container d-flex flex-column justify-content-between">
        <div>
          <h1 className="text-white font-weight-bold">Forgot Password?</h1>
          <p className="text-white">
            Enter the email address you used when you joined and we will send you instructions to reset your password.
            For security reasons, we do NOT store your password. So rest assured that we will never send your password
            via
            email.
          </p>
        </div>
        <div className="d-flex flex-column w-100">
          <h2 className="text-white font-weight-bold">Email Address</h2>
          <input className="forgot_password_email" type="text" placeholder="Email" />
          <button className="forgot_password_btn">
            <NavLink to="/reset-password">
              Send Reset Instruction
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;