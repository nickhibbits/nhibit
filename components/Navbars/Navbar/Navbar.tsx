"use client";

import { navOptions } from "@/components/Navbars/navOptions";

import navbarStyles from "@/components/Navbars/Navbar/Navbar.module.scss";
import navbarMobileStyles from "@/components/Navbars/NavbarMobile/NavbarMobile.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/NHIBIT_Av03-White.png";
import { useState } from "react";

function Navbar({ displayLogo }: { displayLogo: boolean }) {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  return (
    <nav className={` ${navbarStyles.nav} ${layoutStyles.padding_wrapper}`}>
      <div
        className={navbarStyles.color_change}
        data-scroll={colorChange ? "true" : "false"}
      />
      {displayLogo && (
        <Link href={"/"}>
          <div className={`${navbarMobileStyles.logo_wrapper}`}>
            <Image
              src={logo}
              alt={"NHIBIT logo"}
              className={navbarMobileStyles.image}
            />
          </div>
        </Link>
      )}
      <ul className={navbarStyles.options_wrapper}>
        {navOptions.map((option, i) => {
          return (
            <li className={navbarStyles.option} key={i}>
              <Link
                href={option.toLowerCase()}
                className={`${navbarStyles.anchor} flex`}
              >
                <p className={navbarStyles.num}>{i + 1}.</p>
                <p className={navbarStyles.option_text}>
                  {option.toUpperCase()}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
