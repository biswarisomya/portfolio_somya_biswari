"use client";

import { IoIosArrowDropdownCircle } from "react-icons/io";

import Navbar from "@/app/homepage/Navbar";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-back bg-no-repeat bg-cover h-[100vh] text-white  "
    >
      <Navbar />
      <div className="flex items-center justify-center h-[100vh]">
        <div className="flex w-[71%] mobile:w-[85%] mx-auto flex-wrap  justify-center text-center">
          <div className="text-[5.6rem] mobile:text-[3.4rem] font-bold tracking-normal font-sans">
            I'm Somya Biswari.
          </div>
          <div className="text-lg leading-[1.9rem] w-[70%] mobile:w-[85%] mobile:tracking-wider mobile:mx-auto text-justify font-serif">
            I'm a <span className="italic">Software Engineer </span> and a tech
            geek. I did my Bachelor's in Electrical & Electronics Engineering
            from AKTU University, India and have overall 5+ years of experience.
            I am seeking for Software Development Engineer full time
            opportunities. Let'start scrolling and learn about me.
          </div>
        </div>
      </div>

      <Link
        className="leading-[42px] text-[40px] absolute bottom-[2rem] right-[50%] mobile:hidden"
        to="about"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <IoIosArrowDropdownCircle />
      </Link>
    </section>
  );
};

export default Home;
