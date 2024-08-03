import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <header
      className={`w-[1208px] !m-[0] absolute top-[1px] right-[21px] flex flex-col items-end justify-start py-0 pl-0 pr-[285px] box-border gap-3.5 max-w-full text-left text-sm text-black font-montserrat ${className}`}
    >
      <div className="w-[1201px] h-[15px] !m-[0] absolute top-[62px] left-[7px] flex flex-row items-start justify-start max-w-full">
        <div className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start max-w-full z-[1]">
          <div className="h-[15px] w-[15px] relative rounded" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-center max-w-full z-[2]">
          <div className="w-[15px] h-[15px] relative overflow-hidden shrink-0 hidden" />
        </div>
        <div className="w-[683px] !m-[0] absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_341.5px)] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full z-[3]">
          <div className="h-[15px] w-[15px] relative rounded" />
        </div>
        <div className="h-full w-[683px] !m-[0] absolute top-[0px] bottom-[0px] left-[calc(50%_-_341.5px)] overflow-hidden shrink-0 flex flex-col items-start justify-center z-[4]">
          <div className="w-[15px] h-[15px] relative overflow-hidden shrink-0 hidden" />
        </div>
      </div>
      <div className="w-[979px] h-5 !m-[0] absolute top-[59px] left-[118px] flex flex-row items-start justify-start max-w-full">
        <div className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[5]">
          <div className="h-5 w-10 relative rounded" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center max-w-full z-[6]">
          <div className="w-5 h-5 relative overflow-hidden shrink-0 hidden" />
        </div>
      </div>
      <div className="w-[1039px] h-5 !m-[0] absolute top-[59px] left-[88px] flex flex-row items-start justify-start max-w-full">
        <div className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[7]">
          <div className="h-5 w-10 relative rounded" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center max-w-full z-[8]">
          <div className="w-5 h-5 relative overflow-hidden shrink-0 hidden" />
        </div>
      </div>
      <div className="w-[1099px] h-5 !m-[0] absolute top-[59px] left-[58px] flex flex-row items-start justify-start max-w-full">
        <div className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[9]">
          <div className="h-5 w-10 relative rounded" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center max-w-full z-[10]">
          <div className="w-5 h-5 relative overflow-hidden shrink-0 hidden" />
        </div>
      </div>
      <div className="w-[1159px] h-5 !m-[0] absolute top-[59px] left-[28px] flex flex-row items-start justify-start max-w-full">
        <div className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[11]">
          <div className="h-5 w-10 relative rounded" />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center max-w-full z-[12]">
          <div className="w-5 h-5 relative overflow-hidden shrink-0 hidden" />
        </div>
        <div className="w-[1169px] !m-[0] absolute top-[-15px] left-[calc(50%_-_584.5px)] overflow-hidden shrink-0 flex flex-row items-start justify-end z-[15]">
          <div className="h-[45px] w-[260px] relative bg-gray-500" />
        </div>
      </div>
      <div className="w-[631px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xl text-white font-roboto">
        <div className="w-[305px] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[15]">
          <a className="[text-decoration:none] w-[146px] relative leading-[22px] text-[inherit] inline-block shrink-0 mq450:text-base mq450:leading-[18px]">
            Join the Waitlist
          </a>
        </div>
      </div>
      <div className="w-[239px] !m-[0] absolute top-[58px] left-[488px] flex flex-row items-start justify-start">
        <div className="w-[47px] !m-[0] absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_23.5px)] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[16]">
          <a className="[text-decoration:none] relative leading-[14px] text-[inherit] inline-block min-w-[46px]">
            HOME
          </a>
        </div>
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-end z-[17]">
          <a className="[text-decoration:none] relative leading-[14px] text-[inherit] inline-block min-w-[81px]">
            SERVUCES
          </a>
        </div>
      </div>
      <div className="w-[1009px] !m-[0] absolute top-[57px] left-[103px] flex flex-row items-start justify-start max-w-full">
        <div className="w-[337px] !m-[0] absolute top-[calc(50%_-_7px)] left-[calc(50%_-_168.5px)] overflow-hidden shrink-0 flex flex-row items-start justify-end z-[18]">
          <a className="[text-decoration:none] relative leading-[14px] text-[inherit] inline-block min-w-[31px]">
            FAQ
          </a>
        </div>
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-end max-w-full z-[21] text-center text-base text-white">
          <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit]">
            REGISTER NOW
          </a>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-21xl text-gray-200 font-aoboshi-one mq1050:flex-wrap mq1050:justify-center">
        <a className="[text-decoration:none] relative leading-[60px] text-[inherit] [transform:_rotate(-180deg)] z-[1] mq450:text-5xl mq450:leading-[36px] mq750:text-13xl mq750:leading-[48px]">
          NVZV
        </a>
        <div className="w-[631px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border max-w-full text-sm text-black font-montserrat">
          <div className="self-stretch h-3.5 relative max-w-full">
            <div className="absolute top-[0px] left-[62px] w-[507px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[19]">
              <a className="[text-decoration:none] relative leading-[14px] text-[inherit] inline-block min-w-[70px]">
                CONTACT
              </a>
            </div>
            <div className="absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-row items-start justify-end max-w-full h-full z-[20]">
              <a className="[text-decoration:none] relative leading-[14px] text-[inherit] inline-block min-w-[47px]">
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
