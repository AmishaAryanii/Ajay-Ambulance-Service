"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, HelpCircle, Plus } from "lucide-react";

const PHONE = "+9192891994279";
const PHONE_DISPLAY = "+91 92891994279";

const faqs = [
  {
    q: "How quickly can an ambulance reach my location?",
    a: "Our average response time is under 15 minutes, thanks to fast dispatch and ambulances stationed at multiple points across the region.",
  },
  {
    q: "Do you provide ambulances for scheduled, non-emergency transport?",
    a: "Yes. We offer scheduled patient transport for dialysis visits, physiotherapy sessions, hospital discharges and routine checkups, with recurring booking options available.",
  },
  {
    q: "Are your paramedics certified?",
    a: "Every ambulance is staffed with trained paramedics experienced in both critical care and basic life support, ensuring appropriate care in every situation.",
  },
  {
    q: "What is included in an ICU / ALS ambulance?",
    a: "Our ICU ambulances come equipped with a ventilator, defibrillator, cardiac monitor, oxygen support and a trained medical team to handle life-threatening emergencies.",
  },
  {
    q: "Can I book an ambulance for standby at an event?",
    a: "Yes, we offer event standby ambulance services for weddings, corporate events and public gatherings, with a trained paramedic present on-site.",
  },
  {
    q: "What areas do you cover?",
    a: "We operate across Delhi NCR including Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad, and also provide outstation transfers on request.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-[#b61416]/50 bg-white/10 shadow-lg shadow-black/10"
          : "border-white/10 bg-white/5 hover:border-white/25"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        <span
          className={`font-heading text-sm font-extrabold transition-colors ${
            isOpen ? "text-[#b61416]" : "text-white/30"
          }`}
        >
          0{index + 1}
        </span>

        <span className="flex-1 font-heading text-[15px] font-semibold text-white">
          {item.q}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? "bg-[#b61416]" : "bg-white/10"
          }`}
        >
          <ChevronDown
            size={16}
            className={`text-white transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pl-[3.25rem] font-body text-sm leading-relaxed text-white/70 sm:pl-[3.75rem]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-14">
        {/* LEFT: sticky intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#b61416] px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] shadow-lg shadow-[#b61416]/30">
              <HelpCircle size={14} />
              FAQs
            </span>

            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              Common <span className="text-[#b61416]">Questions</span>
            </h2>

            <p className="mt-4 max-w-sm font-body leading-relaxed text-white/70">
              Everything you need to know about Ajay Ambulance Service. Can&apos;t
              find your answer? Call us anytime.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                Still have questions?
              </p>
              <a
                href={`tel:${PHONE}`}
                className="mt-2 block font-heading text-xl font-extrabold transition-colors hover:text-white/80"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={`tel:${PHONE}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#b61416] px-5 py-2.5 font-heading text-sm font-semibold text-white shadow-lg shadow-[#b61416]/30 transition hover:-translate-y-0.5 hover:bg-[#9a1012]"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: single-column accordion */}
        <div className="space-y-4 lg:col-span-8">
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}