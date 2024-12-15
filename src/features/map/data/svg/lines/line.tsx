const MyLine = () => {
  return (
    <g>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 ">
        <circle
          cx="20"
          cy="20"
          r="5"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="#8100ff"
        />

        {/* first line - The "L" shape */}
        <path
           d="M20,20 L100,20"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />
        {/* second Line - adjustable */}
        <path
          d="M100,20 L100,100" // You can change these numbers to move the line
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />
        {/* horizontal line - at circle */}
        <path
          d="M80,100 L120,100"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />

        <circle
          cx="100"
          cy="100"
          r="5"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="#8100ff"
        />
        <circle
          cx="100"
          cy="100"
          r="10"
          stroke="#8100ff"
          strokeWidth=".25"
          fill="none"
        />
      </svg>
    </g>
  );
};

export default MyLine;
