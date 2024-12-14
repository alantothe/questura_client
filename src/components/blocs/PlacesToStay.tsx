import HotelCard from "../ui/hotel-card";
const PlacesToStay = () => {
  return (
    <div className="container mx-auto px-4 py-10 lg:py-24">
      <h2 className="text-4xl lg:text-7xl font-bold mb-8 text-black">
        PLACES TO STAY:
      </h2>
      <HotelCard />
    </div>
  );
};

export default PlacesToStay;
