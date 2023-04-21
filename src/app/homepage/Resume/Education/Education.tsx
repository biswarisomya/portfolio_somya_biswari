import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";
import { GoPrimitiveDot } from "react-icons/go";

const Education = () => {
  return (
    <SectionLayout>
      <Heading>education</Heading>
      <Content>
        <div className="text-[1.6rem] font-sans font-bold">
          Dr. A. P. J. Abdul Kalam Technical University, India
        </div>
        <div className="italic mobile:flex-col mt-[8px] mobile:mt-[9px]  text-[#6E7881] mobile:mb-[18px] mobile:gap-0 flex gap-[2px]">
          Bachelor's in Electrical & Electronics Engineering,GPA 3.77/4.0
          <div className="pt-[4px] mobile:hidden">
            <GoPrimitiveDot />
          </div>
          <div>May 2017</div>
        </div>
      </Content>
    </SectionLayout>
  );
};

export default Education;
