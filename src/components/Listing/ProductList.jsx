import React from 'react'
import "./cardListing.css"
import ProductCard from './ProductCard'
const ProductList = () => {
  return (
    <div className="container px-lg-0 py-5">
    <h2 className='z-head text-center'>Latest Arrivals</h2>
    <div className="product-cards-container px-lg-0 px-2">
    <ProductCard
     img_url={"https://m.media-amazon.com/images/I/81D+bCgn8hL._AC_UL400_.jpg"}
     title = "Hanes Men's EcoSmart Fleece Sweatshirt, Cotton-Blend Pullover, Crewneck Sweatshirt for Men (1 or 2 pack)"
     price = "49.99"
    />  
    <ProductCard
     img_url={"https://m.media-amazon.com/images/I/61F6jb+KBnL._AC_UL400_.jpg"}
     title = "Gildan Men's Fleece Crewneck Sweatshirt, Style G18000, Multipack"
     price = "29.99"
    />
    <ProductCard
     img_url={"https://m.media-amazon.com/images/I/71SIThQVkiL._AC_UL400_.jpg"}
     title = "Hanes Men's EcoSmart Hoodie, Midweight Fleece Sweatshirt, Pullover Hooded Sweatshirt for Men"
     price = "39.99"
    />
    
    

      
    </div>
    </div>
  )
}

export default ProductList