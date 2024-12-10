import Brazil from "./svg/flags/br";
import Colombia from "./svg/flags/co";
import Peru from "./svg/flags/pe";
import DR from "./svg/flags/do";

type CityMarker = {
  name: string;
  coordinates: [number, number];
};

type styleProps = {
  width: number;
  height: number;
};

type CountryData = {
  zoom: number;
  buttonCoordinates: [number, number];
  labelCoordinates: [number, number];
  flagCoordinates: [number, number];
  cities: Map<string, [number, number]>;
  returnStyles: {
    radius: number;
    strokeWidth: number;
    fontSize: number;
  };
  flagStyles: {
    width: number;
    height: number;
  },
  // lineCoordinates : {
  //   parallel: {
  //     from : [number, number]
  //     to: [number, number]
  //   } 
     
  // }
  component: React.ComponentType<styleProps>;
};

export const countriesMap = new Map<string, CountryData>([
  [
    "Peru",
    {
      zoom: 6,
      buttonCoordinates: [-85.43056901477354, -10.147133411380077],
      labelCoordinates: [-87.43056901477354, -10.147133411380077],
      flagCoordinates: [-78.23056901477354, -7.147133411380077],

      cities: new Map([
        ["Lima", [-77.0431, -12.0467]],
        ["Cusco", [-71.9675, -13.5319]],
      ]),
      returnStyles: {
        radius: 65,
        strokeWidth: 3,
        fontSize: 32,
      },
      flagStyles: {
        width: 25,
        height: 25,
      },
      component: Peru,
    },
  ],
  [
    "Colombia",
    {
      zoom: 9,
      buttonCoordinates: [-67.17345714315186, 8.763468591418087],
      labelCoordinates: [-88.07345714315186, 3.9163468591418087],
      flagCoordinates: [-75.70345714315186, 5.4063468591418087],

      cities: new Map([
        ["Bogotá", [-74.0721, 4.711]],
        ["Medellín", [-75.5636, 6.2518]],
        ["Cartagena", [-75.5144, 10.3997]],
      ]),
      returnStyles: {
        radius: 65,
        strokeWidth: 3,
        fontSize: 32,
      },
      flagStyles: {
        width: 25,
        height: 25,
      },
      component: Colombia,
    },
  ],
  [
    "Brazil",
    {
      zoom: 3.2,
      buttonCoordinates: [-25.17252777972014, -10.655474918772201],
      labelCoordinates: [-54.40252777972014, -6.885474918772201],
      flagCoordinates: [-56.50252777972014, -8.655474918772201],

      cities: new Map([
        ["Brasília", [-47.9292, -15.7801]],
        ["São Paulo", [-46.6333, -23.5505]],
        ["Salvador", [-38.5014, -12.9714]],
      ]),
      returnStyles: {
        radius: 65,
        strokeWidth: 3,
        fontSize: 32,
      },
      flagStyles: {
        width:25,
        height: 25,
      },
      component: Brazil,
    },
  ],
  [
    "Dominican Rep.",
    {
      zoom: 30,
      buttonCoordinates: [-68.46185863870569, 20.885420716111305],
      labelCoordinates: [-70.46185863870569, 21.885420716111305],
      flagCoordinates: [-65.46185863870569, 25.885420716111305],
      cities: new Map([["Santo Domingo", [-69.9312, 18.4861]]]),
      returnStyles: {
        radius: 60,
        strokeWidth: 3,
        fontSize: 32,
      },
      flagStyles: {
        width: 25,
        height: 25,
      },
      component: DR,
    },
  ],
]);
