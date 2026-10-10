"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Truck,
  Building2,
  Users,
  Cross,
  CalendarClock,
  Check,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";


const services = [
  {
    icon: HeartPulse,
    title: "ICU Life Support Ambulance",
    desc: "Fully equipped ICU ambulances with ventilators, cardiac monitors, oxygen support, infusion pumps, and trained paramedics for critical patients.",
    features: [
      "Advanced life support equipment",
      "Continuous cardiac monitoring",
      "Trained critical care paramedics",
    ],
  },
  {
    icon: Truck,
    title: "Normal Ambulance",
    desc: "Safe and comfortable ambulance service for routine hospital visits, patient discharge, dialysis, and non-emergency transportation.",
    features: [
      "Oxygen support and first aid",
      "Trained medical attendant",
      "Comfortable patient transportation",
    ],
  },
  {
    icon: Building2,
    title: "Outstation Ambulance",
    desc: "Reliable 24/7 long-distance ambulance service across Delhi NCR and major cities in India, with experienced medical staff.",
    features: [
      "Long-distance patient transfers",
      "Medical assistance during transit",
      "Advance booking available",
    ],
  },
  {
    icon: Users,
    title: "Patient Transfer Service",
    desc: "Professional inter-hospital transfers with appropriate medical supervision and assistance throughout the journey.",
    features: [
      "Hospital-to-hospital transfers",
      "Medical supervision during transit",
      "Coordinated patient handover",
    ],
  },
  {
    icon: Cross,
    title: "Mortuary Van Service",
    desc: "Respectful and dignified mortuary van services for local and outstation transportation, provided with care and sensitivity.",
    features: [
      "Dignified transportation",
      "Local and outstation services",
      "Available 24/7",
    ],
  },
  {
    icon: CalendarClock,
    title: "Event Medical Support",
    desc: "Ambulance and paramedic standby services for weddings, sports events, corporate gatherings, and public functions.",
    features: [
      "Trained paramedic on standby",
      "Ambulance at event venues",
      "Flexible booking durations",
    ],
  },
];


export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Soft ambient accents */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#b61416]/5 blur-3xl" />
      <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-[#01203f]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-[#b61416] px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#b61416]/20">
            What We Offer
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-[#01203f] md:text-4xl lg:text-5xl">
            A Service For{" "}
            <span className="text-[#b61416]">Every Situation</span>
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-gray-600 md:text-base">
            Ajay Ambulance Service: all types of ambulances available 24×7. ICU
            Life Support Ambulance, Normal Ambulance and Outstation Ambulance,
            ready whenever you need us.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, features }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b61416]/40 hover:shadow-xl"
            >
              {/* Top accent line */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#b61416] transition-all duration-500 group-hover:w-full" />

              {/* Number watermark */}
              <span className="absolute right-5 top-4 font-heading text-5xl font-extrabold text-[#01203f]/5">
                0{i + 1}
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#01203f] transition-colors duration-300 group-hover:bg-[#b61416]">
                <Icon size={26} className="text-white" strokeWidth={1.8} />
              </div>

              <h3 className="mt-5 font-heading text-lg font-bold text-[#01203f]">
                {title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">
                {desc}
              </p>

              <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 font-body text-sm text-gray-700"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-[#b61416]"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${PHONE}`}
                className="mt-6 inline-flex items-center gap-1.5 pt-1 font-heading text-sm font-semibold text-[#b61416] transition-colors hover:text-[#8f0f11]"
              >
                Book Now
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom call banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#01203f] p-6 text-white shadow-xl md:flex-row md:p-8"
        >
          <p className="text-center font-heading text-lg font-semibold md:text-left">
            Not sure which ambulance you need? Call us, we will guide you.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#b61416] px-6 py-3 font-heading font-semibold text-white shadow-lg shadow-[#b61416]/30 transition hover:-translate-y-0.5 hover:bg-[#9a1012]"
          >
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
        </motion.div>
      </div>
    </section>
  );
}