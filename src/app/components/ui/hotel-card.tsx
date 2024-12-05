import React, { useState } from "react";
import Image from "next/image";
// define the type for hotel data
type HotelCard = {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  isFavorite?: boolean;
  isPlaceholder?: boolean;
};

// mock data for hotels

const hotelData: HotelCard[] = [
  {
    id: "1",
    name: "JW Marriott Hotel Lima - Luxury Oceanfront",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732127215/Screenshot_2024-11-20_at_1.26.38_PM_rvrdvl.png",
    rating: 4.8,
    reviews: 2341,
    pricePerNight: 289.0,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Hilton Lima Miraflores - Central Location",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732127336/Screenshot_2024-11-20_at_1.28.48_PM_cv1m9i.png",
    rating: 4.7,
    reviews: 1876,
    pricePerNight: 245.0,
    isFavorite: false,
  },
  {
    id: "3",
    name: "Dazzler by Wyndham Lima Lince",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732127565/Screenshot_2024-11-20_at_1.32.36_PM_l3hruk.png",
    rating: 4.5,
    reviews: 892,
    pricePerNight: 125.0,
    isFavorite: false,
  },
  {
    id: "4",
    name: "BTH Hotel Lima - Boutique Experience",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732127741/Screenshot_2024-11-20_at_1.34.24_PM_qzvert.png",
    rating: 4.6,
    reviews: 756,
    pricePerNight: 165.0,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Belmond Miraflores Park - Luxury Ocean Views",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732127846/Screenshot_2024-11-20_at_1.37.21_PM_g6ctrp.png",
    rating: 4.9,
    reviews: 1543,
    pricePerNight: 395.0,
    isFavorite: false,
  },
  {
    id: "6",
    name: "Hotel Century Inn",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732127975/Screenshot_2024-11-20_at_1.39.31_PM_krffpk.png",
    rating: 4.3,
    reviews: 445,
    pricePerNight: 85.0,
    isFavorite: false,
  },
];

const HotelCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(hotelData.length / cardsPerSlide);

  // get current hotels to display
  const getCurrentHotels = () => {
    const startIndex = currentSlide * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;
    const currentHotels = hotelData.slice(startIndex, endIndex);

    while (currentHotels.length < cardsPerSlide) {
      currentHotels.push({
        ...hotelData[0],
        id: `placeholder-${currentHotels.length}`,
        isPlaceholder: true,
      });
    }
    return currentHotels;
  };

  // navigation handlers
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-3 gap-12 p-6">
        {getCurrentHotels().map((hotel) => (
          <div
            key={hotel.id}
            className={`relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ${
              hotel.isPlaceholder ? "invisible" : ""
            }`}
          >
            {/* image container */}
            <div className="relative h-[400px] w-full">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={currentSlide === 0}
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill={hotel.isFavorite ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* content section */}
            <div className="p-4 h-[200px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-black">
                  {hotel.name}
                </h3>

                {/* rating section */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#00B7A9]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600">
                    {hotel.reviews} reviews
                  </span>
                </div>
              </div>

              {/* price section */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-900">per night</span>
                  <span className="text-xl font-bold text-[#00B7A9]">
                    ${hotel.pricePerNight.toFixed(2)}
                  </span>
                </div>
                <button className="px-4 py-2 bg-[#00B7A9] text-white rounded-lg hover:bg-[#009689] transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* navigation buttons */}
      <button
        onClick={handlePrevSlide}
        disabled={currentSlide === 0}
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors ${
          currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        disabled={currentSlide === totalSlides - 1}
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors ${
          currentSlide === totalSlides - 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default HotelCard;
