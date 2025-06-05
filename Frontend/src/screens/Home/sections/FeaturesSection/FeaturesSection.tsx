import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const FeaturesSection = (): JSX.Element => {
  // Form fields data for mapping
  const formFields = [
    { id: "fullName", label: "Full Name", type: "input" },
    { id: "email", label: "Email", type: "input" },
    { id: "telephone", label: "Telephone", type: "input" },
    { id: "message", label: "Message", type: "textarea" },
  ];

  return (
    <section className="w-full py-16 px-7 flex flex-col md:flex-row items-start justify-between gap-8">
      <div className="flex flex-col">
        <h2 className="text-5xl font-semibold text-main-text tracking-[0.48px] leading-[48px] max-w-[352px]">
          Need Support or a Custom Demo?
        </h2>
      </div>

      <div className="w-full max-w-[650px]">
        <h1 className="text-[40px] font-bold text-main-text font-['Poppins',Helvetica] text-center mb-12">
          Contact us
        </h1>

        <Card className="w-full shadow-[0px_3px_4px_#0000001a] rounded-2xl">
          <CardContent className="p-8">
            <form className="space-y-8">
              {formFields.map((field) =>
                field.type === "input" ? (
                  <div key={field.id} className="relative">
                    <Input
                      id={field.id}
                      placeholder={field.label}
                      className="h-[89px] bg-neutral-100 rounded-2xl pl-12 text-xl font-medium text-secondary-text font-['Poppins',Helvetica]"
                    />
                  </div>
                ) : (
                  <div key={field.id} className="relative">
                    <Textarea
                      id={field.id}
                      placeholder={field.label}
                      className="h-[262px] bg-neutral-100 rounded-2xl pl-12 pt-12 text-xl font-medium text-secondary-text font-['Poppins',Helvetica] resize-none"
                    />
                  </div>
                ),
              )}

              <div className="font-['Poppins',Helvetica] font-normal text-main-text text-base leading-7">
                <span className="text-[#202020]">
                  I have read and accept the{" "}
                </span>
                <span className="text-[#206ba6] cursor-pointer">
                  terms and privacy policy
                </span>
              </div>

              <Button className="w-[232px] h-[81px] bg-[#206ba6] rounded-[30px] text-2xl font-semibold tracking-[0.24px] leading-6">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
