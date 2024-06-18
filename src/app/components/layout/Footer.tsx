// components/Footer.tsx

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-limagreen py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bookings</h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
              <li>Groups & Long Stays</li>
              <li>Events & Productions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Us</h3>
            <ul>
              <li>About us?</li>
              <li>Blog & News</li>
              <li>Youtube</li>
              <li>Work with us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Owners & Investors</h3>
            <ul>
              <li>Mentuition</li>
              <li>Owners</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Benefits</h3>
            <ul>
              <li>Guides</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul>
              <li>Colombia</li>
              <li>Peru</li>
              <li>Brazil</li>
              <li>Mexico</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy policies</li>
              <li>Cancellation policies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li>Contact Us</li>
              <li>F.A.Q.</li>
              <li>sales@wynwood-house.com</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Image
                src="https://flagsapi.com/PE/shiny/64.png"
                alt="Peru Flag"
                width={24}
                height={24}
              />
              <span className="ml-2">+51 555 555 555</span>
            </div>
            <div className="flex items-center">
              <Image
                src="https://flagsapi.com/CO/shiny/64.png"
                alt="Colombia Flag"
                width={24}
                height={24}
              />
              <span className="ml-2">+57 555 5555555</span>
            </div>
            <div className="flex items-center">
              <Image
                src="https://flagsapi.com/US/shiny/64.png"
                alt="USA Flag"
                width={24}
                height={24}
              />
              <span className="ml-2">+507 5555-5555</span>
            </div>
            <div className="flex items-center">
              <Image
                src="https://flagsapi.com/BR/shiny/64.png"
                alt="Brazil Flag"
                width={24}
                height={24}
              />
              <span className="ml-2">+52 1 914 333 3333</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/path-to-app-store-logo"
              alt="App Store"
              width={135}
              height={40}
            />
            <Image
              src="/path-to-google-play-logo"
              alt="Google Play"
              width={135}
              height={40}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
