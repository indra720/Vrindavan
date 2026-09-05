import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blog1 from "../assets/blog1.avif";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog_3.webp";
import blog4 from "../assets/blog4.jpg";
import {
  FaCalendarAlt,
} from "react-icons/fa";
import vasundhara from "../assets/vasundra.png";
import shreedhar from "../assets/shreedhar.jpg";
import urmila from "../assets/urmila.png";
import himanshu from "../assets/himanshu.jpg";

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

const blogContent = [
  {
    title: "The Future of Real Estate Investment in Jaipur",
    content: "Jaipur's real estate market is booming, attracting investors from all over the country. Known for its cultural heritage and rapid modernization, Jaipur offers a mix of traditional and contemporary lifestyles, making it a hotspot for real estate investment. Here’s a look at the future trends in Jaipur’s real estate market.",
  },
  {
    title: "Growth of Suburban Areas",
    content: "As Jaipur's city center becomes increasingly crowded, many investors are looking towards suburban areas like Vrindavan and Urmila Enclave. These areas offer larger plot sizes, better affordability, and a peaceful living environment. With upcoming infrastructure projects, these locations are expected to see significant growth in property values.",
  },
  {
    title: "Increased Demand for Residential Plots",
    content: "There has been a rising demand for residential plots in Jaipur as more people prefer to build custom homes that cater to their specific needs. Locations such as Vasundhara Nagar are seeing a surge in interest due to their flexibility and potential for future appreciation.",
  },
  {
    title: "Commercial Real Estate Opportunities",
    content: "Jaipur’s rapid industrial growth is also increasing the demand for commercial spaces. Businesses are expanding, and new commercial hubs are being developed in areas like Sridhar Nagar, creating opportunities for investors interested in the commercial real estate market.",
  },
  {
    title: "Rise in Eco-Friendly and Sustainable Projects",
    content: "Sustainability is becoming a major trend in the real estate industry. Developers are now focusing on eco-friendly projects, using energy-efficient materials, rainwater harvesting, and solar power. This trend is expected to grow, making environmentally conscious properties more valuable.",
  },
  {
    title: "Increased Connectivity and Infrastructure Development",
    content: "With upcoming metro projects, highway expansions, and improved connectivity to neighboring cities, Jaipur’s real estate market is poised for exponential growth. Locations that benefit from these developments will see higher demand and better returns on investment.",
  },
  {
    title: "Conclusion",
    content: "Choosing the right location is the foundation of successful real estate investment. By considering factors such as amenities, infrastructure, and safety, you can ensure that your property will hold its value and continue to appreciate over time.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#F4F6FA]">
      <div className="bg-[#111827] text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            REAL ESTATE INSIGHTS
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">Latest News</h1>
          <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-500">•</span>
            <span className="text-white font-semibold">Blog</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-[#F4F6FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-[#4F46E5] font-extrabold text-xs tracking-widest uppercase border border-indigo-100">
              OUR LATEST BLOG
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0C102A] mt-4">
              Latest News & Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-indigo-950/5 overflow-hidden group hover:shadow-2xl hover:border-indigo-300 transition-all duration-500 flex flex-col"
              >
                <div className="overflow-hidden h-60 relative bg-slate-100">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-7 flex flex-col grow">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs mb-3">
                    <FaCalendarAlt />
                    {blog.date}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0C102A] leading-snug mb-3 group-hover:text-[#4F46E5] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">{blog.desc}</p>
                  <Link
                    to={`/blog/${encodeURIComponent(blog.title)}`}
                    className="inline-flex items-center gap-2 text-[#4F46E5] font-extrabold text-xs uppercase tracking-wider hover:gap-3 transition-all pt-4 border-t border-slate-100 mt-auto"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-200/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_0.9fr] gap-10">
            {/* Left Side */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-[#D97706] font-extrabold text-xs tracking-wider uppercase border border-amber-200/60 mb-4">
                FEATURED ARTICLE
              </span>
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-black text-[#0C102A] mb-8"
              >
                Featured Story
              </motion.h2>

              <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 mb-10">
                <img
                  src={blog4}
                  alt="Property"
                  className="w-full h-auto object-cover"
                />
              </div>

              {blogContent.map((item, index) => (
                <div key={index} className="mb-8 bg-[#F4F6FA] border border-slate-200/80 rounded-3xl p-6">
                  <motion.h2
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-extrabold text-[#0C102A] mb-3 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4F46E5]"></span>
                    {item.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-8">
              <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden relative">
                <div className="h-44 bg-[#111827] rounded-b-[100px] flex items-start justify-center pt-8 border-b border-slate-800">
                  <h3 className="text-white text-2xl font-extrabold tracking-wide">Agent Info</h3>
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
                  <Link 
                    to="/contact"
                    className="mt-8 inline-block w-full bg-[#111827] hover:bg-black text-white py-3.5 rounded-2xl text-xs font-extrabold tracking-wider uppercase shadow-md transition-all text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-indigo-950/5">
                <h3 className="text-xl font-extrabold text-[#0C102A] mb-8 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                  Popular Properties
                </h3>
                {[
                  { title: "Affordable Plots", location: "Vasundhara Nagar", img: vasundhara },
                  { title: "Most Luxurious", location: "Ajmer Road", img: shreedhar },
                  { title: "Prime Residential", location: "Sikar Road", img: urmila },
                ].map((prop, idx) => (
                  <div key={idx} className="flex gap-4 mb-6 items-center last:mb-0">
                    <img src={prop.img} alt="" className="w-20 h-16 object-cover rounded-xl border border-slate-200 shrink-0" />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0C102A]">{prop.title}</h4>
                      <p className="text-slate-500 text-xs font-medium mt-1">{prop.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

