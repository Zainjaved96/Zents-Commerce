import React from 'react';
import Image from 'react-bootstrap/Image';
import Header from '../components/Navbar/Header';
import Footer from '../components/Footer/Footer';

const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className="about-us px-3 py-4 row">
      <h1>About Us</h1>
      <div className='col-lg-6'>
      <p>
        Zents is an online men's fashion store that offers a wide variety of clothing items, including jeans, shirts, suits, kurtas, and more. We believe that every man should have the opportunity to look his best, and we're committed to providing high-quality fashion at an affordable price.
      </p>
      <p>
        We're passionate about fashion and we're always looking for new trends to bring to our customers. We also believe in customer service, and we're committed to providing our customers with a positive shopping experience.
      </p>
      <p>
        If you're looking for a new outfit, be sure to check out Zents. We're confident that you'll find something you love.
      </p>
      <p>
        Thank you for shopping with Zents!
      </p>
      </div>
      <div className='col-lg-6 mx-auto  text-center'>
            <img width={"80%"} src={"https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} alt="about-us image" />
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
