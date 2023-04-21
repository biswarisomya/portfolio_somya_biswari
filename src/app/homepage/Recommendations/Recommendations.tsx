"use client";
import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";
import { ImQuotesLeft } from "react-icons/im";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Recommendations = () => {
  return (
    <section id="recommendations" className="bg-black">
      <SectionLayout className="mobile:w-[71%] mobile:pt-[96px] mobile:pb-[66px] ">
        <Heading className="mobile:hidden">
          <ImQuotesLeft className="text-[72px] leading-[72px]  text-white ml-[10rem]" />
        </Heading>
        <Content>
          <div className="text-[16px] tracking-widest text-[#EBEEEE] mb-[20px] font-bold font-sans uppercase desktop:hidden">
            Recommendations
          </div>
          <Carousel showThumbs={false} autoPlay className=" desktop:w-[70%]">
            <div className="pb-[30px]">
              <div className=" italic font-serif text-white mobile:text-justify text-[20px] text-left leading-[42px] pb-[30px]  ">
                Somya is a very good and technically strong resource, very
                committed, always be available to the team and a dedicated
                person in the team. She will be a valuable asset to the
                organization and the project team
              </div>
              <div className="text-white text-[12px] leading-[18px] ">
                -Chandra Elavarthy, President & CEO
              </div>
            </div>
            <div>
              <div className=" italic  text-left font-serif text-white mobile:text-justify text-[20px] leading-[42px] pb-[30px]">
                Somya joined my team as a junior with min experience and was
                very eager to learn and deliver. She was able to accomplish this
                and I could see her really putting in all the hard work to learn
                the module and also support the client. She was a great team
                player and was ready to help with other activities to manage
                workload of team members.
              </div>
              <div className="text-white text-[12px] leading-[18px] ">
                -Hemanth Jayarama Senior Manager at Deloitte India (Offices of
                the US)
              </div>
            </div>
            <div>
              <div className=" italic text-left  font-serif text-white mobile:text-justify text-[20px] leading-[42px] pb-[35px]">
                I ve known Somya for a good 8 years now.. Her many attributes
                make her a wholesome package. I am fortunate to have taught her.
                She was excellent in studies and always had her way of doing
                things.. never going- with -the- crowd kind. Always a go-getter,
                very punctual, honest, well mannered, cool-spirited,
                passionate...the list is long... Her unquenchable passion for
                learning and travelling has always been inspiring.. now one can
                say a student can also be a teacher!.. Role model..
              </div>
              <div className="text-white text-[12px] leading-[18px] pb-[45px]">
                -Blandina Miracle Multifaceted Education Enthusiast
              </div>
            </div>
            <div>
              <div className=" italic text-left  font-serif text-white mobile:text-justify text-[20px] leading-[42px] pb-[30px]">
                I was her professor and mentor during her B.Tech. She is a
                capable and adaptable person. She takes up challenges as they
                come along and she demonstrated handling them when working on
                her project that she initiated and completed. She was well
                organized in her studies and co-curricular activities. She is
                highly proficient in applying concepts taught in analyzing the
                problem situations. I am sure that she will achieve great things
                in her career
              </div>
              <div className="text-white text-[12px] leading-[18px]">
                -Dr. Neeraj Kumar Gupta Head of the Department of Electrical &
                Electronics Engineering
              </div>
            </div>
            <div>
              <div className=" italic  text-left font-serif text-white mobile:text-justify text-[24px] mobile:text-[20px] leading-[48px] mobile:leading-[42px] pb-[30px]">
                I was the professor of Ms. Somya Biswari during her engineering
                studies from 2013 to 2017. I mentored her during the entire
                academic session 2016-17. She is a capable and adaptable person.
                She demonstrated her capability to take up the challenges many
                times while working on mini project. During our interactions, I
                always found her full of ideas and self motivated person. I wish
                her success in her life and career.
              </div>
              <div className="text-white text-[12px] leading-[18px] pb-[45px]">
                -Dr. Arvind Kumar Sharma Professor, Electrical and Electronics
                Engineering Department, KIET Group of Institutions
              </div>
            </div>
            <div>
              <div className=" italic text-left  font-serif text-white mobile:text-justify text-[20px] leading-[42px] pb-[30px]">
                I have lead various volunteering projects as part of Oracle CSR
                and Somya was key member in few of them. She gives her 100% to
                the projects which she has lead. She has a strong commitment to
                measurable and meaningful results. She has a great heart for the
                underprivileged kids/orphans and has been able to build a
                vibrant and cheerful team of volunteers as part of the CSR. I
                wish her best of luck and keep working for the underprivileged
                kids.
              </div>
              <div className="text-white text-[12px] leading-[18px]  ">
                -Nideesh Kalathil Technical Consultant at Oracle
              </div>
            </div>
          </Carousel>
        </Content>
      </SectionLayout>
    </section>
  );
};

export default Recommendations;
