import React from "react";
import { useEffect } from "react";
const ProductCarousel = () => {
  useEffect(() => {
    // Resize images to have equal heights
    const cardImages = document.querySelectorAll('.card-img-top');
    let maxHeight = 0;
    cardImages.forEach((image) => {
      if (image.clientHeight > maxHeight) {
        maxHeight = image.clientHeight;
      }
    });
    cardImages.forEach((image) => {
      image.style.height = `${maxHeight}px`;
    });
  }, []);

  




  return (
    <div className="container row">
    <div className="card flex-fill" >
      <div className="card-img-container">
        <img style={{ objectFit: 'cover', height: '100%' }} src={"https://m.media-amazon.com/images/I/71fyw1U54GL._AC_UL400_.jpg"} className="card-img-top" alt="Image 1" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Card 1</h5>
        <p className="card-text">Some content here...</p>
      </div>
    </div>
    <div className="card flex-fill" style={{"width":"18rem"}}>
      <div className="card-img-container" >
        <img style={{ objectFit: 'cover', height: '100%' }} src={"https://m.media-amazon.com/images/I/617Voo-PuTL._AC_UL400_.jpg"}className="card-img-top" alt="Image 2" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Card 2</h5>
        <p className="card-text">Some content here...</p>
      </div>
    </div>
    {/* Add more cards as needed */}
  </div>
  );
};

export default ProductCarousel;
