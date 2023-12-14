import { useState } from 'react';
import style from './ProjectsAnimated.module.css';
import projectsJSON from '../../projects.json';

export function ProjectsAnimated() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id="projects"
      className={style.projects}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.projects__container}>
        {projectsJSON.toReversed().map((projectsJSON) => {
          return (
            <div key={projectsJSON.id} className={style.projects__card}>
              <div className={style.projects__img}>
                <img src={projectsJSON.img} alt="projects screenshot" />
              </div>
              <div className={style.projects__info}>
                <div className={style.info__top}>
                  <h3>{projectsJSON.project}</h3>
                  <div className={style.info__links}>
                    <a
                      href={projectsJSON.github}
                      target={'_blank'}
                      rel="noreferrer"
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
                </div>
                <div className={style.info__bottom}>
                  <p>{projectsJSON.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
