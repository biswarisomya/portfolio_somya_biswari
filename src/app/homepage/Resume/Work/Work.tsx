import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";
import { GoPrimitiveDot } from "react-icons/go";

const Work = () => {
  return (
    <SectionLayout className="mobile:mt-[3rem]">
      <Heading className="w-[30%]">work</Heading>
      <Content>
        <div className="text-[1.6rem] font-sans font-bold mobile:mb-[12px]">
          Deloitte,Bangalore,India
        </div>
        <div className="italic mt-[8px] flex gap-[2px] text-[#6E7881] mobile:justify-center mobile:mb-[18px]">
          <div>Software Engineer</div>
          <div className="pt-[4px]">
            <GoPrimitiveDot />
          </div>
          <div>Apr 2020-Nov 2021</div>
        </div>
        <div className="leading-[1.875rem] font-normal font-sans text-[#838C95] text-justify">
          <div>
            •Worked alongside with cross teams to code, develop and enhance
            features related to HR and Payroll module
          </div>
          <div>
            •Developed front-end features and functionality using React,
            Typescript, HTML, CSS •Wrote API’s using Java Spring Boot framework
          </div>
          <div>
            •Worked alongside with cross teams to code, develop and enhance
            features related to HR and Payroll module.
          </div>
          <div>
            •Worked with product owners to create user stories of the features
          </div>
          <div>
            •Gathered business requirements from clients, worked on development
            and enhancement of new features.
          </div>
          <div>
            •Developed front-end features and functionality using ReactJS,
            Typescript, HTML, SCSS.{" "}
          </div>
          <div>
            •Created responsive layouts using media queries. •Wrote unit tests
            for the components using React testing library.
          </div>
        </div>
        <div className="text-[1.6rem] font-sans font-bold mt-4 mobile:mb-[12px]">
          Oracle,Bangalore,India
        </div>
        <div className="italic mt-[8px] flex gap-[4px] text-[#6E7881] mobile:mb-[18px] mobile:justify-center">
          <div>Software Engineer</div>
          <div className="pt-[4px]">
            <GoPrimitiveDot />
          </div>
          <div>Oct 2019-Apr 2020</div>
        </div>
        <div className="leading-[1.875rem] font-normal font-sans text-[#838C95] text-justify">
          <div>
            •Worked alongside with cross teams to code, develop and enhance
            features related to HR and Payroll module
          </div>
          <div>
            • Designed and developed a generic shared component library which
            can be utilized by different web applications using React, HTML and
            SCSS.
          </div>
          <div>
            • Analyzed the usage of various application modules by various
            organizations by using various monitoring tools like New Relic and
            try to find the issues which users were experiencing while using the
            app and investigate towards mitigating it
          </div>
          <div>
            •Worked with product owners to create user stories of the features
          </div>
          <div>
            •Gathered business requirements from clients, worked on development
            and enhancement of new features.
          </div>
          <div>
            •Worked with product owners to create user stories of the features
          </div>
          <div>
            • Implemented HTTP requests using Axios with React and state
            management with Redux
          </div>
        </div>
        <div className="text-[1.6rem] font-sans font-bold mt-4 mobile:mb-[12px]">
          Trigent Software Inc,Bangalore,India
        </div>
        <div className="italic mt-[8px] flex gap-[2px] text-[#6E7881]  mobile:justify-center mobile:mb-[18px]">
          <div>Software Engineer</div>
          <div className="pt-[4px]">
            <GoPrimitiveDot />
          </div>
          <div>Sep 2017-Oct 2019</div>
        </div>
        <div className="leading-[1.875rem] font-normal font-sans text-[#838C95] text-justify">
          <div>
            •Coded the front-end designs applications using web technologies
            like HTML, CSS, JavaScript, React.JS, Typescript and Redux JS
          </div>
          <div>
            •Wrote unit test cases for the components using RTL and Jest
          </div>
          <div>
            •Worked on Cross-Browser compatibility and fixed the bugs for
            several browsers.
          </div>
          <div>
            •Participated and contributed in various meetings such as Spring
            planning, standups and tech discussion.
          </div>
          <div>
            •Developed front-end features and functionality using ReactJS,
            Typescript, HTML, SCSS.
          </div>
          <div>
            •Created responsive layouts using media queries. •Wrote unit tests
            for the components using React testing library.
          </div>
        </div>
      </Content>
    </SectionLayout>
  );
};

export default Work;
