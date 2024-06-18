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

const Destinations: React.FC = () => {
  return (
    <div className="py-10 lg:py-24 mb-2 mx-auto lg:mx-40">
      <h2 className="px-2 text-4xl lg:text-7xl font-bold font-weight-100 mb-8 text-black">
        OUR TOUR DESTINATIONS
      </h2>

      <div className="flex overflow-x-scroll lg:overflow-x-visible space-x-4 scrollbar-hide">
        {destinations.map((destination) => (
          <Link
            href={destination.url}
            passHref
            key={destination.name}
            legacyBehavior
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-80 lg:w-1/4 px-2 mb-4"
            >
              <div className="flex overflow-hidden rounded-lg">
                <DirectionAwareHover imageUrl={destination.image}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 sm:p-6">
                    <p className="font-bold text-xl">{destination.name}</p>
                    <p className="font-normal text-sm">
                      Prices starting at ${destination.CheapestItem}
                    </p>
                  </div>
                </DirectionAwareHover>
              </div>
              <h3 className="text-black font-bold text-base md:text-lg lg:text-xl">
                {destination.name}
              </h3>
              <div className="flex font-thin text-base">
                <p className="text-black">{`${destination.Country}, ${destination.Continent}`}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
