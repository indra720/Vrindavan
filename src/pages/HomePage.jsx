import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaSearch,
  FaBuilding,
  FaHome,
  FaRegComments,
  FaPlay,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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

export default function HomePage() {
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
    <div className="bg-white text-dark relative">
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

      {/* Investment Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Investment Process with <br />
              <span className="text-gray-900">Vrindavan Real Estate</span>
            </h2>
            <div className="h-1 w-24 bg-yellow-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {investmentSteps.map((item, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className=" p-8 transition-all duration-500 group"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-24 h-24  rounded-2xl flex items-center justify-center p-3 shrink-0">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-contain"
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
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-white text-lg font-semibold mb-4">
              Properties No
            </p>

            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
              Funfacts Vrindavan Real
              <br />
              Estate
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <FaBuilding className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-white text-5xl font-bold mb-4">50 Lac+</h3>

              <p className="text-white text-xl">Completed Property</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <FaRegComments className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-white text-5xl font-bold mb-4">6500+</h3>

              <p className="text-white text-xl">Satisfied Clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Pure White */}
      <section className="py-24 bg-[#f5f1f1] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              What Our <span className="text-blue-600">Clients</span> Say
            </h2>
          </div>

          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-[30px] shadow-lg p-10 max-w-5xl w-auto"
              >
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* Left */}

                  <div className="text-center">
                    <img
                      src={testimonials[currentReview].img}
                      alt=""
                      className="w-30 h-30 rounded-2xl object-cover mx-auto mb-6"
                    />

                    <h3 className="text-2xl font-bold mb-2">
                      {testimonials[currentReview].name}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      "{testimonials[currentReview].quote}"
                    </p>
                  </div>

                  {/* Right */}

                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-3xl font-bold mb-10">
                      Satisfied Client
                    </h3>

                    <div className="text-yellow-500 text-5xl">★★★★★</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Top Areas Section */}
      <section className="py-10 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-semibold text-lg mb-3">
              Top Areas
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore Properties
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-7">
            {/* Left Side */}

            <div className="lg:col-span-2">
              {/* Top Row */}

              <div className="grid md:grid-cols-2 gap-7 mb-7">
                {/* Left Image */}

                <motion.div
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="group relative overflow-hidden rounded-xl h-67.5 cursor-pointer"
                >
                  <img
                    src={top1}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </motion.div>

                {/* Right Image */}

                <motion.div
                  initial={{ opacity: 0, x: 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="group relative overflow-hidden rounded-xl h-67.5 cursor-pointer"
                >
                  <img
                    src={top2}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </motion.div>
              </div>

              {/* Bottom Image */}

              <motion.div
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="group relative overflow-hidden rounded-xl h-80 cursor-pointer"
              >
                <img
                  src={top4}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Right Side Vertical */}

            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="group relative overflow-hidden rounded-xl h-154.25 cursor-pointer"
            >
              <img
                src={top3}
                alt=""
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Review our clients */}
      <section
        className="py-24 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${reviewBg})`,
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl bg-[#072f4a] rounded-sm shadow-2xl p-10 md:p-16">
              <div className="grid lg:grid-cols-[280px_1fr] gap-12">
                {/* Left Side */}

                <div>
                  <p className="text-white text-lg font-semibold mb-8">
                    Testimonial
                  </p>

                  <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                    Review Our
                    <br />
                    Clients
                  </h2>
                </div>

                {/* Right Side */}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={clientReview}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 120 : -120,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -120 : 120,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Top Info */}

                    <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                      <div className="w-27.5 h-32.5 overflow-hidden rounded-xl shrink-0 border-2 border-white/10">
                        <img
                          src={testimonials[clientReview].img}
                          alt={testimonials[clientReview].name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <div className="text-yellow-400 text-xl mb-2">
                          ★★★★★
                        </div>

                        <p className="text-white/70 uppercase tracking-widest text-sm mb-2">
                          Verified Client
                        </p>

                        <h3 className="text-white text-3xl font-bold">
                          {testimonials[clientReview].name}
                        </h3>
                      </div>
                    </div>

                    {/* Review */}

                    <p className="text-white/90 text-lg md:text-xl leading-9 max-w-4xl mt-8">
                      "{testimonials[clientReview].quote}"
                    </p>

                    {/* Buttons */}

                    <div className="flex justify-end gap-3 mt-10">
                      <button
                        onClick={prevReview}
                        className="bg-black/40 hover:bg-black px-6 py-3 rounded-lg text-white transition-all"
                      >
                        ← Prev
                      </button>

                      <button
                        onClick={nextReview}
                        className="bg-white text-[#072f4a] hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition-all"
                      >
                        Next →
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section - Soft Stone Bg */}
      <section className="py-24 bg-[#f8f8f8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-semibold text-lg mb-3">
              Our Latest Blog
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Latest News & Stories
            </h2>
          </motion.div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
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
                  delay: idx * 0.15,
                }}
                className="bg-white shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <Link to="/blog-details" className="block">
                  {/* Image */}
                  <div className="overflow-hidden h-70">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-4">
                      <FaCalendarAlt />
                      {blog.date}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-5 group-hover:text-blue-600 transition-all">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 leading-8 mb-6">{blog.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Pure White Cards on Soft Stone Bg */}
      <section className="py-24 bg-secondary border-t border-border overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-1">
            {/* Left Side */}

            <div className="lg:col-span-2">
              {/* Top Video Card */}

              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden  h-80 mb-2 group"
              >
                <img
                  src={galleryProjects[0].image}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20" />

                <a
                  href={galleryProjects[0].link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-xl">
                    <FaPlay className="text-white text-3xl ml-1" />
                  </div>
                </a>
              </motion.div>

              {/* Bottom Image Card */}

              <motion.div
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden  h-80 group"
              >
                <img
                  src={galleryProjects[1].image}
                  alt=""
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Right Tall Card */}

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden  h-161 group"
            >
              <img
                src={galleryProjects[2].image}
                alt=""
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
