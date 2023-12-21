import style from './ScrollUp.module.css';
import { useEffect, useState } from 'react';
import arrowUp from './../../assets/icons/arrow-up-circle-fill.svg';

export function ScrollUp() {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setBackToTopBtn(true);
      } else setBackToTopBtn(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      duration: 50000, 
    });
  };

  return (
    <div>
      {backToTopBtn && (
        <button className={style.backToTop} onClick={scrollUp}>
          <img
            src={arrowUp}
            alt="Bootstrap"
            width="30"
            height="30"
            style={{ opacity: 0.4 }}
            title="back to top"
          />
        </button>
      )}
    </div>
  );
}
