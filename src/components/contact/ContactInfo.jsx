"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock3, ArrowUpRight } from "lucide-react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";
const EMAIL = "ay5451959@gmail.com";

// Replace with your real address / map link
const ADDRESS = "Sector 52,Noida India";
const MAP_LINK = "https://maps.google.com/?q=Ajay+Ambulance+Service";

const infoCards = [
  {
    icon: Phone,
    title: "Call Us",
    sub: "24/7 emergency helpline",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
    cta: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    sub: "We reply as soon as possible",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    cta: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    sub: "Our base location",
    value: ADDRESS,
    href: MAP_LINK,
    cta: "Get Directions",
    external: true,
  },
  {
    icon: Clock3,
    title: "Working Hours",
    sub: "Always available",
    value: "Emergency: 24/7",
    href: null,
  },
];

export default function ContactInfoCards() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map(
            ({ icon: Icon, title, sub, value, href, cta, external }, i) => {
              const CardTag = href ? "a" : "div";
              const linkProps = href
                ? {
                    href,
                    ...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {}),
                  }
                : {};

              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <CardTag
                    {...linkProps}
                    className="group relative block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b61416]/40 hover:shadow-xl"
                  >
                    {/* Number watermark */}
                    <span className="absolute right-5 top-4 font-heading text-4xl font-extrabold text-[#01203f]/5">
                      0{i + 1}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b61416]/10 transition-colors duration-300 group-hover:bg-[#b61416]">
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className="text-[#b61416] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-5 font-heading text-lg font-bold text-[#01203f]">
                      {title}
                    </h3>
                    <p className="mt-0.5 font-body text-xs uppercase tracking-wider text-gray-400">
                      {sub}
                    </p>

                    <p className="mt-4 break-words font-body text-sm font-medium leading-relaxed text-gray-700">
                      {value}
                    </p>

                    {cta && (
                      <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-[#b61416] transition-colors group-hover:text-[#8f0f11]">
                        {cta}
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    )}
                  </CardTag>
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}