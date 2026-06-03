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
    <div>
      <div className="bg-[#2e2c2c] text-white border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 ">
          <h1 className="mt-2 text-4xl font-bold">Latest Events</h1>
          <div className="flex items-center gap-2 text-md text-gray-400 space-y-2">
            Home <span className="text-gray-500">::</span> Latest Events
          </div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-blue-600 text-center text-2xl font-semibold py-4"
      >
        Our Latest Events
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mt-3 mb-16"
      >
        Latest Events & Stories
      </motion.h2>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          {events.map((event, eventIndex) => (
            <div key={eventIndex} className="mb-20">
              <p className="font-semibold">Date: {event.date}</p>

              <p className="font-semibold mb-6">Event: {event.name}</p>

              <div className="grid md:grid-cols-4 gap-5">
                {event.images?.map((img, index) => {
                  const isVideo =
                    typeof img === "string" && img.endsWith(".mp4");
                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 100,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                      }}
                    >
                      {isVideo ? (
                        <video
                          src={img}
                          className="w-full h-64 object-cover shadow-md rounded-lg"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <img
                          src={img}
                          alt=""
                          className="w-full h-64 object-cover shadow-md rounded-lg"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <p className="font-semibold mt-4">Event: {event.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
