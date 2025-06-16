import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

// Navigation items data
const navigationItems = [
  { name: "Home", active: true },
  { name: "Backpack", active: false },
  { name: "About Us", active: false },
  { name: "Contact Us", active: false },
];

export const UserDownload = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="w-full h-[92px] bg-[#206ba6]">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-[83px]">
          <h1 className="font-['Poppins',Helvetica] font-extrabold text-white text-[40px]">
            Credenza.
          </h1>

          <nav className="flex items-center gap-[109px]">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="font-['Poppins',Helvetica] font-semibold text-white text-xl relative"
              >
                {item.name}
                {item.active && (
                  <img
                    className="absolute w-[101px] h-0.5 top-[37px] left-1/2 -translate-x-1/2 object-cover"
                    alt="Active indicator"
                    src="/line-2.svg"
                  />
                )}
              </a>
            ))}
          </nav>

          <Avatar className="w-[65px] h-[65px] bg-white">
            <AvatarImage
              src="/account.png"
              alt="User profile"
              className="w-[50px] h-[63px] mx-auto"
            />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1440px] mx-auto relative">
        <div className="flex flex-row pt-[129px] px-[83px] gap-8">
          {/* Left Column - Form */}
          <div className="flex flex-col">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-main-text text-[40px] mb-[92px]">
              Certification of Completion
            </h2>

            <Card className="w-[553px] shadow-[0px_3px_4px_#0000001a] rounded-2xl">
              <CardContent className="p-[55px]">
                <div className="space-y-10">
                  <div className="space-y-[37px]">
                    <label className="font-['Poppins',Helvetica] font-medium text-main-text text-xl block">
                      Name
                    </label>
                    <Input
                      placeholder="Enter name"
                      className="h-[71px] bg-neutral-100 rounded-2xl px-11 font-['Poppins',Helvetica] font-medium text-secondary-text text-xl"
                    />
                  </div>

                  <div className="space-y-[37px]">
                    <label className="font-['Poppins',Helvetica] font-medium text-main-text text-xl block">
                      Earning Criteria Description
                    </label>
                    <Textarea className="h-[195px] bg-neutral-100 rounded-2xl resize-none" />
                  </div>

                  <Button className="w-full h-[65px] bg-[#206ba6] rounded-[30px] font-['Poppins',Helvetica] font-semibold text-white text-2xl tracking-[0.24px]">
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Badge */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full h-[721px] bg-[url(/rectangle-1452.png)] bg-cover bg-center relative">
              {/* Badge image is part of the background */}
            </div>
            <Button
              variant="outline"
              className="mt-0 w-[259px] h-[60px] rounded-xl border-[3px] border-[#206ba6] font-['Poppins',Helvetica] font-semibold text-main-text text-xl"
            >
              Download Badge
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full h-[354px] bg-[#206ba6] mt-[143px]">
        <div className="max-w-[1440px] mx-auto h-full flex flex-col items-center justify-center">
          <h2 className="font-['Poppins',Helvetica] font-extrabold text-white text-[40px]">
            Credenza.
          </h2>

          <p className="font-['Poppins',Helvetica] font-medium text-white text-xl mt-5">
            © 2025 T2T Batch 2. All rights reserved.
          </p>

          <div className="flex gap-6 mt-10">
            <a href="#" className="relative">
              <div className="w-[85px] h-24 relative">
                <img
                  className="absolute w-[85px] h-24"
                  alt="Facebook"
                  src="/group-76.png"
                />
              </div>
            </a>

            <a href="#" className="relative">
              <div className="w-[85px] h-24 relative">
                <div className="relative w-[85px] h-24 bg-[url(/oval-copy.svg)] bg-[100%_100%]">
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
            </a>

            <a href="#" className="relative">
              <div className="w-[85px] h-24 relative">
                <div className="relative w-[85px] h-24 bg-[url(/oval-copy-1.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[19px] h-[15px] top-[41px] left-[33px]"
                    alt="Twitter"
                    src="/logo-twitter.png"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
