import gsap from 'gsap';
import style from './Cursor.module.css';
import React, { useEffect, useRef } from 'react';

export function Cursor() {
  // Ref for the big ball element
  const bigBallRef = useRef(null);

  // Function to update cursor position based on mouse movement
  const updateCursorPosition = (e) => {
    if (bigBallRef.current) {
      // Use gsap to smoothly update position
      gsap.to(bigBallRef.current, { duration: 0.4, x: e.clientX - 15, y: e.clientY - 15 });
    }
  };

  // Function to handle hover events with a specified scale
  const handleHover = (scale) => () => {
    if (bigBallRef.current) {
      // Use gsap to smoothly adjust the scale
      gsap.to(bigBallRef.current, { duration: 0.3, scale });
    }
  };

  // Effect to set up mouse event listeners
  useEffect(() => {
    // Select all elements with the 'hoverable' class
    const hoverables = document.querySelectorAll('.hoverable');

    // Function to handle mouse enter with a scale of 3
    const handleMouseEnter = handleHover(3);

    // Function to handle mouse leave with a scale of 1
    const handleMouseLeave = handleHover(1);

    // Add mousemove event listener to update cursor position
    document.body.addEventListener('mousemove', updateCursorPosition);

    // Attach mouse event listeners for hover and hover out on hoverable elements
    hoverables.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup: Remove the event listeners
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Cleanup: Remove the mousemove event listener
    return () => {
      document.body.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  // Render the cursor component
  return (
    <div className={style.cursor}>
      <div ref={bigBallRef} className={`${style.cursor__ball} ${style['cursor__ball--big']}`}>
        <svg height="30" width="30">
          <circle cx="12" cy="12" r="7" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
}
