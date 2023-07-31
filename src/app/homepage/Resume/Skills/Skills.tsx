import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";
const data = [
  {
    technology: "HTML 5",
    percentage: 90,
  },
  {
    technology: "CSS 3",
    percentage: 90,
  },
  {
    technology: "TYPESCRIPT",
    percentage: 90,
  },
  {
    technology: "JAVASCRIPT",
    percentage: 90,
  },
  {
    technology: "REACT JS",
    percentage: 90,
  },
  {
    technology: "REDUX",
    percentage: 90,
  },
  {
    technology: "BOOTSTRAP",
    percentage: 90,
  },
  {
    technology: "TAILWIND",
    percentage: 90,
  },
  {
    technology: "SCSS",
    percentage: 90,
  },
  {
    technology: "REACT TESTING LIBRARY",
    percentage: 90,
  },
  {
    technology: "JEST",
    percentage: 90,
  },
  {
    technology: "GIT",
    percentage: 90,
  },
  {
    technology: "JIRA",
    percentage: 90,
  },
  {
    technology: "NODE JS",
    percentage: 90,
  },
  {
    technology: "NEXT JS",
    percentage: 80,
  },
  {
    technology: "EXPRESS JS",
    percentage: 80,
  },
  {
    technology: "SQL",
    percentage: 80,
  },
  {
    technology: "REST API",
    percentage: 80,
  },
];

const skills = [
  {
    label: "Languages",
    value: ["Javascript"],
  },
  {
    label: "Web Development",
    value: [
      "ReactJS",
      "NextJS",
      "Typescript",
      "Redux",
      "Recoil",
      "Node",
      "Express",
      "HTML",
      "SCSS",
      "CSS",
      "Tailwind",
      "Bootstrap",
      "ES6",
    ],
  },
  {
    label: "SW Tools",
    value: [
      "Git Hub",
      "JIRA",
      "VS Code",
      "Agile Development",
      "Waterfall",
      "Postman",
      "Webstorm",
    ],
  },
  {
    label: "Database",
    value: ["Oracle", "MySql", "PostgreSQL"],
  },
  {
    label: "AWS",
    value: ["EC2", "S3", "RDS"],
  },
  {
    label: "Testing and Performance",
    value: ["React Testing Library", "Jest", "Lighthouse"],
  },
];

const Skills = () => {
  return (
    <SectionLayout className=" mobile:mt-[3rem] ">
      <Heading>skills</Heading>
      <Content>
        <div className=" leading-[30px] text-[#838C95] mb-[30px]">
          {skills.map((d) => {
            return (
              <div>
                <span className="text-[15px] font-sans font-bold">
                  {d.label}:
                </span>
                {d.value.map((v, i) => (
                  <span>{i === d.value.length - 1 ? ` ${v}` : ` ${v},`}</span>
                ))}
              </div>
            );
          })}
        </div>
        <div className="uppercase tracking-widest font-sans font-bold">
          {data.map((d) => {
            return (
              <div key={d.technology}>
                <p className="mobile:text-left mobile:tracking-widest mb-[15px] ">
                  {d.technology}
                </p>
                <div className="w-[100%] bg-[#ccc] mb-[15px] ">
                  <div
                    key={d.technology}
                    className={`h-[42px] w-[${d.percentage}%]  bg-[#313131] text-white text-right`}
                  >
                    {d.percentage}%
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
