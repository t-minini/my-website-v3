import React, { useState, useRef } from 'react';
import style from './About.module.css';

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

  return (
    <section id="about" className={style.about}>
      <p>
        {wordsArray.map((word, index) => (
          <span
            key={index}
            className={style.word}
            style={{
              color: hoveredWords[index]
                ? 'var(--orange)'
                : 'var(--gray-lighter)',
            }}
            onMouseOver={() => handleWordHover(index)}
            onMouseLeave={handleWordLeave}
          >
            {index !== 0 && ' '}
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
