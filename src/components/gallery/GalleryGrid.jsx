"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ambulance,
  HeartPulse,
  Users,
  CalendarClock,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Video,
} from "lucide-react";

const categories = ["All", "Fleet", "Emergency Response", ];

// Kitni items ek page par dikhani hain
const ITEMS_PER_PAGE = 12;

// 👉 ADD YOUR IMAGE LINKS HERE.
// Put each photo in /public (e.g. /public/gallery/unit-04.jpg) and set `image: "/gallery/unit-04.jpg"`.
// Leave `image: null` and it will fall back to the gradient + icon placeholder shown now.

const photoItems = [
  { id: "p1", category: "Fleet", title: "ALS Ambulance – Unit 04", icon: Ambulance, gradient: "from-[#01203f] to-[#0a3866]", image: "/urgentcare1.png" },
  { id: "p2", category: "Emergency Response", title: "On-Site Response", icon: HeartPulse, gradient: "from-[#b61416] to-[#7d0e10]", image: "/urgentcare2.png" },
  { id: "p3", category: "Fleet", title: "Paramedic Team Briefing", icon: Users, gradient: "from-[#01203f] to-[#3a4a63]", image: "/urgentcare4.png" },
  { id: "p4", category: "Fleet", title: "BLS Ambulance – Unit 09", icon: Ambulance, gradient: "from-[#0a3866] to-[#01203f]", image: "/urgentcare5.png" },
  { id: "p5", category: "Emergency Response", title: "Emergency Ambulance", icon: CalendarClock, gradient: "from-[#b61416] to-[#01203f]", image: "/img1.png" },
  { id: "p6", category: "Emergency Response", title: "Ambulance Response", icon: HeartPulse, gradient: "from-[#7d0e10] to-[#b61416]", image: "/img2.png" },

  { id: "p7", category: "Emergency Response", title: "Emergency Response 3", icon: HeartPulse, gradient: "from-[#01203f] to-[#0a3866]", image: "/image1.jpeg" },
  { id: "p8", category: "Emergency Response", title: "Emergency Response 4", icon: Ambulance, gradient: "from-[#b61416] to-[#7d0e10]", image: "/image2.jpeg" },
  { id: "p9", category: "Emergency Response", title: "Emergency Response 5", icon: HeartPulse, gradient: "from-[#01203f] to-[#3a4a63]", image: "/image3.jpeg" },
  { id: "p10", category: "Emergency Response", title: "Emergency Response 6", icon: Ambulance, gradient: "from-[#0a3866] to-[#01203f]", image: "/image4.jpeg" },
  { id: "p11", category: "Emergency Response", title: "Emergency Response 7", icon: CalendarClock, gradient: "from-[#b61416] to-[#01203f]", image: "/image5.jpeg" },
  { id: "p12", category: "Emergency Response", title: "Emergency Response 8", icon: HeartPulse, gradient: "from-[#7d0e10] to-[#b61416]", image: "/image6.jpeg" },
  { id: "p13", category: "Emergency Response", title: "Emergency Response 9", icon: Ambulance, gradient: "from-[#01203f] to-[#0a3866]", image: "/image7.jpeg" },
  { id: "p14", category: "Emergency Response", title: "Emergency Response 10", icon: HeartPulse, gradient: "from-[#b61416] to-[#7d0e10]", image: "/image8.jpeg" },
  { id: "p15", category: "Emergency Response", title: "Emergency Response 11", icon: CalendarClock, gradient: "from-[#01203f] to-[#3a4a63]", image: "/image9.jpeg" },
  { id: "p16", category: "Emergency Response", title: "Emergency Response 12", icon: Ambulance, gradient: "from-[#0a3866] to-[#01203f]", image: "/image10.jpeg" },
  { id: "p17", category: "Emergency Response", title: "Emergency Response 13", icon: HeartPulse, gradient: "from-[#b61416] to-[#01203f]", image: "/image11.jpeg" },
  { id: "p18", category: "Emergency Response", title: "Emergency Response 14", icon: Ambulance, gradient: "from-[#7d0e10] to-[#b61416]", image: "/image12.jpeg" },
  { id: "p19", category: "Emergency Response", title: "Emergency Response 15", icon: HeartPulse, gradient: "from-[#01203f] to-[#0a3866]", image: "/image13.jpeg" },
  { id: "p20", category: "Emergency Response", title: "Emergency Response 16", icon: CalendarClock, gradient: "from-[#b61416] to-[#7d0e10]", image: "/image14.jpeg" },
  { id: "p21", category: "Emergency Response", title: "Emergency Response 17", icon: Ambulance, gradient: "from-[#01203f] to-[#3a4a63]", image: "/image15.jpeg" },
  { id: "p22", category: "Emergency Response", title: "Emergency Response 18", icon: HeartPulse, gradient: "from-[#0a3866] to-[#01203f]", image: "/image16.jpeg" },
  { id: "p23", category: "Emergency Response", title: "Emergency Response 19", icon: Ambulance, gradient: "from-[#b61416] to-[#01203f]", image: "/image17.jpeg" },
  { id: "p24", category: "Emergency Response", title: "Emergency Response 20", icon: HeartPulse, gradient: "from-[#7d0e10] to-[#b61416]", image: "/image18.jpeg" },
  { id: "p25", category: "Emergency Response", title: "Emergency Response 21", icon: CalendarClock, gradient: "from-[#01203f] to-[#0a3866]", image: "/image19.jpeg" },
  { id: "p26", category: "Emergency Response", title: "Emergency Response 22", icon: Ambulance, gradient: "from-[#b61416] to-[#7d0e10]", image: "/image20.jpeg" },
  { id: "p27", category: "Emergency Response", title: "Emergency Response 23", icon: HeartPulse, gradient: "from-[#01203f] to-[#3a4a63]", image: "/image21.jpeg" },
  { id: "p28", category: "Emergency Response", title: "Emergency Response 24", icon: Ambulance, gradient: "from-[#0a3866] to-[#01203f]", image: "/image22.jpeg" },
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
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef(null);

  const items = mediaType === "photos" ? photoItems : videoItems;
  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === safePage) return;
    setCurrentPage(page);
    gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleMediaTypeChange = (type) => {
    setMediaType(type);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Photos / Videos toggle */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex bg-gray-100 rounded-full p-1.5">
            {["photos",].map((type) => (
              <button
                key={type}
                onClick={() => handleMediaTypeChange(type)}
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
              onClick={() => handleCategoryChange(cat)}
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

        {/* Grid scroll anchor */}
        <div ref={gridTopRef} className="scroll-mt-28" />

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {paginatedItems.map(({ id, title, icon: Icon, gradient, category, image }, i) => (
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
                    sizes="(max-width: 768px) 50vw, 25vw"
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
                  {/* <span className="font-body text-[11px] font-semibold text-white/70 uppercase tracking-wide">
                    {category}
                  </span> */}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Gallery pagination"
            className="flex flex-col items-center gap-3 mt-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => goToPage(safePage - 1)}
                disabled={safePage === 1}
                aria-label="Previous page"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-[#b61416]/40 hover:text-[#b61416] disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  aria-label={`Page ${page}`}
                  aria-current={safePage === page ? "page" : undefined}
                  className={`font-body text-sm font-medium w-10 h-10 rounded-full border transition-colors ${
                    safePage === page
                      ? "bg-[#b61416] border-[#b61416] text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:border-[#b61416]/40 hover:text-[#b61416]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(safePage + 1)}
                disabled={safePage === totalPages}
                aria-label="Next page"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-[#b61416]/40 hover:text-[#b61416] disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <p className="font-body text-xs text-gray-500">
              Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredItems.length)} of {filteredItems.length}
            </p>
          </nav>
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