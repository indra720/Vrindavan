import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronUp,
  FaChevronDown,
  FaCheckCircle,
  FaWhatsapp,
  FaFacebookF,
  FaSearch,
  FaBuilding,
  FaHome,FaRegComments
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import heroVideo from "../assets/hero-video.mp4";
import vasundhara from "../assets/vasundra.png";
import shreedhar from "../assets/shreedhar.jpg";
import urmila from "../assets/urmila.png";
import invest1 from "../assets/investment1.png";
import invest2 from "../assets/investment2.png";
import invest3 from "../assets/investmetn3.webp";
import invest4 from "../assets/investment4.png";

const featured = [
  {
    title: "Vasundhara Nagar-II",
    location: "Jaipur, Rajasthan",
    desc: "Premium residential plots with modern infrastructure and excellent connectivity to the city.",
    price: "Starting from ₹12 Lac",
    image:
      "https://images.unsplash.com/photo-1564013796385-7c3f3f3d4f18?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Shridhar Nagar",
    location: "Jaipur, Rajasthan",
    desc: "Strategically located residential and commercial plots ideal for long-term investment.",
    price: "Starting from ₹8 Lac",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Urmila Enclave",
    location: "Jaipur, Rajasthan",
    desc: "Spacious plots in a peaceful environment, perfect for your dream home construction.",
    price: "Starting from ₹15 Lac",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
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

const investmentSteps = [
  {
    step: "01",
    title: "Research",
    desc: "At Vrindavan Real Estate, we understand that the foundation of a successful investment is thorough research. Our dedicated team employs a meticulous approach to ensure every property meets high standards of quality and potential.",
    icon: invest1,
    img: "https://images.unsplash.com/photo-1454165833767-027ff81968bd?auto=format&fit=crop&w=600&q=80",
  },
  {
    step: "02",
    title: "Acquisition",
    desc: "Loan Approval: Obtain pre-approval for a mortgage or loan if required. Budget Planning: Finalize your budget for the property purchase, including the cost of the property, closing costs, taxes, and any additional expenses.",
    icon: invest2,
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
  },
  {
    step: "03",
    title: "Selling",
    desc: "Professional Appraisal: Consider hiring a professional appraiser for an accurate valuation of your property. Real Estate Agent: Consider hiring a real estate agent who has experience in the local market.",
    icon: invest3,
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
  },
  {
    step: "04",
    title: "Profit Sharing",
    desc: "Engage in profit-sharing agreements to maximize returns. Collaborate with local partners, share proceeds based on investment, and ensure transparent calculations to optimize gains in Vrindavan market.",
    icon: invest4,
    img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80",
  },
];

const areas = [
  {
    name: "Vasundhara Nagar",
    count: "12 Plots",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Shridhar Nagar",
    count: "8 Plots",
    img: "https://images.unsplash.com/photo-1564013796385-7c3f3f3d4f18?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Urmila Enclave",
    count: "5 Plots",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ajmer Road",
    count: "15 Plots",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=400&q=80",
  },
];

const blogs = [
  {
    title: "Why Jaipur is the best for Plot Investment in 2026",
    date: "May 20, 2026",
    excerpt:
      "Explore the rapid infrastructure growth and rising property values in Jaipur.",
    img: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Understanding RERA: A Guide for Plot Buyers",
    date: "May 15, 2026",
    excerpt:
      "Learn how RERA protects your investment and ensures transparency.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    quote:
      "Vrindavan Real Estate provided exceptional guidance. Their transparency in documentation made the buying process very smooth and stress-free for my family.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Priya Verma",
    role: "Home Buyer",
    quote:
      "I found the perfect plot for my home. The location is excellent and the team is very professional and helpful. Truly the best developers in Jaipur.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Anil Gupta",
    role: "Investor",
    quote:
      "A reliable name in Jaipur real estate. Their project growth potential is impressive. Highly recommended for investors looking for long-term high returns.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
];

export default function HomePage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white text-dark relative">
      {/* Fixed Social Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-100 flex flex-col gap-0.5">
        {/* Facebook */}
        <a href="#" className="group flex items-center justify-end">
          <div className="bg-blue-600 text-white flex items-center justify-end overflow-hidden transition-all duration-300 w-12 group-hover:w-40 h-12 rounded-l-md shadow-lg">
            <span className="px-4 font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 text-center">
              Facebook
            </span>
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <FaFacebookF size={20} />
            </div>
          </div>
        </a>

        {/* WhatsApp/Mobile */}
        <a
          href="https://wa.me/917014289408"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end"
        >
          <div className="bg-green-500 text-white flex items-center justify-end overflow-hidden transition-all duration-300 w-12 group-hover:w-40 h-12 rounded-l-md shadow-lg">
            <span className="px-4 font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 text-center">
              WhatsApp
            </span>
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <FaWhatsapp size={24} />
            </div>
          </div>
        </a>

        {/* Call Now */}
        <a
          href="tel:+917014289408"
          className="group flex items-center justify-end"
        >
          <div className="bg-[#246BFD] text-white flex items-center justify-end overflow-hidden transition-all duration-300 w-12 group-hover:w-48 h-12 rounded-l-md shadow-lg">
            <span className="px-4 font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 text-center">
              +91 7014289408
            </span>
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <IoCall size={22} />
            </div>
          </div>
        </a>
      </div>

      {/* Scroll Navigation */}
      <div className="fixed bottom-8 right-16 z-100 flex flex-col gap-2">
        <button
          onClick={scrollToTop}
          className={`bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-1 ${showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"}`}
          aria-label="Scroll to top"
        >
          <FaChevronUp size={24} />
        </button>
        <button
          onClick={scrollToBottom}
          className="bg-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-dark/90 hover:translate-y-1"
          aria-label="Scroll to bottom"
        >
          <FaChevronDown size={24} />
        </button>
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      </section>

      {/* Main Plot Projects Section */}
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
                <div className="bg-white border border-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="h-64 overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <h3 className="text-2xl font-bold text-dark mb-3">
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Investment Process with{" "}
              <span className="text-yellow-600">Vrindavan Real Estate</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* 2x2 Grid with Scroll Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {investmentSteps.map((item, idx) => (
              <div
                key={idx}
                className="animate-on-scroll bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-blue-50/50 rounded-2xl flex items-center justify-center p-3 shrink-0 group-hover:bg-blue-600 transition-all">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">
                      Step {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funfacts Section */}
      <section
        ref={ref}
        className="relative py-28 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-white text-lg font-semibold mb-4">
              Properties No
            </p>

            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
              Funfacts Vrindavan Real
              <br />
              Estate
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <FaBuilding className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-white text-5xl font-bold mb-4">50 Lac+</h3>

              <p className="text-white text-xl">Completed Property</p>
            </div>

            <div className="relative">
              <div
                className="bg-blue-900/70 mx-auto backdrop-blur-sm"
                style={{
                  height: "260px",
                  clipPath: "polygon(15% 0%,85% 0%,100% 100%,0% 100%)",
                }}
              >
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <FaHome className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-white text-5xl font-bold">7600+</h3>

                  <p className="text-white text-xl mt-3">Property Sales</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <FaRegComments className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-white text-5xl font-bold mb-4">6500+</h3>

              <p className="text-white text-xl">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Pure White */}
      <section className="py-24 bg-secondary/30 overflow-hidden border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-dark">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4 uppercase tracking-tight">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
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
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto!">
                <div className="bg-white border border-border p-10 rounded-[2.5rem] relative h-full flex flex-col shadow-sm hover:shadow-md transition-all">
                  <p className="text-dark/80 text-lg italic mb-10 leading-relaxed grow">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-secondary">
                    <div className="h-14 w-14 rounded-full overflow-hidden shadow-md shrink-0 border-2 border-primary/20">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-dark">{t.name}</div>
                      <div className="text-primary text-[10px] font-black uppercase tracking-widest">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Top Areas Section */}
      <section className="py-24 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4 uppercase tracking-tight">
              Top Areas{" "}
              <span className="text-primary underline underline-offset-8 decoration-primary/20">
                Explore
              </span>{" "}
              Properties
            </h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {areas.map((area, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative rounded-[2.5rem] overflow-hidden h-96 cursor-pointer shadow-xl">
                  <img
                    src={area.img}
                    alt={area.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-dark/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="bg-primary/30 backdrop-blur-md border border-white/20 inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                      {area.count}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1">
                      {area.name}
                    </h3>
                    <div className="flex items-center text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Properties{" "}
                      <FaChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Featured Projects - Pure White Cards on Soft Stone Bg */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4 uppercase tracking-tight">
                Premium Projects
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
            </div>
            <Link
              to="/projects"
              className="text-primary font-bold text-lg hover:underline flex items-center gap-2"
            >
              Browse All <FaChevronRight className="h-5 w-5" />
            </Link>
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
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {featured.map((p, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-3xl overflow-hidden group h-full border border-border shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-5 left-5 bg-accent text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                      New
                    </div>
                  </div>
                  <div className="p-8 text-dark">
                    <div className="flex items-center text-primary text-xs font-bold mb-3 uppercase tracking-wider">
                      <FaMapMarkerAlt className="h-3.5 w-3.5 mr-1" />{" "}
                      {p.location}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-light text-sm mb-8 line-clamp-2">
                      {p.desc}
                    </p>
                    <div className="flex justify-between items-center pt-5 border-t border-secondary">
                      <span className="text-xl font-bold text-primary">
                        {p.price}
                      </span>
                      <Link
                        to="/projects"
                        className="h-11 w-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-sm"
                      >
                        <FaChevronRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Stories Section - Soft Stone Bg */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4 uppercase">
              Latest Stories
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-sm border border-border group hover:shadow-md transition-all"
              >
                <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center text-dark">
                  <div className="text-primary text-sm font-bold mb-3 flex items-center gap-2 uppercase tracking-tighter">
                    <FaCalendarAlt className="h-4 w-4" /> {blog.date}
                  </div>
                  <h3 className="text-xl font-bold mb-4 leading-snug">
                    {blog.title}
                  </h3>
                  <Link
                    to="/blog"
                    className="text-primary font-bold flex items-center gap-2 hover:underline uppercase text-xs tracking-widest"
                  >
                    Read More <FaChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Premium Look */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-primary rounded-[3rem] overflow-hidden p-10 sm:p-20 text-center text-white shadow-2xl">
            {/* Gradient accent */}
            <div className="absolute inset-0 bg-linear-to-r from-primary via-primary-dark to-primary opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl font-bold mb-8 uppercase tracking-tighter">
                Ready to Invest?
              </h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                Join thousands of successful investors. Find your perfect plot
                in Jaipur today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-accent text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-[0_10px_30px_rgba(197,160,89,0.4)] hover:-translate-y-1 transition-all border-2 border-accent"
                >
                  Site Visit
                </Link>
                <a
                  href="tel:+917014289408"
                  className="border-2 border-white/20 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all"
                >
                  Call Experts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
