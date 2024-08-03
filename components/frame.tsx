import type { NextPage } from "next";

export type FrameType = {
  className?: string;
};

const Frame: NextPage<FrameType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch h-[425px] overflow-y-auto shrink-0 flex flex-row items-end justify-start pt-0 pb-px pl-0 pr-0.5 box-border max-w-full text-left text-smi text-gray-200 font-open-sans mq1050:h-auto ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start pt-12 px-0 pb-3 box-border relative gap-px max-w-full shrink-0 mq750:pt-[31px] mq750:pb-5 mq750:box-border mq1050:flex-wrap">
        <div className="w-[654px] flex flex-col items-end justify-start py-0 pl-0 pr-[108px] box-border gap-3 max-w-full text-21xl font-aoboshi-one mq450:pr-5 mq450:box-border mq750:pr-[54px] mq750:box-border">
          <div className="w-[534px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border gap-[60px] max-w-full mq750:flex-wrap gap-[30px]">
            <div className="flex-1 flex flex-col items-end justify-start gap-4 min-w-[230px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[18px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border min-w-[201px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-1">
                      <div className="flex flex-row items-start justify-start py-0 px-[29px]">
                        <div className="w-[125px] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[1]">
                          <h1 className="ml-[-29px] m-0 w-[154px] relative text-inherit leading-[60px] font-normal font-[inherit] inline-block shrink-0 [transform:_rotate(-180deg)] mq450:text-5xl mq450:leading-[36px] mq750:text-13xl mq750:leading-[48px]">
                            NVZV
                          </h1>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start relative text-center text-base text-white font-montserrat">
                        <div className="h-[374px] w-[60px] !m-[0] absolute top-[-93px] right-[5px] overflow-hidden shrink-0 flex flex-col items-center justify-end z-[2]">
                          <div className="w-[60px] h-[45px] absolute !m-[0] top-[329px] left-[0px] bg-darkslategray-100" />
                          <div className="w-[54px] h-[372px] !m-[0] absolute top-[0px] left-[3px] overflow-hidden shrink-0 flex flex-row items-end justify-start z-[3]">
                            <div className="h-[41px] flex-1 relative rounded" />
                          </div>
                        </div>
                        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start z-[4]">
                          <div className="flex-1 relative tracking-[1px] leading-[24px] inline-block min-h-[192px]">
                            <p className="m-0">
                              Azan Company is a Saudi Arabia based investment
                              company registered in the Ministry of Commerce
                              with Commercial Registry No. 2055141242, dated
                              7/22/1445 AH, and originating in the city of
                              Jubail
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-start justify-start z-[13]">
                    <div className="overflow-hidden flex flex-col items-start justify-start gap-[15px] z-[14]">
                      <div className="overflow-hidden flex flex-row items-start justify-start z-[11]">
                        <div className="overflow-hidden flex flex-col items-start justify-start gap-[15px] z-[12]">
                          <div className="w-[26px] h-[99px] overflow-hidden shrink-0 hidden" />
                          <div className="w-[26px] h-[124px] overflow-hidden shrink-0 hidden" />
                          <div className="w-[26px] h-[149px] overflow-hidden shrink-0 hidden" />
                          <div className="w-[26px] h-[174px] overflow-hidden shrink-0 hidden" />
                          <div className="w-[26px] h-[199px] relative">
                            <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[89px] px-0 pb-0 z-[2]">
                              <div className="h-2.5 w-[26px] relative">
                                <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                                <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                              </div>
                            </div>
                            <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[114px] px-0 pb-0 z-[4]">
                              <div className="h-2.5 w-[26px] relative">
                                <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                                <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                              </div>
                            </div>
                            <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[139px] px-0 pb-0 z-[6]">
                              <div className="h-2.5 w-[26px] relative">
                                <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                                <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                              </div>
                            </div>
                            <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[164px] px-0 pb-0 z-[8]">
                              <div className="h-2.5 w-[26px] relative">
                                <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                                <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                              </div>
                            </div>
                            <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start w-full h-full z-[9]">
                              <div className="overflow-hidden flex flex-row items-start justify-start pt-[189px] px-0 pb-0 z-[10]">
                                <div className="h-2.5 w-[26px] relative">
                                  <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                                  <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[26px] h-2.5 relative">
                            <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                            <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                          </div>
                        </div>
                      </div>
                      <div className="w-[26px] h-2.5 relative">
                        <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                        <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[330px] flex flex-row items-start justify-start py-0 px-[51px] box-border max-w-full text-center text-sm text-white font-montserrat mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex-1 relative tracking-[1px] leading-[14px] z-[4]">
                    Subscribe to our Newsletter
                  </div>
                </div>
              </div>
              <div className="w-20 flex flex-row items-start justify-end py-0 px-[13px] box-border">
                <div className="h-[43px] flex-1 overflow-hidden flex flex-col items-center justify-end z-[4]">
                  <div className="self-stretch h-[41px] relative overflow-hidden shrink-0 hidden" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-sm text-white font-montserrat">
              <div className="overflow-hidden flex flex-col items-start justify-start gap-[60px] z-[7]">
                <div className="w-[69px] h-[148px] relative">
                  <div className="absolute top-[0px] left-[3px] overflow-hidden flex flex-row items-start justify-start pt-[41px] px-0 pb-0 z-[1]">
                    <div className="relative tracking-[1px] leading-[14px] inline-block min-w-[66px]">
                      Reviews
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[11px] z-[4] text-smi text-gray-200 font-open-sans">
                    <div className="overflow-hidden flex flex-row items-start justify-start pt-[109px] px-0 pb-0 z-[3]">
                      <div className="relative leading-[14px] inline-block min-w-[58px]">
                        About us
                      </div>
                    </div>
                    <div className="relative text-sm leading-[14px] inline-block min-w-[60px]">
                      Investors
                    </div>
                  </div>
                </div>
                <div className="relative text-base leading-[16px] font-open-sans inline-block min-w-[100px]">
                  Privacy Policy
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[3px] mt-[-224px] text-smi text-gray-200 font-open-sans">
                <div className="overflow-hidden flex flex-col items-start justify-start gap-[135px] z-[8]">
                  <div className="overflow-hidden flex flex-row items-start justify-start pt-[84px] px-0 pb-0 z-[2]">
                    <div className="relative leading-[14px] inline-block min-w-[52px]">
                      Reviews
                    </div>
                  </div>
                  <div className="relative text-mini leading-[16px] text-white inline-block min-w-[58px]">
                    Cookies
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1.5 box-border max-w-full text-center text-base text-white font-montserrat">
            <div className="flex-1 overflow-hidden flex flex-row items-start justify-start max-w-full z-[1] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] hover:opacity-[1] active:animate-[1s_ease_0s_1_normal_none_bounce-top] active:opacity-[1]">
              <div className="flex-1 relative tracking-[1px] leading-[24px] inline-block max-w-full">
                Copyright notice: © [2024] AZAN. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-start justify-start z-[11]">
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[15px] z-[12]">
            <div className="overflow-hidden flex flex-row items-start justify-start z-[9]">
              <div className="overflow-hidden flex flex-col items-start justify-start gap-[15px] z-[10]">
                <div className="w-5 h-[99px] overflow-hidden shrink-0 hidden" />
                <div className="w-5 h-[124px] overflow-hidden shrink-0 hidden" />
                <div className="w-5 h-[149px] overflow-hidden shrink-0 hidden" />
                <div className="w-5 h-[174px] relative">
                  <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[89px] px-0 pb-0 z-[2]">
                    <div className="h-2.5 w-5 relative">
                      <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                      <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[114px] px-0 pb-0 z-[4]">
                    <div className="h-2.5 w-5 relative">
                      <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                      <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[139px] px-0 pb-0 z-[6]">
                    <div className="h-2.5 w-5 relative">
                      <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                      <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start w-full h-full z-[7]">
                    <div className="overflow-hidden flex flex-row items-start justify-start pt-[164px] px-0 pb-0 z-[8]">
                      <div className="h-2.5 w-5 relative">
                        <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                        <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-5 h-2.5 relative">
                  <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                  <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                </div>
              </div>
            </div>
            <div className="w-5 h-2.5 relative">
              <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
              <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
            </div>
          </div>
        </div>
        <div className="h-[45px] w-[360px] border-white border-[2px] border-solid box-border overflow-hidden shrink-0 hidden max-w-full z-[2]" />
        <div className="h-3.5 w-[228px] overflow-hidden shrink-0 hidden z-[3]" />
        <div className="!m-[0] absolute top-[48px] left-[446px] flex flex-row items-start justify-start text-mini text-white">
          <div className="!m-[0] absolute top-[0px] right-[-30px] overflow-hidden flex flex-row items-start justify-start pt-[158px] px-0 pb-0 z-[5]">
            <div className="relative leading-[16px] whitespace-nowrap">{`Terms & conditions`}</div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start pt-[183px] px-0 pb-0 z-[6]">
            <div className="relative leading-[16px] inline-block min-w-[114px]">
              Acceptable Use
            </div>
          </div>
        </div>
        <div className="w-[296px] flex flex-row items-start justify-start relative">
          <div className="!m-[0] absolute top-[0px] right-[52px] overflow-hidden flex flex-row items-start justify-start z-[5]">
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[15px] z-[6]">
              <div className="overflow-hidden flex flex-row items-start justify-start z-[3]">
                <div className="overflow-hidden flex flex-col items-start justify-start gap-[15px] z-[4]">
                  <div className="overflow-hidden flex flex-row items-start justify-start z-[1]">
                    <div className="overflow-hidden flex flex-row items-start justify-start pt-[89px] px-0 pb-0 z-[2]">
                      <div className="h-2.5 w-[34px] relative">
                        <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                        <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[34px] h-2.5 relative">
                    <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                    <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                  </div>
                </div>
              </div>
              <div className="w-[34px] h-2.5 relative">
                <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
              </div>
            </div>
          </div>
          <div className="h-[474px] w-[1308px] absolute !m-[0] bottom-[-203px] left-[-716px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-full" />
            <div className="absolute top-[48px] left-[77px] bg-gainsboro w-[300px] h-px overflow-hidden z-[1]" />
            <div className="absolute top-[384px] left-[123px] rounded-10xs bg-darkslategray-100 w-60 h-[45px] overflow-hidden z-[1]" />
            <div className="absolute top-[48px] left-[917px] bg-gainsboro w-[360px] h-px overflow-hidden z-[7]" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-2.5 z-[7]">
              <div className="w-[84px] h-[199px] relative">
                <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[109px] px-0 pb-0 z-[3]">
                  <div className="relative leading-[14px] inline-block min-w-[84px]">
                    How it works
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[35px] z-[6] text-sm text-white font-montserrat">
                  <div className="w-[78px] h-[148px] relative">
                    <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[41px] px-0 pb-0 z-[1]">
                      <div className="relative tracking-[1px] leading-[14px] inline-block min-w-[78px]">
                        Cashback
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start text-smi text-gray-200 font-open-sans">
                      <div className="!m-[0] absolute top-[0px] right-[-15px] overflow-hidden flex flex-row items-start justify-start pt-[84px] px-0 pb-0 z-[2]">
                        <div className="relative leading-[14px] inline-block min-w-[74px] whitespace-nowrap">
                          Get Started
                        </div>
                      </div>
                      <div className="overflow-hidden flex flex-row items-start justify-start pt-[134px] px-0 pb-0 z-[4] text-sm">
                        <div className="relative leading-[14px] inline-block min-w-[59px]">
                          Featured
                        </div>
                      </div>
                      <div className="!m-[0] absolute bottom-[-25px] left-[0px] overflow-hidden flex flex-row items-start justify-start pt-[159px] px-0 pb-0 z-[5]">
                        <div className="relative leading-[14px] inline-block min-w-[30px]">
                          Help
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative text-base leading-[16px] font-open-sans inline-block min-w-[81px]">
                    Contact Us
                  </div>
                </div>
              </div>
              <div className="relative leading-[14px] inline-block min-w-[105px]">
                Partner Support
              </div>
            </div>
          </div>
        </div>
        <div className="w-[166px] !m-[0] absolute top-[48px] left-[908px] flex flex-row items-start justify-start text-center">
          <div className="h-[225px] !m-[0] absolute right-[7px] bottom-[-80px] overflow-hidden flex flex-row items-start justify-start z-[8]">
            <div className="self-stretch overflow-hidden flex flex-row items-end justify-start z-[9]">
              <div className="h-5 w-5 relative">
                <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-end justify-start gap-[11px] z-[13]">
            <div className="w-[131px] h-[120px] relative">
              <div className="absolute top-[0px] left-[20px] w-[111px] overflow-hidden flex flex-row items-start justify-start pt-[81px] px-0 pb-0 box-border z-[11]">
                <div className="flex-1 relative leading-[14px]">
                  AZAN Company
                </div>
              </div>
              <div className="absolute top-[0px] left-[30px] w-[101px] overflow-hidden flex flex-row items-start justify-start pt-[106px] px-0 pb-0 box-border z-[12]">
                <div className="flex-1 relative leading-[14px] whitespace-nowrap">
                  info@azan.sa
                </div>
              </div>
            </div>
            <div className="self-stretch relative leading-[14px]">
              Phone: +966 (5) 999 04 555
            </div>
          </div>
        </div>
        <div className="h-[279px] w-[108px] relative text-center text-sm text-white font-montserrat">
          <div className="absolute top-[0px] left-[0px] w-[103px] overflow-hidden flex flex-row items-start justify-start pt-[41px] px-0 pb-0 box-border z-[10]">
            <div className="flex-1 relative tracking-[1px] leading-[14px] inline-block min-w-[103px]">
              Get In Touch
            </div>
          </div>
          <div className="absolute top-[0px] left-[9px] h-[279px] overflow-hidden flex flex-col items-end justify-start gap-[38px] z-[14] text-base">
            <div className="flex-1 flex flex-row items-start justify-end py-0 pl-[30px] pr-[26px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[8]">
                <div className="self-stretch overflow-hidden flex flex-row items-end justify-start z-[9]">
                  <div className="h-5 w-5 relative">
                    <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
                    <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative leading-[16px] inline-block min-w-[76px]">
              Enquiries
            </div>
          </div>
        </div>
        <div className="h-[225px] overflow-hidden flex flex-row items-start justify-start z-[8]">
          <div className="self-stretch overflow-hidden flex flex-row items-end justify-start z-[9]">
            <div className="h-5 w-5 relative">
              <div className="absolute top-[0px] left-[0px] rounded w-full h-full" />
              <div className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden hidden" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Frame;
