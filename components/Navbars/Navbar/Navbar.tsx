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
              <Link href={option.toLowerCase()}>{option}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
