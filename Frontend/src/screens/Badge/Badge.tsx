import { UploadIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export const Badge = (): JSX.Element => {
  // Form fields data
  const formFields = [
    { id: "name", label: "Name", type: "input", required: true },
    { id: "badgeImage", label: "Badge Image", type: "image", required: true },
    {
      id: "badgeDescription",
      label: "Badge Description",
      type: "textarea",
      required: true,
    },
    {
      id: "earningCriteria",
      label: "Earning criteria description",
      type: "textarea",
      required: true,
    },
    { id: "hours", label: "Hours", type: "input", required: true },
  ];

  // Navigation items
  const navItems = ["Home", "Backpack", "About Us", "Contact Us"];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Header */}
        <header className="w-full h-[92px] bg-[#206ba6] flex items-center px-20 relative">
          <div className="font-['Poppins'] font-extrabold text-white text-[40px]">
            Credenza.
          </div>

          <nav className="flex items-center gap-[109px] mx-auto">
            {navItems.map((item, index) => (
              <React.Fragment key={item}>
                <div className="font-['Poppins'] font-semibold text-white text-xl">
                  {item}
                </div>
                {item === "Home" && (
                  <img
                    className="absolute w-[101px] h-0.5 top-[66px]"
                    alt="Line"
                    src="/line-2.svg"
                  />
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="w-[65px] h-[65px] bg-white rounded-full flex items-center justify-center">
            <img
              className="w-[50px] h-[63px]"
              alt="Account"
              src="/account.png"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-row justify-between px-20 py-16 gap-8">
          {/* Left Column - Information */}
          <div className="max-w-[516px]">
            <h1 className="font-['Poppins'] font-semibold text-main-text text-[38px]">
              Information
            </h1>

            <h2 className="font-['Poppins'] font-semibold text-main-text text-3xl mt-[79px]">
              Build a great badge
            </h2>

            <p className="font-['Poppins'] font-medium text-secondary-text text-2xl mt-[60px] max-w-[510px]">
              Put your best Badge forward! UploadIcon a badge image or build one
              here using Canvas Badges&apos; easy design tool.
              <br />
              Note: An uploaded image should be square (400x400 px is ideal) and
              PNG or SVG format.
            </p>

            <div className="w-[470px] h-[386px] mt-[60px] bg-[url(/rectangle-1450.png)] bg-cover bg-center relative">
              <div className="absolute w-[78px] h-[58px] top-[164px] left-[196px] bg-[#206ba6] rounded-xl flex items-center justify-center">
                <img
                  className="w-[50px] h-[50px]"
                  alt="Youtube logo"
                  src="/youtubelogo.svg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="w-[732px] bg-[#f4f4f4] rounded-2xl shadow-[0px_3px_4px_#0000001a]">
            <CardContent className="p-16">
              <h2 className="font-['Poppins'] font-medium text-main-text text-[32px] mb-12">
                Create Badge
              </h2>

              <form className="space-y-10">
                {/* Name Field */}
                <div className="space-y-3">
                  <label className="font-['Inter'] font-normal text-[#202020] text-xl flex">
                    Name <span className="text-[#ff3b30] ml-1">*</span>
                  </label>
                  <Input className="h-[75px] bg-white rounded-2xl border border-solid border-[#757575]" />
                </div>

                {/* Badge Image Field */}
                <div className="space-y-3">
                  <label className="font-['Inter'] font-normal text-[#202020] text-xl flex">
                    Badge Image <span className="text-[#ff3b30] ml-1">*</span>
                  </label>
                  <div className="h-[180px] bg-white rounded-2xl border border-solid border-[#757575] flex items-center justify-center">
                    <UploadIcon className="w-[79px] h-[88px] text-gray-500" />
                  </div>
                </div>

                {/* Badge Description Field */}
                <div className="space-y-3">
                  <label className="font-['Inter'] font-normal text-[#202020] text-xl flex">
                    Badge Description{" "}
                    <span className="text-[#ff3b30] ml-1">*</span>
                  </label>
                  <Textarea className="h-[212px] bg-white rounded-2xl border border-solid border-[#757575]" />
                </div>

                {/* Earning Criteria Description Field */}
                <div className="space-y-3">
                  <label className="font-['Inter'] font-normal text-[#202020] text-xl flex">
                    Earning criteria description{" "}
                    <span className="text-[#ff3b30] ml-1">*</span>
                  </label>
                  <Textarea className="h-[181px] bg-white rounded-2xl border border-solid border-[#757575]" />
                </div>

                {/* Hours Field */}
                <div className="space-y-3">
                  <label className="font-['Inter'] font-normal text-[#202020] text-xl flex">
                    Hours <span className="text-[#ff3b30] ml-1">*</span>
                  </label>
                  <Input className="h-[75px] bg-white rounded-2xl border border-solid border-[#757575]" />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-10">
                  <Button
                    variant="outline"
                    className="w-[140px] h-[50px] bg-white border-[3px] border-solid border-[#206ba6] rounded-xl font-['Poppins'] font-semibold text-black text-xl"
                  >
                    Cancel
                  </Button>
                  <Button className="w-[222px] h-[50px] bg-[#206ba6] rounded-xl font-['Poppins'] font-semibold text-white text-xl">
                    Create badge
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="w-full h-[354px] bg-[#206ba6] flex flex-col items-center justify-center">
          <div className="font-['Poppins'] font-extrabold text-white text-[40px]">
            Credenza.
          </div>

          <div className="font-['Poppins'] font-medium text-white text-xl mt-4">
            © 2025 T2T Batch 2. All rights reserved.
          </div>

          <div className="flex gap-6 mt-8">
            <div className="w-[65px] h-[62px]">
              <img
                className="w-[85px] h-24 -translate-x-2.5 -translate-y-4"
                alt="Facebook"
                src="/group-76.png"
              />
            </div>
            <div className="w-[65px] h-[62px]">
              <div className="relative w-[85px] h-24 -translate-x-2.5 -translate-y-4 bg-[url(/oval-copy.svg)] bg-[100%_100%]">
                <div className="relative w-[17px] h-4 top-[41px] left-[35px]">
                  <div className="relative h-4">
                    <img
                      className="absolute w-0.5 h-0.5 top-[3px] left-3"
                      alt="Oval"
                      src="/oval.svg"
                    />
                    <img
                      className="absolute w-2 h-2 top-1 left-1"
                      alt="Shape"
                      src="/shape-1.svg"
                    />
                    <img
                      className="absolute w-[17px] h-4 top-0 left-0"
                      alt="Shape"
                      src="/shape.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[65px] h-[62px]">
              <div className="relative w-[85px] h-24 -translate-x-2.5 -translate-y-4 bg-[url(/oval-copy-1.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-[19px] h-[15px] top-[41px] left-[33px]"
                  alt="Logo twitter"
                  src="/logo-twitter.png"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

