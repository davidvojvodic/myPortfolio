import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'

import './Testimonial.scss'

const Testimonial = () => {
  const [cv, setCv] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
 const [animate, setAnimate] = useState({transition: "ease-in-out",x: 0, opacity: 1});



  const handleClick = (index) => {
    setCurrentIndex(index);
    setAnimate([{transition: "ease-in-out", x: 300, opacity: 0}]);

    setTimeout(() => {
      setAnimate([{transition: "ease-in-out",x: 0, opacity: 1}])
    }, 500)

  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    
    client.fetch(query)
      .then((data) => {
        setCv(data);
      })

  }, [])

  return (
    <>
      {cv.length && (
        <>
          <motion.div className='app__cv-item app__flex' animate={animate}>
            <motion.div className='app__cv-content'>
              <h4 className='bold-text'>{cv[currentIndex].year}</h4>
              <div className='line' />
              <div>
                <p className='p-text'>{cv[currentIndex].description}</p>
              </div>
            </motion.div>
          </motion.div>

          <div className='app__cv-btns app__flex'>
            <motion.div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? cv.length - 1 : currentIndex - 1)} >
              <HiChevronLeft  />
            </motion.div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === cv.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight  />
            </div>
          </div>
        </>
      )}
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, "app__cv"),
  'testimonials',
  "app__whitebg"
  )