import React from 'react'
import "./hoverImage.css"
const HoverImage = () => {
  return (
    <>
            <h1 className="main-title">Simple image overlay hover effects</h1>
            <div className="container">
            <h3 className="title">Text fadeIn bottom</h3>
            <div className="content">
                <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                <div className="content-overlay"></div>
                <img className="content-image" src={"https://source.unsplash.com/HkTMcmlMOUQ"} alt="" />
                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                    <p className="content-text">This is a short description</p>
                </div>
                </a>
            </div>
            </div>
    </>

  )
}

export default HoverImage