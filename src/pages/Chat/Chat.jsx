import React from 'react';
import './Chat.css';
import searchIcon from '../../images/search_icon.png';
import avatar from '../../images/Ali.png';
import ConversationCard from '../../components/ConversationCard/ConversationCard.jsx';
import clipIcon from '../../images/clipIcon.svg';
import pictureIcon from '../../images/pictureIcon.svg';
import emojiIcon from '../../images/emojiIcon.svg';
import sendIcon from '../../images/sendIcon.svg';
import sendIconDark from '../../images/sendIconDark.svg';
import historyImg from '../../images/order_history_img.png';
import createOrderIcon from '../../images/createOrderIcon.svg';
import sendCatalogIcon from '../../images/sendCatalogIcon.svg';
import vaucherIcon from '../../images/vaucherIcon.svg';
import invoiceIcon from '../../images/invoiceIcon.svg';
import infoIcon from '../../images/infoIcon.svg';

function Chat() {
  return (
    <div className="chat_page_wrapper w-100 h-100">
      <div className="chat_page">
        <div className="w-100 d-flex justify-content-center chat_page_top">
          <button>Zoom meeting</button>
          <button>Call</button>
        </div>
        <div className="w-100 d-flex chat_page_content_wrapper justify-content-between">
          <div className="chat_page_conversations">
            <div className="search_person_input w-100 d-flex">
              <input placeholder="Search Person" className="w-100" type="text" />
              <img src={searchIcon} alt="" />
            </div>
            <div className="chat_page_my_avatar w-100 d-flex flex-column align-items-center">
              <div className="my_avatar_img d-flex justify-content-center align-items-center">
                <img className="h-100" src={avatar} alt="" />
              </div>
              <h5>Ali Safarov</h5>
              <h6>MBM IT Company</h6>
            </div>
            <div className="active_conversations_list">
              <div className="d-flex justify-content-between">
                <h5>Active Conversation</h5>
                <div className="active_conversations_count d-flex align-items-center justify-content-center">7</div>
              </div>
              <ConversationCard active />
              <ConversationCard isOnline />
              <ConversationCard messagesCount={22} />
              <ConversationCard isOnline />
              <ConversationCard messagesCount={11} />
            </div>
          </div>
          <div className="chat_page_body">
            <div className="chat_page_body_blur w-100 h-100">
              <div className="messages_wrapper">
                <div className="partner_message_item">
                  <div className="w-100 d-flex align-items-end">
                    <div className="partner_message_avatar">
                      <img className="w-100" src={avatar} alt="" />
                    </div>
                    <div className="message_texts_wrapper">
                      <p className="partner_message_text">Lorem ipsum dolor</p>
                      <p className="partner_message_text">Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean
                        inceptos
                        curabitur eget suscipit, rutrum scelerisque sociis natoque conubia. Cubilia natoque mattis eu,
                        suspendisse habitasse, conubia massa. Auctor donec bibendum gravida nulla luctus vivamus
                        habitasse
                        augue nibh dis sapien, tincidunt nisi curae penatibus fames eu potenti aliquet est habitant,
                        dictumst
                        a elementum integer quam orci cum dignissim rutrum </p>
                    </div>
                  </div>
                  <p className="partner_message_date">2 weeks ago</p>
                </div>
                <div className="my_message_item">
                  <div className="d-flex align-items-end">
                    <div className="message_texts_wrapper d-flex flex-column align-items-end">
                      <p className="my_message_text">Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean
                        inceptos
                        curabitur eget suscipit, rutrum scelerisque sociis natoque conubia. Cubilia natoque mattis eu,
                        suspendisse habitasse, conubia massa. Auctor donec bibendum gravida nulla luctus vivamus
                        habitasse
                        augue nibh dis sapien, tincidunt nisi curae penatibus fames eu potenti aliquet est habitant,
                        dictumst
                        a elementum integer quam orci cum dignissim rutrum </p>
                    </div>
                    <div className="my_message_avatar">
                      <img className="w-100" src={avatar} alt="" />
                    </div>
                  </div>
                  <p className="my_message_date">2 weeks ago</p>
                </div>
                <div className="partner_message_item">
                  <div className="w-100 d-flex align-items-end">
                    <div className="partner_message_avatar">
                      <img className="w-100" src={avatar} alt="" />
                    </div>
                    <div className="message_texts_wrapper">
                      <p className="partner_message_text">Lorem ipsum dolor</p>
                      <p className="partner_message_text">Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean
                        inceptos
                        curabitur eget suscipit, rutrum scelerisque sociis natoque conubia. Cubilia natoque mattis eu,
                        suspendisse habitasse, conubia massa. Auctor donec bibendum gravida nulla luctus vivamus
                        habitasse</p>
                    </div>
                  </div>
                  <p className="partner_message_date">2 weeks ago</p>
                </div>
                <div className="my_message_item">
                  <div className="d-flex align-items-end">
                    <div className="message_texts_wrapper d-flex flex-column align-items-end">
                      <p className="my_message_text">Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean
                        inceptos
                        curabitur eget suscipit, rutrum scelerisque sociis natoque conubia. Cubilia natoque mattis eu,
                        suspendisse habitasse, conubia massa. Auctor donec bibendum gravida nulla luctus vivamus
                        habitasse
                        augue nibh dis sapien, tincidunt nisi curae penatibus fames eu potenti aliquet est habitant,
                        dictumst
                        a elementum integer quam orci cum dignissim rutrum </p>
                    </div>
                    <div className="my_message_avatar">
                      <img className="w-100" src={avatar} alt="" />
                    </div>
                  </div>
                  <p className="my_message_date">2 weeks ago</p>
                </div>
              </div>
              <div className="message_input_wrapper d-flex align-items-center">
                <button>
                  <img src={clipIcon} alt="" />
                </button>
                <button>
                  <img src={pictureIcon} alt="" />
                </button>
                <button>
                  <img src={emojiIcon} alt="" />
                </button>
                <input placeholder="Type Message Here" className="w-100" type="text" />
                <button>
                  <img src={sendIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="partner_info">
            <div className="partner_info_card w-100 d-flex flex-column align-items-center">
              <div className="partner_info_avatar">
                <img className="w-100" src={avatar} alt="" />
              </div>
              <h4>VooDoo Val</h4>
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <i className="fas fa-envelope" />
                  <a href="mailto:voodoovall@gmail.com">voodoovall@gmail.com</a>
                </div>
                <div className="d-flex">
                  <i className="fas fa-phone-alt" />
                  <a href="tel:+11223319130711">+11223319130711</a>
                </div>
              </div>
            </div>
            <div className="partner_order_history">
              <div className="d-flex w-100 justify-content-between">
                <h4>Order History</h4>
                <button className="partner_all_order d-flex align-items-center justify-content-between">
                  All Order
                  <i className="fas fa-chevron-down" />
                </button>
              </div>
              <div className="order_history_card d-flex w-100 align-items-center justify-content-between">
                <img src={historyImg} alt="" />
                <h6>Men’s Jacket</h6>
                <h6>$50.22</h6>
              </div>
            </div>
            <div className="partner_action">
              <h5>Action</h5>
              <div className="partner_action_card d-flex w-100 align-items-center justify-content-between">
                <div className="d-flex">
                  <div className="action_icon_wrapper">
                    <img src={createOrderIcon} alt="" />
                  </div>
                  <p>Create Order</p>
                </div>
                <i className="fas fa-plus" />
              </div>
              <div className="partner_action_card d-flex w-100 align-items-center justify-content-between">
                <div className="d-flex">
                  <div className="action_icon_wrapper">
                    <img src={sendCatalogIcon} alt="" />
                  </div>
                  <p>Send Catalog</p>
                </div>
                <img src={sendIconDark} alt="" />
              </div>
              <div className="partner_action_card d-flex w-100 align-items-center justify-content-between">
                <div className="d-flex">
                  <div className="action_icon_wrapper">
                    <img src={vaucherIcon} alt="" />
                  </div>
                  <p>Send Vaucher</p>
                </div>
                <img src={sendIconDark} alt="" />
              </div>
              <div className="partner_action_card d-flex w-100 align-items-center justify-content-between">
                <div className="d-flex">
                  <div className="action_icon_wrapper">
                    <img src={invoiceIcon} alt="" />
                  </div>
                  <p>Send Invoice</p>
                </div>
                <img src={sendIconDark} alt="" />
              </div>
              <div className="partner_action_card d-flex w-100 align-items-center justify-content-between">
                <div className="d-flex">
                  <div className="action_icon_wrapper">
                    <img src={infoIcon} alt="" />
                  </div>
                  <p>Send Shipping Info</p>
                </div>
                <img src={sendIconDark} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;