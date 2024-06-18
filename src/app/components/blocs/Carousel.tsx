"use client";

import React, { useRef, useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  country: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, country }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [textStyle, setTextStyle] = useState({
    x: "50%",
    y: "80%",
    fontSize: "clamp(6px, 0.8vw, 12px)",
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      let pxValue = 6;
      let vwValue = 0.8;
      let maxPxValue = 12;
      let yPosition = "80%";

      if (
        width < 600 ||
        (width >= 1024 && width <= 1366 && height <= 1366 && height >= 1024) ||
        (width >= 768 && width <= 912 && height <= 1368 && height >= 1024) ||
        (width >= 853 && width <= 1280 && height <= 1280 && height >= 853)
      ) {
        pxValue = 2;
        vwValue = 0.4;
        maxPxValue = 6;
        yPosition = "55%";
      } else if (width < 900) {
        pxValue = 5;
        vwValue = 0.7;
        maxPxValue = 10;
        yPosition = "85%";
      } else {
        pxValue = 6;
        vwValue = 0.8;
        maxPxValue = 12;
        yPosition = "80%";
      }

      setTextStyle({
        x: "50%",
        y: yPosition,
        fontSize: `clamp(${pxValue}px, ${vwValue}vw, ${maxPxValue}px)`,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      const scrollPosition = width * 0.42; // Start position so that the scroll position is at 5%
      carouselRef.current.scrollLeft = scrollPosition;
    }
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden px-2 sm:px-5"
      style={{ height: "65vh" }}
    >
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll custom-scrollbar h-full"
      >
        {images.map((image, index) => (
          <div className="relative flex-shrink-0 w-full h-full" key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 20"
          preserveAspectRatio="xMidYMid slice"
          className="z-10"
        >
          <text
            x={textStyle.x} // Centers the text horizontally
            y={textStyle.y} // Adjust this value to move the text closer to the bottom
            dominantBaseline="middle" // Ensures the text aligns with the bottom based on the text's baseline
            textAnchor="middle" // Correct property to center the text horizontally
            className="fill-white"
            style={{
              fontSize: textStyle.fontSize, // Responsive font size
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {country}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
