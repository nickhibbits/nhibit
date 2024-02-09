import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "@/components/Navbars/Navbar/Navbar";
import NavbarMobile from "@/components/Navbars/NavbarMobile/NavbarMobile";

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
          <Navbar displayLogo={true} />
          <NavbarMobile hideLogo={false} />
        </header>
        {children}
      </body>
    </html>
  );
}
