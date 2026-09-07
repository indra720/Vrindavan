import { useState } from "react";
import PageHeader from "../shared/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaExpand, FaCalendarAlt, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

import e1 from "../assets/Events/event1.jpg";
import e2 from "../assets/Events/event2.jpg";
import e3 from "../assets/Events/e3.jpg";
import v1 from "../assets/Events/video1.mp4";
import e5 from "../assets/Events/e5.jpg";
import e6 from "../assets/Events/e6.jpg";
import e7 from "../assets/Events/e7.jpg";
import e8 from "../assets/Events/e8.jpg";
import v2 from "../assets/Events/video2.png";
import e9 from "../assets/Events/e9.jpg";
import e10 from "../assets/Events/e10.jpg";
import e11 from "../assets/Events/e11.jpg";
import v3 from "../assets/Events/video3.png";
import v4 from "../assets/Events/video4.png";

const events = [
  {
    date: "Aug 25, 2024",
    name: "Sridhar Nagar Township Inauguration",
    location: "Jaipur, Rajasthan",
    images: [e1, e2, e3, v1],
  },
  {
    date: "Aug 25, 2024",
    name: "Vasundhara Nagar Site Visit & Investor Meet",
    location: "Jaipur, Rajasthan",
    images: [e5, e6, e7, v2],
  },
  {
    date: "Aug 25, 2024",
    name: "Urmila Enclave Corporate Key Handover",
    location: "Jaipur, Rajasthan",
    images: [e8, e5, e9, v3],
  },
  {
    date: "Aug 25, 2024",
    name: "Vrindavan Land Development Ceremony",
    location: "Jaipur, Rajasthan",
    images: [e10, e11, e2, v4],
  },
];

export default function EventsPage() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [expandedEvents, setExpandedEvents] = useState({ 0: true }); // Open first event by default

  const toggleEvent = (index) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Ultra-Luxury Page Header */}
      <PageHeader 
        badge="CORPORATE CEREMONIES"
        title="Latest"
        goldTitle="Events & Media"
        subtitle="Exclusive Moments, Project Inaugurations & Corporate Highlights of Vrindavan Real Estate"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Events" }]}
      />

      <div className="py-12 sm:py-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-3">
            OUR LATEST EVENTS
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#000000] tracking-tight"
          >
            Latest Events & Media Highlights
          </motion.h2>
          <div className="h-0.5 w-16 bg-[#C89B3C] mx-auto mt-3 rounded-full"></div>
        </div>

        <section className="space-y-10">
          {events.map((event, eventIndex) => {
            const isExpanded = !!expandedEvents[eventIndex];
            return (
              <motion.div 
                key={eventIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: eventIndex * 0.08 }}
                className="bg-white border border-slate-200/80 hover:border-[#C89B3C]/50 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Event Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="px-3.5 py-1 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs border border-[#C89B3C]/30 flex items-center gap-1.5 whitespace-nowrap">
                        <FaCalendarAlt size={11} /> {event.date}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs flex items-center gap-1.5 whitespace-nowrap">
                        <FaMapMarkerAlt size={11} className="text-[#C89B3C]" /> {event.location}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#000000] text-lg sm:text-2xl pt-0.5">{event.name}</h3>
                  </div>

                  {/* Gallery Toggle Button */}
                  <button
                    onClick={() => toggleEvent(eventIndex)}
                    className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer whitespace-nowrap ${
                      isExpanded
                        ? "bg-[#C89B3C] text-black hover:bg-black hover:text-white"
                        : "bg-[#000000] text-white hover:bg-[#C89B3C] hover:text-black"
                    }`}
                  >
                    {isExpanded ? "Pull Back Gallery" : "View Gallery"}
                  </button>
                </div>

                {/* Animated Explode / Vacuum Pull Media Grid */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden pt-6 border-t border-slate-100 mt-6"
                    >
                      {/* Grid: 4 columns on lg, 1 column on mobile/tablet (grid-cols-1 lg:grid-cols-4) */}
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {event.images?.map((img, index) => {
                          const isVideo = typeof img === "string" && img.endsWith(".mp4");
                          return (
                            <motion.div
                              key={index}
                              initial={{ scale: 0.1, opacity: 0, y: -30, rotate: index % 2 === 0 ? -8 : 8 }}
                              animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                              exit={{ scale: 0.1, opacity: 0, y: -30, rotate: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 240,
                                damping: 20,
                                delay: index * 0.08,
                              }}
                              whileHover={{ y: -6, scale: 1.03 }}
                              onClick={() => setSelectedMedia({ src: img, isVideo, title: event.name })}
                              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-[#C89B3C] shadow-md hover:shadow-xl cursor-pointer group bg-slate-900"
                            >
                              <div className="absolute top-0 inset-x-0 h-1 bg-[#C89B3C] z-20" />
                              
                              {isVideo ? (
                                <div className="w-full h-full relative">
                                  <video
                                    src={img}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-[#C89B3C] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                      <FaPlay className="ml-1" size={18} />
                                    </div>
                                    <span className="absolute bottom-3 left-3 bg-black/80 text-[#C89B3C] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C89B3C]/40">
                                      ▶ Video Highlight
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <div className="w-full h-full relative">
                                  <img
                                    src={img}
                                    alt={event.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                      <FaExpand size={16} />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </section>
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <div 
              className="relative max-w-5xl w-full bg-slate-950 border border-slate-800 rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 text-white bg-slate-800 hover:bg-[#C89B3C] hover:text-black p-2.5 rounded-full transition-colors z-20 cursor-pointer"
              >
                <FaTimes size={18} />
              </button>

              <h4 className="text-white font-bold text-lg mb-4 text-center px-8">
                {selectedMedia.title}
              </h4>

              <div className="max-h-[75vh] w-full flex items-center justify-center">
                {selectedMedia.isVideo ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="max-h-[70vh] w-auto max-w-full rounded-2xl shadow-xl"
                  />
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-xl"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
