"use client";

import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import {
  Clock3,
  Ambulance,
  HeartPulse,
  Users,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  Siren,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";

// Apni images /public folder mein rakho aur path yahan badlo
const MAIN_IMAGE = "/image5.jpeg";
const SMALL_IMAGE = "/urgentcare6.jpeg";

const stats = [
  { value: 8, suffix: "+", label: "Years of Service", Icon: Clock3 },
  { value: 25, suffix: "+", label: "Ambulances in Fleet", Icon: Ambulance },
  { value: 10, suffix: "K+", label: "Lives Assisted", Icon: HeartPulse },
  { value: 15, suffix: " Min", label: "Avg. Response Time", Icon: Users },
];

const pillars = [
  {
    icon: Siren,
    title: "Rapid Dispatch",
    text: "24/7 control room, nearest ambulance sent immediately.",
  },
  {
    icon: Stethoscope,
    title: "Trained Paramedics",
    text: "Calm, skilled care from pickup to hospital handover.",
  },
  {
    icon: ShieldCheck,
    title: "Well-Maintained Fleet",
    text: "Clean, equipped vehicles kept ready for every call.",
  },
];

function CountUpStat({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: images */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative mx-auto w-full max-w-xl pb-14 pr-6 lg:col-span-6 lg:pr-12"
          >
            {/* Offset red frame */}
            <div className="absolute -left-4 -top-4 h-[calc(100%-3.5rem)] w-[calc(100%-1.5rem)] rounded-[2rem] border-2 border-[#b61416]/30 sm:-left-5 sm:-top-5" />

            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-200 shadow-xl">
              <Image
                src={MAIN_IMAGE}
                alt="Ajay Ambulance Service ambulance and paramedic team"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </div>

        

            {/* Floating card: response time */}
            <div className="absolute left-3 top-8 z-20 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-lg sm:left-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b61416]">
                <Clock3 size={20} className="text-white" />
              </div>
              <div>
                <p className="font-heading text-lg font-extrabold leading-none text-[#01203f]">
                  15 Min
                </p>
                <p className="mt-1 font-body text-[11px] text-gray-500">
                  Avg. arrival time
                </p>
              </div>
            </div>

            {/* Floating card: 24/7 */}
            <div className="absolute bottom-2 left-3 z-20 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-lg sm:left-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b61416]">
                <Ambulance size={20} className="text-white" />
              </div>
              <div>
                <p className="font-heading text-lg font-extrabold leading-none text-[#01203f]">
                  24/7
                </p>
                <p className="mt-1 font-body text-[11px] text-gray-500">
                  Always available
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: content */}
          <div className="lg:col-span-6">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-block font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#b61416] md:text-sm"
            >
              About Ajay Ambulance Service
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-3 font-heading text-4xl font-extrabold leading-[1.1] text-[#01203f] md:text-5xl"
            >
              Dedicated to <span className="text-[#b61416]">Saving Lives</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-5 font-body text-base leading-relaxed text-gray-600 md:text-lg"
            >
              Ajay Ambulance Service was founded with a single mission: to make
              emergency medical transport fast, reliable and accessible to every
              family. What began as a small fleet has grown into a trusted
              network of equipped ambulances and trained paramedics.
            </motion.p>

            <div className="mt-7 space-y-3">
              {pillars.map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  custom={3 + i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-[#b61416]/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b61416]/10">
                    <Icon size={20} className="text-[#b61416]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#01203f]">
                      {title}
                    </h3>
                    <p className="font-body text-sm text-gray-500">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              variants={fadeUp}
              custom={6}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              href={`tel:${PHONE}`}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#b61416] py-3 pl-6 pr-3 font-heading font-semibold text-white shadow-lg shadow-[#b61416]/25 transition hover:bg-[#9a1012]"
            >
              <Phone size={17} />
              Call {PHONE_DISPLAY}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#b61416] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </motion.a>
          </div>
        </div>

        {/* Stats: light cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-4 md:mt-24 md:grid-cols-4 md:gap-6"
        >
          {stats.map(({ value, suffix, label, Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#b61416]/40 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#b61416]/10">
                <Icon size={22} className="text-[#b61416]" strokeWidth={1.8} />
              </div>
              <p className="mt-4 font-heading text-3xl font-extrabold tabular-nums text-[#01203f] md:text-4xl">
                <CountUpStat value={value} suffix={suffix} />
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-wider text-gray-500 md:text-sm">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}