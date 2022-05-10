import React from 'react';
import './MonthlyReportCard.css';
import eventsIcon from '../../images/eventsIcon.svg';
import viewProductsIcon from '../../images/viewProductsIcon.svg';
import contactsIcon from '../../images/contactsIcon.svg';

function MonthlyReportCard({ className, type, count }) {
  return (
    <div className={className}>
      {
        type === 'events' && <div
          className="w-100 h-100 monthly_report_card d-flex flex-column align-items-center justify-content-between"
          style={{ border: 'solid #00BBFF' }}
        >
          <img src={eventsIcon} alt="" />
          <div>
            <p className="text-center">Events</p>
            <h4 className="text-center">{count}</h4>
          </div>
        </div>
      }
      {
        type === 'view_products' && <div
          className="w-100 h-100 monthly_report_card d-flex flex-column align-items-center justify-content-between"
          style={{ border: 'solid #6B61B1' }}
        >
          <img src={viewProductsIcon} alt="" />
          <div>
            <p className="text-center">View Products</p>
            <h4 className="text-center">{count}</h4>
          </div>
        </div>
      }
      {
        type === 'contacts' && <div
          className="w-100 h-100 monthly_report_card d-flex flex-column align-items-center justify-content-between"
          style={{ border: 'solid #5EE8BB' }}
        >
          <img src={contactsIcon} alt="" />
          <div>
            <p className="text-center">Contacts</p>
            <h4 className="text-center">{count}</h4>
          </div>
        </div>
      }

    </div>
  );
}

export default MonthlyReportCard;