import React from 'react';
import style from './App.module.css';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Navbar } from './components/navbar/Navbar';
import { Skills } from './components/skills/Skills';
import { Cursor } from './components/cursor/Cursor';
import { Contact } from './components/contact/Contact';
import { Vertical } from './components/name-vertical/Vertical';
import { Projects } from './components/projects/Projects';

function App() {
  return (
    <div className={style.pageContainer}>
      <Cursor />
      <Navbar />
      <Vertical />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
