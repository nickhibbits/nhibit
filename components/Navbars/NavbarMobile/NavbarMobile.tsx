"use client";

import { navOptions } from "@/components/Navbars/navOptions";
import { useEffect, useState } from "react";

import navbarMobileStyles from "@/components/Navbars/NavbarMobile/NavbarMobile.module.scss";
import layoutStyles from "@/styles/layout.module.scss";

import Link from "next/link";
import SocialsMobile from "@/components/Socials/SocialsMobile/SocialsMobile";
import Hamburger from "@/components/Hamburger/Hamburger";

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setIsActive] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    setIsActive((curr) => !curr);
  };

  return (
    <>
      <nav className={navbarMobileStyles.nav}>
        <div
          className={`${navbarMobileStyles.svgWrapper_menu} ${layoutStyles.padding_wrapper}`}
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
