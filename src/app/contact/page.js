import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/contact/FAQ";

export const metadata = {
  title: "Contact Us | Saurabh Ambulance",
  description:
    "Get in touch with Saurabh Ambulance for emergency bookings, scheduled patient transport, or general enquiries. Available 24/7 across Delhi NCR.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
       <ContactInfo />
      <ContactForm />
     
      

      {/* <FAQ /> */}
    </>
  );
}
