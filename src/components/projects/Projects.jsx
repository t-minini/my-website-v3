import style from './Projects.module.css';
import projectsJSON from '../../projects.json';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ projectsJSON }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationValues, setAnimationValues] = useState([-400, 400]);

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  useEffect(() => {
    // Update animation values based on screen size
    const updateAnimationValues = () => {
      const screenWidth = window.innerWidth;

      // Adjust these values based on requirements
      if (screenWidth <= 1024 || screenWidth <= 1179) {
        setAnimationValues([-0, 0]);
      } else {
        setAnimationValues([-400, 400]);
      }
    };

    // Call the function on mount and window resize
    updateAnimationValues();
    window.addEventListener('resize', updateAnimationValues);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateAnimationValues);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const y = useTransform(scrollYProgress, [0, 1], animationValues);

  return (
    <section
      className={style.container}
      key={projectsJSON.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.imageContainer} ref={ref}>
        <img loading="lazy" src={projectsJSON.img} alt="" />
      </div>
      <motion.div className={style.textContainer} style={{ y }}>
        <div className={style.topWrapper}>
          <h2>{projectsJSON.project}</h2>
          <a
            rel="noreferrer"
            target={'_blank'}
            href={projectsJSON.github}
            className={`hoverable ${isHovered ? style.hovered : ''}`}
          >
            Github
          </a>
          <a
            rel="noreferrer"
            target={'_blank'}
            href={projectsJSON.website}
            className={`hoverable ${isHovered ? style.hovered : ''}`}
          >
            Website
          </a>
        </div>
        <p>{projectsJSON.description}</p>
      </motion.div>
    </section>
  );
};

export function Projects() {
  return (
    <div className={style.projects} id="projects">
      {projectsJSON.toReversed().map((projectsJSON) => (
        <ProjectCard projectsJSON={projectsJSON} key={projectsJSON.id} />
      ))}
    </div>
  );
}
