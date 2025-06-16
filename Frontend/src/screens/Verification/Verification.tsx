import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Progress } from "../../components/ui/progress";
import { Separator } from "../../components/ui/separator";

export const Verification = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleVerifyClick = () => {
    // Replace this with your actual verification logic or navigation
    alert("Badge verification in progress...");
  };

  return (
    <div className="bg-app-background flex flex-col min-h-screen w-full">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col min-h-screen">
        {/* Header/Navigation */}
        <header className="w-full bg-[#206ba6] px-4 sm:px-6 lg:px-20">
          <div className="h-16 sm:h-20 lg:h-[92px] flex items-center justify-between">
            <h1 className="font-extrabold text-white text-2xl sm:text-3xl lg:text-[40px]">
              Credenza.
            </h1>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block mx-auto" aria-label="Main Navigation">
              <NavigationMenuList className="flex gap-8 xl:gap-[109px]">
                {["Home", "Backpack", "About Us", "Contact Us"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <span className="font-semibold text-white text-lg xl:text-xl cursor-pointer hover:opacity-80 transition-opacity">
                      {item}
                    </span>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Avatar className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[65px] lg:h-[65px] bg-white flex-shrink-0">
              <AvatarImage
                src="/account.png"
                alt="User profile"
                className="w-8 h-10 sm:w-10 sm:h-12 lg:w-[50px] lg:h-[63px] mx-auto"
              />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </div>

          {/* Optional: Mobile Menu Items */}
          {mobileMenuOpen && (
            <nav className="lg:hidden flex flex-col items-center py-4 gap-4 text-white">
              {["Home", "Backpack", "About Us", "Contact Us"].map((item) => (
                <span key={item} className="text-lg font-medium cursor-pointer hover:opacity-80 transition-opacity">
                  {item}
                </span>
              ))}
            </nav>
          )}

          <div className="hidden sm:flex justify-center pb-6">
            <Separator className="w-16 sm:w-20 lg:w-[101px] h-0.5" />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <Card className="w-full max-w-[982px] shadow-[0px_3px_4px_#0000001a] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Section */}
              <CardContent className="p-0 w-full lg:w-1/2 relative">
                <div className="relative h-64 sm:h-80 lg:h-[569px] bg-white rounded-t-[16px] lg:rounded-[16px_0_0_16px]">
                  <img
                    className="absolute w-full h-full object-cover rounded-t-[16px] lg:rounded-[16px_0_0_16px]"
                    src="/rectangle-1452.png"
                    alt="Verification background"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img
                      className="w-32 h-32 sm:w-48 sm:h-48 lg:w-[345px] lg:h-[322px] object-contain"
                      src="/scanner.png"
                      alt="Scanner animation"
                    />
                    <div className="w-48 sm:w-64 lg:w-[339px] mt-4 lg:mt-8">
                      <Progress
                        value={70}
                        className="h-2 lg:h-[11px] rounded-xl bg-secondary-text opacity-50 transition-all duration-700"
                      />
                    </div>
                    <div className="mt-2 lg:mt-4 font-medium text-main-text text-2xl sm:text-3xl lg:text-[40px] text-center tracking-[-0.30px]">
                      70%
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Right Section */}
              <CardContent className="p-0 w-full lg:w-1/2 relative">
                <div className="h-64 sm:h-80 lg:h-[569px] bg-white rounded-b-[16px] lg:rounded-[0_16px_16px_0] flex flex-col items-center justify-center py-8 lg:py-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px] bg-[#206ba6] rounded-full flex items-center justify-center">
                      <div className="w-[90%] h-[90%] bg-app-background rounded-full flex items-center justify-center">
                        <div className="w-[90%] h-[90%] bg-app-background rounded-full relative">
                          <div className="w-full h-full bg-[url(/vector.svg)] bg-[100%_100%] flex items-center justify-center">
                            <img
                              className="w-8 h-10 sm:w-12 sm:h-14 lg:w-[75px] lg:h-[88px]"
                              src="/group.png"
                              alt="User profile icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="mt-4 lg:mt-7 font-medium text-black text-2xl sm:text-3xl lg:text-[40px] text-center tracking-[-0.30px]">
                      Profile
                    </h2>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Verify Button */}
          <div className="w-full max-w-[982px] flex justify-center lg:justify-end mt-6 lg:mt-8">
            <Button
              type="button"
              onClick={handleVerifyClick}
              className="bg-[#206ba6] hover:bg-[#1a5a94] text-white font-semibold text-lg lg:text-xl px-6 py-3 lg:px-6 lg:py-2.5 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Verify badge
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};
