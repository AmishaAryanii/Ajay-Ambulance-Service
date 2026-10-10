"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ShieldCheck,
  Clock3,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";

const BG_IMAGE = "/home.png";
const SIDE_IMAGE = "/urgentcare10.jpeg";

const trustPoints = [
  { icon: Clock3, label: "24/7 Availability" },
  { icon: Stethoscope, label: "Trained Paramedics" },
  { icon: ShieldCheck, label: "ICU Equipped Fleet" },
];

export default function Hero() {
  const trackCallConversion = (e) => {
    e.preventDefault();

    let called = false;

    const makeCall = () => {
      if (called) return;
      called = true;
      window.location.href = `tel:${PHONE}`;
    };

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      const timeout = setTimeout(makeCall, 1000);

      window.gtag("event", "conversion", {
        send_to: "AW-18310636441/-XVHCOC9mdQcEJnHmJtE",
        event_callback: () => {
          clearTimeout(timeout);
          makeCall();
        },
      });
    } else {
      makeCall();
    }
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image with slow Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#01203f]/95 via-[#01203f]/85 to-[#01203f]/60" />
      <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#b61416]/15 blur-3xl" />
      <div className="absolute top-1/2 -left-32 h-[380px] w-[380px] rounded-full bg-[#b61416]/10 blur-3xl" />

      <div className="relative z-10 mx-auto -mt-16 grid w-full max-w-7xl items-center gap-12 px-4 py-24 md:px-8 lg:grid-cols-2">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#b61416] px-4 py-1.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg shadow-[#b61416]/30 md:text-sm">
            Trusted Emergency Response
          </span>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
            Every Second Counts.
            <br />
            <span className="text-[#b61416]">Ajay Ambulance</span> Is Already
            On The Way.
          </h1>

          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/80 md:text-lg">
            Fully equipped ambulances, trained paramedics and rapid dispatch,
            available around the clock for emergencies, hospital transfers and
            scheduled patient transport.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              onClick={trackCallConversion}
              className="flex items-center gap-2 rounded-full bg-[#b61416] px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#8f0f11] hover:shadow-lg md:text-base"
            >
              <Phone size={18} className="fill-white" strokeWidth={0} />
              Call Emergency Line
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#01203f] md:text-base"
            >
              Book Ambulance
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap gap-6 border-t border-white/15 pt-8">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Icon size={17} className="text-white" />
                </div>
                <span className="font-body text-sm font-medium text-white/85">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: image card (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          <div className="relative w-full max-w-md">

         
          </div>
        </motion.div>
      </div>
    </section>
  );
}