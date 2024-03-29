"use client";

import { navOptions } from "@/components/Navbars/navOptions";
import { useState } from "react";

import navbarMobileStyles from "@/components/Navbars/NavbarMobile/NavbarMobile.module.scss";
import navbarStyles from "@/components/Navbars/Navbar/Navbar.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import logo from "@/public/NHIBIT_Av03-White.png";

import Link from "next/link";
import SocialsMobile from "@/components/Socials/SocialsMobile/SocialsMobile";
import Hamburger from "@/components/Hamburger/Hamburger";
import Image from "next/image";
import { useColorChange } from "@/hooks/useColorChange";

function NavbarMobile({ hideLogo }: { hideLogo: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setIsActive] = useState(false);
  const colorChange = useColorChange();

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    setIsActive((curr) => !curr);
  };

  return (
    <>
      <nav
        className={`${navbarMobileStyles.nav} ${layoutStyles.padding_wrapper}`}
      >
        <div
          className={navbarStyles.color_change}
          data-scroll={colorChange && !menuOpen ? "true" : "false"}
        />
        <Link href={"/"}>
          <div
            className={`${hideLogo && navbarMobileStyles.hide} ${
              navbarMobileStyles.logo_wrapper
            }`}
          >
            <Image
              src={logo}
              alt={"NHIBIT logo"}
              className={navbarMobileStyles.image}
            />
          </div>
        </Link>
        <div
          className={`${navbarMobileStyles.svgWrapper_menu} `}
          onClick={() => handleMenuOpen()}
        >
          <Hamburger active={active} />
        </div>
      </nav>

      <div
        className={navbarMobileStyles.options_container}
        data-visible={menuOpen ? "true" : "false"}
      >
        <div className={navbarMobileStyles.option_socials_wrapper}>
          <ul className={navbarMobileStyles.options_wrapper}>
            {navOptions.map((option, i) => {
              return (
                <li className={navbarMobileStyles.option} key={i}>
                  <Link
                    href={option.toLowerCase()}
                    className={`${navbarMobileStyles.anchor} flex`}
                    onClick={() => handleMenuOpen()}
                  >
                    <p className={navbarMobileStyles.num}>{i + 1}.</p>
                    <p className={navbarMobileStyles.option_text}>
                      {option.toUpperCase()}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <SocialsMobile />
        </div>
      </div>
    </>
  );
}

export default NavbarMobile;
