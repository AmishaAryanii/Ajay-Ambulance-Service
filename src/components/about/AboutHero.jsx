"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ChevronRight, Phone, Mail, Siren } from "lucide-react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";
const EMAIL = "ay5451959@gmail.com";

// Image /public folder mein rakho
const BG_IMAGE = "/ab.png";

const stats = [
  { value: "24/7", label: "Emergency Response" },
  { value: "10+", label: "Years of Service" },
  { value: "5000+", label: "Patients Transported" },
];

export default function AboutHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".about-hero-crumb",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 },
      )
        .fromTo(
          ".about-hero-badge",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.25",
        )
        .fromTo(
          ".about-hero-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.25",
        )
        .fromTo(
          ".about-hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".about-hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
          "-=0.3",
        )
        .fromTo(
          ".about-hero-stat",
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#01203f]"
    >
      {/* Background image: right side par, poori dikhegi (cut nahi hogi) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-[position:right_center] bg-[length:cover] max-lg:bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Gradient: left side dark (text ke liye), right side image saaf dikhe */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#01203f] via-[#01203f]/85 to-[#01203f]/20 max-lg:from-[#01203f]/90 max-lg:via-[#01203f]/85 max-lg:to-[#01203f]/80" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#b61416]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#b61416]/10 blur-3xl" />

      {/* Red accent bar */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-[#b61416]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 md:px-8">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="about-hero-crumb flex items-center gap-2 font-body text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-white">About</span>
          </div>

          {/* Badge */}
          <span className="about-hero-badge mt-8 inline-flex items-center gap-2 rounded-full bg-[#b61416] px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#b61416]/30 md:text-sm">
            <Siren size={14} />
            About Ajay Ambulance Service
          </span>

          {/* Title */}
          <h1 className="about-hero-title mt-6 font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Every Second Counts.
            <br />
            <span className="text-[#b61416]">We Make Them Matter.</span>
          </h1>

          {/* Description */}
          <p className="about-hero-description mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Ajay Ambulance Service provides fast, reliable and compassionate
            emergency and non-emergency medical transportation, with a
            commitment to patient safety, rapid response and round-the-clock
            care.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE}`}
              className="about-hero-cta inline-flex items-center gap-2 rounded-xl bg-[#b61416] px-6 py-3 font-semibold text-white shadow-lg shadow-[#b61416]/30 transition hover:bg-[#9a1012]"
            >
              <Phone size={18} /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="about-hero-cta inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="about-hero-stat rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-[#b61416]/60"
            >
              <p className="font-heading text-3xl font-extrabold text-white">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}