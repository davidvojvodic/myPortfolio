import React, { useState } from 'react'
import './Navbar.scss';
import { images } from '../../constants';

// importanje menu ikon pa motiona iz framer-motion za animacije
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'


const Navbar = () => {

  // useState za menu na tablice pa telefone
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>

      {/* Div za logo */}
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" style={{width: '300px'}} />
        </div>

        {/* Del z linkami v navbari. Za ležji prikaz se dajo linki v array te pa se izrišejo z funkcijo map() */}
        <ul className='app__navbar-links'>
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Div za navbar za menše naprave */}
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {/* Če je toggle true se izriše motion.div z animacijo, v keron je ikona pa lista z linkami navbara */}
            {
              toggle && (
                <motion.div
                  whileInView={{x: [300,0]}}
                  transition={{duration: 0.85, ease: 'easeOut'}}
                >
                  <HiX onClick={() => setToggle(false)} />
                  <ul className='app__navbar-links'>
                  {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li className='app__flex p-text' key={item}>
                    <a href={`#${item}`}>{item}</a>
                  </li>))}
                  </ul>
                </motion.div>
              )
            }
        </div>
    </nav>
  )
}

export default Navbar