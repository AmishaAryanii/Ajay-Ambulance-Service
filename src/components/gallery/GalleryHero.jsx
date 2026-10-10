"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Camera,
  Ambulance,
  Phone,
  Images,
} from "lucide-react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";

// Image /public folder mein rakho
const BG_IMAGE = "/banner1.webp";

const stats = [
  { icon: Camera, label: "Real Photos" },
  { icon: Ambulance, label: "Fleet in Action" },
  { icon: Images, label: "Our Team at Work" },
];

export default function GalleryHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#01203f] sm:min-h-screen">
      {/* Background image: right side par anchor, zoom/crop nahi */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:right_center] max-lg:bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Left dark for text, right side par image saaf dikhe */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#01203f] via-[#01203f]/85 to-[#01203f]/20 max-lg:from-[#01203f]/90 max-lg:via-[#01203f]/85 max-lg:to-[#01203f]/80" />
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
            <span className="font-medium text-white">Gallery</span>
          </motion.div>

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#b61416] px-4 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#b61416]/30 sm:text-xs md:text-sm"
          >
            <Camera size={14} />
            Ajay Ambulance Gallery
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            A Glimpse
            <br />
            <span className="text-[#b61416]">Into Our Work</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/80 md:text-lg"
          >
            Our fleet, our team and our commitment to fast, compassionate
            emergency care, shown in pictures.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#b61416] px-6 py-3 font-heading font-semibold text-white shadow-lg shadow-[#b61416]/30 transition hover:-translate-y-0.5 hover:bg-[#9a1012]"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
            </a>
          </motion.div>

          {/* Supporting pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {stats.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <Icon size={16} className="text-[#b61416]" />
                <span className="font-body text-xs text-white/85 sm:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}