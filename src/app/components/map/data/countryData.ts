type CityMarker = {
  name: string;
  coordinates: [number, number];
};

type CountryData = {
  zoom: number;
  buttonCoordinates: [number, number];
  cities: Map<string, [number, number]>;
};

export const countriesMap = new Map<string, CountryData>([
  [
    "Peru",
    {
      zoom: 6,
      buttonCoordinates: [-85.43056901477354, -10.147133411380077],
      cities: new Map([
        ["Lima", [-77.0431, -12.0467]],
        ["Cusco", [-71.9675, -13.5319]],
      ]),
    },
  ],
  [
    "Colombia",
    {
      zoom: 6,
      buttonCoordinates: [-88.07345714315186, 3.9163468591418087],
      cities: new Map([
        ["Bogotá", [-74.0721, 4.711]],
        ["Medellín", [-75.5636, 6.2518]],
      ]),
    },
  ],
  [
    "Brazil",
    {
      zoom: 3.2,
      buttonCoordinates: [-25.17252777972014, -10.655474918772201],
      cities: new Map([["Brasília", [-47.9292, -15.7801]]]),
    },
  ],
  [
    "Dominican Rep.",
    {
      zoom: 9,
      buttonCoordinates: [-56.46185863870569, 18.885420716111305],
      cities: new Map([["Santo Domingo", [-69.9312, 18.4861]]]),
    },
  ],
]);
