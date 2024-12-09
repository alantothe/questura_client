/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
      },
      {
        protocol: "https",
        hostname: "calendly.com",
      },
      {
        protocol: "https",
        hostname: "youtube.com",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
      {
        protocol: "https",
        hostname: "instagram.com",
      },
      {
        protocol: "https",
        hostname: "patreon.com",
      },
      {
        protocol: "https",
        hostname: "hatscripts.github.io",
      },      {
        protocol: "https",
        hostname: "hatscripts.github.io",
      }
    ],
  },
};

export default nextConfig;
