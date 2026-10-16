"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  BadgeCheck,
  Wallet,
  MapPinned,
  Phone,
  ArrowUpRight,
  Clock3,
  Ambulance,
} from "lucide-react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";

// Images /public folder mein rakho
const MAIN_IMAGE = "/urgentcare5.png";

const features = [
  {
    icon: Zap,
    title: "Rapid Response",
    desc: "Fast dispatch with GPS-tracked routing so help reaches you as quickly as possible.",
  },
  {
    icon: BadgeCheck,
    title: "Trained Paramedics",
    desc: "Every vehicle is staffed with trained medical professionals ready to handle emergencies.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "No hidden charges. Clear, upfront pricing shared before every dispatch.",
  },
  {
    icon: MapPinned,
    title: "Wide Coverage",
    desc: "Serving Delhi, Noida, Ghaziabad, Greater Noida and nearby NCR regions round the clock.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#b61416] md:text-sm">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-[#01203f] md:text-4xl lg:text-5xl">
            Reliability You Can Count On,{" "}
            <span className="text-[#b61416]">In Any Emergency</span>
          </h2>
          <p className="mt-4 font-body leading-relaxed text-gray-600">
            Ajay Ambulance Service is built around speed, safety and care, so
            families can trust us when every second matters.
          </p>
        </motion.div>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: image composition */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mx-auto w-full max-w-xl pb-14 pr-6 lg:col-span-5 lg:pr-10"
          >
            {/* Offset red frame */}
            <div className="absolute -left-4 -top-4 h-[calc(100%-3.5rem)] w-[calc(100%-1.5rem)] rounded-[2rem] border-2 border-[#b61416]/30 sm:-left-5 sm:-top-5" />

            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-200 shadow-xl">
              <Image
                src="/image3.jpeg"
                alt="Ajay Ambulance Service emergency ambulance"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-heading text-5xl font-extrabold text-white">
                  24/7
                </p>
                <p className="mt-1 font-body text-sm font-medium text-white/90">
                  Emergency Ambulance Service
                </p>
              </div>
            </div>


            {/* Floating card: response */}
            <div className="absolute left-3 top-8 z-20 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-lg sm:left-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b61416]">
                <Clock3 size={20} className="text-white" />
              </div>
              <div>
                <p className="font-heading text-lg font-extrabold leading-none text-[#01203f]">
                  15 Min
                </p>
                <p className="mt-1 font-body text-[11px] text-gray-500">
                  Avg. response
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: features */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b61416]/40 hover:bg-white hover:shadow-xl"
                >
                  <span className="absolute right-5 top-3 font-heading text-4xl font-extrabold text-[#01203f]/5">
                    0{i + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b61416]/10 transition-colors duration-300 group-hover:bg-[#b61416]">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="text-[#b61416] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-[#01203f]">
                    {title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom strip */}
            <motion.div
              variants={fadeUp}
              custom={5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b61416]">
                  <Ambulance size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#01203f]">
                    Need an ambulance right now?
                  </p>
                  <p className="font-body text-sm text-gray-500">
                    Call us anytime, we are available 24/7.
                  </p>
                </div>
              </div>

              <a
                href={`tel:${PHONE}`}
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#b61416] py-2.5 pl-5 pr-2.5 font-heading text-sm font-semibold text-white shadow-lg shadow-[#b61416]/25 transition hover:bg-[#9a1012]"
              >
                <Phone size={15} />
                {PHONE_DISPLAY}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#b61416] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}