import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logof from "../assets/Vrinda-logo.png"
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpeg";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 items-start">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="w-32 h-32 p-3 bg-white rounded-full overflow-hidden shadow-2xl mb-6 flex items-center justify-center border-4 border-slate-100">
              <img
                src={logof}
                alt="Vrindavan Real Estate"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-slate-300 leading-relaxed text-sm text-center md:text-left font-medium">
              Shree Vrindavan Real Estate Pvt. Ltd. stands as a beacon of
              excellence in the real estate industry, driven by a passion for
              innovation, quality, and customer satisfaction.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">
              Services
            </h3>

            <div className="space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-2.5 text-sm text-slate-200 hover:text-white hover:translate-x-1.5 transition-all duration-300 group font-semibold"
                >
                  <FaChevronRight size={11} className="text-slate-400 group-hover:text-white" />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Top News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">
              Top News
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3.5 items-center group cursor-pointer">
                <img src={news1} alt="" className="w-14 h-14 object-cover rounded-md shrink-0 shadow-md" />
                <p className="text-white text-xs font-bold leading-snug group-hover:text-slate-300 transition-colors">
                  Vrindavan real estate prices surge
                </p>
              </div>

              <div className="flex gap-3.5 items-center group cursor-pointer">
                <img src={news2} alt="" className="w-14 h-14 object-cover rounded-md shrink-0 shadow-md" />
                <p className="text-white text-xs font-bold leading-snug group-hover:text-slate-300 transition-colors">
                  Gated societies see rising demand
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Now */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">
              Contact Now
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt size={16} className="text-[#0078D4] shrink-0 mt-0.5" />
                <p className="text-slate-200 text-xs font-semibold leading-relaxed">
                  A4, Panchsheel Colony, Opp Diamond Tower, Purani Chungi, Ajmer
                  Road, Jaipur-302019
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <FaPhoneAlt size={14} className="text-[#0078D4] shrink-0" />
                <a href="tel:+917014289408" className="text-slate-200 text-xs font-bold hover:text-white transition-colors">
                  (+91) 7014289408
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope size={14} className="text-[#0078D4] shrink-0" />
                <a
                  href="mailto:info@vrindavanrealestate.in"
                  className="text-slate-200 text-xs font-bold hover:text-white transition-colors"
                >
                  info@vrindavanrealestate.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar (Deep Navy #0A192F to match reference image) */}
      <div className="bg-[#0A192F] py-4 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-4 text-slate-300 text-xs font-semibold">
            <Link to="/" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-slate-500">-----</span>
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <p className="text-slate-300 text-xs font-semibold">
            2026 © All copyright served by Vrindavan Real State
          </p>
        </div>
      </div>
    </footer>
  );
}

