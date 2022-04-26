import React from 'react';
import Subscribe from '../../components/Home/Subscribe';
import FeaturedArea from '../../components/homeTwo/FeaturedArea';
import Footer from '../../components/homeTwo/Footer';
import Header from '../../components/homeTwo/Header';
import HeroArea from '../../components/homeTwo/HeroArea';
import LatestProduct from '../../components/homeTwo/LatestProduct';
import Services from '../../components/homeTwo/Services';
import Testimonial from '../../components/homeTwo/Testimonial';

const HomeTwo = () => {
   return (
      <>
         <Header/>
         <HeroArea/>
         <FeaturedArea/>
         <Services/>
         <LatestProduct/>
         <Testimonial/>
         <Subscribe/>
         <Footer/>
      </>
   );
};

export default HomeTwo;