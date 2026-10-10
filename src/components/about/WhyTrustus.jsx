"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  HeartHandshake,
  Timer,
  Award,
  Phone,
  Ambulance,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "+919289194279";

const reasons = [
  {
    icon: Timer,
    title: "Consistent Fast Response",
    desc: "Optimized dispatch routing means help reaches you when it matters most.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Licensed",
    desc: "Licensed operations with regularly inspected, sanitized and well-maintained vehicles.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Staff",
    desc: "Our paramedics are trained not just in medical care, but in supporting anxious families.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "Thousands of successful patient transports with consistently positive feedback.",
  },
];

export default function WhyTrustUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".trust-head",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".trust-head", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".trust-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".trust-grid", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".trust-banner",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".trust-banner", start: "top 90%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#01203f] py-16 md:py-24 text-white"
    >
      {/* Ambient glow */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#b61416]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#b61416]/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered heading */}
        <div className="trust-head text-center max-w-3xl mx-auto">
          <span className="inline-block font-heading font-semibold text-xs md:text-sm tracking-[0.15em] uppercase bg-[#b61416] px-4 py-1.5 rounded-full shadow-lg shadow-[#b61416]/30">
            Why Trust Us
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mt-5 leading-tight">
            Why Families Choose{" "}
            <span className="text-[#b61416]">Ajay Ambulance</span>
          </h2>
          <p className="font-body text-white/70 leading-relaxed mt-4">
            Every dispatch is backed by trained paramedics, verified vehicles
            and a team that treats every family like their own.
          </p>
        </div>

        {/* 2x2 / 4-col card grid */}
        <div className="trust-grid mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="trust-card group relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:border-[#b61416]/60 hover:bg-white/10"
            >
              <span className="absolute right-5 top-4 font-heading text-4xl font-extrabold text-white/5">
                0{i + 1}
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b61416] shadow-lg shadow-[#b61416]/30 transition group-hover:scale-110">
                <Icon size={24} className="text-white" strokeWidth={1.8} />
              </div>

              <h3 className="mt-5 font-heading font-bold text-lg">{title}</h3>
              <p className="mt-2 font-body text-sm text-white/65 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom call banner */}
        <div className="trust-banner mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:p-8 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b61416]">
              <span className="absolute inset-0 rounded-full bg-[#b61416]/40 animate-ping [animation-duration:2s]" />
              <Ambulance className="relative h-5 w-5 text-white" />
            </div>
            <p className="font-heading font-semibold text-lg text-center md:text-left">
              Need help right now? Our team is available 24/7.
            </p>
          </div>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#f7f5f2] px-6 py-3 font-heading font-semibold text-[#b61416] shadow-xl shadow-black/20 transition hover:bg-white hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            Call +91 9289194279
          </a>
        </div>
      </div>
    </section>
  );
}