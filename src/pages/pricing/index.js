import React from 'react';
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import PricingArea from '../../components/Pricing/PricingArea';
import FaqArea from '../../components/support/FaqArea';

const Pricing = () => {
    return (
        <>
            <Header/>
            <BgShape/>
            <PricingArea/>
            <FaqArea/>
            <Footer/>
        </>
    );
};

export default Pricing;