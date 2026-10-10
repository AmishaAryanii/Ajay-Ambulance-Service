"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { initials: "AK", name: "Ajay Kumar", role: "Founder & CEO" },
  { initials: "AR", name: "Dr. Arti Rawat", role: "Chief Medical Officer" },
  { initials: "VS", name: "Vipin Singh", role: "Head of Operations" },
  { initials: "RM", name: "Raju Mehta", role: "Fleet & Logistics Manager" },
];

export default function OurTeam() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-heading font-semibold text-xs md:text-sm text-[#b61416] tracking-[0.15em] uppercase">
            Our Team
          </span>
          <h2 className="font-heading font-extrabold text-[#01203f] text-3xl md:text-4xl mt-3">
            The People Behind Every Response
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ initials, name, role }) => (
            <div
              key={name}
              className="team-card bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#01203f] flex items-center justify-center">
                <span className="font-heading font-extrabold text-white text-xl">
                  {initials}
                </span>
              </div>
              <h3 className="font-heading font-bold text-[#01203f] text-base mt-5">
                {name}
              </h3>
              <p className="font-body text-sm text-[#b61416] font-medium mt-1">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
