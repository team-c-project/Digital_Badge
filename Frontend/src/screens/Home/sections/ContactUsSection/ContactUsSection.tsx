import React from "react";

// Define the statistics data for easy mapping
const statistics = [
  {
    value: "+1200",
    label: "Certificates Issued",
    icon: "/certificate.svg",
    alt: "Certificate",
  },
  {
    value: "+13",
    label: "Partner Institutions",
    icon: "/buildingapartment.svg",
    alt: "Building apartment",
  },
  {
    value: "+543",
    label: "Digital Badges Shared",
    icon: "/shield.svg",
    alt: "Shield",
  },
  {
    value: "98.7%",
    label: "Verification Success Rate",
    icon: "/sealcheck.svg",
    alt: "Seal check",
  },
];

export const ContactUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="font-bold text-[32px] font-['Poppins',Helvetica]">
              <span className="text-[#202020]">Empowering Institutions to</span>
              <span className="text-[#206ba6]"> Recognize Achievement</span>
            </h2>
            <p className="font-medium text-xl text-secondary-text font-['Poppins',Helvetica]">
              We&apos;ve helped thousands streamline their certification
              processes with ease and security.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img className="w-24 h-24" src={stat.icon} alt={stat.alt} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-black font-['Poppins',Helvetica]">
                    {stat.value}
                  </span>
                  <span className="font-medium text-sm text-black font-['Poppins',Helvetica]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
