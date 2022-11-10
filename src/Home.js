import React from 'react';
import FeatureProduct from './components/FeatureProduct';
import Service from './components/Service';
import Trusted from './components/Trusted';
import HeroSection from './HeroSection';

const Home = () => {

  const data = {
    title: "Hassan E-Commerce Store Shop",
    description: "Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.",
    image: "images/hero.jpg",
  }

  return (
    <>
      <HeroSection getData={data} />
      <Service />
      <FeatureProduct />
      <Trusted />
    </>
  )
}

// `;

export default Home;