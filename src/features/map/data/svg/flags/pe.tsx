type styleProps = {
  width: number;
  height: number;
};

const Peru = (props: styleProps) => {
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
        <path
          fill="#d80027"
          d="M0 0h167l86 41.2L345 0h167v512H345l-87.9-41.4L167 512H0z"
        />
        <path fill="#eee" d="M167 0h178v512H167z" />
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

export default Peru;
