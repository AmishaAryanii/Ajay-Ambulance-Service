"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, CheckCircle2, Ambulance } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "+919289194279";

const points = [
  "Single vehicle se shuru hua safar, aaj poora emergency network",
  "Trained paramedics aur experienced drivers every ride par",
  "24/7 control room, fast dispatch, transparent pricing",
];

const mini = [
  { value: "10+", label: "Years" },
  { value: "5000+", label: "Patients" },
  { value: "24/7", label: "Support" },
];

export default function OurStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".story-visual",
        { opacity: 0, x: -40, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".story-visual", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".story-item",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".story-content", start: "top 80%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT: image with overlapping elements */}
        <div className="story-visual relative mx-auto w-full max-w-lg pb-10 pr-6">
          {/* Red offset frame */}
          <div className="absolute left-6 top-6 h-full w-full rounded-[2rem] border-2 border-[#b61416]/40" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#01203f] shadow-xl">
            <Image
              src="/image12.jpeg"
              alt="Ajay Ambulance Service vehicle on emergency response duty"
              fill
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#01203f]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#b61416]/25 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-0 right-0 flex items-center gap-3 rounded-2xl bg-[#b61416] px-5 py-4 text-white shadow-xl shadow-[#b61416]/30">
            <Ambulance className="h-8 w-8" />
            <div>
              <p className="font-heading text-2xl font-extrabold leading-none">
                24/7
              </p>
              <p className="text-xs text-white/80">Always On Call</p>
            </div>
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="story-content">
          <span className="story-item inline-block font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            Our Story
          </span>

          <h2 className="story-item font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl lg:text-5xl mt-3 mb-5 leading-tight">
            A Mission That Began With One Ambulance
          </h2>

          <p className="story-item font-body text-gray-600 leading-relaxed mb-4">
            Ajay Ambulance Service started with a simple observation: in
            emergencies, families lose precious minutes waiting for reliable
            transport. What began as a single vehicle and a small dedicated team
            has grown into a trusted emergency response service.
          </p>

          <p className="story-item font-body text-gray-600 leading-relaxed">
            Our focus has never changed: arrive fast, treat with care, and never
            let a family feel alone during a crisis.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="story-item flex items-start gap-3 font-body text-gray-700"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b61416]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {/* Mini stats */}
          <div className="story-item mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
            {mini.map((m) => (
              <div key={m.label}>
                <p className="font-heading text-2xl md:text-3xl font-extrabold text-[#01203f]">
                  {m.value}
                </p>
                <p className="text-sm text-gray-500">{m.label}</p>
              </div>
            ))}
          </div>

          <a
            href={`tel:${PHONE}`}
            className="story-item mt-8 inline-flex items-center gap-2 rounded-full bg-[#b61416] px-6 py-3 font-heading font-semibold text-white shadow-lg shadow-[#b61416]/30 transition hover:bg-[#9a1012]"
          >
            <Phone className="h-4 w-4" />
            Call +91 9289194279
          </a>
        </div>
      </div>
    </section>
  );
}