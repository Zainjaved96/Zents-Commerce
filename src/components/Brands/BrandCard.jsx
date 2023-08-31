import React from 'react'
import img from "/src/assets/images/brands/1.png"

export const BrandCard = ({imgName}) => {
  return (
    <div style={{width:"15rem"}} className='border-1 border-dark brand-card' >
        <img src={`/src/assets/images/brands/${imgName}.png`} width={"100%"} />
    </div>
  )
}
