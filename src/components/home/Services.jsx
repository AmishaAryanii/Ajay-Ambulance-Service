"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Truck,
  Building2,
  Users,
  Cross,
  CalendarClock,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const PHONE = "+919289194279";

// Images /public folder mein rakho. image: null karoge to grey box dikhega.
const services = [
  {
    icon: HeartPulse,
    title: "ICU Life Support Ambulance",
    desc: "Fully equipped ICU ambulances with ventilator, cardiac monitor, oxygen support, infusion pumps and trained paramedics for critical patients.",
    image: "/image7.jpeg",
  },
  {
    icon: Truck,
    title: "Normal Ambulance",
    desc: "Safe and comfortable ambulance service for routine hospital visits, patient discharge, dialysis and non-emergency transportation.",
    image: "/image13.jpeg",
  },
  {
    icon: Building2,
    title: "Outstation Ambulance",
    desc: "24×7 long-distance ambulance service across Delhi NCR and major cities in India with experienced medical staff.",
    image: "/image18.jpeg",
  },
  {
    icon: Users,
    title: "Patient Transfer Service",
    desc: "Professional inter-hospital transfers with continuous monitoring and medical assistance throughout the journey.",
    image: "/image3.jpeg",
  },
  {
    icon: Cross,
    title: "Mortuary Van Service",
    desc: "Respectful and dignified mortuary van services for local and outstation transportation.",
    image: "/image20.jpeg",
  },
  {
    icon: CalendarClock,
    title: "Event Medical Support",
    desc: "Ambulance and paramedic standby for weddings, sports events, corporate gatherings and public functions.",
    image: "/image4.jpeg",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[#b61416] md:text-sm">
            Our Services
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-[#01203f] md:text-4xl lg:text-5xl">
            All Types of Ambulance Services{" "}
            <span className="text-[#b61416]">Available 24×7</span>
          </h2>
          <p className="mt-4 font-body text-gray-600">
            ICU Life Support, Normal, Outstation, Patient Transfer, Mortuary
            Van and Event Ambulance services, available 24 hours a day.
          </p>
        </motion.div>

        {/* 3 cards on top, 3 cards below */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, image }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b61416]/40 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute bottom-0 left-5 translate-y-1/2">
                
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-9">
                <h3 className="font-heading text-lg font-bold text-[#01203f]">
                  {title}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-gray-600">
                  {desc}
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-[#b61416] transition-colors hover:text-[#8f0f11]"
                >
                  <Phone size={15} />
                  Book Now
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}