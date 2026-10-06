import { HeaderSection } from "../FixedComponents";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";

export const ContactPage = () => {
  return (
    <div className="relative h-[100svh] overflow-hidden bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
      <HeaderSection />
      <main className="relative z-10 h-full">
        <ContactFormSection />
      </main>
    </div>
  );
};
