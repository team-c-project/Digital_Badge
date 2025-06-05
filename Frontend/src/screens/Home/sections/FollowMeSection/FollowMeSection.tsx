import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const FollowMeSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Backpack", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full h-[92px] bg-[#206ba6]">
      <div className="h-full max-w-[1440px] mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="font-['Poppins',Helvetica] font-extrabold text-white text-[40px]">
          Credenza.
        </div>

        {/* Navigation */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex gap-[109px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-['Poppins',Helvetica] font-semibold text-white text-xl"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* User Account */}
        <div className="w-[65px] h-[65px] bg-white rounded-[32.5px] flex items-center justify-center">
          <img className="w-[50px] h-[63px]" alt="Account" src="/account.png" />
        </div>
      </div>
    </header>
  );
};
