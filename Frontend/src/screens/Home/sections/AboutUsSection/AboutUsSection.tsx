import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 flex flex-col md:flex-row justify-between gap-8">
      <div className="flex flex-col space-y-8 max-w-[600px]">
        <h2 className="font-bold font-['Poppins',Helvetica] text-main-text text-[40px]">
          Get to Know Us
        </h2>

        <p className="font-medium font-['Poppins',Helvetica] text-secondary-text text-2xl">
          We are a dedicated platform that helps organizations, institutions,
          and educators issue, manage, and verify digital certificates and
          badges effortlessly.
          <br />
          Our goal is to simplify recognition by providing secure, customizable,
          and trackable credentialing tools.
        </p>
      </div>

      <div className="relative w-full max-w-[648px] h-[472px]">
        <div className="relative h-full">
          <div className="absolute w-[494px] h-[369px] top-[103px] left-[76px] bg-[#206ba6] rounded-[49px] blur-[25px]" />
          <Card className="absolute w-[441px] h-[368px] top-0 left-0 rounded-[20px]">
            <CardContent className="p-0" />
          </Card>
          <Card className="absolute w-[441px] h-[263px] top-[120px] left-[207px] bg-[#f7f7f7] rounded-[20px]">
            <CardContent className="p-0" />
          </Card>
          <Card className="absolute w-[560px] h-[388px] top-[58px] left-[34px] bg-[#f4f4f4] rounded-[20px]">
            <CardContent className="p-0" />
          </Card>
          <img
            className="absolute w-[372px] h-[372px] top-[65px] left-[143px] object-cover"
            alt="Certificate badge illustration"
            src="/64184-1.png"
          />
        </div>
      </div>
    </section>
  );
};
