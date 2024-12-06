"use client";
import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";

const json = "/world-countries.json";

const MyMap = () => {
  const countriesMap = new Map();
  countriesMap.set("Peru", {
    zoom: 6,
    buttonCoordinates: [-85.43056901477354, -10.147133411380077],
  });
  countriesMap.set("Colombia", {
    zoom: 6,
    buttonCoordinates: [-88.07345714315186, 3.9163468591418087],
  });
  countriesMap.set("Brazil", {
    zoom: 3.2,
    buttonCoordinates: [-25.17252777972014, -10.655474918772201],
  });
  countriesMap.set("Dominican Rep.", {
    zoom: 9,
    buttonCoordinates: [-56.46185863870569, 18.885420716111305],
  });

  const [currentCountry, setCurrentCountry] = useState<string | null>(null);
  const [buttonCoordinates, setButtonCoordinates] = useState<[number, number]>([
    0, 0,
  ]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({
    coordinates: [65, 10],
    zoom: 1.5,
  });

  const handleCountryClick = (country: any) => {
    const middle = geoCentroid(country);
    const mapData = countriesMap.get(country.properties.name);
    setButtonCoordinates(mapData.buttonCoordinates);
    setPosition({
      coordinates: [-middle[0], -middle[1]],
      zoom: mapData.zoom,
    });
    setIsZoomed(true);
    setCurrentCountry(country.properties.name);
  };

  return (
    <div className="w-1/2 h-[600px]">
      <ComposableMap
        projection={"geoOrthographic"}
        projectionConfig={{
          scale: 200 * position.zoom,
          rotate: [position.coordinates[0], position.coordinates[1], 0],
        }}
      >
        <Sphere id="sphere" fill="#1B1B35" stroke="#000000" strokeWidth={2} />
        {/* Base Layer */}
        <Geographies geography={json}>
          {({ geographies }) =>
            geographies.map((country) => (
              <Geography
                key={country.rsmKey}
                geography={country}
                stroke="#3C3A4F"
                strokeWidth={0.5}
                style={{
                  default: { fill: "#565371" },
                  hover: { fill: "#565371" },
                  pressed: { fill: "#565371" },
                }}
              />
            ))
          }
        </Geographies>
        <Geographies geography={json}>
          {({ geographies }) =>
            geographies.map((country) => {
              const isTargetCountry = countriesMap.has(country.properties.name);
              const isCurrent = currentCountry === country.properties.name;

              if (!isTargetCountry) return null;

              return (
                <Geography
                  key={`target-${country.rsmKey}`}
                  geography={country}
                  stroke="#FFFFFF"
                  strokeWidth={1}
                  style={{
                    default: { fill: isCurrent ? "#9B97BF" : "#565371" },
                    hover: { fill: isZoomed ? "#565371" : "#04D" },
                    pressed: { fill: isCurrent ? "#02A" : "#565371" },
                  }}
                  onClick={() =>
                    isZoomed ? null : handleCountryClick(country)
                  }
                />
              );
            })
          }
        </Geographies>
        {isZoomed ? (
          <Marker coordinates={buttonCoordinates}>
            <g
              onClick={() => {
                setPosition({ coordinates: [65, 10], zoom: 1.5 });
                setIsZoomed(false);
                setCurrentCountry(null);
              }}
              className="cursor-pointer"
            >
              <circle
                r="65"
                fill="#000000"
                stroke="#FFFFFF"
                strokeWidth="3"
                opacity="0.8"
              />
              <text
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="32"
                style={{
                  fontWeight: "bold",
                }}
              >
                <tspan x="0" dy="-0.2em">
                  ↩
                </tspan>
                <tspan x="0" dy="1.2em">
                  Return
                </tspan>
              </text>
            </g>
          </Marker>
        ) : null}
      </ComposableMap>
    </div>
  );
};

export default MyMap;
