import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./imageCarousel.css"
function ImageCarousal(props) {
  const images = props.images
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    
     <Carousel className='container zen-carousal'  activeIndex={index} onSelect={handleSelect} >
      {images.map((image,index)=>
       <Carousel.Item  key={index} >
      {/* <img src={image} interval={500} /> */}
      <img src={image} className='w-100 d-block ' interval={500}  />
      </Carousel.Item>)
      } 
    </Carousel>
  
  );
}

export default ImageCarousal;