import React, { useEffect } from "react";
import menSuit from "/src/assets/images/portraits/men-suit-outed.png";
import Header from "/src/components/Navbar/Header";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Brands from "../components/Brands/Brands";
import ImageCarousel from "../components/Carousel/ImageCarousel";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import ProductList from "../components/Listing/ProductList";
import Footer from "../components/Footer/Footer";


const Home = () => {
  
  const CarousalImages = [
    "/src/assets/images/covers/mens-polo-shirts-online.png",
    "/src/assets/images/covers/mens-fashion.jpg",
    "/src/assets/images/covers/Summer-Shirts-New-In-By-Edenrobe.jpg",
    "/src/assets/images/covers/Edenrobe-Haute-Summer-Collections-2022.jpeg",
  ];
  useEffect(()=>{

  }, [])
  return (
    <>
      <Header />
      <div className="d-flex  container flex-wrap   pt-0 pt-sm-5 pb-3 px-0 justify-content-between">
        <div>
          <ImageCarousel images={CarousalImages} />
        </div>
        <div className="d-flex flex-wrap flex-column justify-content-between ">
          <img
            className="d-none d-xl-block"
            style={{ height: "120px" }}
            src={"/src/assets/images/portraits/Kurta-Collection-By-MW.jpg"}
          />
          <img
            className="d-none d-xl-block"
            style={{ height: "120px" }}
            src={"/src/assets/images/portraits/T-Shirts-Summer-Collection.jpg"}
          />
          {/* <img src={"/src/assets/images/portraits/Kurta-Collection-By-MW.jpg"}  />
        <img src={"/src/assets/images/portraits/T-Shirts-Summer-Collection.jpg"} /> */}
        </div>
      </div>

      <ImageGrid/>
      <ProductList/>
      <Brands />
      <Jumbotron
        subhead="Get Upto 40% OFF"
        head="Modern Men Fashion"
        jumboImg={menSuit}
        imgSize={"70%"}
      />
      <Footer/>
      {/* <ProductCarousal/> */}
      {/* <ImageSlider images={images} /> */}
    </>
  );
};

export default Home;
