import style from './About.module.css';
import { motion } from 'framer-motion';

export function About() {
  const text = `With a diverse background in construction, interior design, architecture, and hospitality, I offer a unique perspective to my work. Originally from Brazil and based in Dublin, I discovered my passion for web development in 2022, when I completed a full-stack web development bootcamp, which equipped me with the skills to create visually appealing and user-friendly websites. As a dedicated professional, I'm committed to continuous learning to hone my skills and contribute to innovative projects.`;

  const words = text.split(' ');

  const aboutVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: (index) => ({
      opacity: 1,
      color: 'var(--gray-lighter)',
      y: 0,
      transition: {
        damping: 10,
        type: 'spring',
        delay: 0.04 * index,
      },
    }),
  };

  const aboutHover = {
    scale: 1.05,
    color: 'var(--orange)',
    transition: { type: 'spring', delay: -500 },
  };

  return (
    <section className={style.about} id="about">
      <div className={style.container}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={style.word}
            whileHover={aboutHover}
            variants={aboutVariants}
          >
            {index !== 0 && ' '}
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
