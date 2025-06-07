import { BadgeInformationSection } from "./sections/BadgeInformationSection";
import { ImportantNotesSection } from "./sections/ImportantNotesSection/ImportantNotesSection";

export const Issuers = (): JSX.Element => {
  return (
    <div className="bg-app-background flex flex-col w-full min-h-screen">
      <BadgeInformationSection />
      <ImportantNotesSection />
    </div>
  );
};