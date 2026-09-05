import { useState } from "react";
import { Link } from "react-router-dom";
import { Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
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
    name: "Sridhar Nagar",
    images: [e1, e2, e3, v1],
  },
  {
    date: "Aug 25, 2024",
    name: "Sridhar Nagar",
    images: [e5, e6, e7, v2],
  },
  {
    date: "Aug 25, 2024",
    name: "Sridhar Nagar",
    images: [e8, e5, e9, v3],
  },
  {
    date: "Aug 25, 2024",
    name: "Sridhar Nagar",
    images: [e10, e11, e2, v4],
  },
];

export default function EventsPage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(events[0]);

  return (
    <div className="bg-[#F4F6FA]">
      <div className="bg-[#111827] text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            CORPORATE CEREMONIES
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">Latest Events</h1>
          <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-500">•</span>
            <span className="text-white font-semibold">Latest Events</span>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-[#4F46E5] font-extrabold text-xs tracking-widest uppercase border border-indigo-100">
            OUR LATEST EVENTS
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-[#0C102A] mt-4"
          >
            Latest Events & Stories
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#4F46E5] to-[#F59E0B] mx-auto mt-4 rounded-full"></div>
        </div>

        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            {events.map((event, eventIndex) => (
              <div key={eventIndex} className="mb-16 bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-indigo-950/5">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-amber-50 text-[#D97706] font-extrabold text-xs border border-amber-200/60">
                      Date: {event.date}
                    </span>
                    <h3 className="font-extrabold text-[#0C102A] text-xl">Event: {event.name}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-5">
                  {event.images?.map((img, index) => {
                    const isVideo =
                      typeof img === "string" && img.endsWith(".mp4");
                    return (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        className="overflow-hidden rounded-2xl border border-slate-200 shadow-md group"
                      >
                        {isVideo ? (
                          <video
                            src={img}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={img}
                            alt=""
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

