const MyLine = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <path
          d="M20,20 L100,20 L100,100"
          stroke="#8100ff"
          strokeWidth="4"
          fill="none"
        />

        <path
          d="M80,100 L120,100"
          stroke="#8100ff"
          strokeWidth="4"
          fill="none"
        />

        <circle
          cx="100"
          cy="100"
          r="10"
          stroke="#8100ff"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default MyLine