type styleProps = {
  width: number;
  height: number;
};

const Colombia = (props: styleProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="-70 -70 680 680"
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#d80027" d="m0 384 255.8-29.7L512 384v128H0z" />
        <path fill="#0052b4" d="m0 256 259.5-31L512 256v128H0z" />
        <path fill="#ffda44" d="M0 0h512v256H0z" />
      </g>
      <circle
        cx="256"
        cy="256"
        r="300"
        fill="none"
        stroke="#8100ff"
        strokeWidth="18"
      />
    </svg>
  );
};

export default Colombia;