import style from './Cursor.module.css';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useCallback } from 'react';

export function Cursor() {
  const circleRef = useRef(null);
  const controls = useAnimation();

  const updateCursorPosition = useCallback(
    (e) => {
      if (circleRef.current) {
        requestAnimationFrame(() => {
          controls.start({
            x: e.clientX - 15,
            y: e.clientY - 15,
            transition: { duration: 0.09 },
          });
        });
      }
    },
    [controls]
  );

  const handleHover = useCallback(
    (scale) => () => {
      if (circleRef.current) {
        controls.start({
          scale,
          transition: { duration: 0.3 },
        });
      }
    },
    [controls]
  );

  useEffect(() => {
    const hoverables = document.querySelectorAll('.hoverable');

    const handleMouseLeave = () => {
      controls.start({
        opacity: 0,
      });
    };

    const handleMouseEnter = () => {
      controls.start({
        opacity: 1,
      });
    };

    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mousemove', updateCursorPosition);

    hoverables.forEach((element) => {
      element.addEventListener('mouseleave', handleHover(1));
      element.addEventListener('mouseenter', handleHover(2.5));

      return () => {
        element.removeEventListener('mouseleave', handleHover(1));
        element.removeEventListener('mouseenter', handleHover(2.5));
      };
    });

    return () => {
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [controls, handleHover, updateCursorPosition]);

  return (
    <div className={style.cursor}>
      <motion.div ref={circleRef} animate={controls}>
        <svg height="30" width="30">
          <circle cx="12" cy="12" r="10" strokeWidth="0"></circle>
        </svg>
      </motion.div>
    </div>
  );
}
