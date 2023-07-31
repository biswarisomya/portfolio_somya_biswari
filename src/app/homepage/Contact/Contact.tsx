import SectionLayout, {
  Content,
  Heading,
} from "@/app/components/SectionLayout/SectionLayout";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#212121]">
      <SectionLayout className=" mobile:pt-[96px] mobile:pb-[66px]">
        <Heading className="text-[#212121]">h</Heading>
        <Content className="flex-col flex text-justify">
          <span className="text-[28px] text-[#EBEEEE] mb-[6px] font-bold font-sans">
            Contact Details
          </span>
          <div className="flex flex-col  mobile:w-[72%] mobile:mx-auto text-[17px] font-semibold font-sans leading-[30px] text-[#D8D8D8]">
            <span>Somya Biswari</span>
            <span>San Francisco, CA, US</span>
            <span>(341) 356-2499</span>
            <span>biswarisomya1@gmail.com</span>
          </div>
        </Content>
      </SectionLayout>
    </section>
  );
};

export default Contact;
