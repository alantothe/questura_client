"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FlipWords } from "../ui/flip-words";
import Link from "next/link";
export function Testimonials() {
  const words: string[] = ["Reviews", "MENTUITION"];

  const [isOpen, setIsOpen] = useState(false);
  const [imgSize, setImgSize] = useState("h-12");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImgSize("h-16 py-4 "); // mobile view
      } else {
        setImgSize("h-12 py-6 sm:h-16 md:h-20 lg:h-24"); //larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white pt-6 flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center text-center">
        <h2 className="text-7xl sm:text-5xl lg:text-6xl font-bold text-black my-8">
          WHAT PEOPLE ARE SAYING ABOUT US
        </h2>
      </div>
      <div className="flex justify-center w-full max-w-screen mt-8">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
      <div className="flex justify-center sm:mb-0">
        <Link href="/">
          <img
            src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718389628/logo-men-06-14_at_1.41.03_PM-removebg-preview_chljyv.png"
            alt="Logo"
            className={imgSize}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-limagreen to-mengreen rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Book With Us
              </div>
            </button>
          </a>
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center space-x-4 mt-4 text-lg text-black underline">
        <Link
          href="https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06"
          passHref
          legacyBehavior
          className=""
        >
          <a target="_blank" rel="noopener noreferrer">
            Medellin
          </a>
        </Link>
        <Link
          href="https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06"
          passHref
          legacyBehavior
          className=""
        >
          <a target="_blank" rel="noopener noreferrer">
            Cartagena
          </a>
        </Link>
        <Link
          href="https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06"
          passHref
          legacyBehavior
          className=""
        >
          <a target="_blank" rel="noopener noreferrer">
            Cali
          </a>
        </Link>
        <Link
          href="https://calendly.com/mentuition/mentuition-movement-personal-travel-guide?back=1&month=2024-06"
          passHref
          legacyBehavior
          className=""
        >
          <a target="_blank" rel="noopener noreferrer">
            Bogotá
          </a>
        </Link>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1710441999/zdxmkz6msnnxfjelgi5v.png",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1695306618/kw8v5qgjpiamgdaaanfg.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1695222685/skqaoebb2avlwqcvqmgi.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1693715348/gqdewbb5lf8nlbegrdeu.png",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1695306618/kw8v5qgjpiamgdaaanfg.png",
  },
  {
    quote:
      "Exploring the vibrant streets of Colombia was a dream come true. The rich culture and friendly people made every moment unforgettable.",
    name: "John Doe",
    title: "Traveler",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1695306618/kw8v5qgjpiamgdaaanfg.png",
  },
  {
    quote:
      "The nightlife in Colombia is absolutely electrifying. From salsa dancing to live music, there's something for everyone.",
    name: "Jane Smith",
    title: "Travel Blogger",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1695306618/kw8v5qgjpiamgdaaanfg.png",
  },
  {
    quote:
      "Sightseeing in Colombia offers a mix of stunning landscapes and historic sites. Every corner has a story to tell.",
    name: "Carlos Ruiz",
    title: "Photographer",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1695306618/kw8v5qgjpiamgdaaanfg.png",
  },
  {
    quote:
      "I had the best time exploring the coffee plantations and tasting the world's best coffee in Colombia. A must-visit for any coffee lover.",
    name: "Maria Gonzalez",
    title: "Food Critic",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1693857141/qktko98frnqq7dktul53.png",
  },
  {
    quote:
      "The colorful streets of Cartagena are a photographer's paradise. Every alleyway is a new adventure waiting to be captured.",
    name: "Alex Johnson",
    title: "Travel Enthusiast",
    avatar:
      "https://res.cloudinary.com/dzjr3skhe/image/upload/v1695308964/pt9evhcwzcpaucmp4cw5.png",
  },
];
