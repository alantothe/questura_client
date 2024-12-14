"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { notFound } from "next/navigation";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSize, setImgSize] = useState("h-12");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImgSize("h-16"); // Increase image size for mobile view
      } else {
        setImgSize("h-12 sm:h-16 md:h-20 lg:h-24"); // Reset image size for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex flex-col items-center sm:flex-row sm:justify-between p-4 sm:p-2 sm:px-6 relative">
      <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
        <Link
          href="https://www.youtube.com/@Mentuition"
          passHref
          legacyBehavior
          className=""
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black underline sm:mr-4 mb-2 sm:mb-0 hidden sm:block"
          >
            The Questura Blog 
          </a>
        </Link>

        <button
          className="sm:hidden text-black mb-2 sm:mb-0"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <div className="flex justify-center mb-4 sm:mb-0">
        <Link href="/colombia">
          <img
            src="https://res.cloudinary.com/dakv9lakh/image/upload/v1727728243/Questura_Logo_001_lxmyql.svg"
            alt="Logo"
            className={imgSize}
          />
        </Link>
      </div>
      <div
        className={`w-full sm:w-auto sm:flex items-center sm:space-x-4 ${
          isOpen ? "flex flex-col items-center" : "hidden"
        }`}
      >
        <Link href="/" className="text-sm text-black mb-2 sm:mb-0 sm:hidden">
          Mentuition Home
        </Link>
        <Link href="/colombia" className="text-sm text-black mb-2 sm:mb-0">
          EN / ES
        </Link>
        <Link href="/colombia" className="text-sm text-black mb-2 sm:mb-0">
          Log in
        </Link>
        <Link
          href="https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06"
          className="text-sm font-bold underline text-black mb-2 sm:mb-0"
        >
          Book now
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
