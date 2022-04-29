import Head from "next/head";
import BannerArea from "../components/Home/BannerArea";
import BrandArea from "../components/Home/BrandArea";
import CategoryArea from "../components/Home/CategoryArea";
import Cta from "../components/Home/Cta";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import HeroArea from "../components/Home/HeroArea";
import Products from "../components/Home/Products";
import Subscribe from "../components/Home/Subscribe";
import Testimonial from "../components/Home/Testimonial";
import TrendingLandmark from "../components/Home/TrendingLandmark";
import VideoHero from "../components/VideoHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>City Drone Solutions</title>
        <meta name="description" content="Vancouver Drone Videography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <VideoHero />
      <CategoryArea />
      <TrendingLandmark />
      <Subscribe />
      <Products />
      <Cta />
      <BrandArea />
      <Testimonial />
      <BannerArea />
      <Footer />
    </>
  );
}
