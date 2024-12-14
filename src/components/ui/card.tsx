import React, { useState } from "react";

type TourCard = {
  id: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  isFavorite?: boolean;
  isPlaceholder?: boolean;
};

// mock data array
const tourData: TourCard[] = [
  {
    id: "1",
    title: "Party tour in Miraflores with Bar Crawl Lima",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732121394/Screenshot_2024-11-20_at_11.46.57_AM_wh4d9k.png",
    rating: 5,
    reviews: 171,
    price: 23.0,
    isFavorite: false,
  },
  {
    id: "2",
    title: "Lima Food Tour: Local Markets & Peruvian Classics",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732121586/Screenshot_2024-11-19_at_12.49.54_PM_mt3wjm.png",
    rating: 5,
    reviews: 245,
    price: 45.0,
    isFavorite: false,
  },
  {
    id: "3",
    title: "Huacachina Sandboarding & Dune Buggy Adventure",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732121665/Screenshot_2024-11-20_at_11.54.11_AM_rykdem.png",
    rating: 4.9,
    reviews: 189,
    price: 89.0,
    isFavorite: false,
  },
  {
    id: "4",
    title: "Ica Day Trip",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732121768/Screenshot_2024-11-20_at_11.56.01_AM_djnjxi.png",
    rating: 4.8,
    reviews: 156,
    price: 75.0,
    isFavorite: false,
  },
  {
    id: "6",
    title: "Street Food Night Tour: Lima's Best Local Eats",
    image:
      "https://res.cloudinary.com/dakv9lakh/image/upload/v1732122087/Screenshot_2024-11-20_at_12.01.12_PM_oc9wti.png",
    rating: 4.7,
    reviews: 198,
    price: 35.0,
    isFavorite: false,
  },
];

function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
const Card = () => {
  // state to track current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // calculate total number of slides needed (3 cards per slide)
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(tourData.length / cardsPerSlide);

  // get current cards to display
  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;
    const currentCards = tourData.slice(startIndex, endIndex);

    // add placeholder cards if needed
    while (currentCards.length < cardsPerSlide) {
      currentCards.push({
        ...tourData[0],
        id: `placeholder-${currentCards.length}`,
        isPlaceholder: true,
      });
    }
    return currentCards;
  };

  // handle navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  return (
    <div className="relative w-full">
      {/* card container with fixed width for 3 cards */}
      <div className="grid grid-cols-3 gap-12 p-6">
        {getCurrentCards().map((tour) => (
          <div
            key={tour.id}
            className={`relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ${
              tour.isPlaceholder ? "invisible" : ""
            }`}
          >
            {/* image container - fixed height */}
            <div className="relative h-[400px] w-full">
              <img
                src={tour.image}
                alt={tour.title}
                className="object-cover w-full h-full"
                style={{ objectPosition: "50% 50%" }} // ensures consistent image centering
              />
              {/* favorite button */}
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill={tour.isFavorite ? "currentColor" : "none"}
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

            {/* content - fixed height */}
            <div className="p-4 h-[200px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-black h-[56px]">
                  {truncateText(tour.title, 45)}
                </h3>

                {/* rating */}
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
                    {tour.reviews} reviews
                  </span>
                </div>
              </div>

              {/* price - positioned at bottom */}
              <div className="flex items-center mt-auto">
                <span className="text-sm text-gray-900">from</span>
                <span className="ml-1 text-xl font-bold text-[#00B7A9]">
                  ${tour.price.toFixed(2)}
                </span>
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

export default Card;
