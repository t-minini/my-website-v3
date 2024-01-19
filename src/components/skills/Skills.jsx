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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
              </svg>
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
}
