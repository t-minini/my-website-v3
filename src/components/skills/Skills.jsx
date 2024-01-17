import { motion } from 'framer-motion';
import style from './Skills.module.css';
import { useState, useRef } from 'react';

export function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  const titleVariants = {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        staggerChildren: 1,
      },
    },
  };

  const itemVariants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        type: 'spring',
        staggerChildren: 5,
      },
    },
  };

  const ref = useRef();

  return (
    <section
      ref={ref}
      id="skills"
      className={style.skills}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={titleVariants}
        className={style.container}
      >
        <ul>
          <li className={style.topLi}>Using Now</li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            HTML
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            CSS
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            JavaScript
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            React
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Framer Motion
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Pixel Perfect
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Responsive design
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Flexbox & Grid
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Bootstrap / Material UI
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Figma / Sketch
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Github
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Git
          </motion.li>
        </ul>
        <ul>
          <li className={style.topLi2}>Interests</li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            AWS
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            C# / Python
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            SQL
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            SASS
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            TypeScript
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            React Native
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Redux
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Docker
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Vue / Angular
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Swift
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Jest
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Firebase
          </motion.li>
        </ul>
        <ul>
          <li>Other Skills</li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Node.js
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Restful API
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Node.js
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            MongoDB
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
          >
            Portuguese (Native)
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            className={style.link}
            variants={itemVariants}
          >
            <a
              target="blank_"
              href="https://efset.org/cert/Eb2p3J"
              className={`hoverable ${isHovered ? style.hovered : ''}`}
            >
              English C2 Proficient
              <svg viewBox="0 0 34 32" width="27" height="19">
                <path d="M9.239 22.889c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293l12.114-12.209c0.39-0.39 0.39-1.024 0-1.414s-1.023-0.39-1.414 0l-12.114 12.209c-0.391 0.39-0.391 1.023 0 1.414zM14.871 20.76c0.331 1.457-0.026 2.887-1.152 4.014l-4.039 3.914c-0.85 0.849-1.98 1.317-3.182 1.317s-2.332-0.468-3.182-1.317c-1.754-1.755-1.754-4.61-0.010-6.354l3.946-4.070c0.85-0.849 1.98-1.318 3.182-1.318 0.411 0 0.807 0.073 1.193 0.179l1.561-1.561c-0.871-0.407-1.811-0.619-2.754-0.619-1.663 0-3.327 0.635-4.596 1.904l-3.936 4.061c-2.538 2.538-2.538 6.654 0 9.193 1.269 1.27 2.933 1.904 4.596 1.904s3.327-0.634 4.596-1.904l4.030-3.904c1.942-1.942 2.361-4.648 1.333-7.023zM30.098 1.899c-1.27-1.269-2.933-1.904-4.596-1.904-1.664 0-3.328 0.635-4.596 1.904l-4.029 3.905c-2.012 2.013-2.423 5.015-1.244 7.439l1.552-1.552c-0.459-1.534-0.107-3.261 1.096-4.463l4.039-3.914c0.851-0.849 1.98-1.318 3.183-1.318 1.201 0 2.332 0.469 3.181 1.318 1.754 1.755 1.754 4.611 0.010 6.354l-4.039 4.039c-0.849 0.85-1.98 1.317-3.181 1.317-0.306 0-0.576 0.031-0.87-0.029l-1.593 1.594c0.796 0.331 1.613 0.436 2.463 0.436 1.663 0 3.326-0.634 4.596-1.904l4.029-4.029c2.538-2.538 2.538-6.653-0-9.192z" />
              </svg>
            </a>
          </motion.li>
        </ul>
        <ul>
          <li>Courses</li>
          <motion.li
            initial="initial"
            whileInView="animate"
            className={style.link}
            variants={itemVariants}
          >
            <a
              target="blank_"
              className={`hoverable ${isHovered ? style.hovered : ''}`}
              href="https://coursera.org/share/5c8cb91e75313572a018a9f5e5183fda"
            >
              AWS Cloud Practitioner Essentials
              <svg viewBox="0 0 34 32" width="27" height="19">
                <path d="M9.239 22.889c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293l12.114-12.209c0.39-0.39 0.39-1.024 0-1.414s-1.023-0.39-1.414 0l-12.114 12.209c-0.391 0.39-0.391 1.023 0 1.414zM14.871 20.76c0.331 1.457-0.026 2.887-1.152 4.014l-4.039 3.914c-0.85 0.849-1.98 1.317-3.182 1.317s-2.332-0.468-3.182-1.317c-1.754-1.755-1.754-4.61-0.010-6.354l3.946-4.070c0.85-0.849 1.98-1.318 3.182-1.318 0.411 0 0.807 0.073 1.193 0.179l1.561-1.561c-0.871-0.407-1.811-0.619-2.754-0.619-1.663 0-3.327 0.635-4.596 1.904l-3.936 4.061c-2.538 2.538-2.538 6.654 0 9.193 1.269 1.27 2.933 1.904 4.596 1.904s3.327-0.634 4.596-1.904l4.030-3.904c1.942-1.942 2.361-4.648 1.333-7.023zM30.098 1.899c-1.27-1.269-2.933-1.904-4.596-1.904-1.664 0-3.328 0.635-4.596 1.904l-4.029 3.905c-2.012 2.013-2.423 5.015-1.244 7.439l1.552-1.552c-0.459-1.534-0.107-3.261 1.096-4.463l4.039-3.914c0.851-0.849 1.98-1.318 3.183-1.318 1.201 0 2.332 0.469 3.181 1.318 1.754 1.755 1.754 4.611 0.010 6.354l-4.039 4.039c-0.849 0.85-1.98 1.317-3.181 1.317-0.306 0-0.576 0.031-0.87-0.029l-1.593 1.594c0.796 0.331 1.613 0.436 2.463 0.436 1.663 0 3.326-0.634 4.596-1.904l4.029-4.029c2.538-2.538 2.538-6.653-0-9.192z" />
              </svg>
            </a>
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            className={style.link}
            variants={itemVariants}
          >
            <a
              target="blank_"
              href="https://efset.org/cert/Eb2p3J"
              className={`hoverable ${isHovered ? style.hovered : ''}`}
            >
              Full-stack JavaScript Development
              <svg viewBox="0 0 34 32" width="27" height="19">
                <path d="M9.239 22.889c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293l12.114-12.209c0.39-0.39 0.39-1.024 0-1.414s-1.023-0.39-1.414 0l-12.114 12.209c-0.391 0.39-0.391 1.023 0 1.414zM14.871 20.76c0.331 1.457-0.026 2.887-1.152 4.014l-4.039 3.914c-0.85 0.849-1.98 1.317-3.182 1.317s-2.332-0.468-3.182-1.317c-1.754-1.755-1.754-4.61-0.010-6.354l3.946-4.070c0.85-0.849 1.98-1.318 3.182-1.318 0.411 0 0.807 0.073 1.193 0.179l1.561-1.561c-0.871-0.407-1.811-0.619-2.754-0.619-1.663 0-3.327 0.635-4.596 1.904l-3.936 4.061c-2.538 2.538-2.538 6.654 0 9.193 1.269 1.27 2.933 1.904 4.596 1.904s3.327-0.634 4.596-1.904l4.030-3.904c1.942-1.942 2.361-4.648 1.333-7.023zM30.098 1.899c-1.27-1.269-2.933-1.904-4.596-1.904-1.664 0-3.328 0.635-4.596 1.904l-4.029 3.905c-2.012 2.013-2.423 5.015-1.244 7.439l1.552-1.552c-0.459-1.534-0.107-3.261 1.096-4.463l4.039-3.914c0.851-0.849 1.98-1.318 3.183-1.318 1.201 0 2.332 0.469 3.181 1.318 1.754 1.755 1.754 4.611 0.010 6.354l-4.039 4.039c-0.849 0.85-1.98 1.317-3.181 1.317-0.306 0-0.576 0.031-0.87-0.029l-1.593 1.594c0.796 0.331 1.613 0.436 2.463 0.436 1.663 0 3.326-0.634 4.596-1.904l4.029-4.029c2.538-2.538 2.538-6.653-0-9.192z" />
              </svg>
            </a>
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            className={style.link}
            variants={itemVariants}
          >
            <a
              target="blank_"
              className={`hoverable ${isHovered ? style.hovered : ''}`}
              href="https://www.udemy.com/certificate/UC-86814eae-d518-4c57-93ff-c64288d47b97/"
            >
              Figma UI/UX Essentials
              <svg viewBox="0 0 34 32" width="27" height="19">
                <path d="M9.239 22.889c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293l12.114-12.209c0.39-0.39 0.39-1.024 0-1.414s-1.023-0.39-1.414 0l-12.114 12.209c-0.391 0.39-0.391 1.023 0 1.414zM14.871 20.76c0.331 1.457-0.026 2.887-1.152 4.014l-4.039 3.914c-0.85 0.849-1.98 1.317-3.182 1.317s-2.332-0.468-3.182-1.317c-1.754-1.755-1.754-4.61-0.010-6.354l3.946-4.070c0.85-0.849 1.98-1.318 3.182-1.318 0.411 0 0.807 0.073 1.193 0.179l1.561-1.561c-0.871-0.407-1.811-0.619-2.754-0.619-1.663 0-3.327 0.635-4.596 1.904l-3.936 4.061c-2.538 2.538-2.538 6.654 0 9.193 1.269 1.27 2.933 1.904 4.596 1.904s3.327-0.634 4.596-1.904l4.030-3.904c1.942-1.942 2.361-4.648 1.333-7.023zM30.098 1.899c-1.27-1.269-2.933-1.904-4.596-1.904-1.664 0-3.328 0.635-4.596 1.904l-4.029 3.905c-2.012 2.013-2.423 5.015-1.244 7.439l1.552-1.552c-0.459-1.534-0.107-3.261 1.096-4.463l4.039-3.914c0.851-0.849 1.98-1.318 3.183-1.318 1.201 0 2.332 0.469 3.181 1.318 1.754 1.755 1.754 4.611 0.010 6.354l-4.039 4.039c-0.849 0.85-1.98 1.317-3.181 1.317-0.306 0-0.576 0.031-0.87-0.029l-1.593 1.594c0.796 0.331 1.613 0.436 2.463 0.436 1.663 0 3.326-0.634 4.596-1.904l4.029-4.029c2.538-2.538 2.538-6.653-0-9.192z" />
              </svg>
            </a>
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            className={style.link}
            variants={itemVariants}
          >
            <a
              target="blank_"
              className={`hoverable ${isHovered ? style.hovered : ''}`}
              href="https://www.freecodecamp.org/certification/t-minini/responsive-web-design"
            >
              Responsive Web Design
              <svg viewBox="0 0 34 32" width="27" height="19">
                <path d="M9.239 22.889c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293l12.114-12.209c0.39-0.39 0.39-1.024 0-1.414s-1.023-0.39-1.414 0l-12.114 12.209c-0.391 0.39-0.391 1.023 0 1.414zM14.871 20.76c0.331 1.457-0.026 2.887-1.152 4.014l-4.039 3.914c-0.85 0.849-1.98 1.317-3.182 1.317s-2.332-0.468-3.182-1.317c-1.754-1.755-1.754-4.61-0.010-6.354l3.946-4.070c0.85-0.849 1.98-1.318 3.182-1.318 0.411 0 0.807 0.073 1.193 0.179l1.561-1.561c-0.871-0.407-1.811-0.619-2.754-0.619-1.663 0-3.327 0.635-4.596 1.904l-3.936 4.061c-2.538 2.538-2.538 6.654 0 9.193 1.269 1.27 2.933 1.904 4.596 1.904s3.327-0.634 4.596-1.904l4.030-3.904c1.942-1.942 2.361-4.648 1.333-7.023zM30.098 1.899c-1.27-1.269-2.933-1.904-4.596-1.904-1.664 0-3.328 0.635-4.596 1.904l-4.029 3.905c-2.012 2.013-2.423 5.015-1.244 7.439l1.552-1.552c-0.459-1.534-0.107-3.261 1.096-4.463l4.039-3.914c0.851-0.849 1.98-1.318 3.183-1.318 1.201 0 2.332 0.469 3.181 1.318 1.754 1.755 1.754 4.611 0.010 6.354l-4.039 4.039c-0.849 0.85-1.98 1.317-3.181 1.317-0.306 0-0.576 0.031-0.87-0.029l-1.593 1.594c0.796 0.331 1.613 0.436 2.463 0.436 1.663 0 3.326-0.634 4.596-1.904l4.029-4.029c2.538-2.538 2.538-6.653-0-9.192z" />
              </svg>
            </a>
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            className={style.link}
            variants={itemVariants}
          >
            <a
              target="blank_"
              className={`hoverable ${isHovered ? style.hovered : ''}`}
              href="https://www.linkedin.com/learning/certificates/567d1edbfb7acba640d7b71b4b726d36999ee080348525520cf921f9ab934347"
            >
              Scrum:&nbsp;Advanced
              <svg viewBox="0 0 34 32" width="27" height="19">
                <path d="M9.239 22.889c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293l12.114-12.209c0.39-0.39 0.39-1.024 0-1.414s-1.023-0.39-1.414 0l-12.114 12.209c-0.391 0.39-0.391 1.023 0 1.414zM14.871 20.76c0.331 1.457-0.026 2.887-1.152 4.014l-4.039 3.914c-0.85 0.849-1.98 1.317-3.182 1.317s-2.332-0.468-3.182-1.317c-1.754-1.755-1.754-4.61-0.010-6.354l3.946-4.070c0.85-0.849 1.98-1.318 3.182-1.318 0.411 0 0.807 0.073 1.193 0.179l1.561-1.561c-0.871-0.407-1.811-0.619-2.754-0.619-1.663 0-3.327 0.635-4.596 1.904l-3.936 4.061c-2.538 2.538-2.538 6.654 0 9.193 1.269 1.27 2.933 1.904 4.596 1.904s3.327-0.634 4.596-1.904l4.030-3.904c1.942-1.942 2.361-4.648 1.333-7.023zM30.098 1.899c-1.27-1.269-2.933-1.904-4.596-1.904-1.664 0-3.328 0.635-4.596 1.904l-4.029 3.905c-2.012 2.013-2.423 5.015-1.244 7.439l1.552-1.552c-0.459-1.534-0.107-3.261 1.096-4.463l4.039-3.914c0.851-0.849 1.98-1.318 3.183-1.318 1.201 0 2.332 0.469 3.181 1.318 1.754 1.755 1.754 4.611 0.010 6.354l-4.039 4.039c-0.849 0.85-1.98 1.317-3.181 1.317-0.306 0-0.576 0.031-0.87-0.029l-1.593 1.594c0.796 0.331 1.613 0.436 2.463 0.436 1.663 0 3.326-0.634 4.596-1.904l4.029-4.029c2.538-2.538 2.538-6.653-0-9.192z" />
              </svg>
            </a>
          </motion.li>
          <motion.li
            initial="initial"
            whileInView="animate"
            className={style.link}
            variants={itemVariants}
          >
            <a
              target="blank_"
              className={`hoverable ${isHovered ? style.hovered : ''}`}
              href="https://www.linkedin.com/learning/certificates/129dc8ada303f031204e1e858baff07d42873992df4e54bbcf8da9ca27cfd128"
            >
              Scrum:&nbsp;The Basics
              <svg viewBox="0 0 34 32" width="27" height="19">
                <path d="M9.239 22.889c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293l12.114-12.209c0.39-0.39 0.39-1.024 0-1.414s-1.023-0.39-1.414 0l-12.114 12.209c-0.391 0.39-0.391 1.023 0 1.414zM14.871 20.76c0.331 1.457-0.026 2.887-1.152 4.014l-4.039 3.914c-0.85 0.849-1.98 1.317-3.182 1.317s-2.332-0.468-3.182-1.317c-1.754-1.755-1.754-4.61-0.010-6.354l3.946-4.070c0.85-0.849 1.98-1.318 3.182-1.318 0.411 0 0.807 0.073 1.193 0.179l1.561-1.561c-0.871-0.407-1.811-0.619-2.754-0.619-1.663 0-3.327 0.635-4.596 1.904l-3.936 4.061c-2.538 2.538-2.538 6.654 0 9.193 1.269 1.27 2.933 1.904 4.596 1.904s3.327-0.634 4.596-1.904l4.030-3.904c1.942-1.942 2.361-4.648 1.333-7.023zM30.098 1.899c-1.27-1.269-2.933-1.904-4.596-1.904-1.664 0-3.328 0.635-4.596 1.904l-4.029 3.905c-2.012 2.013-2.423 5.015-1.244 7.439l1.552-1.552c-0.459-1.534-0.107-3.261 1.096-4.463l4.039-3.914c0.851-0.849 1.98-1.318 3.183-1.318 1.201 0 2.332 0.469 3.181 1.318 1.754 1.755 1.754 4.611 0.010 6.354l-4.039 4.039c-0.849 0.85-1.98 1.317-3.181 1.317-0.306 0-0.576 0.031-0.87-0.029l-1.593 1.594c0.796 0.331 1.613 0.436 2.463 0.436 1.663 0 3.326-0.634 4.596-1.904l4.029-4.029c2.538-2.538 2.538-6.653-0-9.192z" />
              </svg>
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
}
