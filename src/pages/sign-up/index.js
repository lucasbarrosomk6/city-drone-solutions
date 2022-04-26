import React from 'react';
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import SignUp from '../../components/SignUp/SignUp';

const Register = () => {
    return (
        <>
           <Header/>
           <BgShape/> 
           <SignUp/>
           <Footer/>
        </>
    );
};

export default Register;