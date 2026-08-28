import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Story from "@/components/Story";
import Itinerary from "@/components/Itinerary";
import InfoGrid from "@/components/InfoGrid";
import Venue from "@/components/Venue";
import Registry from "@/components/Registry";
import Faq from "@/components/Faq";
import RsvpFooter from "@/components/RsvpFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Invitation />
        <Story />
        <Itinerary />
        <InfoGrid />
        <Venue />
        <Registry />
        <Faq />
        <RsvpFooter />
      </main>
    </>
  );
}
