import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";
import { GoPrimitiveDot } from "react-icons/go";

const data = [
  {
    comapany: "Deloitte,Bangalore,India",
    title: "Software Engineer",
    timeline: "Apr 2020-Nov 2021",
    responsibilities: [
      "Worked alongside with cross teams to code, develop and enhance features related to HR and Payroll module",
      "Developed front-end features and functionality using React,Typescript, HTML, CSS •Wrote API’s using Java Spring Boot framework",
      "Worked alongside with cross teams to code, develop and enhance features related to HR and Payroll module.",
      "Worked with product owners to create user stories of the features",
      "Gathered business requirements from clients, worked on development and enhancement of new features.",
      "Developed front-end features and functionality using ReactJS,Typescript, HTML, SCSS.",
      "Created responsive layouts using media queries. •Wrote unit tests for the components using React testing library.",
    ],
  },
  {
    comapany: "Oracle,Bangalore,India",
    title: "Software Engineer",
    timeline: "Oct 2019-Apr 2020",
    responsibilities: [
      "Worked alongside with cross teams to code, develop and enhance features related to HR and Payroll module",
      "Designed and developed a generic shared component library which can be utilized by different web applications using React, HTML and SCSS.",
      "Analyzed the usage of various application modules by various organizations by using various monitoring tools like New Relic and try to find the issues which users were experiencing while using the app and investigate towards mitigating it.",
      "Gathered business requirements from clients, worked on development and enhancement of new features.",
      "Worked with product owners to create user stories of the features.",
      "Developed front-end features and functionality using ReactJS,Typescript, HTML, SCSS.",
      "Implemented HTTP requests using Axios with React and state management with Redux",
    ],
  },
  {
    comapany: " Trigent Software Inc,Bangalore,India",
    title: "Software Engineer",
    timeline: "Sep 2017-Oct 2019",
    responsibilities: [
      "Coded the front-end designs applications using web technologies like HTML, CSS, JavaScript, React.JS, Typescript and Redux JS",
      "Wrote unit test cases for the components using RTL and Jest",
      "Worked on Cross-Browser compatibility and fixed the bugs for several browsers.",
      "Gathered business requirements from clients, worked on development and enhancement of new features.",
      "Participated and contributed in various meetings such as Spring planning, standups and tech discussion..",
      "Developed front-end features and functionality using ReactJS,Typescript, HTML, SCSS.",
      "Created responsive layouts using media queries. •Wrote unit tests for the components using React testing library.",
    ],
  },
];

const Work = () => {
  return (
    <SectionLayout className="mobile:mt-[3rem]">
      <Heading className="w-[30%]">work</Heading>
      <Content>
        {data.map((d) => (
          <div key={d.comapany}>
            <div className="text-[1.6rem] font-sans font-bold mobile:mb-[12px]">
              {d.comapany}
            </div>
            <div className="italic mt-[8px] flex gap-[2px] text-[#6E7881] mobile:justify-center mobile:mb-[18px]">
              <div>{d.title}</div>
              <div className="pt-[4px]">
                <GoPrimitiveDot />
              </div>
              <div>{d.timeline}</div>
            </div>
            <div className="leading-[1.875rem] font-normal font-sans text-[#838C95] text-justify">
              <div>•{d.responsibilities[0]}</div>
              <div>•{d.responsibilities[1]}</div>
              <div>•{d.responsibilities[2]}</div>
              <div>•{d.responsibilities[3]}</div>
              <div>•{d.responsibilities[4]}</div>
              <div>•{d.responsibilities[5]}</div>
              <div>•{d.responsibilities[6]}</div>
            </div>
          </div>
        ))}
      </Content>
    </SectionLayout>
  );
};

export default Work;
