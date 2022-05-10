import React from 'react';
import './ResetPassword.css';

function ResetPassword() {
  return (
    <div className="reset_password_page_wrapper d-flex align-items-center">
      <div className="reset_password_page custom_container">
        <h1 className="text-white font-weight-bold">Reset Your Password</h1>
        <h2 className="text-white font-weight-bold">New Password</h2>
        <form action="">
          <input type="text" className="w-100" placeholder="Password" />
          <button className="w-100">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;