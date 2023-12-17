import React from 'react';
import style from './App.module.css';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Navbar } from './components/navbar/Navbar';
import { Skills } from './components/skills/Skills';
import { Cursor } from './components/cursor/Cursor';
import { Contact } from './components/contact/Contact';
import { Vertical } from './components/name-vertical/Vertical';
import { ProjectsAnimated } from './components/projects-animated/ProjectsAnimated';



function App() {
  return (
    <section className={style.pageContainer}>
      <Cursor />
      <Navbar />
      <Vertical />
      <Hero />
      <About />
      <Skills />
      <ProjectsAnimated />
      {/* <Projects /> */}
      <Contact />
    </section>
  );
}

export default App;
