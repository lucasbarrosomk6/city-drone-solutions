import React from 'react';
import BgShape from '../../components/common/BgShape';
import Breadcrumb from '../../components/common/Breadcrumb';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import WishListArea from '../../components/wishlist/WishListArea';

const WishList = () => {
   return (
      <>
         <Header/>
         <BgShape/>
         <Breadcrumb name="Your Wishlist" title="Wishlist" />
         <WishListArea/>
         <Footer/>
      </>
   );
};

export default WishList;