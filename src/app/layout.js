import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TopBar from "@/components/common/Topbar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CallButton from "@/components/common/CallButton";
import ScrollToTop from "@/components/common/ScrollToTop";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Ajay Ambulance | 24/7 Emergency Ambulance Service in Delhi NCR",
  description:
    "Ajay Ambulance provides 24/7 emergency and non-emergency ambulance services across Delhi NCR with fully equipped vehicles and trained paramedics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
 
{/* Google Ads Global Site Tag */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-18503279137"
  strategy="afterInteractive"
/>

<Script id="google-ads" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'AW-18503279137');
    gtag('config', 'AW-18310636441');
  `}
</Script>


        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <CallButton />
      </body>
    </html>
  );
}
