import React from 'react';
import { useProductContext } from './Context/ContextProduct';
import HeroSection from './HeroSection';
import Typical from 'react-typical';


const About = () => {

  const {myName} = useProductContext();   // just demo


  const data = {
    
    title: "Tech Technical Channel Store",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, dignissimos? Adipisci laborum necessitatibus, sapiente atque ut officiis omnis unde laboriosam itaque, repellendus voluptatem fuga animi ratione corrupti magni eaque voluptatum.",
    image: "images/about2.jpeg",

  }

  return (
    <>
      {/* {myName} // just demo */}
      <HeroSection getData={data} />
    </>
  )
}

export default About;