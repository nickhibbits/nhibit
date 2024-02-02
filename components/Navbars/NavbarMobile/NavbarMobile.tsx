"use client";

import { navOptions } from "@/components/Navbars/navOptions";
import { useState } from "react";

import navbarMobileStyles from "@/components/Navbars/NavbarMobile/NavbarMobile.module.scss";
import layoutStyles from "@/styles/layout.module.scss";

import Link from "next/link";
import SocialsMobile from "@/components/Socials/SocialsMobile/SocialsMobile";

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`${navbarMobileStyles.nav} ${layoutStyles.padding_wrapper}`}
      >
        <div
          className={navbarMobileStyles.svgWrapper_menu}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          menuSVG
        </div>
      </nav>

      {menuOpen && (
        <div className={navbarMobileStyles.options_container}>
          <div
            className={`${navbarMobileStyles.svgWrapper_x} ${layoutStyles.padding_wrapper}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            X
          </div>
          <div className={navbarMobileStyles.option_socials_wrapper}>
            <ul className={navbarMobileStyles.options_wrapper}>
              {navOptions.map((option, i) => {
                return (
                  <li className={navbarMobileStyles.option} key={i}>
                    <Link
                      href={option.toLowerCase()}
                      className={`${navbarMobileStyles.anchor} flex`}
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
      )}
    </>
  );
}

export default NavbarMobile;
