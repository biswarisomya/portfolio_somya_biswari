"use client";

import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className=" relative pt-[48px] bg-black text-[#303030] text-center">
      <Link
        className="leading-[54px] text-[54px] text-white absolute bottom-[3rem] mobile:right-[45%] right-[50%]  "
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <IoIosArrowDropupCircle />
      </Link>
      <div>© Copyright 2020 Somya Biswari</div>
    </div>
  );
};

export default Footer;
