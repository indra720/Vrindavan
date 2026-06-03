import { Link } from "react-router-dom";
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
    <div>
      <div className="bg-[#2e2c2c] text-white border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="mt-2 text-4xl font-bold">Property Details</h1>
          <div className="flex items-center gap-2 text-md text-gray-400">
            Home <span className="text-gray-500">::</span> Property Details
          </div>
        </div>
      </div>

      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-md mb-5  sm:text-xl font-semibold text-center ">
            <a href="#">Our Properties</a>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 underline underline-offset-8">
            Our Featured Properties
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {mainProjects.map((project, idx) => (
              <SwiperSlide key={idx} className="h-auto!">
                <Link
                  to={`/property/${encodeURIComponent(project.title)}`}
                  className="bg-white border border-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col group block"
                >
                  <div className="h-64 overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-light leading-relaxed mb-6 grow">
                      {project.desc}
                    </p>
                    <div className="flex items-center text-gray-400  text-sm uppercase tracking-wider mt-auto">
                      <FaMapMarkerAlt className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* main content - Exact UI from PropertyDetailsPage */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_0.9fr] gap-8 ">
            {/* Left Side */}
            <div>
              <p className="text-[#0d5bd7] text-2xl font-semibold mb-3">
                For Sale
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-4xl font-bold text-gray-900 mb-6"
              >
                {project.title}
              </motion.h2>

              <div className="flex items-center gap-2 text-gray-600 mb-8">
                <FaMapMarkerAlt />
                <span>{project.location}</span>
              </div>

              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-auto md:w-full h-auto md:h-137.5 object-cover "
                />
              </div>
              <marquee>
                <h2 className="text-2xl md:text-4xl p-2 font-bold ">
                  About This Listing Description
                </h2>
              </marquee>
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {project.description.map((para, idx) => (
                    <p key={idx} className="text-gray-600 text-lg mb-3">
                      {para}
                    </p>
                  ))}

                  {project.sections.map((section, idx) => (
                    <div key={idx}>
                      <motion.h3
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="text-xl font-bold text-gray-900 mb-3 mt-8"
                      >
                        {section.title}
                      </motion.h3>

                      <ul className="space-y-2 text-gray-600 text-md mb-8">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* property Video */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="text-xl font-bold text-gray-900 mb-3"
                >
                  Property Video
                </motion.h3>
                <div className="overflow-hidden rounded-lg shadow-md w-full">
                  <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-125 object-cover"
                    poster={project.videoPoster}
                  >
                    <source src={heroVideo} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* form */}
              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">
                  Leave Feedback About This
                </h2>

                <form className="space-y-6">
                  <textarea
                    placeholder="Write Your Comments"
                    rows={8}
                    className="w-full border border-gray-300 p-4 outline-none focus:border-black resize-none"
                  />

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-gray-300 p-4 outline-none focus:border-black"
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      className="border border-gray-300 p-4 outline-none focus:border-black"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <label className="text-gray-600">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#003b82] hover:bg-[#002b61] text-white px-8 py-3 font-semibold transition-all duration-300"
                  >
                    Send Feedback
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-8">
              <div className="bg-gray-200 shadow-lg overflow-hidden relative">
                <div className="h-52 bg-[#0d5bd7] rounded-b-[140px] flex items-start justify-center pt-8">
                  <h3 className="text-white text-3xl font-bold">
                    36 Properties
                  </h3>
                </div>

                <div className="flex justify-center -mt-24 relative z-10">
                  <img
                    src={himanshu}
                    alt="Agent"
                    className="w-44 h-44 rounded-full border-8 border-white object-contain"
                  />
                </div>

                <div className="px-8 pb-10 text-center">
                  <h3 className="text-4xl font-bold text-[#0d5bd7]">
                    Himanshu Singh
                  </h3>
                  <p className="text-lg text-gray-600 mt-2">CEO & Founder</p>
                  <div className="mt-6 text-gray-700 text-lg">
                    📞 +91 7014289408
                  </div>
                  <p className="mt-8 text-gray-600 leading-9 text-lg">
                    Explore prime real estate opportunities in Jaipur, offering
                    luxurious villas, modern plots. Perfect for investment or
                    living, these properties blend tradition with contemporary
                    living.
                  </p>
                  <button  className="mt-10 bg-[#002f6c] text-white px-8 py-4 text-lg font-semibold hover:bg-[#001d43] transition">
                    <Link to="/contact">Contact Us</Link>
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="bg-gray-200 p-10">
                  <h3 className="text-xl font-bold text-[#0d5bd7] mb-10">
                    Popular Properties
                  </h3>

                  <div className="flex gap-5 mb-10">
                    <img
                      src={vasundhara}
                      alt=""
                      className="w-26 h-22 object-contain"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">
                        Affordable Plots
                      </h4>
                      <p className="text-gray-600 text-sm mt-2">
                        Vasundhara Nagar Jaipur
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 mb-10">
                    <img
                      src={shreedhar}
                      alt=""
                      className="w-26 h-22 object-contain"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">Most Luxurious</h4>
                      <p className="text-gray-600 text-sm mt-2">
                        Ajmer Road Jaipur
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <img
                      src={urmila}
                      alt=""
                      className="w-26 h-22 object-contain"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">
                        Prime Residential Plots
                      </h4>
                      <p className="text-gray-600 text-sm mt-2">
                        Sikar Road Jaipur
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
