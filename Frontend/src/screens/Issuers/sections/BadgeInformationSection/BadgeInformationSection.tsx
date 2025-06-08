import { YoutubeIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Button } from "../../../../components/ui/button";
import { UploadCloudIcon } from "lucide-react";

export const BadgeInformationSection = (): JSX.Element => {
  // Form fields data
  const formFields = [
    { id: "issuer-name", label: "Issuer name", type: "text", required: true },
    {
      id: "issuer-website",
      label: "Issuer website",
      type: "text",
      required: true,
    },
    {
      id: "issuer-email",
      label: "Issuer email",
      type: "email",
      required: true,
    },
    {
      id: "issuer-description",
      label: "Issuer Description",
      type: "textarea",
      required: true,
    },
    {
      id: "issuer-image",
      label: "Issuer Image",
      type: "image",
      required: true,
    },
  ];

  return (
    <div className="w-full flex-1">
      {/* Navigation Bar */}
      <div className="w-full h-[92px] bg-[#206ba6]">
        <div className="container mx-auto flex items-center justify-between h-full px-4 max-w-[1440px]">
          <div className="font-['Poppins',Helvetica] font-extrabold text-white text-[40px]">
            Credenza.
          </div>

          <div className="hidden lg:flex items-center gap-[109px]">
            <div className="font-['Poppins',Helvetica] font-semibold text-white text-xl">
              Home
            </div>
            <div className="font-['Poppins',Helvetica] font-semibold text-white text-xl">
              Backpack
            </div>
            <div className="font-['Poppins',Helvetica] font-semibold text-white text-xl">
              About Us
            </div>
            <div className="font-['Poppins',Helvetica] font-semibold text-white text-xl relative">
              Contact Us
              <img
                className="absolute w-[101px] h-0.5 -bottom-3 left-0 object-cover"
                alt="Line"
                src="/line-2.svg"
              />
            </div>
          </div>

          <Avatar className="w-[65px] h-[65px] bg-white">
            <img
              className="w-[50px] h-[63px] mx-auto"
              alt="Account"
              src="/account.png"
            />
          </Avatar>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-[1440px] px-4 py-16">
        <div className="flex flex-col xl:flex-row gap-16 items-start">
          {/* Left Column - Information */}
          <div className="flex-1 max-w-[600px]">
            <h1 className="font-['Poppins',Helvetica] font-semibold text-main-text text-[38px] mb-8">
              Information
            </h1>

            <h2 className="font-['Poppins',Helvetica] font-semibold text-main-text text-3xl mb-6">
              Who&apos;s awarding badges?
            </h2>

            <p className="font-['Poppins',Helvetica] font-medium text-secondary-text text-2xl mb-16 leading-relaxed">
              An issuer can represent an organization, group, course or
              individual. Create issuers for departments in a company, for
              example, or for something personal like a book club.
            </p>

            <div className="mb-16 max-w-[514px]">
              <p className="font-['Poppins',Helvetica] font-medium text-2xl leading-relaxed">
                <span className="text-[#ff3b30]">Important:</span>
                <span className="text-black">
                  {" "}
                  This info will appear on the issuer&apos;s public page and will
                  be part of each badge this issuer awards — and remember,
                  recipients can share badges with anyone
                </span>
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full max-w-[470px] h-[386px] bg-[url(/rectangle-1450.png)] bg-cover bg-center relative rounded-lg overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[78px] h-[58px] bg-[#206ba6] rounded-xl flex items-center justify-center">
                <YoutubeIcon className="w-[50px] h-[50px] text-white" />
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 max-w-[734px] w-full">
            <Card className="w-full bg-[#f4f4f4] rounded-2xl shadow-[0px_3px_4px_#0000001a] p-8 lg:p-16">
              <h2 className="font-medium text-main-text text-[32px] font-['Poppins',Helvetica] mb-12">
                Issuer info
              </h2>

              <CardContent className="p-0 space-y-8">
                {formFields.map((field) => (
                  <div key={field.id} className="space-y-3">
                    <label className="font-['Inter',Helvetica] font-normal text-main-text text-xl block">
                      <span className="text-[#202020]">{field.label} </span>
                      {field.required && <span className="text-[#ff3b30]">*</span>}
                    </label>

                    {field.type === "textarea" ? (
                      <Textarea className="h-[212px] rounded-2xl border border-solid border-[#757575] bg-white resize-none" />
                    ) : field.type === "image" ? (
                      <div className="h-[180px] rounded-2xl border border-solid border-[#757575] bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <UploadCloudIcon className="w-[79px] h-[88px] text-gray-500" />
                      </div>
                    ) : (
                      <Input
                        id={field.id}
                        type={field.type}
                        required={field.required}
                        className="h-[75px] rounded-2xl border border-solid border-[#757575] bg-white"
                      />
                    )}
                  </div>
                ))}

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Button
                    variant="outline"
                    className="w-full sm:w-[140px] h-12 rounded-xl border-[3px] border-solid border-[#206ba6] bg-white font-['Poppins',Helvetica] font-semibold text-black text-xl hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                  <Button className="w-full sm:w-[222px] h-12 rounded-xl bg-[#206ba6] font-['Poppins',Helvetica] font-semibold text-white text-xl hover:bg-[#1a5a94] transition-colors">
                    Create issuer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};