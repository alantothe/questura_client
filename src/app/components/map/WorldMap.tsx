"use client";

import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
} from "react-simple-maps";

const geoUrl = "/world-countries.json";

const WorldMap = () => {
  const [position, setPosition] = useState<[number, number]>([0, 0]);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;

    setPosition(([x, y]) => [
      x + event.movementX * 0.5,
      Math.min(Math.max(y - event.movementY * 0.5, -90), 90),
    ]);
  };

  return (
    <div
      className="w-1/2 h-[600px] cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{
          scale: 200,
          rotate: [position[0], position[1], 0],
        }}
      >
        <Sphere id="sphere" fill="#1B1B35" stroke="#000000" strokeWidth={1} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#565371"
                stroke="#3C3A4F"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
