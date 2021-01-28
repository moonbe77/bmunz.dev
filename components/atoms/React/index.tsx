import style from './Circle.module.css';

export default function Circle() {
  return (
    <div>
      <svg
        id="svgRect1"
        className={`${style.svg} ${style.svgRect}`}
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="21.5084"
          width="24.7368"
          height="24.7368"
          transform="rotate(-45 4 21.5084)"
          stroke="#3F69FF"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}
