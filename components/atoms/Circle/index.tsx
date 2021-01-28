import style from './Circle.module.css';

export default function Circle() {
  return (
    <div>
      <svg
        id="svgCircle"
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
    </div>
  );
}
