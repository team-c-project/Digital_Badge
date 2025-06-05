import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    // ...existing code...
<footer className="w-full bg-[#206ba6] py-16 flex flex-col items-center justify-center text-white">
  <h2 className="font-['Poppins',Helvetica] font-extrabold text-[40px] mb-5">
    Credenza.
  </h2>

  <p className="font-['Poppins',Helvetica] font-medium text-xl mb-8">
    © 2025 T2T Batch 2. All rights reserved.
  </p>

  <div className="flex gap-6">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white/10 hover:bg-white/20 transition"
    >
      <FacebookIcon className="w-7 h-7 text-white" />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white/10 hover:bg-white/20 transition"
    >
      <InstagramIcon className="w-7 h-7 text-white" />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white/10 hover:bg-white/20 transition"
    >
      <TwitterIcon className="w-7 h-7 text-white" />
    </a>
  </div>
</footer>

  );
};
