import React from 'react';
import './AdminNavbar.css';
import adminAvatar from '../../images/admin_avatar.png';
import homeIcon from '../../images/admin_home.svg';
import adminUser from '../../images/admin_user.svg';
import adminBox from '../../images/admin_box.svg';
import adminGraph from '../../images/admin_graph.svg';
import adminExtra from '../../images/admin_extra.svg';

function AdminNavbar() {
  return (
    <div className="admin_navbar__container">
      <div className="admin_navbar__avatar d-flex flex-column align-items-center">
        <img src={adminAvatar} alt="" />
        <h6>
          Ali Safarov
        </h6>
        <p>Admin of Uzbekmart</p>
      </div>
      <div className="admin_navbar__items_wrapper">
        <div className="admin_navbar__item w-100 d-flex align-items-center">
          <img src={homeIcon} alt="" />
          <h6>
            Home
          </h6>
        </div>
        <div className="admin_navbar__item w-100 d-flex align-items-center">
          <img src={adminUser} alt="" />
          <h6>
            Seller & Buyer
          </h6>
        </div>
        <div className="admin_navbar__item w-100 d-flex align-items-center">
          <img src={adminBox} alt="" />
          <h6>
            Products
          </h6>
        </div>
        <div className="admin_navbar__item w-100 d-flex align-items-center">
          <img src={adminGraph} alt="" />
          <h6>
            Analytics
          </h6>
        </div>
        <div className="admin_navbar__item w-100 d-flex align-items-center">
          <img src={adminExtra} alt="" />
          <h6>
            Extra
          </h6>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;