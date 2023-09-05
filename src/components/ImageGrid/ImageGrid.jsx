import React from "react";
import "./imageGrid.css";
import { Link } from "react-router-dom";
function ImageGrid() {
  const imageData = [
    {
      title: "Jackets",
      image_no: 1,
      href:'/category/jackets'
    },
    {
      title: "Sweatshirts",
      image_no: 2,
      href:'/category/sweatshirts'
    },
    {
      title: "Suits",
      image_no: 3,
      href:'/category/suit'
    },
    {
      title: "Shirts",
      image_no: 4,
      href:'/category/shirts'
    },
    {
      title: "Jeans",
      image_no: 5,
      href:'/category/jeans'
    },
    {
      title: "Kurta",
      image_no: 6,
      href:'/category/kurta'
    },
  ];
  return (
    <div className="container pt-5 px-0">
      <h2 className="z-head text-center">Categories</h2>
      <div className="row">
        <div className="container row text-center">
          {imageData.map((image, index) => (
            <div className="test_box box col-12 col-xs-6 col-md-4" key={index}>
              <div
                className="inner"
                style={{
                  backgroundImage: `url(/src/assets/images/covers/${image.image_no}.png)`,
                }}
              >
                <Link to={image.href} className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">{image.title}</h1>
                    <span className="test_link">Shop Now</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
