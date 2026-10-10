"use client";

import { Phone, Mail, Clock } from "lucide-react";

const PHONE = "+919289194279";
const PHONE_DISPLAY = "+91 9289194279";
const EMAIL = "ay5451959@gmail.com";

export default function TopBar() {
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

  return (
    <div className="w-full bg-[#b61416] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between">
        {/* Left: Contact info */}
        <div className="flex items-center gap-4 md:gap-6 font-body">
          <a
            href={`tel:${PHONE}`}
            onClick={trackCallConversion}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Phone
              size={14}
              className="text-white fill-white"
              strokeWidth={2}
            />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden font-semibold">Call Now</span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="hidden md:flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Mail size={14} />
            <span>{EMAIL}</span>
          </a>
        </div>

        {/* Right: 24/7 badge */}
        <div className="flex items-center gap-1.5 font-semibold tracking-wide">
          <Clock size={14} className="text-white" />
          <span className="text-xs md:text-sm">24/7 EMERGENCY SERVICE</span>
        </div>
      </div>
    </div>
  );
}