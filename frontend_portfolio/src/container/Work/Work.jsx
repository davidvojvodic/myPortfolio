import React, { useState, useEffect } from "react";

// Ikone za cards
import { AiFillEye, AiFillGithub } from "react-icons/ai";

// Import motiona za animacije
import { motion } from "framer-motion";

// AppWrap za social ikone pa scroll
import { AppWrap, MotionWrap } from "../../wrapper";

// import za backend sanityja
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  // useState za prikaz aktivnoga filtra
  const [activeFilter, setActiveFilter] = useState("All");

  // useState za animacijo karte na filtreranje
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // useState za filter napravlenih del
  const [works, setWorks] = useState([]);

  // useState za filter napravlenih del
  const [filterWork, setFilterWork] = useState([]);

  // useEffect za povezavo z backendon
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  // funkcija za filtreranje
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 550);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Portfolio</span> Section
      </h2>

      {/* del s filteron za različne kategorije, če je item-active (activeFilter), te se spremeni css oblika */}
      <div className="app__work-filter">
        {["UI/UX", "Web App", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Div za prikaz kartic kere se filtrerajo */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              {/* Div za prikaz kartic kere se filtrerajo */}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {/* Ikone z animacijo na sliki */}
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.8] }}
                    transition={{ duration: 0.1 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                {/* Ikone z animacijo na sliki */}
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.8] }}
                    transition={{ duration: 0.1 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* Del s tekston */}
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__whitebg");
