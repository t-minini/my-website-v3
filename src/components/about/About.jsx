import React, { useState, useRef } from 'react';
import style from './About.module.css';

import { motion } from 'framer-motion';

export function About() {
  const text = `With a diverse background in construction, interior design architecture, and hospitality, I offer a unique perspective to my work. Originally from Brazil, now based in Dublin, I discovered my passion for front-end development in 2022, when I completed Ironhack's full-stack web development bootcamp, which equipped me with the skills to create visually appealing and user-friendly websites. As a dedicated professional, I'm committed to continuous learning to hone my professional skills and contribute to innovative projects.`;

  const wordsArray = text.split(' ');

  const [hoveredWords, setHoveredWords] = useState({});
  const timeoutRef = useRef(null);

  const handleWordHover = (index) => {
    setHoveredWords((prevHoveredWords) => ({
      ...prevHoveredWords,
      [index]: true,
    }));
  };

  const handleWordLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setHoveredWords({});
    }, 2000);
  };

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      color: 'var(--gray-lighter)',
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        color: {duration: 0.2},
      },
      hidden: {
        // color: "green",
        // opacity: 1,
        y: 20,
        transition: {
          type: 'spring',
          damping: 12,
          stiffness: 100,
        },
      },
    },
  };

  return (
    <section id="about" className={style.about}>
      <motion.div variants={container} initial="hidden" animate="visible">
        {wordsArray.map((word, index) => (
          <motion.span
            key={index}
            className={style.word}
            style={{
              color: hoveredWords[index] ? 'var(--orange)' : 'var(--black)',
            }}
            onMouseOver={() => handleWordHover(index)}
            onMouseLeave={handleWordLeave}
            variants={child}
          >
            {index !== 0 && ' '}
            {word}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
