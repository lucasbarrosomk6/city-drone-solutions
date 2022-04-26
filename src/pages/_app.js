import Head from 'next/head';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'react-responsive-modal/styles.css';
import './index.scss';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTotal } from '../redux/features/productSlice';
import { initializeApp } from "firebase/app";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


const firebaseConfig = {
  apiKey:'AIzaSyCOTzyD9nCW6DaO1sl0e0-4yuNSB0JKUNE',
  authDomain:'markit-next-js.firebaseapp.com',
  projectId:'markit-next-js',
  storageBucket:'markit-next-js.appspot.com',
  messagingSenderId:'1068467809754',
  appId:'1:1068467809754:web:80ad8acdcc2670ce09a4e3',
};
initializeApp(firebaseConfig);


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(getTotal());
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="assets/css/fontAwesome5Pro.css" />
      </Head>

      <Provider store={store}>
          <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  )
}

export default MyApp
