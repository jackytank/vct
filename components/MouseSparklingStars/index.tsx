// SparklingStars.js

import React, { useEffect } from 'react';

const MouseSparklingStars = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const arr = [1, 0.9, 0.8, 0.5, 0.2];
      const x = (1 - arr[0]) * 75;

      arr.forEach((i) => {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

        document.body.appendChild(star);

        window.setTimeout(() => {
          document.body.removeChild(star);
        }, Math.round(Math.random() * i * 600));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MouseSparklingStars;
