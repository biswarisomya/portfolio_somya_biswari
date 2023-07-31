import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";
import { GoPrimitiveDot } from "react-icons/go";

const data = [
  {
    company: "Deloitte,Bangalore,India",
    title: "Software Engineer",
    timeline: "Apr 2020-Nov 2021",
    responsibilities: [
      "Worked on various modules of new in-house HR and Payroll Application. It's a new application which Deloitte is building for its clients from scratch.",
      "Worked alongside with cross teams to code, develop and enhance features related to HR and Payroll module.",
      "Involved in making design recommendations towards the development of new code or reuse of existing code.",
      "Worked with product owners to create user stories of the features.",
      "Created responsive layouts using media queries.",
      "Wrote unit tests for the components using React testing library.",
      "Contributed to sprint planning and backlog refinement meetings.",
    ],
  },
  {
    company: "Oracle,Bangalore,India",
    title: "UI Engineer",
    timeline: "Oct 2019-Apr 2020",
    responsibilities: [
      "Worked on various modules of HR and Payroll Application which is responsible for managing payroll, benefits, equity, performance, etc of employees in the organization. It's an overall human resource management solution. Here I have worked on analysis of usage, UI research and development side of the application.",
      "Designed and developed a generic shared component library which can be utilized by different web applications using React, HTML and SCSS.",
      "Analyzed the usage of various application modules by various organizations by using various monitoring tools like New Relic and try to find the issues which users were experiencing while using the app and investigate towards mitigating it.",
      "Gathered business requirements from clients, worked on development and enhancement of new features.",
    ],
  },
  {
    company: " Trigent Software Inc,Bangalore,India",
    title: "Software Engineer",
    timeline: "Sep 2017-Oct 2019",
    responsibilities: [
      "Worked as a consultant for Oracle India. Worked on various modules of HR and Payroll Application which is responsible for managing payroll, benefits, equity, performance, leaves etc of employees in the organization. It's an overall human resource management solution. I contributed towards the HR module.",
      "Coded the front-end designs applications using web technologies like HTML, CSS, JavaScript, React.JS, Typescript and Redux JS.",
      "Wrote unit test cases for the components using RTL and Jest.",
      "Participated and contributed in various meetings such as Spring planning, standups and tech discussion.",
      "Worked on Cross-Browser compatibility and fixed the bugs for several browsers.",
      "Utilized api’s to retrieve, update, create and display JSON data from backend.",
      "Created dynamic web forms and simulate processes for web application, page navigation and form validation.",
      "Performed manual integration testing of the module after major feature work.",
    ],
  },
];

const Work = () => {
  return (
    <SectionLayout className="mobile:mt-[3rem]">
      <Heading className="w-[30%]">work</Heading>
      <Content>
        {data.map((d) => (
          <div key={d.company}>
            <div className="text-[1.6rem] font-sans font-bold mobile:mb-[12px]">
              {d.company}
            </div>
            <div className="italic mt-[8px] flex gap-[2px] text-[#6E7881] mobile:justify-center mobile:mb-[18px]">
              <div>{d.title}</div>
              <div className="pt-[4px]">
                <GoPrimitiveDot />
              </div>
              <div>{d.timeline}</div>
            </div>
            <div className="leading-[1.875rem] font-normal font-sans text-[#838C95] text-justify">
              <div>{d.responsibilities[0]}</div>
              <div>
                {d.responsibilities[1] ? `•${d.responsibilities[1]}` : ""}
              </div>
              <div>
                {d.responsibilities[2] ? `•${d.responsibilities[2]}` : ""}
              </div>
              <div>
                {d.responsibilities[3] ? `•${d.responsibilities[3]}` : ""}
              </div>
              <div>
                {d.responsibilities[4] ? `•${d.responsibilities[4]}` : ""}
              </div>
              <div>
                {d.responsibilities[5] ? `•${d.responsibilities[5]}` : ""}
              </div>
              <div>
                {d.responsibilities[6] ? `•${d.responsibilities[6]}` : ""}
              </div>
            </div>
          </div>
        ))}
      </Content>
    </SectionLayout>
  );
};

export default Work;
