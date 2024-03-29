import React from 'react';
import CheckoutArea from '../../components/Checkout/CheckoutArea';
import CouponArea from '../../components/Checkout/CouponArea';
import BgShape from '../../components/common/BgShape';
import Breadcrumb from '../../components/common/Breadcrumb';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';

const CheckoutPage = () => {
   return (
      <>
         <Header/>
         <BgShape/>
         <Breadcrumb name="Checkout" title="Checkout" />
         <CouponArea/>
         <CheckoutArea/>
         <Footer/>
      </>
   );
   
};

export default CheckoutPage;