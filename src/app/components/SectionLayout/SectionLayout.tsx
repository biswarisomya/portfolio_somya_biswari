import React, { ReactComponentElement, ReactElement, ReactNode } from "react";

export const Heading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`basis-[25%]  mobile:mx-auto mobile:tracking-widest mobile:mb-[12px] px-[20px] text-[1.1rem] font-bold font-sans tracking-wide uppercase mobile:items-center ${className}`}
    >
      {children}
    </div>
  );
};

export const Content = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`basis-full pl-[20px] mobile:text-center mobile:pl-[0px]  ${className}`}
    >
      {children}
    </div>
  );
};

const SectionLayout = ({
  children,
  className,
}: {
  children: ReactComponentElement<any>[];
  className?: string;
}) => {
  const heading = children.find(
    (c: ReactComponentElement<any>) => c.type.name === "Heading"
  );
  const content = children.find(
    (c: ReactComponentElement<any>) => c.type.name === "Content"
  );

  return (
    <div
      className={`mx-auto flex mobile:flex mobile:flex-col mobile:pt-[0px] pb-[4rem] pt-[4rem] border-b-[#E8E8E8] basis-[71%] ${className} border-b last:border-none `}
    >
      {heading}
      {content}
    </div>
  );
};

export default SectionLayout;
