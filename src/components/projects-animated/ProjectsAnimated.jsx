import { useRef } from 'react';
import projectsJSON from '../../projects.json';
import style from './ProjectsAnimated.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ projectsJSON }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section className={style.container} key={projectsJSON.id}>
      <div className={style.imageContainer} ref={ref}>
        <img src={projectsJSON.img} alt="" />
      </div>
      <motion.div className={style.textContainer} style={{ y }}>
        <div className={style.topWrapper}>
          <h2>{projectsJSON.project}</h2>
          <a href={projectsJSON.github} target={'_blank'} rel="noreferrer">
            Github
          </a>
          <a href={projectsJSON.website} target={'_blank'} rel="noreferrer">
            Website
          </a>
        </div>
        <p>{projectsJSON.description}</p>
      </motion.div>
    </section>
  );
};

export function ProjectsAnimated() {
  return (
    <div className={style.portfolio} id="projects">
      {projectsJSON.toReversed().map((projectsJSON) => (
        <ProjectCard projectsJSON={projectsJSON} key={projectsJSON.id} />
      ))}
    </div>
  );
}
