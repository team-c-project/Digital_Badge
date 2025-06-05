import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FollowMeSection } from "./sections/FollowMeSection";
import { HeroSection } from "./sections/HeroSection";
import { SupportSection } from "./sections/SupportSection";


export const Home = (): JSX.Element => {
  // Data for the follow me cards
  const followMeCards = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="bg-app-background w-full min-h-screen">
      <div className="bg-app-background overflow-hidden w-full relative">
        {/* FollowMeSection */}
        <div className="w-full">
          <FollowMeSection />
          <img
            className="mx-auto w-[72px] h-px mt-4 object-cover"
            alt="Line"
            src="/line-2.svg"
          />
        </div>

        {/* SupportSection */}
        <SupportSection />

        {/* ContactUsSection */}
        <ContactUsSection />

        {/* Follow me carousel section */}
        <section className="w-full bg-secondary-blue py-16">
          <div className="w-full px-4">
            <h2 className="text-center text-main-text text-[40px] font-bold font-['Poppins',Helvetica] mb-12">
              Follow me
            </h2>

            <Carousel className="w-full max-w-[1212px] mx-auto">
              <CarouselContent className="gap-[50px]">
                {followMeCards.map((card) => (
                  <CarouselItem key={card.id} className="basis-1/3">
                    <Card className="w-full h-[478px] bg-white rounded-2xl shadow-[0px_3px_4px_#0000001a]">
                      <CardContent className="p-6 h-full">
                        {/* Card content goes here */}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-30px] w-[60px] h-[60px] bg-white rounded-[30px]">
                <ChevronLeftIcon className="w-10 h-10" />
              </CarouselPrevious>
              <CarouselNext className="absolute right-[-30px] w-[60px] h-[60px] bg-white rounded-[30px]">
                <ChevronRightIcon className="w-10 h-10" />
              </CarouselNext>
            </Carousel>
          </div>
        </section>

        {/* AboutUsSection */}
        <AboutUsSection />

        {/* FeaturesSection */}
        <FeaturesSection />

        {/* HeroSection */}
        <HeroSection />
      </div>
    </div>
  );
};
