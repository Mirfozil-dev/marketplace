import React from 'react';
import './SellerShop.css';
import Shop from '../../components/Shop/Shop.jsx';
import sellerLogo from '../../images/seller_shop_logo.png';
import topBg from '../../images/seller_shop_bg.png';
import sellerWhyChoose from '../../images/seller_shop_why_choose.png';

class SellerShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: sellerLogo,
      headerBg: topBg,
      headerTitle: 'Now is your chance to save',
      headerSubTitle: '“Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful… that’s what matters to me.”',
      companyStars: [
        {
          title: 'Safety',
          subtitle: 'Lorem ipsum dolor sitametconsectetur adipiscing elit consequat pretiumsodales, potenti duis mi vivamus dis mattis nunc arcu justo,congue ullamcorper taciti varius integer ',
        },
        {
          title: 'Quality',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit consequat pretium sodales, potenti duis mi vivamus dis mattis',
        },
        {
          title: 'Private',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit consequat pretium sodales, potenti duis mi vivamus dis mattis otenti duis mi vivamus dis mattis',
        },
      ],
      whyChoose: {
        image: sellerWhyChoose,
        paragraph: 'uctus placerat erat integer inceptos mattis condimentum, duis consequat mauris imperdiet cubilia sed aliquet, fermentum metus vulputate nostra ante. Egestas tincidunt leo nunc massa malesuada cursus non auctor sociosqu senectus, netus morbi vestibulum quam purus dictumst vivamus arcu. ',
      },
      aboutUs: 'We are developing company in trading of Made in Uzbekistan products to all over the world. By cooperating with us you will get promised results and quality. The UzbekMart platform was launched to promote Uzbek exports to foreign partners and to facilitate large-scale exports of national products under the “Made in Uzbekistan” brand. The platform was launched by the',
      foundedYear: 2020,
      employees: '51-100',
      responseRate: '25%',
      workplaceLength: '101-500',
      exhibition: 1,
      country: 'Tashkent, Uzbekistan',
      establishedYear: 2020,
      businessType: 'Trading Company',
      production: 'Oils, Agro Production, etc',
      payments: 'T/T, L/C, MoneyGram',
      mainMarket: 'Mid East',
      gallery: ['', '', '', '', '', '', ''],
    };
  }

  render() {
    return (
      <div className="seller_shop_wrapper w-100 h-100">
        <div className="seller_shop_page w-100 h-100 d-flex">
          <div className="seller_shop_sidebar">
            <div className="seller_shop_navigation">
              <h5>Navigation</h5>
            </div>
          </div>
          <div className="seller_shop w-100">
            <Shop data={this.state} classname="w-100 h-100" />
          </div>
        </div>
      </div>
    );
  }
}

export default SellerShop;