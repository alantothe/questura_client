import { FlipWords } from "../ui/flip-words";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
const Explore: React.FC = () => {
  const words: string[] = ["COLOMBIA", "MENTUITION"];

  const content = [
    {
      title: "Mentuition Mission",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718491005/Screenshot_2024-06-15_at_6.34.45_PM_cbkyix.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Your Personal Travel Guide",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718493815/Screenshot_2024-06-15_at_7.21.12_PM_zqa7em.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Group Travel Made Easy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718494225/Screenshot_2024-06-15_at_7.30.17_PM_qqxqld.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Explore Colombia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718491355/Screenshot_2024-06-15_at_6.42.27_PM_mdhbpj.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#8EC387] pt-6 flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
          EXPLORE
        </h2>
        <div className="" style={{ width: "38ch" }}>
          <FlipWords
            className={"text-black text-4xl sm:text-5xl lg:text-6xl font-bold"}
            words={words}
            duration={3000}
          />
        </div>
      </div>
      <div className="w-full max-w-screen pt-8 pb-28 ">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Explore;
