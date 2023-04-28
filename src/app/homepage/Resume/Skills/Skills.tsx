import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";

const Skills = () => {
  const data = [
    {
      technology: "HTML 5",
      percentage: "90%",
    },
    {
      technology: "CSS 3",
      percentage: "90",
    },
    {
      technology: "TYPESCRIPT",
      percentage: "90",
    },
    {
      technology: "JAVASCRIPT",
      percentage: "90",
    },
    {
      technology: "REACT JS",
      percentage: "90",
    },
    {
      technology: "REDUX",
      percentage: "90",
    },
    {
      technology: "BOOTSTRAP",
      percentage: "90",
    },
    {
      technology: "TAILWIND",
      percentage: "90",
    },
    {
      technology: "SCSS",
      percentage: "90",
    },
    {
      technology: "REACT TESTING LIBRARY",
      percentage: "90",
    },
    {
      technology: "JEST",
      percentage: "90",
    },
    {
      technology: "GIT",
      percentage: "90",
    },
    {
      technology: "NODE JS",
      percentage: "90",
    },
    {
      technology: "NEXT JS",
      percentage: "80%",
    },
    {
      technology: "EXPRESS JS",
      percentage: "80%",
    },
    {
      technology: "MONGO DB",
      percentage: "80%",
    },
    {
      technology: "SQL",
      percentage: "80%",
    },
    {
      technology: "AJAX",
      percentage: "80%",
    },
    {
      technology: "REST API",
      percentage: "80%",
    },
    {
      technology: "NEXT JS",
      percentage: "80%",
    },
    {
      technology: "J-QUERY",
      percentage: "70%",
    },
  ];
  return (
    <SectionLayout className=" mobile:mt-[3rem] ">
      <Heading>skills</Heading>
      <Content>
        <div className="text-justify leading-[30px] text-[#838C95] mb-[30px]">
          <div>
            <span className="text-[15px] font-sans font-bold">
              Operating System
            </span>
            : Mac, Windows
          </div>
          <div>
            <span className="text-[15px] font-sans font-bold">Tools</span>:
            IntelliJ, Github, VS Code, AWS, Jenkins, Docker, JIRA, Eclipse{" "}
          </div>
          <div>
            <span className="text-[15px] font-sans font-bold">
              Testing Framework
            </span>
            : Junit, Mocha, Gherkin, Puppeteer, Enzyme, Jest
          </div>
          <div>
            <span className="text-[15px] font-sans font-bold">
              Machine Learning
            </span>
            : Tensorflow, Keras, Numpy, Anaconda Navigator,
          </div>
          <div>
            <span className="text-[15px] font-sans font-bold">
              Learning Technologies:
            </span>
            : Native React, Graph QL
          </div>
        </div>
        <div className="uppercase tracking-widest font-sans font-bold">
          {data.map((d) => {
            return (
              <div>
                <p className="mobile:text-left mobile:tracking-widest mb-[15px] ">
                  {d.technology}
                </p>
                <div className="w-[100%] bg-[#ccc] mb-[15px] ">
                  <div className=" h-[42px] w-[90%] bg-[#313131] text-white text-right">
                    {d.percentage}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Content>
    </SectionLayout>
  );
};

export default Skills;
