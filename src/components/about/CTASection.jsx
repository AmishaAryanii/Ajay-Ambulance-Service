"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Phone, Mail, Ambulance, ArrowRight, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Replace with your own asset in /public
const BG_IMAGE = "/urgentcare1.jpeg";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";
const EMAIL = "ay5451959@gmail.com";

const highlights = [
  "Available 24/7, every day of the year",
  "ICU, ventilator & basic life support ambulances",
  "Trained paramedics on every ride",
  "Transparent pricing, no hidden charges",
];

export default function CTASection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const cardRef = useRef(null);

  const trackCallConversion = (phone) => (e) => {
    e.preventDefault();

    let called = false;

    const makeCall = () => {
      if (called) return;
      called = true;
      window.location.href = `tel:${phone}`;
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        leftRef.current.children,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1 },
      ).fromTo(
        cardRef.current,
        { x: 40, opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1 },
        "-=0.6",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24 text-[#f7f5f2]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#01203f] via-[#01203f]/95 to-[#01203f]/80" />

      {/* Ambient glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#b61416]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#b61416]/10 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: copy */}
        <div ref={leftRef}>
          <span className="inline-flex items-center gap-2 font-heading font-semibold text-xs tracking-[0.15em] uppercase bg-[#b61416] px-4 py-1.5 rounded-full shadow-lg shadow-[#b61416]/30">
            <Ambulance size={14} />
            Ajay Ambulance Service
          </span>

          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mt-5 leading-tight">
            Need an ambulance <span className="text-[#b61416]">right now?</span>
          </h2>

          <p className="mt-4 max-w-xl text-white/75 leading-relaxed">
            Whether it is a medical emergency, a planned patient transfer or an
            ICU ambulance, our team is one call away and ready to reach you as
            fast as possible.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm md:text-base text-white/85">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b61416]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: contact card */}
        <div
          ref={cardRef}
          className="relative rounded-3xl border border-white/15 bg-white/5 p-8 md:p-10 backdrop-blur-md shadow-2xl"
        >
          <div className="absolute -top-5 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#b61416] shadow-lg shadow-[#b61416]/40">
            <span className="absolute inset-0 rounded-full bg-[#b61416]/40 animate-ping [animation-duration:2s]" />
            <Clock className="relative h-5 w-5 text-white" />
          </div>

          <p className="text-white/60 text-xs uppercase tracking-[0.15em]">
            24/7 Emergency Helpline
          </p>
          <a
            href={`tel:${PHONE}`}
            onClick={trackCallConversion(PHONE)}
            className="mt-2 block font-heading font-extrabold text-3xl md:text-4xl hover:text-white/80 transition-colors"
          >
            {PHONE_DISPLAY}
          </a>

          {/* ECG divider */}
          <div className="w-full max-w-[180px] my-5 opacity-60">
            <svg viewBox="0 0 300 40" className="w-full h-5" preserveAspectRatio="none">
              <polyline
                points="0,20 70,20 85,4 100,36 115,20 300,20"
                fill="none"
                stroke="#f7f5f2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE}`}
              onClick={trackCallConversion(PHONE)}
              className="inline-flex flex-1 items-center justify-center gap-2 px-6 py-3 bg-[#b61416] hover:bg-[#9a1012] text-white font-heading font-semibold rounded-full shadow-lg shadow-[#b61416]/30 transition-colors hover:-translate-y-0.5 duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/25 hover:border-white/60 hover:bg-white/10 rounded-full font-heading font-medium transition-colors"
            >
              Book Ambulance
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}