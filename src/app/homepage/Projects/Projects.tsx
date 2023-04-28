"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Modal from "react-modal";
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [traveluluModalIsOpen, setTraveluluModalIsOpen] = useState(false);
  const [weatherModalIsOpen, setWeatherModalIsOpen] = useState(false);

  const images = [
    {
      url: "/weather/desktop-11.png",
      label: "Desktop-1",
    },
    {
      url: "/weather/desktop-3.png",
      label: "Desktop-2",
    },
    {
      url: "/weather/desktop-4.png",
      label: "Desktop-3",
    },
    {
      url: "/weather/desktop-5.png",
      label: "Desktop-4",
    },
    {
      url: "/weather/mobile-3.png",
      label: "Mobile-1",
    },
    {
      url: "/weather/mobile-4.png",
      label: "Mobile-2",
    },
  ];
  return (
    <section id="projects" className=" flex font-sans bg-[#ebeeee]   ">
      <div className=" flex flex-col pt-[20px]  pb-[4rem]  w-[71%] mx-auto ">
        <div className=" w-[100%] text-center tracking-wide  desktop:text-[24px] text-[15px] uppercase font-semibold  text-[#95A3A3] mb-[48px]">
          Projects
        </div>
        <div className="flex  mobile:flex-col   gap-[5rem]">
          <div className="mobile:flex mobile:justify-center">
            <button onClick={() => setTraveluluModalIsOpen(true)}>
              <Image
                src="/travelulu/desktop-1_50.png"
                width="300"
                height="100"
                alt="Desktop-1"
              />
            </button>

            <Modal
              isOpen={traveluluModalIsOpen}
              onRequestClose={() => setTraveluluModalIsOpen(false)}
              contentLabel="Example Modal"
              className="w-[550px]  mobile:w-[calc(100%_-_40px)] mx-auto mobile:my-[15%] bg-white"
            >
              <div className=" text-white bg-black p-[unset] text-white text-center font-bold font-sans px-[10px] py-[10px]">
                Travelulu
              </div>
              <div>
                <Carousel
                  infiniteLoop
                  interval={1000}
                  autoPlay
                  showIndicators={false}
                  showArrows
                >
                  <div>
                    <Image
                      src="/travelulu/desktop-1_50.png"
                      width="250"
                      height="100"
                      alt="Desktop-1"
                    />
                    <p className="text-black pt-[10px] pb-[5px]">Desktop-1</p>
                  </div>
                  <div>
                    <Image
                      src="/travelulu/desktop-2_50.png"
                      width="250"
                      height="100"
                      alt="Desktop-2"
                    />
                    <p className="text-black pt-[10px] pb-[5px]">Desktop-2</p>
                  </div>
                  <div>
                    <Image
                      src="/travelulu/mobile-1_50.png"
                      width="250"
                      height="100"
                      alt="Mobile-1"
                    />
                    <p className="text-black pt-[10px] pb-[5px]">Mobile-1</p>
                  </div>
                  <div>
                    <Image
                      src="/travelulu/mobile-2_1_50.png"
                      width="250"
                      height="100"
                      alt="Mobile-2"
                    />
                    <p className="text-black ">Mobile-2</p>
                  </div>
                </Carousel>
              </div>
              <div className="w-[95%] px-[36px] pb-[18px]">
                <Link
                  className="text-[18px] font-sans font-bold text-[#5F2EEA]"
                  href="https://travelulu.vercel.app/"
                  target="_blank"
                >
                  Travelulu
                </Link>

                <div className="text-[#6E7881]">
                  This is a UI template for travel website, using which people
                  can plan their trip ,search hotels and do many more.
                </div>
                <div className="font-bold mt-[10px]">Tech Stack:</div>
                <div className=" text-[#6E7881] font-bold font-sans">
                  Next JS, Tailwind, React,TypeScript, HTML 5,CSS 3 ,Vercel
                </div>
              </div>
              <div className=" items-center bg-black p-[unset] gap-[1rem] flex text-white font-bold font-sans px-[2rem] py-[1rem] ">
                <Link
                  className=""
                  href="https://github.com/biswarisomya/travelulu"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
                <Link href="https://travelulu.vercel.app/" target="_blank">
                  Demo
                </Link>
                <Link
                  href="https://www.figma.com/file/yEx8JfvrJv73ozazLSiowf/Travelulu---Travel-Planning-UI-Kit?node-id=99-269&t=16bnngB94mO2WcKQ-0"
                  target="_blank"
                >
                  Figma
                </Link>
                <button
                  className="uppercase"
                  onClick={() => setTraveluluModalIsOpen(false)}
                >
                  close
                </button>
              </div>
            </Modal>
          </div>
          <div className="mobile:flex mobile:justify-center">
            <button onClick={() => setWeatherModalIsOpen(true)}>
              <Image
                className="h-[unset] h-[9.5rem] "
                src="/weather/desktop-11.png"
                width="300"
                height="100"
                alt="Desktop-1"
              />
            </button>

            <Modal
              isOpen={weatherModalIsOpen}
              onRequestClose={() => setWeatherModalIsOpen(false)}
              contentLabel="Example Modal"
              className="w-[550px]  mobile:w-[calc(100%_-_40px)] mx-auto mobile:my-[15%] bg-white"
            >
              <div className=" text-white bg-black p-[unset] text-white text-center font-bold font-sans px-[10px] py-[10px] mobile:px-0 mobile:py-0">
                Weather
              </div>
              <div>
                <Carousel
                  infiniteLoop
                  interval={50000}
                  autoPlay
                  showIndicators={false}
                  showArrows
                >
                  {images.map((i) => (
                    <div key={i.label} className="w-[250px] h-[250px]">
                      <Image src={i.url} fill alt={i.label} />
                      <p className="text-black absolute bottom-[5px] left-[45%]">
                        {i.label}
                      </p>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="w-[95%] px-[36px] pb-[18px] mobile:px-[2px] mobile:pb-[2px]">
                <Link
                  className="text-[18px] font-sans font-bold text-[#5F2EEA]"
                  href="https://weather-app-biswarisomya.vercel.app/"
                  target="_blank"
                >
                  Weather
                </Link>

                <div className="text-[#6E7881]">
                  This is a UI template for Weather website, using which people
                  can get the Real time weather, Timezone, Astronomy and Sports
                  for a given city anywhere across the globe!
                </div>
                <div className="font-bold mt-[10px]">Tech Stack:</div>
                <div className=" text-[#6E7881] font-bold font-sans">
                  React JS, TypeScript, HTML 5, CSS 3, SCSS, Axios,
                  React-Router,Vercel
                </div>
              </div>
              <div className=" items-center bg-black p-[unset] gap-[1rem] flex text-white font-bold font-sans px-[2rem] py-[1rem] ">
                <Link
                  className=""
                  href="https://github.com/biswarisomya/weather-app"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://weather-app-biswarisomya.vercel.app/"
                  target="_blank"
                >
                  Demo
                </Link>
                {/*<Link*/}
                {/*  href="https://www.figma.com/file/yEx8JfvrJv73ozazLSiowf/Travelulu---Travel-Planning-UI-Kit?node-id=99-269&t=16bnngB94mO2WcKQ-0"*/}
                {/*  target="_blank"*/}
                {/*>*/}
                {/*  Figma*/}
                {/*</Link>*/}
                <button
                  className="uppercase"
                  onClick={() => setWeatherModalIsOpen(false)}
                >
                  close
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
