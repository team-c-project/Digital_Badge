import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";

export const ImportantNotesSection = (): JSX.Element => {
  // Social media links data for mapping
  const socialLinks = [
    { icon: <FacebookIcon size={20} />, label: "Facebook" },
    { icon: <InstagramIcon size={20} />, label: "Instagram" },
    { icon: <TwitterIcon size={20} />, label: "Twitter" },
  ];

  return (
    <footer className="w-full bg-[#206ba6] py-16 mt-auto">
      <div className="container mx-auto max-w-[1440px] px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-['Poppins',Helvetica] font-extrabold text-white text-4xl mb-4">
            Credenza.
          </h2>

          <p className="font-['Poppins',Helvetica] font-medium text-white text-xl mb-8">
            © 2025 T2T Batch 2. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link, index) => (
              <button
                key={index}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors text-white"
                aria-label={link.label}
              >
                {link.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};