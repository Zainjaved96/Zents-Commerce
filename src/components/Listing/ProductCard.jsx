import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({img_url, title, price, id }) => {
  return (
    <div className="product-card shadow ">
    <img src={img_url} alt="Product Image" className="product-image" />
    <Link to={`/product/${id}`} className="product-title">{title}</Link>
    <p className="product-price">${price}</p>
   <button className='zen-btn'>Add to cart</button>
  </div>
  )
}

export default ProductCard