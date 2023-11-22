import style from './Cursor.module.css';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import gsap from 'gsap';

export function Cursor() {
  const bigBallRef = useRef(null);
  const [hoverables, setHoverables] = useState([]);
  const isCursorMoving = useRef(false);

  const updateCursorPosition = useCallback((e) => {
    if (bigBallRef.current) {
      isCursorMoving.current = true;
  
      gsap.to(bigBallRef.current, { duration: 0.4, x: e.pageX - 15, y: e.pageY - 15, onComplete: () => {
        isCursorMoving.current = false;
      } });
    }
  }, []);

  const onMouseHover = useCallback(() => {
    if (bigBallRef.current) {
      gsap.to(bigBallRef.current, { duration: 0.3, scale: 4 });
    }
  }, []);

  const onMouseHoverOut = useCallback(() => {
    if (bigBallRef.current) {
      gsap.to(bigBallRef.current, { duration: 0.3, scale: 1 });
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (bigBallRef.current && !isCursorMoving.current) {
      const cursorRect = bigBallRef.current.getBoundingClientRect();
  
      const newPosX = window.scrollX + cursorRect.left;
      const newPosY = window.scrollY + cursorRect.top;
  
      gsap.to(bigBallRef.current, { duration: 0.1, x: newPosX, y: newPosY, overwrite: true });
    }
  }, []);

  useEffect(() => {
    setHoverables(document.querySelectorAll('.hoverable'));

    document.body.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.body.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [updateCursorPosition]);

  useEffect(() => {
    hoverables.forEach((element) => {
      element.addEventListener('mouseenter', onMouseHover);
      element.addEventListener('mouseleave', onMouseHoverOut);

      return () => {
        element.removeEventListener('mouseenter', onMouseHover);
        element.removeEventListener('mouseleave', onMouseHoverOut);
      };
    });
  }, [hoverables, onMouseHover, onMouseHoverOut]);

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={style.cursor}>
      <div ref={bigBallRef} className={`${style.cursor__ball} ${style['cursor__ball--big']}`}>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
}
