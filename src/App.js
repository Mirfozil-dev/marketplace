import './App.css';
import React from 'react';
import Home from './pages/Home/Home.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx';
import Category from './pages/Category/Category.jsx';
import Subcategory from './pages/Subcategory/Subcategory.jsx';
import SingleProduct from './pages/SingleProduct/SingleProduct.jsx';
import AllCategories from './pages/AllCategories/AllCategories.jsx';
import SignUpSeller from './pages/SignUpSeller/SignUpSeller.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout.jsx';
import BuyerLayout from './layouts/BuyerLayout/BuyerLayout.jsx';
import BuyerHome from './pages/BuyerHome/BuyerHome.jsx';
import Chat from './pages/Chat/Chat.jsx';
import HelpManager from './pages/HelpManager/HelpManager.jsx';
import BuyerOrders from './pages/BuyerOrders/BuyerOrders.jsx';
import MobileChat from './pages/MobileChat/MobileChat.jsx';
import SellerLayout from './layouts/SellerLayout/SellerLayout.jsx';
import SellerHome from './pages/SellerHome/SellerHome.jsx';
import SellerProducts from './pages/SellerProducts/SellerProducts.jsx';
import PostProduct1 from './pages/PostProduct1/PostProduct1.jsx';
import PostProduct2 from './pages/PostProduct2/PostProduct2.jsx';
import PostProduct3 from './pages/PostProduct3/PostProduct3.jsx';
import HelpManager2 from './pages/HelpManager2/HelpManager2.jsx';
import Analytics from './pages/Analytics/Analytics.jsx';
import SellerShop from './pages/SellerShop/SellerShop.jsx';
import AdminLayout from './layouts/AdminLayout/AdminLayout.jsx';
import HomeAdmin from './pages/HomeAdmin/HomeAdmin.jsx';
import SellerAdmin from './pages/SellerAdmin/SellerAdmin.jsx';
import BuyerAdmin from './pages/BuyerAdmin/BuyerAdmin.jsx';
import AnalyticsAdmin from './pages/AnalyticsAdmin/AnalyticsAdmin.jsx';
import ExtraAdmin from './pages/ExtraAdmin/ExtraAdmin.jsx';
import NewProductsAdmin from './pages/NewProductsAdmin/NewProductsAdmin.jsx';
import AdvertAdmin from './pages/AdvertAdmin/AdvertAdmin.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/seller/:path?/:path?" exact>
          <SellerLayout>
            <Switch>
              <Route path="/seller" exact component={SellerHome} />
              <Route exact path="/seller/help" component={HelpManager} />
              <Route path="/seller/products" component={SellerProducts} />
              <Route exact path="/seller/post-product" component={PostProduct1} />
              <Route path="/seller/post-product/step-2" component={PostProduct2} />
              <Route path="/seller/post-product/step-3" component={PostProduct3} />
              <Route path="/seller/help2" component={HelpManager2} />
              <Route path="/seller/chat" component={Chat} />
              <Route path="/seller/analytics" component={Analytics} />
              <Route path="/seller/chat-mobile" component={MobileChat} />
              <Route path="/seller/shop" component={SellerShop} />
            </Switch>
          </SellerLayout>
        </Route>
        <Route path="/buyer/:path?" exact>
          <BuyerLayout>
            <Switch>
              <Route path="/buyer" exact component={BuyerHome} />
              <Route path="/buyer/chat" component={Chat} />
              <Route exact path="/buyer/help" component={HelpManager} />
              <Route path="/buyer/orders" component={BuyerOrders} />
              <Route path="/buyer/chat-mobile" component={MobileChat} />
            </Switch>
          </BuyerLayout>
        </Route>
        <Route path="/admin/:path?" exact>
          <AdminLayout>
            <Switch>
              <Route path={['/admin/home', '/admin/']} exact component={HomeAdmin} />
              <Route path="/admin/seller" component={SellerAdmin} />
              <Route path="/admin/buyer" component={BuyerAdmin} />
              <Route path="/admin/analytics" component={AnalyticsAdmin} />
              <Route path="/admin/extra" component={ExtraAdmin} />
              <Route path="/admin/new-products" component={NewProductsAdmin} />
              <Route path="/admin/advert" component={AdvertAdmin} />
            </Switch>
          </AdminLayout>
        </Route>
        <Route path="" exact>
          <MainLayout>
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route exact path={['/home', '/']} component={Home} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/category" component={Category} />
              <Route path="/sub-category" component={Subcategory} />
              <Route path="/product" component={SingleProduct} />
              <Route path="/all-categories" component={AllCategories} />
              <Route path="/register-seller" component={SignUpSeller} />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
