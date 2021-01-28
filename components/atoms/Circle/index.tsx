import { useEffect, useRef } from 'react';
import style from './Circle.module.css';

export default function Circle() {
  const random = () => Math.random() * 10;
  const circle = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const value = Math.floor(random() * 50);
    const x = value ;
    const y = value;
    // const circle = document.querySelector('.circle');
    circle.current.style.setProperty('--random-x1', `${x}em`);
    circle.current.style.setProperty('--random-y1', `${y}em`);
    console.log(x, y);
  });

  return (
    <svg
      ref={circle}
      className={`${style.svg} ${style.svgCircle}`}
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="19.8158"
        cy="20.2368"
        r="17.3158"
        transform="rotate(-90 19.8158 20.2368)"
        stroke="#3F69FF"
        strokeWidth="5"
      />
    </svg>
  );
}
