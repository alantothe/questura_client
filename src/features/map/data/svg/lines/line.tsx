const MyLine = ({ x = 0, y = 0 }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-45 -25 50 30" width="50" height="30">
        <circle
          cx="0"
          cy="0"
          r="1"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="#8100ff"
        />

        <path
          d="M0,0 L-25,0"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />
        <path
          d="M-25,0 L-40,-10"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />
        <path
          d="M-40,-20 L-40,0"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />

        <circle
          cx="-40"
          cy="-10"
          r="1"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="#8100ff"
        />
        <circle
          cx="-40"
          cy="-10"
          r="4"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />
      </svg>
    </g>
  );
};

export default MyLine;
