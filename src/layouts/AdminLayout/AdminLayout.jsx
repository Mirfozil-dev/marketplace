import React from 'react';
import './AdminLayout.css';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar.jsx';

function AdminLayout({ children }) {
  return (
    <div className="d-flex">
      <AdminNavbar />
      {
        children
      }
    </div>
  );
}

export default AdminLayout;