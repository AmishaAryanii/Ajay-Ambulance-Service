"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Ambulance,
  Clock,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";
const EMAIL = "ay5451959@gmail.com";

const highlights = [
  { icon: Clock, label: "24/7 Available" },
  { icon: HeartPulse, label: "ICU & Ventilator Ambulance" },
  { icon: ShieldCheck, label: "Trained Paramedics" },
];

export default function CTA() {
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
    <section className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
      {/* Soft ambient accents */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#b61416]/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#01203f]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-3xl shadow-2xl shadow-[#01203f]/15 lg:grid-cols-5"
        >
          {/* LEFT: navy content panel */}
          <div className="relative overflow-hidden bg-[#01203f] p-8 text-white md:p-12 lg:col-span-3">
            <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-[#b61416]/20 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />
            <Ambulance
              className="absolute -bottom-10 -right-10 h-60 w-60 text-white/[0.04]"
              strokeWidth={1}
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#b61416] px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] shadow-lg shadow-[#b61416]/30">
                <Ambulance size={14} />
                Ajay Ambulance Service
              </span>

              <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                Need an Ambulance{" "}
                <span className="text-[#b61416]">Right Now?</span>
              </h2>

              <p className="mt-4 max-w-xl font-body leading-relaxed text-white/70">
                Thank you for choosing Ajay Ambulance Service. ICU life support
                ambulance, normal ambulance and outstation ambulance are all
                available here, 24×7.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-body text-sm text-white/85 backdrop-blur-sm"
                  >
                    <Icon size={15} className="text-[#b61416]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: red action panel */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-[#b61416] p-8 text-white md:p-12 lg:col-span-2">
            <Ambulance
              className="absolute -bottom-10 -right-10 h-56 w-56 text-white/[0.07]"
              strokeWidth={1}
            />

            <div className="relative">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-white/70">
                24/7 Emergency Helpline
              </p>
              <a
                href={`tel:${PHONE}`}
                onClick={trackCallConversion}
                className="mt-2 block font-heading text-3xl font-extrabold transition-colors hover:text-white/80 md:text-4xl"
              >
                {PHONE_DISPLAY}
              </a>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={`tel:${PHONE}`}
                  onClick={trackCallConversion}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7f5f2] px-6 py-3.5 font-heading font-semibold text-[#b61416] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3.5 font-heading font-semibold text-white transition hover:bg-white hover:text-[#b61416]"
                >
                  <MessageCircle size={18} />
                  Request Callback
                </Link>
              </div>

              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 inline-flex items-center gap-2 font-body text-sm text-white/80 transition-colors hover:text-white"
              >
                <Mail size={16} />
                {EMAIL}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}