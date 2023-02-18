import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { AiFillEye } from "react-icons/ai";

import "./Skills.scss";

const Skills = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [certificate, setCertificate] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certificates"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setCertificate(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text" style={{ marginTop: "3rem" }}>
        Skills & Certificates
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__certificates"
      >
        {certificate.map((cert, index) => (
          <motion.div
            whileHover={{ scale: [1, 1.1] }}
            className="app__certificates-item app__flex"
            key={index}
          >
            <div className="app__certificates-img app__flex">
              <img src={urlFor(cert.imgUrl)} alt={cert.name} />
              {/* Div za prikaz kartic kere se filtrerajo */}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__certificates-hover app__flex"
              >
                {/* Ikone z animacijo na sliki */}
                <a href={cert.certificateLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.8] }}
                    transition={{ duration: 0.1 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* Del s tekston */}
            <div className="app__certificates-content app__flex">
              <h4 className="bold-text">{cert.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
