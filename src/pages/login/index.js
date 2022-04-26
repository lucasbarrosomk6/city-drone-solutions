import React from 'react';
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import LoginArea from '../../components/Login/LoginArea';

const Login = () => {
    return (
        <>
            <Header />
            <BgShape />
            <LoginArea />
            <Footer />
        </>
    );
};

export default Login;