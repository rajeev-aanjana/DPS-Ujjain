import React from 'react'
import './Gallery.css'
import gallery1 from '../../assets/dpsu2.jpg'
import gallery2 from '../../assets/images.jpg'
import gallery3 from '../../assets/test3.jpg'
import gallery4 from '../../assets/test4.jpg'
import arrow from '../../assets/arrow.png'
import { useNavigate } from 'react-router-dom'

function Gallery() {
  const navigate = useNavigate();
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery1} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className='btn dark-btn' onClick={()=> navigate('/full-gallery')}>See more here <img src={arrow} alt="" width="50px" /></button>
    </div>
  )
}

export default Gallery;
