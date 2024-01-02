import style from './About.module.css';
import { motion } from 'framer-motion';

export function About() {
  const text = `With a diverse background in construction, interior design, architecture, and hospitality, I offer a unique perspective to my work. Originally from Brazil, now based in Dublin, I discovered my passion for front-end development in 2022, when I completed a full-stack web development bootcamp, which equipped me with the skills to create visually appealing and user-friendly websites. As a dedicated professional, I'm committed to continuous learning to hone my professional skills and contribute to innovative projects.`;

  const words = text.split(' ');
  
  const aboutVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => ({
      color: 'var(--gray-lighter)',
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.04 * index,
        type: 'spring',
        damping: 10,
      },
    }),
  };

  const aboutHover = {
    scale: 1.05,
    color: 'var(--orange)',
    transition: { type: 'spring', delay: -500 },
  };

  return (
    <section id="about" className={style.about}>
      <div>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={style.word}
            variants={aboutVariants}
            initial="initial"
            whileInView="animate"
            whileHover={aboutHover}
            custom={index}
          >
            {index !== 0 && ' '}
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
