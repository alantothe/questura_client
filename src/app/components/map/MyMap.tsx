"use client";
import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Annotation,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";

const json = "/world-countries.json";

const MyMap = () => {
  const countriesMap = new Map();
  countriesMap.set("Peru", { zoom: 6, buttonCoordinates: [null, null] });
  countriesMap.set("Colombia", { zoom: 6, buttonCoordinates: [null, null] });
  countriesMap.set("Brazil", { zoom: 2, buttonCoordinates: [null, null] });
  countriesMap.set("Dominican Rep.", {
    zoom: 6,
    buttonCoordinates: [null, null],
  });
  console.log(countriesMap);
  const [position, setPosition] = useState({ coordinates: [65, 10], zoom: 1 });
  const [isZoomed, setIsZoomed] = useState(false);
  const handleCountryClick = (country: any) => {
    // geoCentroid finds the middle of country, returns array
    const middle = geoCentroid(country);
    const mapData = countriesMap.get(country.properties.name);
    console.log(mapData.zoom);
    // negative values because of how the globe rotation works
    setPosition({
      coordinates: [-middle[0], -middle[1]],
      zoom: mapData.zoom,
    });
  };
  return (
    <div>
      <button className="text-black">Reset View</button>
      <ComposableMap
        projection={"geoOrthographic"}
        projectionConfig={{
          //scale, controls the globe size
          scale: 200 * position.zoom,
          //rotate, is the map starting position
          // [Longitude, Latitude, Roll ]
          rotate: [position.coordinates[0], position.coordinates[1], 0],
        }}
      >
        <Sphere id="sphere" fill="#1B1B35" stroke="#000000" strokeWidth={2} />
        <Geographies geography={json}>
          {({ geographies }) =>
            geographies.map((country) => {
              const isTargetCountry = countriesMap.has(country.properties.name);
              return (
                <Geography
                  geography={country}
                  key={country.rsmKey}
                  stroke="#3C3A4F"
                  style={{
                    default: { fill: isTargetCountry ? "#9B97BF" : "#565371" },
                    hover: { fill: isTargetCountry ? "#04D" : "#565371" },
                    pressed: { fill: "#02A" },
                  }}
                  onClick={() => {
                    handleCountryClick(country);
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MyMap;
