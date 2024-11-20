"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Carousel from "../components/blocs/Carousel";
import Destinations from "../components/blocs/Destinations";
import getLocation from "../api/get/getLocation";
import HeroHighlightText from "../components/blocs/HeroHighlight";
import ThingsToDo from "../components/blocs/ThingsToDo";
import PlacesToStay from "../components/blocs/PlacesToStay";
const Country: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  if (country !== "colombia" && country !== "peru") {
    notFound();
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["location", country],
    queryFn: () => getLocation(country),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading location</div>;
  return (
    <div>
      <div className="w-full overflow-hidden">
        <Carousel images={data.countryCarouselPhotos} country={data.country} />
        <Destinations
          cities={data.cities}
          continent={data.continent}
          country={data.country}
        />
        <HeroHighlightText />
        <ThingsToDo />
        <div className="bg-gray-300">
          <PlacesToStay />
        </div>
      </div>
    </div>
  );
};

export default Country;
