import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";

const Skills = () => {
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
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px] ">
              Javascript
            </p>
            <div className="w-[100%] bg-[#ccc] mb-[15px] ">
              <div className=" h-[42px] w-[90%] bg-[#313131] text-white text-right">
                90%
              </div>
            </div>
          </div>
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px]">
              Node js
            </p>
            <div className="w-[100%] bg-[#ccc] mb-[15px] ">
              <div className=" h-[42px] w-[80%] bg-[#313131] text-white text-right">
                80%
              </div>
            </div>
          </div>
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px]">
              React + Redux + Mobx
            </p>
            <div className="w-[100%] bg-[#ccc] mb-[15px]">
              <div className=" h-[42px] w-[90%] bg-[#313131] text-white text-right">
                90%
              </div>
            </div>
          </div>
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px]">
              Angular JS
            </p>
            <div className="w-[100%] bg-[#ccc] mb-[15px] ">
              <div className=" h-[42px] w-[30%] bg-[#313131] text-white text-right">
                30%
              </div>
            </div>
          </div>
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px]">
              Java
            </p>
            <div className="w-[100%] bg-[#ccc] mb-[15px] ">
              <div className=" h-[42px] w-[60%] bg-[#313131] text-white text-right">
                60%
              </div>
            </div>
          </div>
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px]">
              Oracle
            </p>
            <div className="w-[100%] bg-[#ccc] mb-[15px] ">
              <div className=" h-[42px] w-[70%] bg-[#313131] text-white text-right">
                70%
              </div>
            </div>
          </div>
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px]">
              CSS
            </p>
            <div className="w-[100%] bg-[#ccc]  mb-[15px]">
              <div className=" h-[42px] w-[90%] bg-[#313131] text-white text-right">
                90%
              </div>
            </div>
          </div>
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px]">
              HTML 5
            </p>
            <div className="w-[100%] bg-[#ccc] mobile:mb-[15px] ">
              <div className=" h-[42px] w-[90%] bg-[#313131] text-white text-right">
                90%
              </div>
            </div>
          </div>
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px]">
              Bootstrap
            </p>
            <div className="w-[100%] bg-[#ccc] mb-[15px]">
              <div className=" h-[42px] w-[90%] bg-[#313131] text-white text-right">
                90%
              </div>
            </div>
          </div>
          <div>
            <p className="mobile:text-left mobile:tracking-widest mb-[15px]">
              MongoDB
            </p>
            <div className="w-[100%] bg-[#ccc] mb-[15px]">
              <div className=" h-[42px] w-[80%] bg-[#313131] text-white text-right">
                80%
              </div>
            </div>
          </div>
        </div>
      </Content>
    </SectionLayout>
  );
};

export default Skills;
