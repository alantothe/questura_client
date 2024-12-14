import type { Metadata } from "next";
import "../globals.css";
// import NavBar from "../components/layout/NavBar";
// import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Questura Tours",
  description: "Colombia - Peru - Brazil - DR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
