import React from 'react'
import { BrandCard } from './BrandCard'
import "./brand.css"
const Brands = () => {
  return (
    <>
         <div className='container text-center py-3 px-0'  >
           <h4 className='py-2 z-head'>Our Trusted Brands</h4>
           <div className="d-flex flex-wrap flex-sm-nowrap  justify-content-center">
                <BrandCard  imgName={1}/>
                <BrandCard  imgName={2}/>
                <BrandCard  imgName={3}/>
                <BrandCard  imgName={4}/>
                <BrandCard  imgName={5}/>
                <BrandCard  imgName={6}/>
                <BrandCard  imgName={7}/>
                <BrandCard  imgName={8}/>
           </div>
        </div>
    </>
   
  )
}

export default Brands