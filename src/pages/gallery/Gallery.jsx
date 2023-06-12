import React from 'react'
import { motion } from 'framer-motion'  
import './Gallery.css'

import image1 from '../../data/image1.jpg'
import image2 from '../../data/image2.jpg'
import image3 from '../../data/image3.png'
import image4 from '../../data/image4.jpg'
import image5 from '../../data/image5.jpeg'

const images = [image1, image2, image3, image4, image5]

const Gallery = () => {
  return (
    <div className='gallery'> 
        <motion.div className='carousel'>
            <motion.div className='inner-carousel'>
                {images.map(image => (
                    <motion.div key={image} className='item'>
                      <img src={image} alt='alt'/>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Gallery