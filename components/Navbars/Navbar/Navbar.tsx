import { navOptions } from "@/components/Navbars/navOptions";

import navbarStyles from "@/components/Navbars/Navbar/Navbar.module.scss";
import layoutStyles from "@/styles/layout.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={`${navbarStyles.nav} ${layoutStyles.padding_wrapper}`}>
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
