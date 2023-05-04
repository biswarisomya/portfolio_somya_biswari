"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Modal from "react-modal";
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface IImage {
  url: string;
  label: string;
}
interface IProject {
  images: IImage[];
  title: string;
  description: string;
  techstack: string;
  git: string;
  demo: string;
  figma?: string;
}
const projects: IProject[] = [
  {
    title: "travelulu",
    description:
      "This is a UI template for travel website, using which people can plan their trip ,search hotels and do many more.",
    techstack: "Next JS, Tailwind, React,TypeScript, HTML 5,CSS 3 ,Vercel",
    git: "https://github.com/biswarisomya/travelulu",
    demo: "https://travelulu.vercel.app/",
    figma:
      "https://www.figma.com/file/yEx8JfvrJv73ozazLSiowf/Travelulu---Travel-Planning-UI-Kit?node-id=99-269&t=16bnngB94mO2WcKQ-0",
    images: [
      {
        url: "/travelulu/desktop-1_50.png",
        label: "Desktop-1",
      },
      {
        url: "/travelulu/desktop-2_50.png",
        label: "Desktop-2",
      },
      {
        url: "/travelulu/mobile-1_50.png",
        label: "Mobile-1",
      },
      {
        url: "/travelulu/mobile-2_1_50.png",
        label: "Mobile-2",
      },
    ],
  },
  {
    title: "weather",
    description:
      "  This is a UI template for Weather website, using which people can get the Real time weather, Timezone, Astronomy and Sports for a given city anywhere across the globe!",
    techstack:
      " React JS, TypeScript, HTML 5, CSS 3, SCSS, Axios,React-Router, React Testing Library,Jest, Vercel",
    git: "https://github.com/biswarisomya/weather-app",
    demo: "https://weather-app-biswarisomya.vercel.app/",
    images: [
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
    ],
  },
];

const Projects = () => {
  const [modal, setModal] = useState<IProject | null>(null);

  return (
    <section id="projects" className=" flex font-sans bg-[#ebeeee]   ">
      <div className=" flex flex-col pt-[20px]  pb-[4rem]  w-[71%] mx-auto ">
        <div className=" w-[100%] text-center tracking-wide  desktop:text-[24px] text-[15px] uppercase font-semibold  text-[#95A3A3] mb-[48px]">
          Projects
        </div>
        <div className="flex  mobile:flex-col   gap-[5rem] ">
          {projects.map((d) => (
            <div
              role="button"
              className="flex flex-col  items-center bg-white"
              key={d.title}
              onClick={() => setModal(d)}
            >
              <div className="bg-[#212121] text-white capitalize text-center w-[100%] ">
                {d.title}
              </div>
              <Image
                src={d.images[0].url}
                width="250"
                height="250"
                alt={d.title}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!modal}
        onRequestClose={() => setModal(null)}
        className="w-[50%]  mobile:w-[calc(100%_-_40px)] mx-auto mobile:my-[15%] bg-white"
      >
        <div className=" text-white capitalize bg-black p-[unset] text-white text-center font-bold font-sans px-[10px] py-[10px] mobile:px-0 mobile:py-0">
          {modal?.title}
        </div>
        <div>
          <Carousel
            infiniteLoop
            interval={3000}
            autoPlay
            showIndicators={false}
            showArrows
          >
            {modal?.images.map((i) => (
              <div key={i.label} className="w-[250px] h-[250px]">
                <Image src={i.url} fill alt={i?.label || ""} />
                <p className="text-black absolute bottom-[5px] left-[45%]">
                  {i?.label}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-[95%] px-[36px] pb-[18px] mobile:px-[2px] mobile:pb-[2px]">
          <Link
            className="text-[18px] font-sans font-bold text-[#5F2EEA] capitalize"
            href={modal?.demo || ""}
            target="_blank"
          >
            {modal?.title}
          </Link>

          <div className="text-[#6E7881]">{modal?.description}</div>
          <div className="font-bold mt-[10px]">Tech Stack:</div>
          <div className=" text-[#6E7881] font-bold font-sans">
            {modal?.techstack}
          </div>
        </div>
        <div className=" items-center bg-black p-[unset] gap-[1rem] flex text-white font-bold font-sans px-[2rem] py-[1rem] ">
          <Link className="" href={modal?.git || ""} target="_blank">
            <FaGithub />
          </Link>
          <Link href={modal?.demo || ""} target="_blank">
            Demo
          </Link>
          {modal?.figma && (
            <Link href={modal?.figma || ""} target="_blank">
              Figma
            </Link>
          )}
          <button className="uppercase" onClick={() => setModal(null)}>
            close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Projects;
