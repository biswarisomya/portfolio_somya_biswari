"use client";

import { IoMdGlobe } from "react-icons/io";

import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";

const Interests = () => {
  return (
    <section id="interests" className="bg-[#212121]">
      <SectionLayout className=" mobile:pt-[66px] mobile:pb-[48px]">
        <Heading>
          <IoMdGlobe className="text-[72px] leading-[72px]  text-white ml-[10rem] mobile:ml-[0px]" />
        </Heading>
        <Content className="flex-col flex   text-justify">
          <span className="text-[28px] text-[#EBEEEE] mb-[6px] font-bold font-sans">
            Interests & Hobbies
          </span>
          <div className="flex flex-col text-[17px] font-semibold  font-sans leading-[30px] text-[#D8D8D8]">
            <span>Learning New Technologies</span>
            <span>Book Reading</span>
            <span>Travelling</span>
            <span>Exploring new facts</span>
            <span>Binge watching Movies</span>
          </div>
        </Content>
      </SectionLayout>
    </section>
  );
};

export default Interests;
