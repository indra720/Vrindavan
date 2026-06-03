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
    <div>
      <div className="bg-[#2e2c2c] text-white border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 ">
          <h1 className="mt-2 text-4xl font-bold">Latest News</h1>
          <div className="flex items-center gap-2 text-md text-gray-400 space-y-2">
            Home <span className="text-gray-500">::</span> Blog
          </div>
        </div>
      </div>

      <section className="py-24 bg-[#f8f8f8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="bg-white shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div className="overflow-hidden h-70">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-4">
                    <FaCalendarAlt />
                    {blog.date}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-5 group-hover:text-blue-600 transition-all">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 leading-8 mb-6">{blog.desc}</p>
                  <Link
                    to={`/blog/${encodeURIComponent(blog.title)}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_0.9fr] gap-8 ">
            {/* Left Side */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl font-semibold text-black mb-10"
              >
                Featured Story
              </motion.h2>

              <div className="overflow-hidden rounded-lg shadow-lg mb-10">
                <img
                  src={blog4}
                  alt="Property"
                  className="w-full h-auto object-cover"
                />
              </div>

              {blogContent.map((item, index) => (
                <div key={index} className="mb-8">
                  <motion.h2
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl py-4 font-semibold text-black"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-8">
              <div className="bg-gray-200 shadow-lg overflow-hidden relative">
                <div className="h-52 bg-[#0d5bd7] rounded-b-[140px] flex items-start justify-center pt-8">
                  <h3 className="text-white text-3xl font-bold">Agent Info</h3>
                </div>
                <div className="flex justify-center -mt-24 relative z-10">
                  <img
                    src={himanshu}
                    alt="Agent"
                    className="w-44 h-44 rounded-full border-8 border-white object-contain"
                  />
                </div>
                <div className="px-8 pb-10 text-center">
                  <h3 className="text-3xl font-bold text-[#2674f1]">
                    Himanshu Singh
                  </h3>
                  <p className="text-md text-gray-600 mt-2">CEO & Founder</p>
                  <div className="mt-6 text-gray-700 text-lg">
                    📞 +91 7014289408
                  </div>
                  <button className="mt-10 bg-[#002f6c] text-white px-8 py-4 text-lg font-semibold hover:bg-[#001d43] transition">
                    Contact Us
                  </button>
                </div>
              </div>

              <div className="bg-gray-200 p-10">
                <h3 className="text-xl font-bold text-[#0d5bd7] mb-10">
                  Popular Properties
                </h3>
                {[
                  { title: "Affordable Plots", location: "Vasundhara Nagar", img: vasundhara },
                  { title: "Most Luxurious", location: "Ajmer Road", img: shreedhar },
                  { title: "Prime Residential", location: "Sikar Road", img: urmila },
                ].map((prop, idx) => (
                  <div key={idx} className="flex gap-5 mb-10">
                    <img src={prop.img} alt="" className="w-20 h-20 object-contain" />
                    <div>
                      <h4 className="text-xl font-semibold">{prop.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">{prop.location}</p>
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
