import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "/src/components/Navbar/Header";
import { fetchProductById } from "/src/Api/productApi";
import { useState, useEffect } from "react";
import Footer from './../components/Footer/Footer';
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error(
          "🚀 ~ file: ProductDetail.jsx:16 ~ fetchData ~ error:",
          error
        );
        // Handle error
      }
    }

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6 text-center  py-5">
            <div
              className=" shadow rounded"
              style={{ border: "2.8px solid #c9a26b" }}
            >
              <img
                src={product.image_url}
                alt="product image"
                className="img-fluid"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column py-0 py-md-5">
            <h1 className="fs-2">{product.title}</h1>
            <span className="product-price my-1">{product.price}$</span>
            <div className="my-3">
              <button className="zen-btn ">
                <i class="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
            <div>
              <h2 className="fs-4">Features:</h2>
              <ul>
                <li>100% Polyester</li>
                <li>Made in the USA or Imported</li>
                <li>Pull On closure Machine Wash Super-soft</li>
                <li>cotton-blend fabric</li>
                <li>Super-soft, cotton-blend fabric provides all-day comfort</li>
                <li>Ribbed collar</li>
        
              </ul>
            </div>
          </div>
        </div>
      <div className="d-flex flex-column">
      <h2 class="fs-2">Description:</h2>
      <p>Introducing our collection of meticulously crafted men's apparel, where sophistication meets comfort and style. Elevate your wardrobe with a range of timeless pieces designed to suit every occasion. From casual elegance to refined formalwear, our men's apparel embodies the perfect fusion of quality materials, expert craftsmanship, and contemporary design.</p>
    
    <h3 className="fs-4">Explore Our Selection</h3>
    <p>Discover a curated selection of shirts that exemplify both classic and modern aesthetics. Our shirts are tailored to perfection, offering a flattering fit that complements the masculine form. Choose from an array of patterns, from subtle checks to bold stripes, ensuring a versatile choice for both business and leisure attire.</p>
    
    <p>Step into the world of refined suiting with our impeccably tailored suits and blazers. Each piece is meticulously constructed to exude confidence and sophistication, making a lasting impression at formal events, business meetings, or special occasions. Crafted from premium fabrics, our suits provide a luxurious feel while maintaining effortless mobility.</p>
    
    <p>Our collection of trousers and chinos seamlessly combines comfort with style, offering a diverse range of cuts and colors to suit your personal preferences. These versatile bottoms effortlessly transition from office to off-duty, embodying a perfect blend of comfort and elegance.</p>
    
    <h3 className="fs-4">Elevate Your Look</h3>
    <p>For the ultimate finishing touch, explore our accessories that complement and complete your ensemble. From sleek ties and pocket squares to elegant belts and shoes, our accessories elevate your overall look, adding an extra layer of refinement.</p>
    
    <h3 className="fs-4">Your Style, Redefined</h3>
    <p>Whether you're seeking the perfect ensemble for a wedding, a polished look for the workplace, or simply updating your wardrobe with modern classics, our men's apparel collection has something for every discerning gentleman. Embrace unparalleled craftsmanship, timeless design, and an exceptional fit with our range of meticulously tailored pieces that redefine men's fashion.</p>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default ProductDetail;
