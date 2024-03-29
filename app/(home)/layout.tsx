import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "@/components/Navbars/Navbar/Navbar";
import NavbarMobile from "@/components/Navbars/NavbarMobile/NavbarMobile";
import Footer from "@/components/Footer/Footer";

const oxygen = Oxygen({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NHIBIT",
  description: "Officiall website for NHIBIT, producer and DJ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oxygen.className}>
        <header>
          <Navbar displayLogo={false} />
          <NavbarMobile hideLogo={true} />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
