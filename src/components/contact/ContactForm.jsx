"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  MapPin,
  Ambulance,
} from "lucide-react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";
const EMAIL = "ay5451959@gmail.com";

// Replace with your real office / base address
const MAP_QUERY =  "Sector 52, Noida, Uttar Pradesh, India";

const services = [
  "General Enquiry",
  "Emergency Booking",
  "ICU / Ventilator Ambulance",
  "Scheduled Patient Transport",
  "Event Standby Ambulance",
  "Mortuary Van Service",
];

const contactCards = [
  {
    icon: Phone,
    label: "24/7 Helpline",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Open 24 Hours, 7 Days",
  },
];

const inputBase =
  "w-full font-body text-sm pl-10 pr-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-colors";

const inputState = (hasError) =>
  hasError
    ? "border-red-400 focus:ring-red-100"
    : "border-gray-200 focus:ring-[#01203f]/10 focus:border-[#01203f]";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name";

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  // TODO: replace with your actual submission endpoint
  // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });

  // Google Ads conversion: fires only after validation passes
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18503279137/eMZHCObnwpwdEKHEhvdE",
    });
  }

  setSubmitted(true);
  setFormData({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });
};

  return (
    <section className="relative bg-gray-50">
      {/* Navy banner behind the overlapping card */}
      <div className="relative overflow-hidden bg-[#01203f] pb-40 pt-16 text-white md:pb-48 md:pt-24">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#b61416]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#b61416]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-3xl px-4 text-center md:px-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#b61416] px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] shadow-lg shadow-[#b61416]/30 md:text-sm">
            <Ambulance size={14} />
            Contact Ajay Ambulance
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight md:text-5xl">
            We are just one call{" "}
            <span className="text-[#b61416]">away</span>
          </h2>
          <p className="mt-4 font-body leading-relaxed text-white/70">
            For emergencies call us right now. For bookings and general
            questions, send us a message and we will respond quickly.
          </p>
        </motion.div>
      </div>

      {/* Overlapping form + info card */}
      <div className="relative mx-auto -mt-28 max-w-6xl px-4 md:-mt-36 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-3xl bg-white shadow-2xl shadow-[#01203f]/15 lg:grid-cols-5"
        >
          {/* Info column */}
          <div className="relative overflow-hidden bg-[#b61416] p-8 text-white md:p-10 lg:col-span-2">
            <Ambulance
              className="absolute -bottom-10 -right-10 h-60 w-60 text-white/[0.07]"
              strokeWidth={1}
            />

            <h3 className="relative font-heading text-2xl font-extrabold">
              Get in touch
            </h3>
            <p className="relative mt-2 font-body text-sm leading-relaxed text-white/80">
              Our control room is always staffed. Call for the fastest
              response.
            </p>

            <div className="relative mt-8 space-y-5">
              {contactCards.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-white/70">
                        {label}
                      </p>
                      <p className="break-words font-heading text-base font-bold">
                        {value}
                      </p>
                    </div>
                  </div>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="block transition hover:translate-x-1"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>

            <a
              href={`tel:${PHONE}`}
              className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-[#f7f5f2] px-6 py-3 font-heading text-sm font-semibold text-[#b61416] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Form column */}
          <div className="p-8 md:p-10 lg:col-span-3">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-[#b61416] md:text-sm">
              Send A Message
            </span>
            <h3 className="mb-7 mt-2 font-heading text-2xl font-extrabold text-[#01203f] md:text-3xl">
              Have A Question? Reach Out
            </h3>

            {submitted && (
              <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 font-body text-sm text-green-700">
                <CheckCircle2 size={18} />
                Thank you, your message has been sent. We&apos;ll get back to
                you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-body text-sm font-medium text-[#01203f]">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className={`${inputBase} ${inputState(errors.name)}`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 font-body text-xs text-[#b61416]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block font-body text-sm font-medium text-[#01203f]">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="10-digit mobile number"
                      className={`${inputBase} ${inputState(errors.phone)}`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 font-body text-xs text-[#b61416]">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-body text-sm font-medium text-[#01203f]">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@example.com"
                      className={`${inputBase} ${inputState(errors.email)}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 font-body text-xs text-[#b61416]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block font-body text-sm font-medium text-[#01203f]">
                    What do you need help with?
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-body text-sm transition-colors focus:border-[#01203f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01203f]/10"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-[#01203f]">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="absolute left-3.5 top-4 text-gray-400"
                  />
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us how we can help..."
                    className={`${inputBase} resize-none ${inputState(
                      errors.message,
                    )}`}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1.5 font-body text-xs text-[#b61416]">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#b61416] px-8 py-3.5 font-heading text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#8f0f11] hover:shadow-lg sm:w-auto"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Full-width map */}
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-8 md:pb-24">
        <motion.div
          id="map"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-3xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center gap-2 bg-white px-6 py-4 font-heading font-semibold text-[#01203f]">
            <MapPin size={18} className="text-[#b61416]" />
            Find Us On The Map
          </div>
          <iframe
            title="Ajay Ambulance Service Location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              MAP_QUERY,
            )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="h-[320px] w-full md:h-[380px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}