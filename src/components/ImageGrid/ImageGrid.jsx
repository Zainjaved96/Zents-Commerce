import React from "react";
import "./imageGrid.css";
function ImageGrid() {
  const imageData = [
    {
      title: "Jackets",
      image_no: 1,
    },
    {
      title: "Sweatshirts",
      image_no: 2,
    },
    {
      title: "Suits",
      image_no: 3,
    },
    {
      title: "T-Shirts",
      image_no: 4,
    },
    {
      title: "Jeans",
      image_no: 5,
    },
    {
      title: "Kurta",
      image_no: 6,
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
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">{image.title}</h1>
                    <span className="test_link">Shop Now</span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
