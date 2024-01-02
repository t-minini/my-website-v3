import { useRef, useState } from 'react';
import style from './Projects.module.css';
import projectsJSON from '../../projects.json';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ projectsJSON }) => {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

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
            href={projectsJSON.github}
            target={'_blank'}
            rel="noreferrer"
            k
            className={`hoverable ${isHovered ? style.hovered : ''}`}
          >
            Github
          </a>
          <a
            href={projectsJSON.website}
            target={'_blank'}
            rel="noreferrer"
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
    <div className={style.portfolio} id="projects">
      {projectsJSON.toReversed().map((projectsJSON) => (
        <ProjectCard projectsJSON={projectsJSON} key={projectsJSON.id} />
      ))}
    </div>
  );
}
