import React from 'react'

const Footer = () => {
  return (
    <footer style={{'background':'#3A210D'}} class="py-3  text-white">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
<li class="nav-item"><a href="/" class="nav-link px-2 text-white hover-brown">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white hover-brown">About Us</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white hover-brown">Contact Us</a></li>
      <li class="nav-item"><a href="/about-us" class="nav-link px-2 text-white hover-brown">Categories</a></li>
      <li class="nav-item"><a href="/products" class="nav-link px-2 text-white hover-brown">Products</a></li>
    </ul>
    <div  className='d-flex justify-content-around px-4'>
    <p class="text-center hover-brown ">© 2022 Zents, Inc.</p>
    <div className='d-flex gap-2' >
      <i style={{color:"white"}} className='fa-brands fa-facebook hover-brown'></i>
      <i style={{color:"white"}} className='fa-brands fa-twitter hover-brown'></i>
      <i style={{color:"white"}} className='fa-brands fa-instagram hover-brown'></i>
    </div>

    </div>
  </footer>
  )
}

export default Footer