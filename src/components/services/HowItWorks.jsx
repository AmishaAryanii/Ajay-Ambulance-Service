"use client";

import { motion } from "framer-motion";
import { PhoneCall, Radio, UserCheck, Ambulance, Phone } from "lucide-react";

const PHONE = "+9192891994279";
const PHONE_DISPLAY = "+91 92891994279";

const steps = [
  {
    icon: PhoneCall,
    title: "Call Our Helpline",
    desc: "Reach our 24/7 emergency line and share your location and the patient's condition with our team.",
  },
  {
    icon: Radio,
    title: "Instant Dispatch",
    desc: "The nearest available ambulance is dispatched immediately so help reaches you without delay.",
  },
  {
    icon: UserCheck,
    title: "Paramedic Assessment",
    desc: "Our trained paramedics assess the patient and begin the necessary care right at the scene.",
  },
  {
    icon: Ambulance,
    title: "Safe Transport",
    desc: "The patient is moved swiftly and safely to the hospital of your choice, monitored all the way.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#01203f] py-16 text-white md:py-24">
      {/* Ambient glow + dot pattern */}
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

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: sticky intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#b61416] px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] shadow-lg shadow-[#b61416]/30">
                <Ambulance size={14} />
                How It Works
              </span>

              <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                From Call To Care{" "}
                <span className="text-[#b61416]">In Minutes</span>
              </h2>

              <p className="mt-4 max-w-md font-body leading-relaxed text-white/70">
                Four simple steps between your call and the care your patient
                needs. No confusion, no delay.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#b61416] px-6 py-3 font-heading font-semibold text-white shadow-lg shadow-[#b61416]/30 transition hover:-translate-y-0.5 hover:bg-[#9a1012]"
              >
                <Phone size={16} />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          {/* RIGHT: vertical timeline */}
          <div className="relative lg:col-span-7">
            {/* Vertical line */}
            <div className="absolute bottom-8 left-[27px] top-8 w-[2px] bg-gradient-to-b from-[#b61416] via-white/20 to-white/5" />

            <div className="space-y-6">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex gap-5"
                >
                  {/* Icon node */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#b61416] shadow-lg shadow-[#b61416]/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} className="text-white" strokeWidth={1.8} />
                  </div>

                  {/* Card */}
                  <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 group-hover:border-[#b61416]/60 group-hover:bg-white/10">
                    <span className="absolute right-5 top-3 font-heading text-4xl font-extrabold text-white/5">
                      0{i + 1}
                    </span>
                    <p className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[#b61416]">
                      Step {i + 1}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-bold">
                      {title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-white/65">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}