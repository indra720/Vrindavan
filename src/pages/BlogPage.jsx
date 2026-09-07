import { Link } from "react-router-dom";
import PageHeader from "../shared/PageHeader";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { blogsData } from "../data/blogData";
import vasundhara from "../assets/vasundra.png";
import shreedhar from "../assets/shreedhar.jpg";
import urmila from "../assets/urmila.png";
import himanshu from "../assets/himanshu.jpg";
import blog4 from "../assets/blog4.jpg";

const blogsList = Object.values(blogsData);
const featuredBlog = blogsData["The Future of Real Estate Investment in Jaipur"];

export default function BlogPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Ultra-Luxury Page Header */}
      <PageHeader 
        badge="REAL ESTATE INSIGHTS"
        title="Latest"
        goldTitle="News & Articles"
        subtitle="Expert Opinions, Market Trends & Plot Investment Advice in Jaipur & Vrindavan Corridor"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
      />

      <section className="py-20 bg-[#F8F9FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-3">
              OUR LATEST BLOG
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] tracking-tight">
              Latest News & Stories
            </h2>
            <div className="h-0.5 w-16 bg-[#C89B3C] mx-auto mt-3 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsList.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden group hover:shadow-md hover:border-[#C89B3C] transition-all duration-500 flex flex-col"
              >
                <div className="overflow-hidden h-60 relative bg-slate-900 p-2">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-contain rounded-2xl transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 flex flex-col grow">
                  <div className="flex items-center gap-2 text-[#C89B3C] font-medium text-xs mb-3">
                    <FaCalendarAlt />
                    {blog.date}
                  </div>
                  <h3 className="text-lg font-bold text-[#000000] leading-snug mb-3 group-hover:text-[#C89B3C] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 grow font-normal">{blog.desc}</p>
                  <Link
                    to={`/blog/${encodeURIComponent(blog.title)}`}
                    className="inline-flex items-center gap-2 text-[#C89B3C] font-semibold text-xs uppercase tracking-wider hover:gap-3 hover:text-[#000000] transition-all pt-4 border-t border-slate-100 mt-auto"
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
            {/* Left Side: Featured Article */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-wider uppercase border border-[#C89B3C]/30 mb-4">
                FEATURED ARTICLE
              </span>
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold text-[#000000] mb-8 tracking-tight"
              >
                {featuredBlog.title}
              </motion.h2>

              <div className="overflow-hidden rounded-3xl shadow-sm border border-slate-200/80 mb-10 bg-slate-900 p-3">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-auto max-h-[480px] object-contain rounded-2xl mx-auto"
                />
              </div>

              <div className="mb-8 bg-[#F8F9FA] border border-slate-200/80 rounded-3xl p-6">
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  {featuredBlog.intro}
                </p>
              </div>

              {featuredBlog.sections.map((sec, idx) => (
                <div key={idx} className="mb-8 bg-[#F8F9FA] border border-slate-200/80 rounded-3xl p-6">
                  <motion.h2
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-bold text-[#000000] mb-3 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#C89B3C]"></span>
                    {sec.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {sec.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Right Side Sidebar */}
            <div className="flex flex-col gap-8">
              {/* Himanshu Singh CEO Card (Exact Match to Reference Screenshot) */}
              <div className="bg-white border-2 border-slate-200 rounded-3xl shadow-xl overflow-hidden relative">
                <div className="h-44 bg-[#000000] rounded-b-[100px] flex items-start justify-center pt-8 border-b border-[#C89B3C]/30">
                  <h3 className="text-[#C89B3C] text-2xl font-black tracking-wider uppercase">
                    VRINDA REAL ESTATE
                  </h3>
                </div>

                <div className="flex justify-center -mt-20 relative z-10">
                  <img
                    src={himanshu}
                    alt="Himanshu Singh"
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
                    CONTACT US NOW
                  </Link>
                </div>
              </div>

              {/* Popular Properties Widget */}
              <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#000000] mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C89B3C]"></span>
                  Popular Properties
                </h3>
                {[
                  { title: "Affordable Plots", location: "Vasundhara Nagar", img: vasundhara },
                  { title: "Most Luxurious", location: "Ajmer Road", img: shreedhar },
                  { title: "Prime Residential", location: "Sikar Road", img: urmila },
                ].map((prop, idx) => (
                  <div key={idx} className="flex gap-4 mb-6 items-center last:mb-0">
                    <img src={prop.img} alt="" className="w-20 h-16 object-contain p-1 bg-slate-900 rounded-xl border border-slate-200 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#000000]">{prop.title}</h4>
                      <p className="text-slate-500 text-xs font-normal mt-1">{prop.location}</p>
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

