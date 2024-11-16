import {
  navContainer,
  navLogoContainer,
  logoIcon,
  logoLabel,
  navControls,
  navSearch,
  navIcon,
  messageIcon,
  messageCount,
  settingsIcon,
  navUser,
  navUserIcon,
  hamburgerIcon,
} from "./dashboardNav.module.css";
import avatar1 from "../../../img/avatar1.jpg";
import { useCallback, useEffect, useState } from "react";
import Logo from "../../../components/logo";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";

const theme1 = {
  navContainer: {
    backgroundColor: "#1b55e2",
  },
};

const theme2 = {
  navContainer: {
    backgroundColor: "#1a847b",
  },
  logoIcon: {
    backgroundColor: "white",
    padding: "10px",
    marginRight: "0px",
  },
};

export default function DashboardNav({ thm, jsLayout }) {
  const router = useRouter();
  const [theme, setTheme] = useState(thm);
  useEffect(() => {
    setTheme(thm);
  }, [thm]);

  // TODO: make this logic work for layoutbreakpoints example
  // const updateNav = useCallback(() => {
  //     const navControls = document.querySelector('.dashboardNav_navControls__GFCh6');
  //     const hamburgerIcon = document.querySelector('.dashboardNav_hamburgerIcon__ehzAJ')
  //     if (!navControls) return;
  //     if (window.innerWidth < 800) {
  //         navControls.style.display = 'none';
  //         hamburgerIcon.style.display = 'flex';
  //     } else {
  //         navControls.style.display = 'flex';
  //         hamburgerIcon.style.display = 'none';
  //     }
  // }, [])

  useEffect(() => {
    // if (jsLayout) {
    //     updateNav();
    //     window.addEventListener('resize', updateNav);
    // } else {
    //     updateNav();
    //     window.removeEventListener('resize', updateNav);
    // }
    // return () => {
    //     window.removeEventListener('resize', updateNav);
    // }
  }, [jsLayout]);

  const handleNav = () => {
    router.push({ pathname: "/bank", query: router.query });
  };

  return (
    <div
      className={navContainer}
      style={!theme ? theme2.navContainer : theme1.navContainer}
    >
      <div className={navLogoContainer}>
        <div onClick={handleNav} href="">
          {!theme ? (
            <Logo className={logoIcon} style={theme2.logoIcon} />
          ) : (
            <div className={logoIcon}></div>
          )}
          <div className={logoLabel}>ACME</div>
        </div>
      </div>

      <div className={navControls}>
        <div className={navSearch}>
          <input placeholder="Start typing to search..." type="text" />
        </div>
        <div className={navIcon}>
          <i className={messageIcon}></i>
          <div className={messageCount}>7</div>
        </div>
        <div className={navIcon}>
          <i className={settingsIcon}></i>
        </div>
        <div className={navUser}>
          <div className={navUserIcon}>
            <img alt="" src={avatar1.src} />
          </div>
        </div>
      </div>
      <div className={hamburgerIcon}>
        <GiHamburgerMenu size={30} />
      </div>
    </div>
  );
}
