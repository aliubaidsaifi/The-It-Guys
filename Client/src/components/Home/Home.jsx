import React from 'react';
import Hero from '../Hero/Hero';
import BlogsComp from '../Blogs/BlogsComp';
import Testimonial from '../Testimonial/Testimonial';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Services/>
      <Testimonial /> 
      <BlogsComp/>
      <Contact/>
    </div>
  );
};

export default Home;
