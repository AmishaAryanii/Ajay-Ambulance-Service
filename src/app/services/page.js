
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServiceOverview";
import FleetEquipment from "@/components/services/FleetEquipment";
import HowItWorks from "@/components/services/HowItWorks";
import FAQ from "@/components/services/FAQ";

export const metadata = {
  title: "Our Services |Ajay Ambulance",
  description:
    "Emergency response, ICU on wheels, patient transfer, event standby, home care pickup, and mortuary transport — 24/7 across Delhi NCR.",
};

export default function ServicesPage() {
  return (
    <>
    
      <ServicesHero />
      <ServicesOverview/>
      <HowItWorks/>
      <FleetEquipment/>
      <FAQ/>
   
    
    </>
  );
}