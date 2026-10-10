"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
  Ambulance,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const PHONE = "+9192891994279";
const PHONE_DISPLAY = "+91 92891994279";
const EMAIL = "ay5451959@gmail.com";
const WHATSAPP_URL = "https://wa.me/9192891994279";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "ICU Life Support Ambulance", href: "/services" },
  { label: "Normal Ambulance", href: "/services" },
  { label: "Outstation Ambulance", href: "/services" },
  { label: "Hospital Transfers", href: "/services" },
  { label: "Patient Transport", href: "/services" },
  { label: "Event Standby Ambulance", href: "/services" },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "#E1306C" },
  { icon: FaWhatsapp, href: WHATSAPP_URL, label: "WhatsApp", color: "#25D366" },
];

export default function Footer() {
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

  const trackWhatsAppConversion = (e) => {
    e.preventDefault();

    let opened = false;

    const openWhatsApp = () => {
      if (opened) return;
      opened = true;
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    };

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      const timeout = setTimeout(openWhatsApp, 1000);

      window.gtag("event", "conversion", {
        send_to: "AW-18310636441/YOUR_WHATSAPP_CONVERSION_LABEL", // Replace with your WhatsApp conversion label
        event_callback: () => {
          clearTimeout(timeout);
          openWhatsApp();
        },
      });
    } else {
      openWhatsApp();
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-50">
      {/* Soft accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#b61416]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-[#01203f]/5 blur-3xl" />

      {/* Emergency strip */}
      <div className="relative mx-auto max-w-7xl px-4 pt-10 md:px-8 md:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:p-8"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#b61416] sm:flex">
              <Ambulance size={22} className="text-white" />
            </div>
            <div>
              <p className="font-heading text-lg font-bold text-[#01203f] md:text-xl">
                Medical Emergency? Don&apos;t Wait.
              </p>
              <p className="mt-1 font-body text-sm text-gray-500">
                Our team is available 24/7. Call us anytime.
              </p>
            </div>
          </div>

          <a
            href={`tel:${PHONE}`}
            onClick={trackCallConversion}
            className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#b61416] px-7 py-3 font-heading text-sm font-semibold text-white shadow-lg shadow-[#b61416]/25 transition-colors hover:bg-[#9a1012] md:w-auto md:text-base"
          >
            <Phone size={17} />
            {PHONE_DISPLAY}
          </a>
        </motion.div>
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-12 sm:grid-cols-2 md:px-8 md:py-16 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="sm:col-span-2 lg:col-span-4"
        >
       <Link
  href="/"
  className="inline-flex items-center transition-opacity hover:opacity-90"
>
  <Image
    src="/logo.png"
    alt="Ajay Ambulance Service Logo"
    width={200}
    height={93}
    className="h-auto w-36 rounded-md sm:w-[200px]"
    priority
  />
</Link>

          <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-gray-600">
            Ajay Ambulance Service: ICU life support, normal and outstation
            ambulance services available 24/7. Let us know how we can help you.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onClick={
                  label === "WhatsApp" ? trackWhatsAppConversion : undefined
                }
                style={{ backgroundColor: `${color}1A` }}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
              >
                <Icon size={16} style={{ color }} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="lg:col-span-2"
        >
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-wide text-[#01203f]">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-1.5 font-body text-sm text-gray-600 transition-colors hover:text-[#b61416]"
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="-translate-x-1 text-[#b61416] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="lg:col-span-3"
        >
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-wide text-[#01203f]">
            Our Services
          </h3>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-gray-600 transition-colors hover:text-[#b61416]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="sm:col-span-2 lg:col-span-3"
        >
          <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-wide text-[#01203f]">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#b61416]/10">
                <Phone size={16} className="text-[#b61416]" />
              </span>
              <a
                href={`tel:${PHONE}`}
                onClick={trackCallConversion}
                className="font-body text-sm text-gray-600 transition-colors hover:text-[#b61416]"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#b61416]/10">
                <Mail size={16} className="text-[#b61416]" />
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="break-all font-body text-sm text-gray-600 transition-colors hover:text-[#b61416]"
              >
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#b61416]/10">
                <MapPin size={16} className="text-[#b61416]" />
              </span>
              {/* Replace with your real address */}
              <span className="font-body text-sm text-gray-600">
                Sector-52,Noida India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#b61416]/10">
                <Clock3 size={16} className="text-[#b61416]" />
              </span>
              <span className="font-body text-sm text-gray-600">
                Emergency: 24/7
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row md:px-8">
          <p className="text-center font-body text-xs text-gray-500 sm:text-left">
            © {new Date().getFullYear()} Ajay Ambulance Service. All rights
            reserved.
          </p>
          <p className="font-body text-xs text-gray-400">
            Available 24/7 for emergencies
          </p>
        </div>
      </div>
    </footer>
  );
}