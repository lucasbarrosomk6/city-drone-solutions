import React from 'react';
import BlogArea from '../../components/Blog/BlogArea';
import BlogBreadCrumb from '../../components/Blog/BlogBreadCrumb';
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';

const index = () => {
   return (
      <>
         <Header/>
         <BgShape/>
         <BlogBreadCrumb/>
         <BlogArea/>
         <Footer/>
      </>
   );
};

export default index;