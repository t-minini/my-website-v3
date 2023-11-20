import style from './App.module.css';

import { Hero } from './components/hero/Hero';

function App() {
  return (
    <div className={style.app}>
      <Hero />
    </div>
  );
}

export default App;
