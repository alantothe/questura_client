import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Providers from "../api/query/providers";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Questura - Travel ",
  description: "Peru - Colombia - Brazil - DR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
