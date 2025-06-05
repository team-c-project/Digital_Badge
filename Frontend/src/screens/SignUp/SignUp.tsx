import React from "react";

export const SignUp = (): JSX.Element => {
  return (
    <div className="bg-[#f8f9fa] flex flex-row justify-center w-full">
      <div className="bg-app-background w-[1440px] h-[1024px] relative">
        <div className="absolute top-[45px] left-[953px] [font-family:'Poppins',Helvetica] font-extrabold text-[#206ba6] text-[40px] tracking-[0] leading-[normal]">
          Credenza.
        </div>

        <div className="absolute w-[555px] h-[620px] top-[120px] left-[782px]">
          <div className="w-[156px] top-[257px] left-[113px] absolute [font-family:'Poppins',Helvetica] font-medium text-secondary-text text-xl tracking-[0] leading-[normal]">
            Enter password
          </div>

          <div className="absolute w-[555px] h-[620px] top-0 left-0">
            <div className="relative w-[553px] h-[620px] bg-white rounded-2xl shadow-[0px_3px_4px_#0000001a]">
              <div className="absolute w-[421px] h-[108px] top-[55px] left-[69px]">
                <div className="absolute w-14 top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-main-text text-xl tracking-[0] leading-[normal]">
                  Email
                </div>

                <div className="absolute w-[417px] h-[71px] top-[37px] left-0 bg-neutral-100 rounded-2xl">
                  <div className="w-[114px] top-[18px] left-11 absolute [font-family:'Poppins',Helvetica] font-medium text-secondary-text text-xl tracking-[0] leading-[normal]">
                    Enter email
                  </div>
                </div>
              </div>

              <div className="absolute w-[98px] top-[203px] left-[69px] [font-family:'Poppins',Helvetica] font-medium text-main-text text-xl tracking-[0] leading-[normal]">
                Password
              </div>

              <div className="absolute w-[417px] h-[71px] top-60 left-[69px] bg-neutral-100 rounded-2xl" />

              <div className="flex w-[417px] h-[65px] items-center justify-center gap-2.5 p-2.5 absolute top-[514px] left-[69px] bg-[#206ba6] rounded-[30px]">
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-2xl text-center tracking-[0.24px] leading-6 whitespace-nowrap">
                  Sign up
                </div>
              </div>

              <div className="absolute w-[421px] h-[108px] top-[360px] left-[69px]">
                <div className="absolute w-[216px] top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-main-text text-xl tracking-[0] leading-[normal]">
                  Confirm password
                </div>

                <div className="absolute w-[417px] h-[71px] top-[37px] left-0 bg-neutral-100 rounded-2xl">
                  <div className="absolute w-[211px] top-[18px] left-11 [font-family:'Poppins',Helvetica] font-medium text-secondary-text text-xl tracking-[0] leading-[normal]">
                    Re enter password
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[386px] h-[149px] top-[763px] left-[878px]">
          <div className="absolute w-[382px] h-[29px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-transparent text-lg text-center tracking-[0.18px] leading-[28.8px]">
            <span className="text-[#202020] tracking-[0.03px]">
              Don&#39;t you have an account?
            </span>

            <span className="text-[#112b30] tracking-[0.03px]">&nbsp;</span>

            <span className="text-[#206ba6] tracking-[0.03px]">Sign up</span>
          </div>

          <div className="absolute h-[29px] top-[43px] left-[181px] [font-family:'Poppins',Helvetica] font-normal text-black text-lg text-center tracking-[0.18px] leading-[28.8px] whitespace-nowrap">
            or
          </div>

          <div className="absolute w-[60px] h-[60px] top-[89px] left-[63px] bg-white rounded-[5px] border border-solid border-[#757575] flex items-center justify-center">
          <img
            className="w-[36px] h-[36px]"
            alt="Google"
            src="/google.png"
          />
        </div>

          <div className="absolute w-[60px] h-[60px] top-[89px] left-40 bg-white rounded-[5px] border border-solid border-[#757575]">
            <img
              className="absolute w-[50px] h-[50px] top-1 left-1"
              alt="Facebook"
              src="/facebook.png"
            />
          </div>

          <div className="absolute w-[60px] h-[60px] top-[89px] left-64 bg-white rounded-[5px] border border-solid border-[#757575]">
            <img
              className="absolute w-[50px] h-[50px] top-1 left-1"
              alt="Linked in"
              src="/linkedin.png"
            />
          </div>
        </div>

        <div className="absolute w-[628px] h-[930px] top-[47px] left-[50px]">
          <div className="relative w-[624px] h-[930px] bg-[#206ba6] rounded-2xl">
            <div className="absolute w-[560px] h-[603px] top-[71px] left-8">
              <div className="absolute h-[42px] top-[561px] left-[75px] [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-[26px] text-center tracking-[0.26px] leading-[41.6px] whitespace-nowrap">
                Join the Certificate Revolution
              </div>

              <div className="absolute w-[560px] h-[591px] top-0 left-0">
                <img src="/team.png" alt="loginimage" />
              </div>
            </div>

            <div className="absolute w-[502px] h-[87px] top-[681px] left-[62px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-lg text-center tracking-[0.18px] leading-[28.8px]">
              Create your account to start designing, issuing, and managing
              digital certificates and badges—all in one seamless platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
