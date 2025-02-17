import React from 'react'
// import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
// import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import "./globals.css";
import BannerSection from '@/components/Home/BannerSection';
import StaticEngine from '@/components/StaticEngine';
import Imagination from '@/components/Home/Imagination';
// import TopDestination from '@/components/Home/TopDestination';
import HotDeals from '@/components/Home/HotDeals';
// // // import HotOffers from '@/components/Home/HotOffers';
// import Promotional from '@/components/Home/Promotional';
import Destinations from '@/components/Home/Destinations';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Home/Nwesletter';
import BestServices from '@/components/Home/BestServices';


const Home = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <StaticEngine />
      <BestServices />
      <Destinations />
      <Imagination />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
