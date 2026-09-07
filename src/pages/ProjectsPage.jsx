import { Link } from "react-router-dom";
import PageHeader from "../shared/PageHeader";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPlay } from "react-icons/fa";


import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { projectsData } from "../data/projectsData";
import himanshu from "../assets/himanshu.jpg";
import heroVideo from "../assets/hero-video.mp4";
import vasundhara from "../assets/vasundra.png";
import shreedhar from "../assets/shreedhar.jpg";
import urmila from "../assets/urmila.png";

const projects = [
  {
    title: "Vasundhara Nagar-II",
    location: "Jaipur, Rajasthan",
    desc: "Prime residential plots with strong connectivity and future growth.",
  },
  {
    title: "Sridhar Nagar",
    location: "Jaipur, Rajasthan",
    desc: "Residential and commercial plots with excellent road connectivity.",
  },
  {
    title: "Urmila Enclave",
    location: "Jaipur, Rajasthan",
    desc: "Spacious plots for residential and mixed-use development.",
  },
];

const mainProjects = [
  {
    title: "Vasundhara Nagar-II",
    desc: "Secure your future with prime residential plots available in Vrindavan’s top locations, offering the perfect foundation to build your dream home near sacred temples.",
    location: "Jaipur Rajasthan, India",
    image: vasundhara,
  },
  {
    title: "Sridhar Nagar",
    desc: "Invest in exclusive plots in Vrindavan, ideal for residential or commercial development. Choose from various sizes with easy access to key landmarks.",
    location: "Jaipur Rajasthan, India",
    image: shreedhar,
  },
  {
    title: "Urmila Enclave",
    desc: "Whether you're a developer or an individual buyer, Vrindavan offers large plots suitable for residential complexes, farmhouses, or mixed-use projects.",
    location: "Jaipur Rajasthan, India",
    image: urmila,
  },
];

export default function ProjectsPage() {
  // Showing fixed data for the first project
  const project = projectsData["Vasundhara Nagar-II"];

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Ultra-Luxury Page Header */}
      <PageHeader 
        badge="EXPLORE PROPERTIES"
        title="Property"
        goldTitle="Details & Listings"
        subtitle="Explore Premium JDA Approved Residential Plots & Commercial Growth Hubs in Jaipur"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Property Details" }]}
      />

      <section className="py-20 bg-[#ededed] border-t border-slate-300 shadow-md relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
              OUR LISTINGS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mt-3 tracking-tight">
              Our Featured <span className="text-[#C89B3C]">Properties</span>
            </h2>
            <div className="h-1 w-20 bg-[#C89B3C] mx-auto mt-4 rounded-full" />
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-14"
          >
            {mainProjects.map((project, idx) => (
              <SwiperSlide key={idx} className="h-auto!">
                <Link
                  to={`/property/${encodeURIComponent(project.title)}`}
                  className="bg-white border-2 border-slate-200 hover:border-[#C89B3C] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col group block"
                >
                  <div className="h-64 overflow-hidden shrink-0 relative bg-slate-900 p-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#000000]/80 backdrop-blur-md text-[#C89B3C] font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-[#C89B3C]/30 shadow-md">
                      📍 Jaipur, Rajasthan
                    </div>
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <h3 className="text-2xl font-extrabold text-[#000000] mb-3 group-hover:text-[#C89B3C] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm font-medium grow">
                      {project.desc}
                    </p>
                    <div className="flex items-center justify-between text-[#000000] font-extrabold text-xs uppercase tracking-wider mt-auto pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#000000] text-[#C89B3C]">
                          <FaMapMarkerAlt className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-slate-700">{project.location}</span>
                      </div>
                      <span className="text-[#C89B3C] font-black group-hover:translate-x-1 transition-transform">
                        Explore ➔
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="bg-white border-t border-slate-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_0.9fr] gap-12">
            {/* Left Side */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md mb-4">
                FOR SALE
              </span>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-black text-[#000000] mb-4 tracking-tight"
              >
                {project.title}
              </motion.h2>

              <div className="flex items-center gap-2 text-[#C89B3C] font-extrabold text-sm mb-8">
                <FaMapMarkerAlt />
                <span className="text-slate-800">{project.location}</span>
              </div>

              <div className="overflow-hidden rounded-3xl shadow-xl border-2 border-slate-200 mb-10 bg-slate-900 p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto md:h-137.5 object-contain"
                />
              </div>

              <div className="bg-[#000000] text-[#C89B3C] border border-[#C89B3C]/30 rounded-2xl p-4 mb-10 shadow-lg">
                <marquee>
                  <h2 className="text-base md:text-lg font-black tracking-wide">
                    ★ Prime Residential & Commercial Plots in Jaipur • 100% Transparent Legal Documentation • Immediate Registry & Possession Available ★
                  </h2>
                </marquee>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {project.description.map((para, idx) => (
                    <p key={idx} className="text-slate-700 text-base leading-relaxed mb-4 font-medium">
                      {para}
                    </p>
                  ))}

                  {project.sections.map((section, idx) => (
                    <div key={idx} className="bg-[#ededed] border border-slate-300 rounded-3xl p-6 mb-6 shadow-sm">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-xl font-black text-[#000000] mb-4 flex items-center gap-2"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C89B3C]"></span>
                        {section.title}
                      </motion.h3>

                      <ul className="space-y-3 text-slate-800 text-sm font-semibold">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-2.5">
                            <span className="text-[#C89B3C] font-extrabold text-base">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Property Video */}
              <div className="mt-12">
                <motion.h3
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-black text-[#000000] mb-4"
                >
                  Property Video Tour
                </motion.h3>
                <div className="overflow-hidden rounded-3xl shadow-xl border-2 border-slate-200 w-full relative group">
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

              {/* Feedback Form */}
              <div className="mt-14 bg-[#ededed] border border-slate-300 rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-black text-[#000000] mb-6">
                  Leave Inquiry / Feedback
                </h2>

                <form className="space-y-6">
                  <textarea
                    placeholder="Write Your Comments or Questions"
                    rows={5}
                    className="w-full border border-slate-300 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 resize-none text-sm font-medium"
                  />

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="border border-slate-300 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium"
                    />

                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="border border-slate-300 rounded-2xl p-4 bg-white text-[#000000] outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded accent-[#000000]" />
                    <label className="text-slate-600 text-xs font-semibold">
                      Save my name and email for future inquiries.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#000000] hover:bg-[#C89B3C] text-white hover:text-[#000000] px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    Send Feedback
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side Sidebar */}
            <div className="flex flex-col gap-8">
              {/* Agent Card */}
              <div className="bg-white border-2 border-slate-200 rounded-3xl shadow-xl overflow-hidden relative">
                <div className="h-44 bg-[#000000] rounded-b-[100px] flex items-start justify-center pt-8 border-b border-[#C89B3C]/30">
                  <h3 className="text-[#C89B3C] text-2xl font-black tracking-wider uppercase">
                    VRINDA REAL ESTATE
                  </h3>
                </div>

                <div className="flex justify-center -mt-20 relative z-10">
                  <img
                    src={himanshu}
                    alt="Agent Himanshu Singh"
                    className="w-36 h-36 rounded-full border-4 border-[#000000] shadow-xl object-contain bg-slate-100"
                  />
                </div>

                <div className="px-8 pb-8 text-center mt-4">
                  <h3 className="text-2xl font-black text-[#000000]">
                    Himanshu Singh
                  </h3>
                  <p className="text-xs font-extrabold text-[#C89B3C] uppercase tracking-widest mt-1">CEO & Founder</p>
                  <a 
                    href="tel:+917014289408"
                    className="mt-4 text-[#000000] font-black text-sm bg-[#ededed] border border-slate-300 rounded-xl py-2.5 px-5 inline-block hover:border-[#C89B3C] transition-colors"
                  >
                    📞 +91 7014289408
                  </a>
                  <p className="mt-5 text-slate-600 leading-relaxed text-xs font-medium">
                    Explore prime real estate opportunities in Jaipur, offering luxurious villas and modern plots.
                  </p>
                  <Link 
                    to="/contact" 
                    className="mt-6 inline-block w-full bg-[#000000] hover:bg-[#C89B3C] text-white hover:text-[#000000] py-3.5 rounded-2xl text-xs font-black tracking-wider uppercase shadow-md transition-all text-center"
                  >
                    Contact Us Now
                  </Link>
                </div>
              </div>

              {/* Popular Properties Widget */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-lg">
                  <h3 className="text-xl font-black text-[#000000] mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C89B3C]"></span>
                    Popular Listings
                  </h3>

                  <div className="flex gap-4 mb-6 items-center group cursor-pointer">
                    <img
                      src={vasundhara}
                      alt="Vasundhara Nagar"
                      className="w-20 h-16 object-contain p-1 bg-slate-900 rounded-xl border border-slate-200 shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#000000] group-hover:text-[#C89B3C] transition-colors">
                        Vasundhara Nagar-II
                      </h4>
                      <p className="text-slate-500 text-xs font-medium mt-1">
                        Jaipur, Rajasthan
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 items-center group cursor-pointer">
                    <img
                      src={shreedhar}
                      alt="Sridhar Nagar"
                      className="w-20 h-16 object-contain p-1 bg-slate-900 rounded-xl border border-slate-200 shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#000000] group-hover:text-[#C89B3C] transition-colors">
                        Sridhar Nagar
                      </h4>
                      <p className="text-slate-500 text-xs font-medium mt-1">
                        Jaipur, Rajasthan
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center group cursor-pointer">
                    <img
                      src={urmila}
                      alt="Urmila Enclave"
                      className="w-20 h-16 object-contain p-1 bg-slate-900 rounded-xl border border-slate-200 shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#000000] group-hover:text-[#C89B3C] transition-colors">
                        Urmila Enclave
                      </h4>
                      <p className="text-slate-500 text-xs font-medium mt-1">
                        Jaipur, Rajasthan
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

