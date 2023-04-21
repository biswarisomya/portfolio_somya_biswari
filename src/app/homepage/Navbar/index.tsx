"use client";
import { Link } from "react-scroll";

import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  const [hideBackground, setHideBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const data = [
    {
      url: "home",
      label: "Home",
    },
    {
      url: "about",
      label: "About",
    },
    {
      url: "resume",
      label: "Resume",
    },
    {
      url: "projects",
      label: "Projects",
    },
    {
      url: "interests",
      label: "Interests",
    },
    {
      url: "recommendations",
      label: "Recommendations",
    },
    {
      url: "contact",
      label: "Contact",
    },
  ];

  return (
    <div>
      <Menu
        burgerButtonClassName="hidden mobile:block"
        noOverlay
        onOpen={() => setMobileMenuOpen(!mobileMenuOpen)}
        isOpen={mobileMenuOpen}
        crossButtonClassName="hidden"
        customBurgerIcon={<HiOutlineMenuAlt4 />}
        right
      >
        {data.map((d) => (
          <Link
            key={d.label}
            role="button"
            activeClass="text-[#F06000]"
            to={d.url}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setMobileMenuOpen(false)}
            onSetActive={() => setHideBackground(true)}
            onSetInactive={() => setHideBackground(false)}
          >
            {d.label}
          </Link>
        ))}
      </Menu>
      <div
        className={`desktop:gap-[60px] ${
          hideBackground && "bg-black"
        }  mobile:hidden w-[100%] pt-[10px] pb-[10px] justify-center text-[12px] uppercase fixed  text-white flex gap-[20px] mx-auto font-bold  font-sans  tracking-widest`}
      >
        {data.map((d) => (
          <Link
            key={d.label}
            role="button"
            activeClass="text-[#F06000]"
            to={d.url}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => {
              d.url === "home" ? setMobileMenuOpen(false) : {};
            }}
            onSetActive={() => {
              d.url === "home" ? setHideBackground(true) : {};
            }}
            onSetInactive={() => {
              d.url === "home" ? setHideBackground(false) : {};
            }}
          >
            {d.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
