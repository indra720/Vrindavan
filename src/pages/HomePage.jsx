import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaSearch,
  FaBuilding,
  FaHome,
  FaRegComments,
  FaPlay,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import heroVideo from "../assets/hero-video.mp4";
import vasundhara from "../assets/vasundra.png";
import shreedhar from "../assets/shreedhar.jpg";
import urmila from "../assets/urmila.png";
import invest1 from "../assets/investment1.png";
import invest2 from "../assets/investment2.png";
import invest3 from "../assets/investmetn3.webp";
import invest4 from "../assets/investment4.png";
import top1 from "../assets/top1.png";
import top2 from "../assets/top2.png";
import top3 from "../assets/top3.png";
import top4 from "../assets/top4.png";
import reviewBg from "../assets/backgroundimg.png";
import blog1 from "../assets/blog1.avif";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog_3.webp";

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
    title: "Sridhar Nagar",
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
    price: "Starting ₹12 Lac",
    badge: "JDA Approved",
    features: ["40ft Wide Road", "24/7 Security", "Gated Community"],
    image: vasundhara,
  },
  {
    title: "Sridhar Nagar",
    desc: "Invest in exclusive plots in Vrindavan, ideal for residential or commercial development. Choose from various sizes with easy access to key landmarks.",
    location: "Jaipur Rajasthan, India",
    price: "Starting ₹8 Lac",
    badge: "Prime Location",
    features: ["Commercial Belt", "Street Lights", "Immediate Registry"],
    image: shreedhar,
  },
  {
    title: "Urmila Enclave",
    desc: "Whether you're a developer or an individual buyer, Vrindavan offers large plots suitable for residential complexes, farmhouses, or mixed-use projects.",
    location: "Jaipur Rajasthan, India",
    price: "Starting ₹15 Lac",
    badge: "High ROI",
    features: ["Park Facing", "Water Line", "Eco Friendly"],
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
    name: "Sridhar Nagar",
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

const blogs = [
  {
    title: "Tips for First Time Plots Buyers: What You Need to Know",
    date: "15 June 2025",
    img: blog1,
    desc: "First-time plot buyers in Vrindavan and Jaipur should assess location, legal documentation, and future growth potential before investing.",
  },

  {
    title: "Luxury Plot in Jaipur: What Makes Them Stand Out",
    date: "20 June 2025",
    img: blog2,
    desc: "Luxury plots in Jaipur offer prime locations, premium amenities, spacious designs, exclusivity, and excellent long-term investment potential.",
  },

  {
    title: "Benefits of Buying Property in Jaipur",
    date: "28 June 2025",
    img: blog3,
    desc: "Buying property in Jaipur offers affordable prices, strong infrastructure, growing investment opportunities, and excellent future appreciation.",
  },
];

const galleryProjects = [
  {
    type: "video",
    image: top1,
    link: "https://youtube.com",
  },
  {
    type: "image",
    image: top2,
  },
  {
    type: "image",
    image: top3,
  },
];

// Animated Counter component that triggers on scroll into view
const AnimatedCounter = ({ target, suffix = "", inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000; // 2 seconds animation
    const steps = 50;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function HomePage() {
  const swiperRef = useRef(null);
  const investSwiperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeModalStep, setActiveModalStep] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchBudget, setSearchBudget] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentReview, setCurrentReview] = useState(0);
  const [clientReview, setClientReview] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // next
  const nextReview = () => {
    setDirection(1);
    setClientReview((prev) => (prev + 1) % testimonials.length);
  };

  // previous
  const prevReview = () => {
    setDirection(-1);
    setClientReview(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="bg-[#F4F6FA] text-slate-800 relative">
      {/* Hero Section with Ambient Video & Luxury Overlay */}
      <section className="relative min-h-[86vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/85 to-black/80" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (Main Copy & Embedded Glass Search Bar) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#C89B3C] font-bold text-[11px] tracking-widest uppercase shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-ping"></span>
                REAL ESTATE DEVELOPERS IN JAIPUR
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Build Your Future With <br />
                <span className="text-[#C89B3C]">
                  Vrindavan Real Estate
                </span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
                Discover prime JDA-approved residential & commercial plots in Jaipur’s fastest-growing corridors with high appreciation potential.
              </p>

              {/* Embedded Glassmorphic Quick Property Finder Bar (Option B) */}
              <div className="bg-[#111827]/75 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 sm:p-4 shadow-2xl space-y-3 max-w-xl">
                <div className="text-xs font-semibold text-[#C89B3C] tracking-wider uppercase flex items-center gap-1.5">
                  <FaSearch size={11} /> Instant Property Finder
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Location Selector */}
                  <div className="relative">
                    <select
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="w-full bg-white/10 text-white border border-white/20 rounded-xl px-3.5 py-2.5 text-xs font-medium outline-none focus:border-[#C89B3C] cursor-pointer appearance-none"
                    >
                      <option value="" className="bg-[#111827] text-white">Select Location / Township</option>
                      <option value="Vasundhara Nagar" className="bg-[#111827] text-white">Vasundhara Nagar-II</option>
                      <option value="Sridhar Nagar" className="bg-[#111827] text-white">Sridhar Nagar</option>
                      <option value="Urmila Enclave" className="bg-[#111827] text-white">Urmila Enclave</option>
                      <option value="Ajmer Road" className="bg-[#111827] text-white">Ajmer Road Belt</option>
                    </select>
                    <FaMapMarkerAlt className="absolute right-3.5 top-3 text-[#C89B3C] text-xs pointer-events-none" />
                  </div>

                  {/* Budget Selector */}
                  <div className="relative">
                    <select
                      value={searchBudget}
                      onChange={(e) => setSearchBudget(e.target.value)}
                      className="w-full bg-white/10 text-white border border-white/20 rounded-xl px-3.5 py-2.5 text-xs font-medium outline-none focus:border-[#C89B3C] cursor-pointer appearance-none"
                    >
                      <option value="" className="bg-[#111827] text-white">Budget Range</option>
                      <option value="Under 10L" className="bg-[#111827] text-white">Under ₹10 Lac</option>
                      <option value="10L-20L" className="bg-[#111827] text-white">₹10 Lac - ₹20 Lac</option>
                      <option value="20L+" className="bg-[#111827] text-white">₹20 Lac & Above</option>
                    </select>
                    <FaHome className="absolute right-3.5 top-3 text-[#C89B3C] text-xs pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-200">
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-[#C89B3C]" size={10} /> JDA Approved</span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-[#C89B3C]" size={10} /> 100% Registry</span>
                  </div>

                  <Link
                    to={`/projects?location=${encodeURIComponent(searchLocation)}&budget=${encodeURIComponent(searchBudget)}`}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#C89B3C] hover:bg-white text-black font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    Find Plots
                    <FaChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap gap-3.5 items-center pt-1">
                <Link 
                  to="/projects"
                  className="px-6 py-3 rounded-full bg-[#111827] hover:bg-black text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2.5 border border-slate-700 group"
                >
                  Explore All Projects
                  <FaChevronRight size={11} className="text-[#C89B3C] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link 
                  to="/contact"
                  className="px-6 py-3 rounded-full bg-white/10 text-white font-bold text-xs tracking-wider uppercase backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#111827] transition-all duration-300 shadow-lg"
                >
                  Schedule Site Visit
                </Link>
              </div>

              {/* Floating Quick Trust Stats Bar */}
              <div className="pt-5 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">50 Lac+</h4>
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">Sq.Ft Developed</p>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#C89B3C]">7,600+</h4>
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">Plot Sales</p>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">6,500+</h4>
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">Happy Clients</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column (Floating Luxury Featured Property Snippet Card - Option A) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="bg-[#111827]/85 backdrop-blur-2xl border border-white/20 hover:border-[#C89B3C]/60 rounded-3xl p-6 shadow-2xl transition-all duration-500 space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C89B3C]" />
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] font-bold text-[10px] tracking-widest uppercase border border-[#C89B3C]/40">
                    🔥 FEATURED PROJECT
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px] border border-emerald-500/30">
                    JDA APPROVED
                  </span>
                </div>

                {/* Property Image Snippet */}
                <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#C89B3C]/40 transition-colors">
                  <img 
                    src={vasundhara} 
                    alt="Vasundhara Nagar-II" 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-[#C89B3C] text-black font-extrabold text-xs px-3 py-1 rounded-lg shadow-md">
                    Starting ₹12 Lac
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/80 text-white font-medium text-[10px] px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[#C89B3C]" size={9} /> Jaipur
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#C89B3C] transition-colors">
                    Vasundhara Nagar-II
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed font-medium">
                    Prime residential township with 40ft wide roads, 24/7 gated security, and immediate registration.
                  </p>
                </div>

                {/* Highlights Pills */}
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/10 text-center">
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <div className="text-[#C89B3C] font-bold text-xs">40 Ft</div>
                    <div className="text-[9px] text-slate-400 font-medium">Wide Road</div>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <div className="text-[#C89B3C] font-bold text-xs">24/7</div>
                    <div className="text-[9px] text-slate-400 font-medium">Security</div>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <div className="text-[#C89B3C] font-bold text-xs">Ready</div>
                    <div className="text-[9px] text-slate-400 font-medium">Possession</div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/property/Vasundhara%20Nagar-II"
                  className="w-full py-3 rounded-2xl bg-[#C89B3C] hover:bg-white text-black font-bold text-xs uppercase tracking-wider shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-gold cursor-pointer"
                >
                  View Property Details
                  <FaChevronRight size={11} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Plot Projects Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 shadow-sm">
              OUR EXCLUSIVE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mt-3 tracking-tight">
              Our Featured Properties
            </h2>
            <div className="h-0.5 w-16 bg-[#C89B3C] mx-auto mt-3 rounded-full"></div>
          </div>

          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={28}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {mainProjects.map((project, idx) => (
              <SwiperSlide key={idx} className="h-auto!">
                <Link 
                  to={`/property/${encodeURIComponent(project.title)}`}
                  className="relative h-[460px] rounded-3xl overflow-hidden shadow-lg group border border-slate-200/80 hover:shadow-xl transition-all duration-500 block bg-[#0F172A]"
                >
                  {/* Background Property Image with Smooth Zoom */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Always-on Top & Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="bg-black/70 backdrop-blur-md text-white font-medium text-[11px] px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                      <FaMapMarkerAlt className="text-[#C89B3C] h-3 w-3" />
                      Jaipur, Rajasthan
                    </span>
                  </div>

                  {project.badge && (
                    <div className="absolute top-4 right-4 z-10 bg-[#C89B3C] text-black font-semibold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                      {project.badge}
                    </div>
                  )}

                  {/* Default State (Bottom Title & Price floating) - Hidden on Hover */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-10 transition-all duration-500 ease-in-out transform group-hover:translate-y-full group-hover:opacity-0">
                    <h3 className="text-2xl font-semibold text-white tracking-tight mb-2 drop-shadow-md">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between pt-3 border-t border-white/20">
                      <span className="text-[#C89B3C] font-semibold text-lg">
                        {project.price}
                      </span>
                      <span className="text-white/80 font-medium text-xs flex items-center gap-1">
                        Hover Overview <FaChevronRight size={10} className="text-[#C89B3C] rotate-[-90deg]" />
                      </span>
                    </div>
                  </div>

                  {/* Hover State: Slide-Up Glassmorphic Overview Panel */}
                  <div className="absolute inset-x-0 bottom-0 bg-[#0F172A]/95 backdrop-blur-xl border-t-2 border-[#C89B3C] p-6 text-white rounded-t-3xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 flex flex-col justify-between shadow-2xl">
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-[#C89B3C]">
                          {project.title}
                        </h4>
                        <span className="text-[#C89B3C] font-semibold text-sm bg-white/5 border border-[#C89B3C]/30 px-2.5 py-0.5 rounded-lg">
                          {project.price}
                        </span>
                      </div>

                      <div className="flex items-center text-slate-300 font-medium text-xs mb-3">
                        <FaMapMarkerAlt className="h-3 w-3 text-[#C89B3C] mr-1.5 shrink-0" />
                        <span>{project.location}</span>
                      </div>

                      {/* Brief Overview */}
                      <p className="text-slate-300 leading-relaxed text-xs mb-4 line-clamp-3 font-normal">
                        {project.desc}
                      </p>

                      {/* Feature Highlights Pills */}
                      {project.features && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.features.map((feat, fIdx) => (
                            <span 
                              key={fIdx} 
                              className="bg-white/10 text-white border border-white/15 text-[10px] font-medium px-2.5 py-1 rounded-md"
                            >
                              ✓ {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CTA Button inside Slide-Up Panel */}
                    <div className="w-full bg-[#C89B3C] hover:bg-white text-black font-semibold text-xs tracking-wider uppercase py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300 shadow-lg group/btn mt-2">
                      <span>View Property Details</span>
                      <FaChevronRight size={11} className="text-black group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Custom Navigation Left & Right Arrow Buttons (Shown on md & mobile screens only) */}
          <div className="flex lg:hidden items-center justify-center gap-3 mt-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full bg-[#111827] text-white hover:bg-[#C89B3C] hover:text-[#111827] flex items-center justify-center transition-all duration-300 shadow-md border border-slate-700 cursor-pointer group hover:scale-105 active:scale-95"
              aria-label="Previous Property"
            >
              <FaChevronLeft className="h-3.5 w-3.5 text-[#C89B3C] group-hover:text-[#111827] group-hover:-translate-x-0.5 transition-all" />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full bg-[#111827] text-white hover:bg-[#C89B3C] hover:text-[#111827] flex items-center justify-center transition-all duration-300 shadow-md border border-slate-700 cursor-pointer group hover:scale-105 active:scale-95"
              aria-label="Next Property"
            >
              <FaChevronRight className="h-3.5 w-3.5 text-[#C89B3C] group-hover:text-[#111827] group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* COMBINED: SINGLE LINE STEPPER TRACK + POP-UP OVERVIEW MODAL   */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* COMBINED: SINGLE LINE STEPPER TRACK + POP-UP OVERVIEW MODAL   */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-[#ededed] border-t border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Pure Black (#000000) styling */}
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
              SMART INVESTMENT STRATEGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mt-3 tracking-tight">
              Investment Process With Vrindavan Real Estate
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 font-medium">
              Click on any phase step in the roadmap below to view its full overview modal.
            </p>
            <div className="h-1 w-20 bg-[#C89B3C] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Single Line / Grid Phases Stepper Track (Increased Width max-w-6xl) */}
          <div className="relative max-w-6xl mx-auto my-16 px-4">
            {/* Background Connecting Bar */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-300 -translate-y-1/2 z-0 hidden sm:block">
              <div className="h-full bg-[#C89B3C] rounded-full w-full opacity-80" />
            </div>

            {/* Stepper Node Buttons (Responsive Grid: 2 cols on mobile with gap-y-14, 4 cols on sm) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-14 sm:gap-6 relative z-10">
              {investmentSteps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveModalStep(idx)}
                  className="flex flex-col items-center cursor-pointer group relative"
                >
                  {/* Default Always-Jumping Bouncing Hand Indicator */}
                  <div className="absolute -top-10 flex flex-col items-center animate-bounce z-20 pointer-events-none">
                    <span className="bg-[#C89B3C] text-[#000000] text-[9px] sm:text-[10px] font-black tracking-wider px-2 py-0.5 rounded-full shadow-md whitespace-nowrap border border-[#000000]/20">
                      Click Overview 👆
                    </span>
                    <div className="w-1.5 h-1.5 bg-[#C89B3C] rotate-45 -mt-0.5" />
                  </div>

                  {/* Icon Node Circle with white background on hover */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-slate-300 group-hover:border-[#C89B3C] shadow-lg flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110">
                    <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                  </div>

                  {/* Step Pill Tag with #000000 background */}
                  <div className="mt-2.5 px-3 py-1 rounded-full bg-[#000000] text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-[#000000] font-extrabold text-[11px] sm:text-xs tracking-wider transition-colors duration-300 shadow-md">
                    PHASE 0{idx + 1}
                  </div>

                  {/* Step Title */}
                  <span className="mt-1 text-xs sm:text-sm font-extrabold text-[#000000] group-hover:text-[#C89B3C] transition-colors text-center truncate max-w-full">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Click Prompt Bar */}
          <div className="text-center mt-10">
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl bg-white border border-slate-300 text-[#000000] font-extrabold text-[11px] sm:text-xs shadow-md max-w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C89B3C] animate-ping shrink-0" />
              <span>Click any phase node above to open the full overview modal</span>
            </span>
          </div>
        </div>
      </section>

      {/* POP-UP MODAL CARD OVERVIEW WINDOW */}
      <AnimatePresence>
        {activeModalStep !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#000000] text-white border-2 border-[#C89B3C] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Top Gold Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[#C89B3C]" />

              {/* Close Button */}
              <button
                onClick={() => setActiveModalStep(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#C89B3C] hover:text-[#000000] flex items-center justify-center transition-all cursor-pointer shadow-md z-10"
                aria-label="Close Overview Modal"
              >
                <FaTimes size={16} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/15">
                <div className="w-16 h-16 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shrink-0">
                  <img
                    src={investmentSteps[activeModalStep].icon}
                    alt={investmentSteps[activeModalStep].title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#C89B3C] text-[#000000] font-black text-[10px] tracking-widest uppercase shadow-sm">
                    PHASE 0{activeModalStep + 1} OVERVIEW
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {investmentSteps[activeModalStep].title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="space-y-4 mb-6">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                  {investmentSteps[activeModalStep].desc}
                </p>

                {/* Key Takeaways Checklist */}
                <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-slate-200">
                    <FaCheckCircle className="text-[#C89B3C] shrink-0 h-4 w-4" />
                    <span>Comprehensive Due Diligence</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-slate-200">
                    <FaCheckCircle className="text-[#C89B3C] shrink-0 h-4 w-4" />
                    <span>Transparent Partnership Terms</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls with #000000 styling */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeModalStep === 0}
                    onClick={() => setActiveModalStep((prev) => Math.max(0, prev - 1))}
                    className="w-9 h-9 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-[#C89B3C] hover:text-[#000000] flex items-center justify-center transition-all cursor-pointer"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <span className="text-xs font-bold text-slate-400">
                    {activeModalStep + 1} / 4
                  </span>
                  <button
                    disabled={activeModalStep === investmentSteps.length - 1}
                    onClick={() => setActiveModalStep((prev) => Math.min(investmentSteps.length - 1, prev + 1))}
                    className="w-9 h-9 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-[#C89B3C] hover:text-[#000000] flex items-center justify-center transition-all cursor-pointer"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setActiveModalStep(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#C89B3C] hover:bg-white text-[#000000] font-extrabold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
                >
                  <span>Schedule Consultation</span>
                  <FaChevronRight size={10} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Properties Growth / Company Statistics Section (Combined Mind-Blowing Luxury Layout) */}
      <section
        ref={ref}
        className="py-24 bg-[#0B0F17] text-white relative overflow-hidden border-t border-[#C89B3C]/20 shadow-2xl"
      >
        {/* Ambient Light Glow Spheres */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (5 Cols): Narrative & Headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase border border-[#C89B3C]/30 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-ping" />
                PROPERTIES GROWTH
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-5 tracking-tight leading-tight">
                Funfacts <br />
                <span className="text-[#C89B3C] drop-shadow-[0_2px_10px_rgba(200,155,60,0.3)]">
                  Vrindavan Real Estate
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base mt-4 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                Over a decade of uncompromised excellence, building trust, and delivering high-appreciation residential & commercial plots across Jaipur.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300 flex items-center gap-2">
                  <FaCheckCircle className="text-[#C89B3C]" /> 100% Legal Clear Title
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300 flex items-center gap-2">
                  <FaCheckCircle className="text-[#C89B3C]" /> Prime Jaipur Locations
                </span>
              </div>
            </motion.div>

            {/* Right Column (7 Cols): 3 Interactive Progress Glass Rows with Circular Dial Icons */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Stat Row 1: Completed Property */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-r from-white/5 via-white/[0.07] to-transparent backdrop-blur-xl border border-white/10 hover:border-[#C89B3C]/50 rounded-3xl p-6 shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                  {/* Left: Circular Dial & Label */}
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-[#C89B3C]/20 blur-md group-hover:bg-[#C89B3C]/40 transition-all" />
                      <div className="w-14 h-14 rounded-full bg-[#000000] text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-[#000000] flex items-center justify-center shadow-lg transition-all border border-[#C89B3C]/40 z-10">
                        <FaBuilding className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white text-base font-extrabold tracking-wide group-hover:text-[#C89B3C] transition-colors">
                        Completed Property
                      </h4>
                      <p className="text-slate-400 text-xs font-medium">Delivered prime developments</p>
                    </div>
                  </div>

                  {/* Right: Animated Counter */}
                  <div className="text-right shrink-0">
                    <span className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#C89B3C] transition-colors tracking-tight">
                      <AnimatedCounter target={50} suffix=" Lac+" inView={inView} />
                    </span>
                  </div>
                </div>

                {/* Bottom Gold Meter Bar */}
                <div className="mt-4 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#C89B3C]/40 to-[#C89B3C] rounded-full"
                  />
                </div>
              </motion.div>

              {/* Stat Row 2: Property Sales (Highlighted Gold Ambient Row) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-r from-[#000000] via-[#161c28] to-[#000000] backdrop-blur-2xl border-2 border-[#C89B3C] rounded-3xl p-6 shadow-2xl transition-all duration-300 group relative overflow-hidden scale-[1.02]"
              >
                {/* Glowing Top Gold Accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-[#C89B3C] shadow-[0_0_15px_#C89B3C]" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 relative z-10">
                  {/* Left: Circular Gold Dial & Label */}
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-[#C89B3C]/30 blur-md animate-pulse" />
                      <div className="w-14 h-14 rounded-full bg-[#C89B3C] text-[#000000] flex items-center justify-center shadow-xl transition-all border border-white/30 z-10">
                        <FaHome className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white text-base font-extrabold tracking-wide">
                        Property Sales
                      </h4>
                      <p className="text-[#C89B3C] text-xs font-bold uppercase tracking-wider">Top Featured Metric</p>
                    </div>
                  </div>

                  {/* Right: Animated Counter */}
                  <div className="text-right shrink-0">
                    <span className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(200,155,60,0.4)]">
                      <AnimatedCounter target={7600} suffix=" +" inView={inView} />
                    </span>
                  </div>
                </div>

                {/* Bottom Full Gold Progress Meter */}
                <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#C89B3C] to-amber-300 rounded-full shadow-[0_0_10px_#C89B3C]"
                  />
                </div>
              </motion.div>

              {/* Stat Row 3: Satisfied Clients */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-white/5 via-white/[0.07] to-transparent backdrop-blur-xl border border-white/10 hover:border-[#C89B3C]/50 rounded-3xl p-6 shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                  {/* Left: Circular Dial & Label */}
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-[#C89B3C]/20 blur-md group-hover:bg-[#C89B3C]/40 transition-all" />
                      <div className="w-14 h-14 rounded-full bg-[#000000] text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-[#000000] flex items-center justify-center shadow-lg transition-all border border-[#C89B3C]/40 z-10">
                        <FaRegComments className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white text-base font-extrabold tracking-wide group-hover:text-[#C89B3C] transition-colors">
                        Satisfied Clients
                      </h4>
                      <p className="text-slate-400 text-xs font-medium">Happy plot buyers & investors</p>
                    </div>
                  </div>

                  {/* Right: Animated Counter */}
                  <div className="text-right shrink-0">
                    <span className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#C89B3C] transition-colors tracking-tight">
                      <AnimatedCounter target={6500} suffix=" +" inView={inView} />
                    </span>
                  </div>
                </div>

                {/* Bottom Gold Meter Bar */}
                <div className="mt-4 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "90%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#C89B3C]/40 to-[#C89B3C] rounded-full"
                  />
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* Reviews / Client Testimonials Section */}
      <section className="py-24 bg-[#ededed] border-t border-slate-300 shadow-md relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#000000] mt-3 tracking-tight">
              What Our <span className="text-[#C89B3C]">Clients</span> Say
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 font-medium">
              Read real feedback from home buyers and investors who trusted Vrindavan Real Estate.
            </p>
            <div className="h-1 w-20 bg-[#C89B3C] mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Desktop View: 3 Horizontal Cards Side by Side */}
          <div className="hidden lg:grid grid-cols-3 gap-8 pt-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-8 pt-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-between text-center relative group"
              >
                {/* Top Border Gold Accent Line */}
                <div className="absolute top-0 inset-x-8 h-1 bg-[#C89B3C] rounded-full group-hover:inset-x-0 transition-all duration-300" />

                {/* Avatar Image Positioned Center Top Border */}
                <div className="relative -mt-10 mb-4 z-10">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#000000] shadow-xl group-hover:scale-105 group-hover:border-[#C89B3C] transition-all duration-300"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#C89B3C] text-[#000000] text-[10px] font-black flex items-center justify-center border border-white">
                    ✓
                  </div>
                </div>

                {/* 5 Stars Rating */}
                <div className="text-[#C89B3C] text-lg tracking-widest mb-3">
                  ★★★★★
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-sm leading-relaxed italic mb-6 flex-grow font-medium">
                  "{item.quote}"
                </p>

                {/* Client Info */}
                <div className="pt-4 border-t border-slate-100 w-full">
                  <h3 className="text-lg font-black text-[#000000] group-hover:text-[#C89B3C] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[#C89B3C] font-extrabold text-xs uppercase tracking-wider mt-0.5">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Medium & Mobile View: Single Active Card with Bottom Arrow Controls */}
          <div className="block lg:hidden pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-8 pt-0 shadow-xl flex flex-col items-center justify-between text-center relative max-w-md mx-auto"
              >
                {/* Top Border Gold Accent Line */}
                <div className="absolute top-0 inset-x-8 h-1 bg-[#C89B3C] rounded-full" />

                {/* Avatar Image Positioned Center Top Border */}
                <div className="relative -mt-10 mb-4 z-10">
                  <img
                    src={testimonials[currentReview].img}
                    alt={testimonials[currentReview].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#000000] shadow-xl"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#C89B3C] text-[#000000] text-[10px] font-black flex items-center justify-center border border-white">
                    ✓
                  </div>
                </div>

                {/* 5 Stars Rating */}
                <div className="text-[#C89B3C] text-lg tracking-widest mb-3">
                  ★★★★★
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-sm leading-relaxed italic mb-6 font-medium">
                  "{testimonials[currentReview].quote}"
                </p>

                {/* Client Info */}
                <div className="pt-4 border-t border-slate-100 w-full">
                  <h3 className="text-lg font-black text-[#000000]">
                    {testimonials[currentReview].name}
                  </h3>
                  <p className="text-[#C89B3C] font-extrabold text-xs uppercase tracking-wider mt-0.5">
                    {testimonials[currentReview].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Arrow Buttons for Mobile & Medium screens */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  setCurrentReview(
                    (prev) => (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="w-12 h-12 rounded-full bg-[#000000] text-white hover:bg-[#C89B3C] hover:text-[#000000] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
                aria-label="Previous Review"
              >
                <FaChevronLeft size={16} />
              </button>

              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReview(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentReview === idx ? "w-7 bg-[#C89B3C]" : "w-2.5 bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentReview((prev) => (prev + 1) % testimonials.length)
                }
                className="w-12 h-12 rounded-full bg-[#000000] text-white hover:bg-[#C89B3C] hover:text-[#000000] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
                aria-label="Next Review"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Locations / Explore Properties Section */}
      <section className="py-24 bg-[#ededed] border-t border-slate-300 shadow-md relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
              PRIME LOCATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#000000] mt-3 tracking-tight">
              Explore Prime Properties in <br />
              <span className="text-[#C89B3C]">Jaipur & Vrindavan</span>
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 font-medium">
              Discover strategic residential and commercial plot developments in the highest-growth corridors.
            </p>
            <div className="h-1 w-20 bg-[#C89B3C] mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Location Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Side 2-Column Grid */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Top Row: 2 Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Card 1: Vasundhara Nagar-II */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative overflow-hidden rounded-3xl h-72 border-2 border-slate-200 hover:border-[#C89B3C] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={top1}
                    alt="Vasundhara Nagar-II"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#000000]/80 backdrop-blur-md text-[#C89B3C] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-[#C89B3C]/30 shadow-md">
                      📍 JAIPUR | 12 PLOTS
                    </span>
                  </div>

                  {/* Gradient Overlay & Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 transition-all duration-300">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-extrabold text-white group-hover:text-[#C89B3C] transition-colors">
                          Vasundhara Nagar-II
                        </h3>
                        <p className="text-slate-300 text-xs font-medium mt-1">
                          Prime Connectivity & Modern Infrastructure
                        </p>
                      </div>
                      <Link
                        to="/properties"
                        className="w-10 h-10 rounded-full bg-[#C89B3C] text-[#000000] group-hover:bg-white flex items-center justify-center transition-all shrink-0 shadow-lg group-hover:scale-110"
                      >
                        <FaChevronRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Sridhar Nagar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group relative overflow-hidden rounded-3xl h-72 border-2 border-slate-200 hover:border-[#C89B3C] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={top2}
                    alt="Sridhar Nagar"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#000000]/80 backdrop-blur-md text-[#C89B3C] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-[#C89B3C]/30 shadow-md">
                      📍 JAIPUR | 8 PLOTS
                    </span>
                  </div>

                  {/* Gradient Overlay & Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 transition-all duration-300">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-extrabold text-white group-hover:text-[#C89B3C] transition-colors">
                          Sridhar Nagar
                        </h3>
                        <p className="text-slate-300 text-xs font-medium mt-1">
                          Strategic Commercial Belt & Gated Sector
                        </p>
                      </div>
                      <Link
                        to="/properties"
                        className="w-10 h-10 rounded-full bg-[#C89B3C] text-[#000000] group-hover:bg-white flex items-center justify-center transition-all shrink-0 shadow-lg group-hover:scale-110"
                      >
                        <FaChevronRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Wide Card: Ajmer Road Expressway */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative overflow-hidden rounded-3xl h-72 border-2 border-slate-200 hover:border-[#C89B3C] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={top4}
                  alt="Ajmer Road Expressway"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#000000]/80 backdrop-blur-md text-[#C89B3C] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-[#C89B3C]/30 shadow-md">
                    📍 HIGHWAY CORRIDOR | 15 PLOTS
                  </span>
                </div>

                {/* Gradient Overlay & Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 transition-all duration-300">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white group-hover:text-[#C89B3C] transition-colors">
                        Ajmer Road Expressway Belt
                      </h3>
                      <p className="text-slate-300 text-xs font-medium mt-1">
                        Rapid appreciation commercial & mega township sector
                      </p>
                    </div>
                    <Link
                      to="/properties"
                      className="w-10 h-10 rounded-full bg-[#C89B3C] text-[#000000] group-hover:bg-white flex items-center justify-center transition-all shrink-0 shadow-lg group-hover:scale-110"
                    >
                      <FaChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side Vertical Tall Card: Urmila Enclave */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative overflow-hidden rounded-3xl h-full min-h-[350px] border-2 border-slate-200 hover:border-[#C89B3C] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={top3}
                alt="Urmila Enclave"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#000000]/80 backdrop-blur-md text-[#C89B3C] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-[#C89B3C]/30 shadow-md">
                  📍 JAIPUR | 5 PLOTS
                </span>
              </div>

              {/* Gradient Overlay & Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 transition-all duration-300">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-[#C89B3C] transition-colors">
                      Urmila Enclave
                    </h3>
                    <p className="text-slate-300 text-xs font-medium mt-1">
                      Peaceful Eco-Friendly Residential Haven
                    </p>
                  </div>
                  <Link
                    to="/properties"
                    className="w-12 h-12 rounded-full bg-[#C89B3C] text-[#000000] group-hover:bg-white flex items-center justify-center transition-all shrink-0 shadow-lg group-hover:scale-110"
                  >
                    <FaChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stories / Latest News & Blog Section */}
      <section className="py-24 bg-[#ededed] border-t border-slate-300 shadow-md relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
              OUR LATEST BLOG
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#000000] mt-3 tracking-tight">
              Latest News & <span className="text-[#C89B3C]">Stories</span>
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 font-medium">
              Stay informed with real estate insights, plot buying tips, and investment market trends in Jaipur.
            </p>
            <div className="h-1 w-20 bg-[#C89B3C] mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Luxury Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#C89B3C] shadow-lg hover:shadow-2xl overflow-hidden group flex flex-col justify-between transition-all duration-500"
              >
                <Link to="/blog-details" className="block flex-grow">
                  {/* Image Container with Floating Date Tag */}
                  <div className="overflow-hidden h-60 relative bg-slate-900">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#000000]/80 backdrop-blur-md text-[#C89B3C] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-[#C89B3C]/30 shadow-md flex items-center gap-1.5">
                        <FaCalendarAlt size={10} />
                        {blog.date}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-extrabold text-[#000000] leading-snug mb-3 group-hover:text-[#C89B3C] transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {blog.desc}
                    </p>
                  </div>
                </Link>

                {/* Card Footer Link */}
                <div className="px-7 pb-7 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[#000000] font-black text-xs uppercase tracking-wider group-hover:text-[#C89B3C] transition-colors">
                    Read Article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#000000] text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-[#000000] flex items-center justify-center transition-all duration-300 shadow-md">
                    <FaChevronRight size={10} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Video & Media Gallery Section (Luxury Dark Theme) */}
      <section className="py-24 bg-[#0B0F17] text-white relative overflow-hidden border-t border-[#C89B3C]/20 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase border border-[#C89B3C]/30 shadow-md">
              PROJECT GALLERY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 tracking-tight">
              Featured Video & <span className="text-[#C89B3C]">Media Highlights</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2 font-medium">
              Take a virtual tour of our site developments and infrastructure progress across Jaipur.
            </p>
            <div className="h-1 w-20 bg-[#C89B3C] mx-auto mt-4 rounded-full" />
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Side (2 Rows) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Top Video Trigger Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl h-72 group border-2 border-white/10 hover:border-[#C89B3C] shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={galleryProjects[0].image}
                  alt="Site Overview Video"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#000000]/50 backdrop-blur-[1px] group-hover:bg-[#000000]/30 transition-all" />

                <a
                  href={galleryProjects[0].link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center flex-col gap-3"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full bg-[#C89B3C]/40 animate-ping" />
                    <div className="w-16 h-16 rounded-full bg-[#C89B3C] text-[#000000] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-2 border-white">
                      <FaPlay className="text-[#000000] text-xl ml-1" />
                    </div>
                  </div>
                  <span className="bg-[#000000]/80 text-[#C89B3C] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-[#C89B3C]/40 shadow-lg">
                    Watch Virtual Site Tour
                  </span>
                </a>
              </motion.div>

              {/* Bottom Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-3xl h-72 group border-2 border-white/10 hover:border-[#C89B3C] shadow-2xl transition-all duration-500 cursor-pointer relative"
              >
                <img
                  src={galleryProjects[1].image}
                  alt="Site Construction"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="bg-[#000000]/80 backdrop-blur-md text-[#C89B3C] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-[#C89B3C]/30 shadow-md">
                    INFRASTRUCTURE PROGRESS
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Tall Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl h-full min-h-[350px] group border-2 border-white/10 hover:border-[#C89B3C] shadow-2xl transition-all duration-500 cursor-pointer relative"
            >
              <img
                src={galleryProjects[2].image}
                alt="Township Gated Sector"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="bg-[#000000]/80 backdrop-blur-md text-[#C89B3C] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-[#C89B3C]/30 shadow-md">
                  GATED SECTOR ENTRANCE
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}



