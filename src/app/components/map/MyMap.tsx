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
import { countriesMap } from "./data/countryData";

const json = "/world-countries.json";
type CityMarker = {
  name: string;
  coordinates: [number, number];
};

const MyMap = () => {
  // console.log(labels)

  const [currentCountry, setCurrentCountry] = useState<string | null>(null);
  const [currentCities, setCurrentCities] = useState<CityMarker[]>([]);
  const [buttonCoordinates, setButtonCoordinates] = useState<[number, number]>([
    0, 0,
  ]);
  const [returnStyles, setReturnStyles] = useState<{
    radius: number;
    strokeWidth: number;
    fontSize: number;
  }>();
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({
    coordinates: [65, 10],
    zoom: 1.5,
  });

  const handleCountryClick = (country: any) => {
    const middle = geoCentroid(country);
    console.log(middle);
    const mapData = countriesMap.get(country.properties.name);
    if (!mapData) return;
    setButtonCoordinates(mapData.buttonCoordinates);
    setPosition({
      coordinates: [-middle[0], -middle[1]],
      zoom: mapData.zoom,
    });
    setReturnStyles({
      radius: mapData.returnStyles.radius,
      strokeWidth: mapData.returnStyles.strokeWidth,
      fontSize: mapData.returnStyles.fontSize,
    });
    setIsZoomed(true);
    setCurrentCountry(country.properties.name);
    setCurrentCities(
      Array.from(
        (mapData.cities as Map<string, [number, number]>).entries()
      ).map(([name, coordinates]) => ({
        name,
        coordinates,
      }))
    );
  };

  return (
    <div className=" w-1/2 h-[600px]">
      <ComposableMap
        projection={"geoOrthographic"}
        projectionConfig={{
          scale: 200 * position.zoom,
          rotate: [position.coordinates[0], position.coordinates[1], 0],
        }}
      >
        <defs>
          <filter id="blur-filter">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>
        <Sphere id="sphere" fill="#1B1B35" stroke="#000000" strokeWidth={2} />
        {/* Base Layer - Always blurred when zoomed */}
        <Geographies geography={json}>
          {({ geographies }) =>
            geographies.map((country) => [
              <Geography
                key={country.rsmKey}
                geography={country}
                stroke="#3C3A4F"
                strokeWidth={0.5}
                style={{
                  default: {
                    fill: "#565371",
                    filter: isZoomed ? "url(#blur-filter)" : "none",
                    opacity: 0.85,
                  },
                  hover: {
                    fill: "#565371",
                    filter: isZoomed ? "url(#blur-filter)" : "none",
                    opacity: 0.85,
                  },
                  pressed: {
                    fill: "#565371",
                    filter: isZoomed ? "url(#blur-filter)" : "none",
                    opacity: 0.85,
                  },
                }}
              />,
            ])
          }
        </Geographies>

        {/* Current Country Layer - Never blurred */}
        {isZoomed && currentCountry && (
          <Geographies geography={json}>
            {({ geographies }) =>
              geographies
                .filter((country) => country.properties.name === currentCountry)
                .map((country) => (
                  <Geography
                    key={`current-${country.rsmKey}`}
                    geography={country}
                    stroke="#FFFFFF"
                    strokeWidth={3}
                    style={{
                      default: {
                        fill: "#565371",
                        filter: "none",
                      },
                      hover: {
                        fill: "#565371",
                        filter: "none",
                      },
                      pressed: {
                        fill: "#565371",
                        filter: "none",
                      },
                    }}
                  />
                ))
            }
          </Geographies>
        )}

        {/* Clickable Countries Layer */}
        {!isZoomed && (
          <Geographies geography={json}>
            {({ geographies }) =>
              geographies.map((country) => {
                const isTargetCountry = countriesMap.has(
                  country.properties.name
                );
                if (!isTargetCountry) return null;

                return (
                  <Geography
                    key={`target-${country.rsmKey}`}
                    geography={country}
                    stroke="#FFFFFF"
                    strokeWidth={1}
                    style={{
                      default: { fill: "#565371" },
                      hover: { fill: "#403d54" },
                      pressed: { fill: "#565371" },
                    }}
                    onClick={() => handleCountryClick(country)}
                    className="focus:outline-none"
                  />
                );
              })
            }
          </Geographies>
        )}

        {
          // return button
          isZoomed ? (
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
                  r={returnStyles?.radius}
                  fill="#000000"
                  stroke="#FFFFFF"
                  strokeWidth={returnStyles?.strokeWidth}
                  opacity="0.8"
                />
                <text
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize={returnStyles?.fontSize}
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
          ) : null
        }
        {
          //country labels .. not zoomed
          !isZoomed
            ? Array.from(countriesMap.entries()).map(([name, object]) => (
                <Marker
                  key={`${name}-text`}
                  coordinates={[
                    object.labelCoordinates[0],
                    object.labelCoordinates[1],
                  ]}
                >
                  <text
                    stroke="#FFFFFF"
                    fill="#000000"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                    dy=".3em"
                  >
                    {name}
                  </text>
                </Marker>
              ))
            : null
        }
        {
          //city markers
          isZoomed && currentCities
            ? currentCities.map((city: CityMarker) => [
                <Marker
                  key={`${city.name}-text`}
                  coordinates={[city.coordinates[0], city.coordinates[1] - 1]}
                >
                  <text
                    stroke="#FFFFFF"
                    fill="#000000"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                    dy=".3em"
                  >
                    {city.name}
                  </text>
                </Marker>,
                <Marker
                  key={`${city.name}-circle`}
                  coordinates={city.coordinates}
                >
                  <circle r={8} fill="#1e1d28" />
                </Marker>,
              ])
            : null
        }
      </ComposableMap>
    </div>
  );
};

export default MyMap;
