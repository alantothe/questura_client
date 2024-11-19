"use client";

import { useParams } from "next/navigation";
import Carousel from "../components/blocs/Carousel";
import Destinations from "../components/blocs/Destinations";
import Explore from "../components/blocs/Explore";
import Team from "../components/blocs/Team";
import { Testimonials } from "../components/blocs/Testimonials";
import { notFound } from "next/navigation";
import getLocation from "../api/get/getLocation";
import { useQuery } from "@tanstack/react-query";

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
  console.log(data.countryCarouselPhotos);
  return (
    <div>
      <div className="w-full overflow-hidden">
        <Carousel images={data.countryCarouselPhotos} country={data.country} />
        <Destinations />
        <Explore />
        <Testimonials />
        <Team />
      </div>
    </div>
  );
};

export default Country;
