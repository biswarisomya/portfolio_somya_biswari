"use client";

import Image from "next/image";
import {
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className=" flex font-sans bg-[#2B2B2B]">
      <div className="flex font-sans bg-[#2B2B2B] pt-[6rem] pb-[4rem] w-[71%] mobile:w-[72%] mx-auto">
        <div className="basis-[25%] px-[20px] mobile:hidden">
          <Image
            className="rounded-[100%]"
            src={"/profile.jpg"}
            width="218"
            height="248"
            alt="profile"
          />
        </div>

        <div className="basis-full pl-[20px] mobile:pl-[30px] mobile:pr-[30px] flex flex-wrap text-white tracking-wide ">
          <div className=" text-justify  basis-full mobile:mb-[30px]">
            <div className="text-[1.4rem] mobile:text-[1.375rem] mobile:mb-[12px] font-bold ">
              About me
            </div>
            <div className="mobile:leading-[30px]">
              I am situational girl and usually adapt myself to any environment.
              I am very passionate about learning and like to work in a
              challenging environment. I am a quick learner and don't hesitate
              in learning anything new. I always do my work with full dedication
              and sincerity. I want to become the jack of all interrelated
              technologies and master of some. This is my brief summary. I look
              forward to further discuss my qualifications with you.
            </div>
            <div>Thanks</div>
          </div>
          <div className="w-[41%] leading-[1.9rem] mt-[1.9rem] mobile:basis-full  ">
            <div className="text-[1.4rem]  mobile:text-[1.375rem] mobile:mb-[12px] font-bold">
              Contact Details
            </div>
            <div className="mobile:leading-[30px]">
              <div>Somya Biswari</div>
              <div>San Francisco, CA 90012 US</div>
              <div>(341) 356-2499</div>
              <div>biswarisomya1@gmail.com</div>
            </div>
          </div>
          <div className="w-[30%] mt-[2.5rem] mobile:w-[100%]  ">
            <button className=" hover:bg-white hover:text-black flex mobile:leading-[30px] mobile:w-[100%] mobile:mb-[3.75rem] justify-center flex gap-3 bg-[#444] items-center px-[10px] py-[10px]  ">
              <FaDownload />

              <Link href="/Somya_Biswari_Resume.pdf" target="_blank" download>
                Download Resume
              </Link>
            </button>
            <div className="flex gap-5 mt-[4rem] mobile:mb-[24px] mobile:mt-[12px]">
              <Link
                href="https://www.facebook.com/somyabiswari11/"
                target="_blank"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.linkedin.com/in/somya-biswari/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
              <Link href="https://github.com/biswarisomya" target="_blank">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
