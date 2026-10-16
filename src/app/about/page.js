
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import MeetOurTeam from "@/components/about/OurTeam";
import CTASection from "@/components/about/CTASection"
import WhyTrustUs from "@/components/about/WhyTrustus";
export const metadata = {
  title: "About Us | Ajay Ambulance",
  description:
    "Emergency response, ICU on wheels, patient transfer, event standby, home care pickup, and mortuary transport — 24/7 across Delhi NCR.",
};

export default function ServicesPage() {
  return (
    <>
    
     <AboutHero/>
     <OurStory/>
     <MissionVision/>
     
   
    <WhyTrustUs/>
     <MeetOurTeam/>
    <CTASection/>
    </>
  );
}