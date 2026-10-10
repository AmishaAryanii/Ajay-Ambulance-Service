"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Phone, Mail, Siren, ShieldCheck, Clock, HeartPulse } from "lucide-react";

const PHONE = "+9192891994279";
const PHONE_DISPLAY = "+91 92891994279";
const EMAIL = "ay5451959@gmail.com";

// Replace with a real photo of your equipment/ambulance interior once available.
const BG_IMAGE = "/banner2.webp";

const highlights = [
  { icon: Clock, label: "24/7 Availability" },
  { icon: HeartPulse, label: "ICU & Ventilator Ambulance" },
  { icon: ShieldCheck, label: "Trained Paramedics" },
];

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden sm:min-h-screen">
      {/* Background image with slow Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />

      {/* Left-to-right gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#01203f] via-[#01203f]/90 to-[#01203f]/60" />
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#b61416]/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#b61416]/10 blur-3xl sm:h-72 sm:w-72" />

      {/* Red accent bar */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-[#b61416]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:px-8">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-body text-xs text-white/70 sm:text-sm"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            <span className="font-medium text-white">Services</span>
          </motion.div>

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#b61416] px-4 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#b61416]/30 sm:text-xs md:text-sm"
          >
            <Siren size={14} />
            Ajay Ambulance Services
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Emergency Care,
            <br />
            <span className="text-[#b61416]">Whenever You Need It</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl font-body text-base leading-relaxed text-white/80 md:text-lg"
          >
            Trusted emergency ambulance services with rapid response,
            advanced life-support vehicles and experienced medical
            professionals, ready day and night.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#b61416] px-6 py-3 font-heading font-semibold text-white shadow-lg shadow-[#b61416]/30 transition hover:-translate-y-0.5 hover:bg-[#9a1012]"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 font-heading font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              <Mail size={18} />
              Email Us
            </a>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 + i * 0.1 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:border-[#b61416]/60"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b61416] shadow-lg shadow-[#b61416]/30">
                <Icon size={18} className="text-white" />
              </div>
              <p className="font-heading text-sm font-bold text-white">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}