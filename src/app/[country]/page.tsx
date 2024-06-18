"use client";

import { useParams } from "next/navigation";
import Carousel from "../components/blocs/Carousel";
import Destinations from "../components/blocs/Destinations";
import Explore from "../components/blocs/Explore";
import Team from "../components/blocs/Team";
import { Testimonials } from "../components/blocs/Testimonials";
const images = [
  "https://res.cloudinary.com/dzjr3skhe/image/upload/v1718397551/100_bl6jwk.jpg",
  "https://res.cloudinary.com/dzjr3skhe/image/upload/v1718400561/pexels-maria-paula-medina-327513436-13804519_ypmz4t.jpg",
];
import { notFound } from "next/navigation";

const Country: React.FC = () => {
  const { country } = useParams<{ country: string }>();

  if (country !== "colombia") {
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
