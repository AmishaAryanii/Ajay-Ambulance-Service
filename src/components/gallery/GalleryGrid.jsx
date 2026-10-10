"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ambulance,
  HeartPulse,
  Users,
  CalendarClock,
  Play,
  X,
  Image as ImageIcon,
  Video,
} from "lucide-react";

const categories = ["All", "Fleet", "Emergency Response", ];

// 👉 ADD YOUR IMAGE LINKS HERE.
// Put each photo in /public (e.g. /public/gallery/unit-04.jpg) and set `image: "/gallery/unit-04.jpg"`.
// Leave `image: null` and it will fall back to the gradient + icon placeholder shown now.
const photoItems = [
  { id: "p1", category: "Fleet", title: "ALS Ambulance – Unit 04", icon: Ambulance, gradient: "from-[#01203f] to-[#0a3866]", image: "/urgentcare1.png" },
  { id: "p2", category: "Emergency Response", title: "On-Site Response, ", icon: HeartPulse, gradient: "from-[#b61416] to-[#7d0e10]", image: "/urgentcare2.png" },
  { id: "p3", category: "fleet", title: "Paramedic Team Briefing", icon: Users, gradient: "from-[#01203f] to-[#3a4a63]", image: "/urgentcare4.png"},
  { id: "p4", category: "Fleet", title: "BLS Ambulance – Unit 09", icon: Ambulance, gradient: "from-[#0a3866] to-[#01203f]", image: "/urgentcare5.png"},
  { id: "p5", category: "Emergency Response", title: " Ambulance", icon: CalendarClock, gradient: "from-[#b61416] to-[#01203f]", image: "/img1.png" },
  { id: "p6", category: "Emergency Response", title: " Ambulance", icon: HeartPulse, gradient: "from-[#7d0e10] to-[#b61416]", image: "/img2.png" },
];

// 👉 For videos, `image` is the thumbnail/poster shown in the grid (the play button overlays on top of it).
const videoItems = [
  { id: "v1", category: "Emergency Response", title: "Rapid Dispatch In Action", icon: HeartPulse, gradient: "from-[#b61416] to-[#7d0e10]", image: null },
  { id: "v2", category: "Fleet", title: "Inside Our ALS Ambulance", icon: Ambulance, gradient: "from-[#01203f] to-[#0a3866]", image: null },
  { id: "v3", category: "Our Team", title: "Meet Our Paramedics", icon: Users, gradient: "from-[#3a4a63] to-[#01203f]", image: null },
  { id: "v4", category: "Events", title: "Event Standby Highlights", icon: CalendarClock, gradient: "from-[#01203f] to-[#b61416]", image: null },
];

export default function GalleryGrid() {
  const [mediaType, setMediaType] = useState("photos");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const items = mediaType === "photos" ? photoItems : videoItems;
  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Photos / Videos toggle */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex bg-gray-100 rounded-full p-1.5">
            {["photos",].map((type) => (
              <button
                key={type}
                onClick={() => setMediaType(type)}
                className="relative px-6 py-2.5 font-heading font-semibold text-sm rounded-full transition-colors z-10"
              >
                {mediaType === type && (
                  <motion.div
                    layoutId="mediaToggle"
                    className="absolute inset-0 bg-[#01203f] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative flex items-center gap-1.5 ${
                    mediaType === type ? "text-white" : "text-gray-500"
                  }`}
                >
                  {type === "photos" ? <ImageIcon size={15} /> : <Video size={15} />}
                  {type === "photos" ? "Photos" : "Videos"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm font-medium px-5 py-2 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-[#b61416] border-[#b61416] text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-[#b61416]/40 hover:text-[#b61416]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(({ id, title, icon: Icon, gradient, category, image }, i) => (
              <motion.button
                key={id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() =>
                  setLightboxItem({ id, title, icon: Icon, gradient, category, image, isVideo: mediaType === "videos" })
                }
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden text-left ${
                  image ? "bg-gray-100" : `bg-gradient-to-br ${gradient}`
                }`}
              >
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                  {mediaType === "videos" ? (
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <Play size={22} className="text-white fill-white ml-0.5" />
                    </div>
                  ) : (
                    !image && <Icon size={44} className="text-white/30" strokeWidth={1.2} />
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="font-body text-[11px] font-semibold text-white/70 uppercase tracking-wide">
                    {category}
                  </span>
                  <p className="font-heading font-bold text-white text-sm mt-0.5">
                    {title}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <p className="text-center font-body text-gray-500 mt-10">
            No items found in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center ${
                lightboxItem.image ? "bg-gray-900" : `bg-gradient-to-br ${lightboxItem.gradient}`
              }`}
            >
              {lightboxItem.image && (
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              )}

              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              >
                <X size={20} />
              </button>

              {lightboxItem.isVideo ? (
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm">
                  <Play size={30} className="text-white fill-white ml-1" />
                </div>
              ) : (
                !lightboxItem.image && (
                  <lightboxItem.icon size={80} className="text-white/30" strokeWidth={1} />
                )
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span className="font-body text-xs font-semibold text-white/70 uppercase tracking-wide">
                  {lightboxItem.category}
                </span>
                <p className="font-heading font-bold text-white text-lg mt-1">
                  {lightboxItem.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}