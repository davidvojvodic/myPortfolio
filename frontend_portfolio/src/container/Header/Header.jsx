import React from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper'


// vnaprej definarana animacija z framer motion
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>

      {/* motion div z texton pa animacijo */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 3 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p>Hello, I am</p>
              <h1>David</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p>Frontend Developer</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </motion.div>

      {/* motion div z sliko pa animacijo */}
      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 3, delayChildren: 1 }}
        className="app__header-img">
          <img src={images.profile} alt="profile_bg" className='slika' />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{duration: 1, ease: 'easeInOut'}}
            src={images.circle}
            alt="profile_circle"
            className='overlay_circle'
          />
      </motion.div>

      {/* motion div z ikonami polek slike različnih znanj z animacijo */}
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.figma, images.react, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')