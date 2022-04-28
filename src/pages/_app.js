import Head from "next/head";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "react-responsive-modal/styles.css";
import "./index.scss";
import { store } from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTotal } from "../redux/features/productSlice";
import { initializeApp } from "firebase/app";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const firebaseConfig = {
  apiKey: "AIzaSyDoTXh5uZCxP35Yj2hrwid9ogC6U4t4754",
  authDomain: "city-drone-solutions.firebaseapp.com",
  projectId: "city-drone-solutions",
  storageBucket: "city-drone-solutions.appspot.com",
  messagingSenderId: "207535465585",
  appId: "1:207535465585:web:6a5a3929860408c55e27d0",
  measurementId: "G-V5Q3J9QMCP",
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
  );
}

export default MyApp;
