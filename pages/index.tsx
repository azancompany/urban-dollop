import type { NextPage } from "next";
import Frame1 from "../components/frame1";
import FrameComponent1 from "../components/frame-component1";
import Frame from "../components/frame";

const AZAN: NextPage = () => {
  return (
    <div className="w-full h-[5297px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-1 px-0 pb-[425px] box-border leading-[normal] tracking-[normal] mq1250:h-auto">
      <main className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 pb-[9px] pl-[9px] pr-0 box-border relative max-w-full shrink-0 text-left text-13xl text-black font-roboto">
        <Frame1 />
        <h1 className="!m-[0] w-[313px] absolute right-[68px] bottom-[1686px] text-inherit tracking-[2px] leading-[30px] font-normal font-[inherit] inline-block z-[1] mq450:text-lgi mq450:leading-[18px] mq750:text-7xl mq750:leading-[24px]">
          HSE, Financial and Legal Facilitation
        </h1>
        <h1 className="!m-[0] w-[343px] absolute right-[454px] bottom-[1691px] text-inherit tracking-[2px] leading-[50px] font-normal font-[inherit] inline-block z-[1] mq450:text-lgi mq450:leading-[30px] mq750:text-7xl mq750:leading-[40px]">
          Proposal Compliance
        </h1>
        <h1 className="!m-[0] w-[316px] absolute bottom-[1693px] left-[65px] text-inherit tracking-[2px] leading-[50px] font-normal font-[inherit] inline-block z-[1] mq450:text-lgi mq450:leading-[30px] mq750:text-7xl mq750:leading-[40px]">
          Opportunity Access
        </h1>
        <FrameComponent1 />
      </main>
      <Frame />
    </div>
  );
};

export default AZAN;
