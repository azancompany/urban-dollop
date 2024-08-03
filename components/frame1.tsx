import type { NextPage } from "next";

export type Frame1Type = {
  className?: string;
};

const Frame1: NextPage<Frame1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[4859px] relative overflow-hidden shrink-0 max-w-full text-left text-mini text-gray-300 font-roboto mq1250:h-auto mq1250:min-h-[4859] ${className}`}
    >
      <div className="absolute top-[30px] left-[0px] w-[1257px] h-[789px] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[800px] w-[1257px] relative object-cover max-w-full shrink-0"
          alt=""
          src="/image@2x.png"
        />
        <div className="w-[277px] overflow-hidden shrink-0 flex flex-col items-end justify-center z-[1]">
          <img
            className="w-14 h-[43px] relative rounded-8xs object-cover"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className="w-[277px] overflow-hidden shrink-0 flex flex-col items-end justify-center z-[2]">
          <img
            className="w-14 h-[43px] relative rounded-8xs object-cover"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_20px)] top-[442px] right-[10px] left-[10px] overflow-hidden hidden flex-col items-start justify-center">
        <div className="w-[138px] h-[50px] relative border-white border-[2px] border-solid box-border hidden" />
      </div>
      <div className="absolute w-full top-[1060px] right-[0px] left-[0px] bg-gray-100 h-[640px]" />
      <div className="absolute top-[1610px] left-[154px] w-[949px] h-10 overflow-hidden hidden flex-col items-start justify-center">
        <div className="w-[154px] h-10 relative hidden" />
      </div>
      <div className="absolute top-[1610px] left-[309px] w-[639px] h-10 overflow-hidden hidden flex-col items-start justify-center">
        <div className="w-[154px] h-10 relative hidden" />
      </div>
      <div className="absolute top-[1610px] left-[463px] w-[331px] h-10 overflow-hidden hidden flex-col items-start justify-center">
        <div className="w-[154px] h-10 relative hidden" />
      </div>
      <div className="absolute top-[1610px] left-[486px] w-[285px] h-10 overflow-hidden hidden flex-col items-end justify-center">
        <div className="w-[154px] h-10 relative hidden" />
      </div>
      <div className="absolute top-[1610px] left-[309px] w-[639px] h-10 overflow-hidden hidden flex-col items-end justify-center">
        <div className="w-44 h-10 relative hidden" />
      </div>
      <div className="absolute top-[1610px] left-[155px] w-[947px] h-10 overflow-hidden hidden flex-col items-end justify-center">
        <div className="w-[154px] h-10 relative hidden" />
      </div>
      <div className="absolute top-[1610px] left-[1px] w-[1255px] h-10 overflow-hidden hidden flex-col items-end justify-center">
        <div className="w-[154px] h-10 relative hidden" />
      </div>
      <div className="absolute top-[1700px] left-[28px] w-[1201px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1250:flex-wrap">
        <div className="h-[349px] w-[1200px] relative bg-gray-100 overflow-hidden shrink-0 min-w-[1200px] max-w-full z-[1] mq450:min-w-full mq750:min-w-full mq1050:min-w-full mq1250:flex-1 mq1250:min-w-full" />
        <div className="w-[1201px] overflow-hidden shrink-0 flex flex-col items-start justify-center min-w-[1201px] max-w-full z-[2] mq450:min-w-full mq750:min-w-full mq1050:min-w-full mq1250:flex-1 mq1250:min-w-full">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover mq1250:self-stretch mq1250:w-auto"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[2246px] left-[59px] w-[1139px] flex flex-row items-start justify-start max-w-full text-center text-5xl text-white">
        <div className="w-[1141px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <div className="h-[45px] w-[285px] relative rounded-10xs bg-whitesmoke" />
        </div>
        <div className="w-[591px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-[calc(100%_-_2526px)] z-[1]">
          <div className="h-[45px] w-[285px] relative rounded-10xs bg-whitesmoke" />
        </div>
        <div className="w-[1139px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[2]">
          <input
            className="[border:none] [outline:none] bg-whitesmoke h-[45px] w-[560px] relative max-w-full"
            type="text"
          />
        </div>
        <div className="w-[149px] overflow-hidden shrink-0 flex flex-row items-start justify-end z-[3]">
          <div className="h-[45px] w-[65px] relative bg-darkslategray-200" />
        </div>
        <div className="w-[97px] overflow-hidden shrink-0 flex flex-row items-start justify-end z-[5]">
          <div className="w-[7px] relative leading-[24px] inline-block shrink-0 mq450:text-lgi mq450:leading-[19px]">
            1
          </div>
        </div>
      </div>
      <div className="absolute top-[2401px] left-[59px] w-[1139px] h-[45px] flex flex-row items-start justify-start max-w-full">
        <div className="w-[1141px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <textarea
            className="[border:none] bg-whitesmoke h-[173px] w-[560px] [outline:none] relative rounded-10xs max-w-full"
            rows={9}
            cols={27}
          />
        </div>
        <div className="w-[1139px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[1]">
          <input
            className="[border:none] [outline:none] bg-whitesmoke h-[45px] w-[560px] relative max-w-full"
            type="text"
          />
        </div>
        <div className="w-[149px] overflow-hidden shrink-0 flex flex-row items-start justify-end z-[2]">
          <div className="h-[45px] w-[65px] relative bg-gray-200" />
        </div>
      </div>
      <div className="absolute top-[2461px] left-[59px] w-[1139px] flex flex-row items-start justify-start max-w-full text-center text-smi text-gray-200 font-open-sans">
        <div className="w-[751px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-[calc(100%_-_1935px)]">
          <input
            className="border-gray-200 border-[2px] border-solid [outline:none] bg-[transparent] h-[45px] w-[170px] relative box-border"
            type="text"
          />
        </div>
        <div className="w-[1139px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[1]">
          <input
            className="[border:none] [outline:none] bg-whitesmoke h-[45px] w-[560px] relative max-w-full"
            type="text"
          />
        </div>
        <div className="w-[149px] overflow-hidden shrink-0 flex flex-row items-start justify-end z-[2]">
          <div className="h-[45px] w-[65px] relative bg-gray-200" />
        </div>
        <div className="w-[647px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-[calc(100%_-_2039px)] z-[3]">
          <div className="w-[46px] relative leading-[14px] inline-block shrink-0 min-w-[46px]">
            Submit
          </div>
        </div>
      </div>
      <div className="absolute top-[2566px] left-[0px] w-[1257px] flex flex-row items-start justify-start max-w-full">
        <img
          className="w-[1257px] relative max-h-full object-cover max-w-full shrink-0"
          alt=""
          src="/image-3@2x.png"
        />
        <div className="w-[1001px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-[calc(100%_-_3259px)] z-[1] mq450:max-w-[calc(100%_-_2002px)] mq750:max-w-[calc(100%_-_2002px)] mq1050:max-w-[calc(100%_-_2002px)] mq1250:max-w-[calc(100%_-_2002px)]">
          <div className="h-10 w-[50px] relative rounded" />
        </div>
        <div className="h-10 w-[1001px] overflow-hidden shrink-0 flex flex-col items-start justify-center max-w-[calc(100%_-_3259px)] z-[2] mq450:max-w-[calc(100%_-_2002px)] mq750:max-w-[calc(100%_-_2002px)] mq1050:max-w-[calc(100%_-_2002px)] mq1250:max-w-[calc(100%_-_2002px)]">
          <div className="w-[30px] h-10 relative overflow-hidden shrink-0 hidden" />
        </div>
        <div className="h-10 w-[1001px] overflow-hidden shrink-0 flex flex-col items-start justify-center max-w-[calc(100%_-_3259px)] z-[4] mq450:max-w-[calc(100%_-_2002px)] mq750:max-w-[calc(100%_-_2002px)] mq1050:max-w-[calc(100%_-_2002px)] mq1250:max-w-[calc(100%_-_2002px)]">
          <div className="w-[30px] h-10 relative overflow-hidden shrink-0 hidden" />
        </div>
      </div>
      <div className="absolute top-[3171px] left-[66px] w-[1125px] h-[15px] flex flex-row items-start justify-start max-w-full">
        <div className="w-[1125px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full z-[1]">
          <div className="h-[15px] w-[35px] relative rounded" />
        </div>
        <div className="self-stretch w-[1125px] overflow-hidden shrink-0 flex flex-col items-start justify-center max-w-full z-[2]">
          <div className="w-[15px] h-[15px] relative overflow-hidden shrink-0 hidden" />
        </div>
        <div className="h-[15px] w-[305px] overflow-hidden shrink-0 flex flex-col items-start justify-center z-[5]">
          <div className="w-[15px] h-[15px] relative overflow-hidden shrink-0 hidden" />
        </div>
        <div className="w-[545px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-[calc(100%_-_3100px)] z-[7]">
          <div className="h-[15px] w-[35px] relative rounded" />
        </div>
        <div className="self-stretch w-[545px] overflow-hidden shrink-0 flex flex-col items-end justify-center max-w-[calc(100%_-_3100px)] z-[8]">
          <div className="w-[15px] h-[15px] relative overflow-hidden shrink-0 hidden" />
        </div>
      </div>
      <div className="absolute top-[3111px] left-[29px] w-[1199px] h-[180px] flex flex-row items-start justify-start max-w-full font-montserrat">
        <div className="w-[1201px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <textarea
            className="[border:none] bg-whitesmoke h-[180px] w-[400px] [outline:none] relative max-w-full"
            rows={9}
            cols={19}
          />
        </div>
        <textarea
          className="[border:none] bg-whitesmoke h-[180px] w-[380px] [outline:none] relative overflow-hidden shrink-0 max-w-[calc(100%_-_2705px)] z-[3]"
          rows={9}
          cols={19}
        />
        <div className="self-stretch w-[1199px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[6]">
          <div className="self-stretch w-[400px] relative bg-whitesmoke max-w-full" />
        </div>
        <div className="w-[305px] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[8]">
          <div className="flex-1 relative leading-[22.5px]">
            Add a short overview of your plans for the coming year
          </div>
        </div>
      </div>
      <div className="absolute top-[3389px] left-[0px] bg-white w-[1257px] h-[483px] hidden" />
      <div className="absolute top-[3872px] left-[0px] bg-white w-[1257px] h-[438px] hidden" />
      <div className="absolute top-[4796px] left-[49px] w-[1159px] flex flex-row items-start justify-start max-w-full text-center text-gray-200 font-montserrat">
        <div className="w-[1161px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <input
            className="border-gray-200 border-[2px] border-solid [outline:none] bg-[transparent] h-[50px] w-[380px] relative box-border max-w-full"
            type="text"
          />
        </div>
        <input
          className="border-gray-200 border-[2px] border-solid [outline:none] bg-[transparent] h-[50px] w-[360px] relative box-border overflow-hidden shrink-0 max-w-[calc(100%_-_3207px)] z-[1]"
          type="text"
        />
        <div className="w-[1159px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[2]">
          <input
            className="border-gray-200 border-[2px] border-solid [outline:none] bg-[transparent] h-[50px] w-[380px] relative box-border max-w-full"
            type="text"
          />
        </div>
        <div className="w-[887px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-[calc(100%_-_2680px)] z-[5]">
          <a className="[text-decoration:none] w-[82px] relative leading-[16px] text-[inherit] inline-block shrink-0 min-w-[82px]">
            Read Now
          </a>
        </div>
      </div>
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-gray-200 h-[30px] z-[1]" />
      <div className="absolute top-[23px] left-[0px] w-[1257px] h-[90px] hidden" />
      <div className="absolute top-[23px] left-[0px] bg-gray-400 w-[1257px] h-[90px] hidden" />
      <div className="absolute top-[110px] left-[0px] w-[1237px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border max-w-full text-47xl text-white">
        <div className="flex-1 flex flex-col items-start justify-start gap-[66px] max-w-full">
          <div className="self-stretch h-px relative bg-gainsboro z-[1]" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full">
            <div className="flex-1 overflow-hidden flex flex-row items-start justify-start max-w-full z-[1]">
              <div className="h-[175px] w-[632px] relative leading-[70px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[42px] mq750:text-7xl mq750:leading-[56px]">
                <p className="m-0">
                  <b>Welcome to AZAN</b>
                </p>
                <p className="m-0 text-13xl">
                  The Gateway of Corporate Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[437px] left-[0px] w-[1225px] flex flex-row items-start justify-start pt-0 pb-[138px] pl-8 pr-0 box-border max-w-full text-5xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
          <div className="self-stretch h-9 relative max-w-full">
            <div className="absolute top-[0px] left-[179px] w-[835px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[3]">
              <h2 className="m-0 w-[250px] relative text-inherit tracking-[1px] leading-[28px] font-normal font-[inherit] inline-block shrink-0 mq450:text-lgi mq450:leading-[26px]">
                <p className="m-0">Opportunities</p>
                <p className="m-0">Data</p>
              </h2>
            </div>
            <div className="absolute top-[20px] left-[0px] w-[1193px] overflow-hidden flex flex-row items-start justify-start max-w-full z-[5] text-center text-mini text-white font-montserrat">
              <div className="w-[101px] relative leading-[16px] font-semibold inline-block shrink-0 min-w-[101px]">
                Explore Now
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[819px] flex flex-col items-start justify-start gap-[17px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-9 box-border max-w-full">
                <div className="h-[49px] flex-1 relative max-w-full">
                  <div className="absolute top-[6px] left-[235px] w-[277px] overflow-hidden flex flex-col items-end justify-center z-[1]">
                    <img
                      className="w-14 h-[43px] relative rounded-8xs object-cover"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-[747px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[2]">
                    <div className="w-[190px] relative tracking-[1px] leading-[28px] inline-block shrink-0 whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                      <span>Business</span>
                      <span className="text-13xl"> News</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-end z-[1]">
                <h2 className="m-0 w-[234px] relative text-inherit tracking-[1px] leading-[27px] font-normal font-[inherit] inline-block shrink-0 whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                  ON All Your Platform
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[812px] left-[0px] w-full flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-13xl font-rufina">
        <div className="h-[241px] flex-1 [filter:drop-shadow(-4px_4px_16px_#fff)] flex flex-col items-start justify-start py-0 px-7 box-border relative gap-2.5 max-w-full z-[1]">
          <div className="self-stretch h-[241px] relative hidden z-[0]" />
          <div className="w-[50px] h-[50px] absolute !m-[0] top-[-1868px] left-[28px] rounded-8xs" />
          <img
            className="w-[50px] h-[50px] absolute !m-[0] top-[-1868px] left-[28px] rounded-8xs object-cover z-[1]"
            alt=""
            src="/image-5@2x.png"
          />
          <div className="w-[50px] h-[50px] absolute !m-[0] top-[-1868px] left-[442px] rounded-8xs" />
          <img
            className="w-[50px] h-[50px] absolute !m-[0] top-[-1868px] left-[442px] rounded-8xs object-cover z-[1]"
            alt=""
            src="/image-6@2x.png"
          />
          <div className="w-[50px] h-[50px] absolute !m-[0] top-[-1868px] right-[352px] rounded-8xs" />
          <img
            className="w-[50px] h-[50px] absolute !m-[0] top-[-1868px] right-[352px] rounded-8xs object-cover z-[1]"
            alt=""
            src="/image-7@2x.png"
          />
          <a className="[text-decoration:none] w-[155px] absolute !m-[0] top-[-1863px] left-[118px] tracking-[1px] leading-[32px] text-[inherit] inline-block mq450:text-lgi mq450:leading-[19px] mq750:text-7xl mq750:leading-[26px]">
            Exclusive
          </a>
          <a className="[text-decoration:none] w-[164px] absolute !m-[0] top-[-1863px] left-[532px] text-11xl tracking-[1px] leading-[32px] text-[inherit] inline-block mq450:text-lg mq450:leading-[19px] mq750:text-5xl mq750:leading-[26px]">
            Expertise
          </a>
          <a className="[text-decoration:none] w-[103px] absolute !m-[0] top-[-1863px] right-[209px] tracking-[1px] leading-[32px] text-[inherit] inline-block mq450:text-lgi mq450:leading-[19px] mq750:text-7xl mq750:leading-[26px]">
            Speed
          </a>
          <div className="w-[360px] absolute !m-[0] top-[-1799px] left-[28px] text-mini leading-[22.5px] font-montserrat inline-block">
            Saving you time and effort by quick access to information and rapid
            processing of investment opportunities.
          </div>
          <div className="w-[357px] absolute !m-[0] top-[-1799px] left-[442px] text-mini leading-[22.5px] font-montserrat inline-block">
            Professional support to ensure the quality of investment proposals
          </div>
          <div className="w-[357px] absolute !m-[0] top-[-1801px] right-[45px] text-sm leading-[22.5px] font-montserrat inline-block">
            {" "}
            A single integrated platform for all investment-related activities.
          </div>
        </div>
      </div>
      <div className="absolute top-[1178px] left-[0px] w-[930px] flex flex-row items-start justify-end pt-0 px-0 pb-[174px] box-border max-w-full text-center text-21xl text-white font-antic-didone">
        <div className="w-[623px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[102px] max-w-full">
          <div className="self-stretch h-[60px] flex flex-row items-start justify-start max-w-full">
            <img
              className="h-[500px] w-[1000px] relative overflow-hidden shrink-0 object-cover max-w-[166%] z-[1]"
              loading="lazy"
              alt=""
              src="/frame@2x.png"
            />
            <div className="w-[603px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full z-[2]">
              <h1 className="m-0 flex-1 relative text-inherit leading-[60px] font-normal font-[inherit] inline-block max-w-full mq450:text-5xl mq450:leading-[36px] mq750:text-13xl mq750:leading-[48px]">
                Top-notch Investment services
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-base text-gainsboro font-montserrat">
            <div className="h-4 w-[231px] flex flex-row items-start justify-start">
              <div className="h-[55px] w-[250px] relative bg-gray-500 overflow-hidden shrink-0 z-[2]" />
              <div className="w-[231px] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[3]">
                <div className="w-[143px] relative leading-[16px] font-semibold inline-block shrink-0">
                  VIEW SERVICES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1615px] left-[101px] w-[1055px] flex flex-row items-start justify-start max-w-full text-center text-lgi text-black">
        <div className="w-[1177px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-[112%] z-[8] text-xl">
          <div className="w-[135px] relative tracking-[2px] leading-[30px] inline-block shrink-0 mq450:text-base mq450:leading-[24px]">
            Streamliner
          </div>
        </div>
        <div className="w-[769px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-[calc(100%_-_2999px)] z-[9]">
          <div className="w-[122px] relative tracking-[2px] leading-[30px] inline-block shrink-0">
            Navigator
          </div>
        </div>
        <div className="w-[767px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-[calc(100%_-_3001px)] z-[12]">
          <div className="w-[134px] relative tracking-[2px] leading-[30px] inline-block shrink-0">
            Pioneer
          </div>
        </div>
        <div className="w-[1055px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[13]">
          <div className="w-[98px] relative tracking-[2px] leading-[30px] inline-block shrink-0">
            Aligner
          </div>
        </div>
      </div>
      <div className="absolute top-[1615px] left-[0px] w-[1199px] flex flex-row items-start justify-end pt-0 px-0 pb-11 box-border max-w-full text-xl">
        <div className="w-[1161px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[57px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[35px] box-border max-w-full text-center text-black">
            <div className="h-[30px] w-[377px] relative max-w-full">
              <div className="absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-row items-start justify-start h-full z-[10]">
                <div className="w-[116px] relative tracking-[2px] leading-[30px] inline-block shrink-0 mq450:text-base mq450:leading-[24px]">
                  Calibrator
                </div>
              </div>
              <div className="absolute top-[0px] left-[20px] w-[337px] overflow-hidden flex flex-row items-start justify-end z-[11]">
                <div className="w-[146px] relative tracking-[2px] leading-[30px] inline-block shrink-0 mq450:text-base mq450:leading-[24px]">
                  Transformer
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[45px] pb-[21px] box-border max-w-full text-lg text-white font-montserrat">
            <div className="flex-1 flex flex-col items-start justify-start gap-[28.5px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full font-roboto">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start max-w-full z-[3]">
                    <div className="w-[195px] relative tracking-[2px] leading-[30px] inline-block shrink-0">
                      Welcome To Azan
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full z-[3] text-11xl">
                  <h1 className="m-0 w-[709px] relative text-inherit tracking-[1px] leading-[32px] font-normal font-[inherit] inline-block shrink-0 max-w-full mq450:text-lg mq450:leading-[19px] mq750:text-5xl mq750:leading-[26px]">
                    Bridge the gap between businesses and success
                  </h1>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-base">
                <div className="flex-1 flex flex-col items-start justify-start gap-1.5 max-w-full">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full z-[3]">
                    <div className="w-[582px] relative tracking-[1px] leading-[24px] inline-block shrink-0 max-w-full">
                      We are passionate about providing unwavering dedication to
                      our clients. We believe every business deserves the
                      opportunity to compete and thrive, and we are committed to
                      leveling the playing field by offering accessible and
                      effective solutions
                    </div>
                  </div>
                  <div className="self-stretch h-0.5 flex flex-row items-start justify-start py-0 pl-[19px] pr-5 box-border max-w-full">
                    <div className="self-stretch flex-1 relative bg-steelblue overflow-hidden max-w-full z-[3]" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full text-center text-mini text-gainsboro">
                <div className="h-[50px] flex-1 relative max-w-full">
                  <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden flex flex-row items-start justify-start max-w-full z-[3]">
                    <div className="self-stretch w-[150px] relative border-gray-200 border-[2px] border-solid box-border" />
                  </div>
                  <div className="absolute top-[17px] left-[21px] w-[959px] overflow-hidden flex flex-row items-start justify-start max-w-full z-[4]">
                    <div className="w-[101px] relative leading-[16px] inline-block shrink-0 min-w-[101px]">
                      Explore Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full text-31xl">
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
              <div className="self-stretch h-[50px] relative max-w-full">
                <div className="absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-row items-start justify-start max-w-full h-full">
                  <h1 className="m-0 relative text-inherit tracking-[2px] leading-[50px] font-normal font-[inherit] mq450:text-11xl mq450:leading-[30px] mq750:text-21xl mq750:leading-[40px]">
                    Support
                  </h1>
                </div>
                <div className="absolute top-[0px] left-[229px] w-[683px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[1] text-29xl">
                  <h1 className="m-0 relative text-inherit tracking-[2px] leading-[50px] font-normal font-[inherit] mq450:text-10xl mq450:leading-[30px] mq750:text-19xl mq750:leading-[40px]">
                    How It Works
                  </h1>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full text-mini font-montserrat">
                <div className="self-stretch h-[90px] relative max-w-full">
                  <div className="absolute top-[7px] left-[0px] w-[1141px] overflow-hidden flex flex-row items-start justify-start max-w-full">
                    <div className="w-[504px] relative leading-[22.5px] inline-block shrink-0 max-w-full box-border pr-5">
                      We are committed to supporting you with all your enquiries
                      with real human communication.
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[59px] w-[1023px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[4]">
                    <div className="w-[482px] relative leading-[22.5px] inline-block shrink-0 min-h-[90px] max-w-full">
                      <p className="m-0">{`We understand that time is our community's most precious resource; this is why Our services are always successful because we are deliberately a seamless and time-saving experience. `}</p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-sm">
                  <div className="w-[435px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[6]">
                    <div className="w-[133px] relative leading-[23px] inline-block shrink-0">
                      Effortless Setup
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full text-sm font-montserrat">
              <div className="h-[45px] flex-1 relative max-w-full">
                <div className="absolute top-[4px] left-[520px] w-[87px] overflow-hidden flex flex-row items-start justify-end z-[1]">
                  <div className="h-10 w-1 relative bg-midnightblue" />
                </div>
                <div className="absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-row items-start justify-end max-w-full h-full z-[2]">
                  <div className="w-[510px] relative leading-[22.5px] inline-block shrink-0 max-w-full">
                    Users answer clear prompts or upload relevant documents to
                    define their project requirements or goals.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-mini font-montserrat">
            <div className="w-[637px] flex flex-col items-start justify-start gap-[34px] max-w-full">
              <div className="self-stretch flex flex-row items-end justify-start max-w-full">
                <div className="w-[637px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[4]">
                  <div className="w-[234px] relative leading-[23px] inline-block shrink-0">
                    Smart Recommendations
                  </div>
                </div>
                <div className="w-[105px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border ml-[-371px] text-center text-5xl text-white font-roboto">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-end z-[3]">
                    <div className="relative leading-[24px] inline-block min-w-[13px] mq450:text-lgi mq450:leading-[19px]">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[39px] box-border max-w-full text-sm">
                <div className="flex-1 flex flex-row items-end justify-start max-w-full">
                  <div className="w-[559px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[5]">
                    <div className="w-[195px] relative leading-[23px] inline-block shrink-0">
                      Streamlined Workflow
                    </div>
                  </div>
                  <div className="w-[103px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border ml-[-331px] text-center text-5xl text-white font-roboto">
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-end z-[4]">
                      <div className="relative leading-[24px] inline-block min-w-[12px] mq450:text-lgi mq450:leading-[19px]">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2624px] left-[0px] w-[1167px] flex flex-row items-start justify-end pt-0 px-0 pb-[25px] box-border max-w-full text-36xl text-white">
        <div className="w-[1097px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-3 max-w-full">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[1]">
            <h1 className="m-0 relative text-inherit leading-[60px] font-normal font-[inherit] mq450:text-14xl mq450:leading-[36px] mq750:text-25xl mq750:leading-[48px]">
              Coming Soon .........
            </h1>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full z-[1] text-base font-montserrat">
            <div className="h-[117px] w-[534px] relative tracking-[1px] leading-[24px] inline-block shrink-0 max-w-full box-border pr-5">
              We are revolutionizing how organizations manage information within
              their workflows, facilitate interactions between companies in
              Saudi Arabia and manufacturers and technology proprietors.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full text-lgi font-open-sans">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[3]">
                <div className="relative tracking-[2px] leading-[30px]">
                  Want to learn more
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start max-w-full z-[3]">
                  <div className="h-10 w-[30px] relative rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3010px] left-[0px] w-[1229px] flex flex-row items-start justify-start pt-0 pb-[26px] pl-7 pr-0 box-border max-w-full text-30xl">
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit tracking-[2px] leading-[50px] font-normal font-[inherit] inline-block max-w-full mq450:text-10xl mq450:leading-[30px] mq750:text-20xl mq750:leading-[40px]">
            Mastering Each Stage for Client Success
          </h1>
        </div>
      </div>
      <div className="absolute top-[3171px] left-[0px] w-[1191px] flex flex-row items-start justify-end pt-0 px-0 pb-[139px] box-border max-w-full font-montserrat">
        <div className="w-[1145px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-px max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="w-[305px] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[4]">
              <div className="h-[15px] w-[15px] relative rounded" />
            </div>
          </div>
          <div className="self-stretch h-[45px] relative max-w-full">
            <div className="absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-row items-start justify-start max-w-full h-full z-[7]">
              <div className="w-[259px] relative leading-[22.5px] inline-block shrink-0">
                Add a short overview of your plans for the coming year
              </div>
            </div>
            <div className="absolute top-[0px] left-[13px] w-[1099px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[9]">
              <div className="w-[292px] relative leading-[22.5px] inline-block shrink-0">
                Add a short overview of your plans for the coming year
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3456px] left-[0px] w-[1242px] flex flex-row items-start justify-start py-0 pl-[15px] pr-0 box-border max-w-full font-montserrat">
        <div className="flex-1 flex flex-col items-start justify-start gap-[60px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[31px] pb-[5px] box-border max-w-full text-29xl font-roboto">
            <div className="flex-1 flex flex-col items-start justify-start gap-[9px] max-w-full">
              <div className="self-stretch h-[150px] flex flex-row items-start justify-start max-w-full">
                <div className="w-[1171px] overflow-hidden shrink-0 flex flex-col items-start justify-center max-w-full z-[1]">
                  <img
                    className="w-[505px] relative max-h-full object-cover max-w-full"
                    loading="lazy"
                    alt=""
                    src="/image-4@2x.png"
                  />
                </div>
                <div className="w-[1165px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-full z-[2]">
                  <h1 className="m-0 w-[583px] relative text-inherit tracking-[2px] leading-[50px] font-normal font-[inherit] inline-block shrink-0 max-w-full mq450:text-10xl mq450:leading-[30px] mq750:text-19xl mq750:leading-[40px]">
                    Integrate smart contracts into your business operations
                  </h1>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-mini font-montserrat">
                <div className="w-[805px] flex flex-col items-start justify-start gap-[27px] max-w-full">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-end max-w-full z-[2]">
                    <div className="w-[403px] relative leading-[22.5px] inline-block shrink-0 min-h-[135px] max-w-full">
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">
                        AZAN streamlines business growth by providing a platform
                        for exclusive project opportunities, expert proposal
                        support, and AI-enhanced efficiency in project
                        management.
                      </p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center text-sm text-gray-200 font-open-sans">
                    <div className="h-[45px] w-[299px] relative">
                      <div className="absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-row items-start justify-end h-full z-[2]">
                        <div className="h-[45px] w-[150px] relative border-gray-200 border-[2px] border-solid box-border" />
                      </div>
                      <div className="absolute top-[13px] left-[34px] w-[231px] overflow-hidden flex flex-row items-start justify-end z-[3]">
                        <div className="relative leading-[14px] inline-block min-w-[83px]">
                          Explore Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full text-base text-darkgray">
            <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[5]">
                <a className="[text-decoration:none] relative tracking-[1px] leading-[16px] text-[inherit] inline-block min-w-[65px]">
                  ABOUT
                </a>
              </div>
              <div className="self-stretch h-[100px] flex flex-row items-start justify-start max-w-full text-31xl text-gray-300 font-roboto">
                <div className="w-[1215px] overflow-hidden shrink-0 flex flex-col items-end justify-center max-w-[102%] z-[4]">
                  <img
                    className="w-[546px] relative max-h-full object-cover max-w-full"
                    loading="lazy"
                    alt=""
                    src="/image-31@2x.png"
                  />
                </div>
                <div className="w-[1201px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full z-[5]">
                  <h1 className="m-0 w-[562px] relative text-inherit tracking-[2px] leading-[50px] font-normal font-[inherit] inline-block shrink-0 max-w-full mq450:text-11xl mq450:leading-[30px] mq750:text-21xl mq750:leading-[40px]">
                    Your Role Your engagement is crucial
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[13px] pb-[11px] box-border max-w-full">
            <div className="flex-1 overflow-hidden flex flex-row items-start justify-start max-w-full z-[5]">
              <div className="w-[573px] relative leading-[22.5px] inline-block shrink-0 max-w-full">
                We encourage you to communicate openly with us, share your
                goals, and provide feedback so that we can serve you better
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[13px] pb-[13px] box-border max-w-full text-center text-sm text-gray-200 font-open-sans">
            <div className="h-[45px] flex-1 relative max-w-full">
              <div className="absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-row items-start justify-start max-w-full h-full z-[3]">
                <div className="h-[45px] w-[170px] relative border-gray-200 border-[2px] border-solid box-border" />
              </div>
              <div className="absolute top-[13px] left-[45px] w-[1111px] overflow-hidden flex flex-row items-start justify-start max-w-full z-[5]">
                <div className="relative leading-[14px] inline-block min-w-[60px]">
                  About Us
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full text-28xl font-roboto">
            <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[1035px] flex flex-col items-start justify-start gap-7 max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <div className="w-[731px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
                      <h1 className="m-0 flex-1 relative text-inherit tracking-[2px] leading-[50px] font-normal font-[inherit] inline-block max-w-full mq450:text-9xl mq450:leading-[30px] mq750:text-19xl mq750:leading-[40px]">
                        Our environmental initiatives
                      </h1>
                    </div>
                  </div>
                  <div className="self-stretch h-[199px] flex flex-row items-start justify-start max-w-full">
                    <div className="h-[216px] w-[1053px] overflow-hidden shrink-0 flex flex-col items-start justify-center max-w-[102%]">
                      <img
                        className="w-[236px] flex-1 relative max-h-full object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-61@2x.png"
                      />
                    </div>
                    <img
                      className="h-[200px] w-[252px] relative overflow-hidden shrink-0 object-cover z-[1]"
                      alt=""
                      src="/frame-1@2x.png"
                    />
                    <div className="self-stretch w-[1035px] overflow-hidden shrink-0 flex flex-col items-end justify-center max-w-full z-[2]">
                      <img
                        className="w-[252px] flex-1 relative max-h-full object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-71@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[18px] relative max-w-full text-center text-lg text-black font-montserrat">
                <div className="absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-row items-start justify-start max-w-full h-full">
                  <div className="w-[406px] relative tracking-[1px] leading-[18px] font-extrabold inline-block shrink-0 max-w-full">
                    Define User Needs
                  </div>
                </div>
                <div className="absolute top-[0px] left-[413px] w-[401px] overflow-hidden flex flex-row items-start justify-start max-w-full z-[1]">
                  <b className="flex-1 relative tracking-[1px] leading-[18px] inline-block max-w-full">
                    Find the Perfect Match
                  </b>
                </div>
                <div className="absolute top-[0px] left-[75px] w-[1077px] overflow-hidden flex flex-row items-start justify-end max-w-full z-[2]">
                  <b className="w-[295px] relative tracking-[1px] leading-[18px] inline-block shrink-0">
                    Seamless Execution
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full text-mini font-montserrat">
              <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                <div className="w-[1083px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1250:flex-wrap">
                  <div className="w-[279px] relative leading-[22.5px] inline-block shrink-0">
                    Users answer clear prompts or upload relevant documents to
                    define their project requirements or goals.
                  </div>
                  <div className="w-[1093px] overflow-hidden shrink-0 flex flex-row items-start justify-end max-w-[101%] z-[2] text-sm">
                    <div className="w-[273px] relative leading-[22.5px] inline-block shrink-0">
                      Users connect with service providers or access resources
                      directly through the platform to complete their project
                    </div>
                  </div>
                </div>
                <div className="w-[253px] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[1] ml-[-668px]">
                  <div className="flex-1 relative leading-[22.5px]">
                    platform uses AI or curated lists to recommend suitable
                    services or resources based on user input
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-gray-200">
            <div className="w-[881px] flex flex-row items-start justify-start max-w-full">
              <div className="w-[881px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full z-[3]">
                <a className="[text-decoration:none] w-[82px] relative leading-[16px] text-[inherit] inline-block shrink-0 min-w-[82px]">
                  Read Now
                </a>
              </div>
              <div className="w-[83px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border z-[4] ml-[-482px]">
                <a className="[text-decoration:none] flex-1 relative leading-[16px] text-[inherit] inline-block min-w-[82px]">
                  Read Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame1;
