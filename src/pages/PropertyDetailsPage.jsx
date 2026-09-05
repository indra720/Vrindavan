import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPlay } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import himanshu from "../assets/himanshu.jpg";
import heroVideo from "../assets/hero-video.mp4";
import vasundhara from "../assets/vasundra.png";
import shreedhar from "../assets/shreedhar.jpg";
import urmila from "../assets/urmila.png";

export default function PropertyDetailsPage() {
  const { slug } = useParams()
  const projectTitle = useMemo(() => decodeURIComponent(slug || ''), [slug])
  const project = projectsData[projectTitle]

  if (!project) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold">Property not found</h1>
        <Link to="/projects" className="text-blue-600 hover:underline mt-4 inline-block">Back to Projects</Link>
      </div>
    )
  }

  return (
    <div className="bg-[#F4F6FA]">
      <div className="bg-[#111827] text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            PROPERTY DETAILS
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">{project.title}</h1>
          <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-500">•</span>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span className="text-slate-500">•</span>
            <span className="text-white font-semibold">{project.title}</span>
          </div>
        </div>
      </div>

      {/* main content  */}
      <section className="bg-white border-t border-slate-200/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_0.9fr] gap-10">
            {/* Left Side */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs tracking-wider uppercase border border-emerald-200/60 mb-4">
                FOR SALE
              </span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="text-3xl md:text-4xl font-black text-[#0C102A] mb-4"
              >
                {project.title}
              </motion.h2>

              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-8">
                <FaMapMarkerAlt />
                <span>{project.location}</span>
              </div>

              <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 mb-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto md:h-137.5 object-cover"
                />
              </div>

              <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 mb-8">
                <marquee>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#0C102A]">
                    About This Listing Description • Prime Plots in Jaipur • Transparent Documentation
                  </h2>
                </marquee>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {project.description.map((para, idx) => (
                    <p key={idx} className="text-slate-600 text-base leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}

                  {project.sections.map((section, idx) => (
                    <div key={idx} className="bg-[#F4F6FA] border border-slate-200/80 rounded-3xl p-6 mb-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        className="text-xl font-extrabold text-[#0C102A] mb-4 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#4F46E5]"></span>
                        {section.title}
                      </motion.h3>

                      <ul className="space-y-2.5 text-slate-700 text-sm font-medium">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-2">
                            <span className="text-[#4F46E5] font-bold">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* property Video */}
              <div className="mt-10">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="text-2xl font-extrabold text-[#0C102A] mb-4"
                >
                  Property Video
                </motion.h3>
                <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 w-full">
                  <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-96 object-cover"
                    poster={project.videoPoster}
                  >
                    <source src={heroVideo} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* form */}
              <div className="mt-12 bg-[#F4F6FA] border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-indigo-950/5">
                <h2 className="text-2xl font-extrabold text-[#0C102A] mb-6">
                  Leave Feedback About This
                </h2>

                <form className="space-y-6">
                  <textarea
                    placeholder="Write Your Comments"
                    rows={6}
                    className="w-full border border-slate-200 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-indigo-100 resize-none text-sm"
                  />

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-slate-200 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-indigo-100 text-sm"
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      className="border border-slate-200 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-indigo-100 text-sm"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded accent-[#4F46E5]" />
                    <label className="text-slate-600 text-xs">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white px-8 py-3.5 rounded-2xl font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all duration-300"
                  >
                    Send Feedback
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-8">
              <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden relative">
                <div className="h-44 bg-[#111827] rounded-b-[100px] flex items-start justify-center pt-8 border-b border-slate-800">
                  <h3 className="text-white text-2xl font-extrabold tracking-wide">
                    36 Properties
                  </h3>
                </div>

                <div className="flex justify-center -mt-20 relative z-10">
                  <img
                    src={himanshu}
                    alt="Agent"
                    className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-contain bg-slate-100"
                  />
                </div>

                <div className="px-8 pb-8 text-center mt-4">
                  <h3 className="text-3xl font-extrabold text-slate-900">
                    Himanshu Singh
                  </h3>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-widest mt-1">CEO & Founder</p>
                  <div className="mt-4 text-slate-900 font-extrabold text-base bg-slate-100 border border-slate-200 rounded-xl py-2 px-4 inline-block">
                    📞 +91 7014289408
                  </div>
                  <p className="mt-6 text-slate-600 leading-relaxed text-xs">
                    Explore prime real estate opportunities in Jaipur, offering
                    luxurious villas, modern plots. Perfect for investment or
                    living, these properties blend tradition with contemporary
                    living.
                  </p>
                  <Link 
                    to="/contact"
                    className="mt-8 inline-block w-full bg-[#111827] hover:bg-black text-white py-3.5 rounded-2xl text-xs font-extrabold tracking-wider uppercase shadow-md transition-all text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-indigo-950/5">
                  <h3 className="text-xl font-extrabold text-[#0C102A] mb-8 pb-3 border-b border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                    Popular Properties
                  </h3>

                  <div className="flex gap-4 mb-6 items-center">
                    <img src={vasundhara} alt="" className="w-20 h-16 object-cover rounded-xl border border-slate-200 shrink-0" />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0C102A]">Affordable Plots</h4>
                      <p className="text-slate-500 text-xs font-medium mt-1">Vasundhara Nagar Jaipur</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 items-center">
                    <img src={shreedhar} alt="" className="w-20 h-16 object-cover rounded-xl border border-slate-200 shrink-0" />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0C102A]">Most Luxurious</h4>
                      <p className="text-slate-500 text-xs font-medium mt-1">Ajmer Road Jaipur</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <img src={urmila} alt="" className="w-20 h-16 object-cover rounded-xl border border-slate-200 shrink-0" />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0C102A]">Prime Residential Plots</h4>
                      <p className="text-slate-500 text-xs font-medium mt-1">Sikar Road Jaipur</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

