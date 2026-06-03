import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import vasundhara from "../assets/vasundra.png";
import shreedhar from "../assets/shreedhar.jpg";
import urmila from "../assets/urmila.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  FaMapMarkerAlt,
} from "react-icons/fa";

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
  return (
    <div>
      <div className="bg-[#2e2c2c] text-white border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="mt-2 text-4xl font-bold">Our Properties</h1>
          <div className="flex items-center gap-2 text-md text-gray-400">
            Home <span className="text-gray-500">::</span> Our Properties
          </div>
        </div>
      </div>

      <section className="py-10 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-md mb-5 sm:text-xl font-semibold text-center">
            <span className="text-blue-600">Our Properties</span>
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
                  className="bg-white border rounded-xl border-secondary overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col group block"
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
                    <p className="text-light leading-relaxed mb-3 grow">
                      {project.desc}
                    </p>
                    <div className="flex items-center text-gray-400 text-sm uppercase tracking-wider mt-auto">
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">Available Listings</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-border bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80)",
                }}
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold group-hover:text-primary transition-colors">{p.title}</h2>
                    <div className="mt-2 text-sm text-light flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {p.location}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-light leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-5">
                  <Link
                    to={`/property/${encodeURIComponent(p.title)}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-semibold border border-border hover:bg-secondary/90 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
