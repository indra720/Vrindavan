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
    <footer className="bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Logo Section */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-40 h-40 p-8 bg-white rounded-full overflow-hidden border-4 border-white/20 mb-8">
              <img
                src={logof}
                alt="Vrindavan Real Estate"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-gray-300 leading-10 text-sm">
              Shree Vrindavan Real Estate Pvt. Ltd. stands as a beacon of
              excellence in the real estate industry, driven by a passion for
              innovation, quality, and customer satisfaction.
            </p>
          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-10">Services</h3>

            <div className="space-y-5">
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition"
                >
                  <FaChevronRight />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Top News */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-10">Top News</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <img src={news1} alt="" className="w-24 h-20 object-cover" />

                <p className="text-gray-300 text-sm leading-8">
                  Vrindavan real estate prices surge
                </p>
              </div>

              <div className="flex gap-4">
                <img src={news2} alt="" className="w-24 h-20 object-cover" />

                <p className="text-gray-300 text-sm leading-8">
                  Gated societies see rising demand
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-10">Contact Now</h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-blue-500 mt-2 text-xl shrink-0" />
                <p className="text-gray-300 text-sm leading-8">
                  A4, Panchsheel Colony, Opp Diamond Tower, Purani Chungi, Ajmer
                  Road, Jaipur - 302019
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <FaPhoneAlt className="text-blue-500" />
                <a href="tel:+917014289408" className="text-gray-300 text-sm">
                  (+91) 7014289408
                </a>
              </div>

              <div className="flex gap-4 items-center">
                <FaEnvelope className="text-blue-500" />
                <a
                  href="mailto:info@vrindavanrealestate.in"
                  className="text-gray-300 text-sm"
                >
                  info@vrindavanrealestate.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}

      <div className="bg-[#052d47] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8 text-white text-sm">
            <Link to="/">Terms & Conditions</Link>
            <span>-----</span>
            <Link to="/">Privacy Policy</Link>
          </div>

          <p className="text-white text-sm">
            2026 © All copyright served by Vrindavan Real Estate
          </p>
        </div>
      </div>
    </footer>
  );
}
