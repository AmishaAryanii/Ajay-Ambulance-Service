"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const PHONE = "+9192891994279";

// Apna logo /public folder mein rakho aur path yahan badlo
const LOGO = "/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const { scrollYProgress } = useScroll();
  const progressWidth = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_-4px_rgba(1,32,63,0.12)]" : "shadow-sm"
      }`}
    >
      {/* Scroll progress accent */}
      <motion.div
        style={{ scaleX: progressWidth }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#01203f] to-[#b61416] origin-left"
      />

      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo (bada) */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={LOGO}
                alt="Ajay Ambulance Service"
                width={220}
                height={90}
                priority
                className="h-14 w-auto sm:h-16 md:h-[4.5rem] object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-9 font-body">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-medium text-[15px] transition-colors group ${
                      isActive
                        ? "text-[#b61416]"
                        : "text-[#01203f] hover:text-[#b61416]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#b61416] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              onClick={trackCallConversion}
              className="hidden md:flex items-center gap-2 bg-[#b61416] text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#8f0f11] transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200"
            >
              <Phone size={16} className="fill-white" strokeWidth={0} />
              Book Ambulance
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative flex items-center justify-center w-10 h-10 text-[#01203f]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {isOpen ? <X size={26} /> : <Menu size={26} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#01203f]/40 backdrop-blur-[2px] z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-50 h-screen w-[80%] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-5 border-b border-gray-100 flex-shrink-0">
              <Image
                src={LOGO}
                alt="Ajay Ambulance Service"
                width={180}
                height={72}
                className="h-12 w-auto object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-10 h-10 text-[#01203f]"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col flex-1 min-h-0 px-5 py-4 font-body overflow-y-auto">
              {navLinks.map((link, i) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-3.5 font-medium text-base border-b border-gray-100 transition-colors ${
                        isActive
                          ? "text-[#b61416]"
                          : "text-[#01203f] hover:text-[#b61416]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b61416]" />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.a
                href={`tel:${PHONE}`}
                onClick={trackCallConversion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                className="mt-6 flex items-center justify-center gap-2 bg-[#b61416] text-white font-heading font-semibold text-sm px-5 py-3 rounded-full"
              >
                <Phone size={16} className="fill-white" strokeWidth={0} />
                Book Ambulance
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}