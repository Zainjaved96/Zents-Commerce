import React from 'react'
import './jumbotron.css'
import {BiSolidRightArrowCircle} from "react-icons/bi"
const Jumbotron = ({subhead,head,jumboImg,imgSize}) => { 
  return (
    <div className="container px-md-0 py-5"  >
         <div className=" row mt-0 my-5 rounded hero py-3" style={{"backgroundColor":"#F5F4EF"}}>
        <div className='col-lg-6 col-md-6 order-1 py-3 py-md-0 order-md-0 d-flex flex-column justify-content-center ps-5  text-center text-md-start'>
            <p className='fw-bold hero-subhead text-center text-md-start fs-4 pb-0 mb-0' style={{color:"#C9A26B"}}>{subhead}</p>
            <h1 className='fw-bold  hero-head'>{head}</h1>
            <div>
            <button className="zen-btn gap-1">Shop Now &nbsp; 
            <BiSolidRightArrowCircle style={{color:"black"}} />
            </button>

            </div>
        </div>
        <div className='col-lg-6 col-md-6 text-center  hero-img '>
            <img src={jumboImg}   width={imgSize ?? "100%"} alt="men in suit" />
        </div>
    </div>
    </div>
   
  )
}

export default Jumbotron