"use client";

import { useParams } from "next/navigation";
import Carousel from "../components/blocs/Carousel";
import Destinations from "../components/blocs/Destinations";
import Explore from "../components/blocs/Explore";
import Team from "../components/blocs/Team";
import { Testimonials } from "../components/blocs/Testimonials";
import { notFound } from "next/navigation";


const Country: React.FC = () => {
  const { country } = useParams<{ country: string }>();

  if (country !== "colombia" && country !== "peru") {
    notFound();
  }

  return (
    <div>
      <div className="w-full overflow-hidden">
        <Carousel images={images} country={country} />
        <Destinations />
        <Explore />
        <Testimonials />
        <Team />
      </div>
    </div>
  );
};

export default Country;
