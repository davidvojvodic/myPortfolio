import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <>
      <motion.div
        className="glaven-div"
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
      >
        <Accordion
          defaultExpanded
          sx={{
            width: "50%",
            background:
              "linear-gradient( 111.2deg,  rgba(253,253,253,0.5) -4.3%, rgba(129,185,241,0.5) 51.8%, rgba(232,154,251,0.5) 100.8% );",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "5px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontFamily="DM Sans" fontWeight="bold">
              1996
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontFamily="DM Sans">
              Born on 11. 04. 1996 in Murska Sobota, Slovenia.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          defaultExpanded
          sx={{
            width: "50%",
            background:
              "linear-gradient( 111.2deg,  rgba(253,253,253,0.5) -4.3%, rgba(129,185,241,0.5) 51.8%, rgba(232,154,251,0.5) 100.8% );",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "5px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontFamily="DM Sans" fontWeight="bold">
              2016 - 2020
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontFamily="DM Sans">
              In 2016, I started attending the Faculty of Commercial and
              Business Sciences, where I studied business informatics. I
              graduated in 2020. That's when I became more interested in web
              development.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          defaultExpanded
          sx={{
            width: "50%",
            background:
              "linear-gradient( 111.2deg,  rgba(253,253,253,0.5) -4.3%, rgba(129,185,241,0.5) 51.8%, rgba(232,154,251,0.5) 100.8% );",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "5px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontFamily="DM Sans" fontWeight="bold">
              2020 - 2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontFamily="DM Sans">
              After graduating, I started attending the Faculty of Economics and
              Business, where I am working on a master's degree in management
              informatics and e-commerce.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__cv"),
  "testimonials",
  "app__whitebg"
);
