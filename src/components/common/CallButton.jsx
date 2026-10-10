"use client";

import { Phone } from "lucide-react";

const PHONE = "+919289194279";

export default function FloatingCallButton() {
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
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] group">
      <a
        href={`tel:${PHONE}`}
        aria-label="Call Now"
        onClick={trackCallConversion}
        className="flex items-center"
      >
        {/* Desktop Hover Label */}
        <div className="hidden md:block mr-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <div className="relative bg-[#b61416] text-white px-5 py-3 rounded-lg font-semibold whitespace-nowrap shadow-lg">
            Call Now
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-[#b61416] rotate-45" />
          </div>
        </div>

        {/* Button */}
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-[#b61416] animate-ping opacity-30" />

          <div className="w-20 h-20 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[#b61416] animate-ping opacity-30" />

            <div className="w-20 h-20 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full bg-[#b61416] flex items-center justify-center shadow-xl">
              <Phone className="w-8 h-8 md:w-7 md:h-7 text-white" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
