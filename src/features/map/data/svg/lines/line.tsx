// type LineStyles = {
//   startingCircleRadius : number
//   lineOneLength:
// }

const MyLine = () => {
  return (
    // <g transform="rotate(90, 60, 60)">
    <g>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3200">
        <circle
          cx="120"
          cy="120"
          r="1"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="#8100ff"
        />

        {/* first line - the "L" shape */}
        <path
          d="M120,120 L95,120"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />
        {/* second Line - adjustable */}
        <path
          d="M95,120 L80,110"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />
        {/* vertical line - at circle */}
        <path
          d={`M80,100 L80,120`}
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />

        <circle
          cx="80"
          cy="110"
          r="1"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="#8100ff"
        />
        <circle
          cx="80"
          cy="110"
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
