import Link from "next/link";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const destinations = [
  {
    name: "Medellín",
    Country: "Colombia",
    Continent: "South America",
    image:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1718397522/pexels-cesar-gaviria-232160-16637452_vhrb6k.jpg",
    CheapestItem: 79.99,
    url: "https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06",
  },
  {
    name: "Cartagena",
    Country: "Colombia",
    Continent: "South America",
    image:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1718397552/200_hkrunb.jpg",
    CheapestItem: 49.99,
    url: "https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06",
  },
  {
    name: "Bogotá",
    Country: "Colombia",
    Continent: "South America",
    image:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1718400561/pexels-maria-paula-medina-327513436-13804519_ypmz4t.jpg",
    CheapestItem: 39.99,
    url: "https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06",
  },
  {
    name: "Cali",
    Country: "Colombia",
    Continent: "South America",
    image:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1718400561/pexels-kelly-1179532-11815576_aj1hie.jpg",
    CheapestItem: 49.99,
    url: "https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06",
  },
];
type City = {
  name: string;
  photo: string;
  pricesInCents: number;
  _id: string;
};
type DestinationsProps = {
  cities: City[];
  continent: string;
  country: string;
};

const Destinations: React.FC<DestinationsProps> = ({
  cities,
  continent,
  country,
}) => {
  return (
    <div className="container mx-auto px-4 py-10 lg:py-24">
      <h2 className="text-4xl lg:text-7xl font-bold mb-8 text-black">
        OUR TOUR DESTINATIONS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
        {cities.map((cities) => (
          <Link href={cities.photo} passHref key={cities.name} legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-80 lg:w-full"
            >
              <div className="overflow-hidden rounded-lg">
                <DirectionAwareHover imageUrl={cities.photo}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 lg:p-6">
                    <p className="font-bold text-xl lg:text-2xl">
                      {cities.name}
                    </p>
                    <p className="font-normal text-sm lg:text-base">
                      Prices starting at ${cities.pricesInCents}
                    </p>
                  </div>
                </DirectionAwareHover>
              </div>
              <h3 className="mt-2 text-black font-bold text-base md:text-lg lg:text-2xl">
                {cities.name}
              </h3>
              <div className="text-base lg:text-lg font-thin">
                <p className="text-black">{`${country}, ${continent}`}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
