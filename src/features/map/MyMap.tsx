"use client";
import dynamic from 'next/dynamic';
import { Inter, Montserrat } from "next/font/google";
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
import MyLine from "./data/svg/lines/line"

const DynamicSphere = dynamic(
  () => import('react-simple-maps').then(mod => mod.Sphere),
  { ssr: false }
);

const json = "/world-countries.json";
type CityMarker = {
  name: string;
  coordinates: [number, number];
};

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100"] });

const MyMap = () => {
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
    <div className=" w-full h-full">
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
  
        <DynamicSphere id="sphere" fill="#1B1B35" stroke="#000000" strokeWidth={2} />
 
        {/* base layer - always blurred when zoomed */}
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

        {/* current country layer - never blurred */}
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

        {/* click countries layer .. not zoomed*/}
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

        {/* return button .. zoomed */}
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
        ) : null}
        {/* country labels & flags .. not zoomed */}
        {!isZoomed
          ? Array.from(countriesMap.entries()).map(([name, object]) => {
              const Flag = object.component;
              return [
                <Marker
                  key={`${name}-text`}
                  coordinates={[
                    object.labelCoordinates[0],
                    object.labelCoordinates[1],
                  ]}
                >
                  <text
                    stroke="#8100ff"
                    fill="#8100ff"
                    fontSize="14"
                    fontWeight="100"
                    className={montserrat.className}
                    style={{
                      fontVariationSettings: "'wght' 100",
                      paintOrder: "stroke",
                      strokeWidth: "0.2",
                    }}
                    textAnchor="middle"
                    dy=".3em"
                  >
                    {name}
                  </text>
                </Marker>,

                <Marker
                  key={`${name}-flag`}
                  coordinates={[
                    object.flagCoordinates[0],
                    object.flagCoordinates[1],
                  ]}
                >
                  <Flag
                    key={`${name}-text`}
                    width={object.flagStyles.width}
                    height={object.flagStyles.height}
                  />
                </Marker>,
           //Don't use <Line/> make an svg and place and place the svg(line) on one coordinate (from and to will make it bend)
 
                    <Marker key={`test-line-marker-outer-${name}`} coordinates={[-81, 3.5]}>
                   <MyLine/>
                  </Marker>
               
              ];
            })
          : null}
        {/* city labels .. zoomed */}
        {isZoomed && currentCities
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
                <g
                  fill="none"
                  stroke="#FF5533"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
              </Marker>,
            ])
          : null}
      </ComposableMap>
    </div>
  );
};

export default MyMap;
