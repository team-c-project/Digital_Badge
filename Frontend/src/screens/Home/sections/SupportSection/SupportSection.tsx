import React from "react";
import { Button } from "../../../../components/ui/button";

export const SupportSection = (): JSX.Element => {
  // Define the illustration images as an array to make the code more maintainable
  const illustrationImages = [
    {
      src: "/group.png",
      alt: "Background illustration",
      className: "w-full h-full",
    },
    {
      src: "/vector-50.svg",
      alt: "Vector",
      className: "absolute w-28 h-[343px] top-[5px] left-[3px]",
    },
    {
      src: "/vector-20.svg",
      alt: "Vector",
      className: "absolute w-[117px] h-[17px] top-0 left-0",
    },
    {
      src: "/group-1.png",
      alt: "Group",
      className: "absolute w-[117px] h-[334px] top-[19px] left-0",
    },
    {
      src: "/vector-50.svg",
      alt: "Vector",
      className: "absolute w-28 h-[343px] top-[5px] left-[3px]",
    },
    {
      src: "/vector-20.svg",
      alt: "Vector",
      className: "absolute w-[117px] h-[17px] top-0 left-0",
    },
    {
      src: "/group-2.png",
      alt: "Group",
      className: "absolute w-[117px] h-[334px] top-[19px] left-0",
    },
    {
      src: "/vector-50.svg",
      alt: "Vector",
      className: "absolute w-28 h-[343px] top-[5px] left-[3px]",
    },
    {
      src: "/vector-20.svg",
      alt: "Vector",
      className: "absolute w-[117px] h-[17px] top-0 left-0",
    },
    {
      src: "/group-3.png",
      alt: "Group",
      className: "absolute w-[117px] h-[61px] top-[19px] left-0",
    },
    {
      src: "/vector-50.svg",
      alt: "Vector",
      className: "absolute w-28 h-[343px] top-[5px] left-[3px]",
    },
    {
      src: "/vector-20.svg",
      alt: "Vector",
      className: "absolute w-[117px] h-[17px] top-0 left-0",
    },
    {
      src: "/group-4.png",
      alt: "Group",
      className: "absolute w-[117px] h-[61px] top-[19px] left-0",
    },
    {
      src: "/vector-53.svg",
      alt: "Vector",
      className: "absolute w-[45px] h-[108px] top-0 left-0",
    },
    {
      src: "/vector-59.svg",
      alt: "Vector",
      className: "absolute w-[45px] h-[109px] top-1.5 left-[18px]",
    },
    {
      src: "/group-5.png",
      alt: "Group",
      className: "absolute w-[63px] h-10 top-[103px] left-px",
    },
    {
      src: "/shadow-1-.png",
      alt: "Shadow",
      className: "absolute w-[635px] h-[34px] top-[518px] left-[92px]",
    },
  ];

  // Additional illustration elements
  const additionalElements = [
    {
      src: "/vector-57.svg",
      alt: "Vector",
      className: "absolute w-[93px] h-[51px] top-[109px] left-0",
    },
    {
      src: "/vector-56.svg",
      alt: "Vector",
      className: "absolute w-[94px] h-[155px] top-1 left-[79px]",
    },
    {
      src: "/vector-66.svg",
      alt: "Vector",
      className: "absolute w-[99px] h-[162px] top-0 left-[68px]",
    },
    {
      src: "/vector-60.svg",
      alt: "Vector",
      className: "absolute w-[125px] h-[25px] top-[135px] left-[17px]",
    },
    {
      src: "/vector-62.svg",
      alt: "Vector",
      className: "absolute w-[110px] h-[67px] top-[194px] left-[35px]",
    },
    {
      src: "/vector-65.svg",
      alt: "Vector",
      className: "absolute w-[21px] h-[19px] top-[258px] left-7",
    },
    {
      src: "/vector-48.svg",
      alt: "Vector",
      className: "absolute w-[11px] h-2.5 top-[262px] left-[33px]",
    },
    {
      src: "/vector.svg",
      alt: "Vector",
      className: "absolute w-[21px] h-[19px] top-[258px] left-[130px]",
    },
    {
      src: "/vector-48.svg",
      alt: "Vector",
      className: "absolute w-[11px] h-2.5 top-[262px] left-[135px]",
    },
    {
      src: "/vector-1.svg",
      alt: "Vector",
      className: "absolute w-[21px] h-[45px] top-[159px] left-[79px]",
    },
    {
      src: "/group-6.png",
      alt: "Group",
      className: "absolute w-[142px] h-[7px] top-[157px] left-3",
    },
    {
      src: "/group-7.png",
      alt: "Group",
      className: "absolute w-[142px] h-[7px] top-[157px] left-3",
    },
    {
      src: "/group-8.png",
      alt: "Group",
      className: "absolute w-[93px] h-[51px] top-[109px] left-[72px]",
    },
  ];

  return (
    <section className="relative w-full py-28 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      {/* Left content - Text and buttons */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-8">
        <h1 className="font-poppins font-semibold text-main-text text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          Empowering Digital <br />
          Recognition
        </h1>

        <p className="font-poppins font-medium text-secondary-text text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl">
          Design, issue, and verify certificates and badges—all in one platform.{" "}
          <br />
          Built for educators, organizations, and institutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="h-[60px] w-48 bg-[#206ba6] hover:bg-[#185a8d] rounded-xl flex items-center justify-center gap-2">
            <img className="w-[30px] h-[30px]" alt="Rocket" src="/rocket.png" />
            <span className="font-poppins font-semibold text-white text-xl">
              Get started
            </span>
          </Button>

          <Button
            variant="outline"
            className="h-[60px] w-48 bg-white rounded-xl border-[3px] border-[#206ba6] hover:bg-[#f0f7ff] flex items-center justify-center gap-2"
          >
            <img className="w-[30px] h-[30px]" alt="Video" src="/video.png" />
            <span className="font-poppins font-semibold text-[#206ba6] text-xl">
              Watch me
            </span>
          </Button>
        </div>
      </div>

      {/* Right content - Illustration */}
      <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] lg:h-[740px]">
        <div className="relative w-full h-full">
          {/* Main illustration container */}
          <div className="relative w-full h-full">
            {/* This is a simplified version of the complex illustration */}
            <div className="relative w-full h-full">
              <div className="w-full h-full bg-[url(/group.png)] bg-contain bg-no-repeat bg-center">
                {/* The illustration is complex with many overlapping elements */}
                {/* For production, we would optimize this by using a single optimized SVG or image */}
                {/* But for now, we'll keep the structure similar to maintain visual fidelity */}
                <div className="relative w-full h-full">
                  {/* Person working with certificates illustration */}
                  <div className="absolute w-[345px] h-[434px] top-[108px] left-[260px] md:block hidden">
                    <div className="relative w-full h-full">
                      <div className="absolute w-[345px] h-[233px] top-[94px] left-0 bg-[url(/vector-29.svg)] bg-[100%_100%]">
                        <div className="relative h-[233px] bg-[url(/vector-29.svg)] bg-[100%_100%]">
                          <img
                            className="absolute w-[328px] h-[219px] top-[7px] left-2"
                            alt="Vector"
                            src="/vector-36.svg"
                          />
                          <img
                            className="absolute w-[336px] h-[226px] top-[3px] left-1"
                            alt="Vector"
                            src="/vector-35.svg"
                          />
                          <img
                            className="absolute w-[170px] h-[30px] top-[37px] left-[95px]"
                            alt="Certificate content"
                            src="/group-23.png"
                          />
                          <img
                            className="absolute w-[232px] h-[34px] top-[63px] left-[60px]"
                            alt="Certificate content"
                            src="/group-25.png"
                          />
                          <img
                            className="absolute w-[231px] h-7 top-[107px] left-14"
                            alt="Certificate content"
                            src="/group-24.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate elements */}
                  <div className="absolute w-[117px] h-[352px] top-[81px] left-[347px] md:block hidden">
                    <div className="relative h-[352px]">
                      <img
                        className="absolute w-28 h-[343px] top-[5px] left-[3px]"
                        alt="Certificate"
                        src="/vector-50.svg"
                      />
                      <img
                        className="absolute w-[117px] h-[17px] top-0 left-0"
                        alt="Certificate header"
                        src="/vector-20.svg"
                      />
                      <img
                        className="absolute w-[117px] h-[334px] top-[19px] left-0"
                        alt="Certificate content"
                        src="/group-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
