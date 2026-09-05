import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-[#ededed]">
      {/* Hero Banner */}
      <div className="bg-[#000000] text-white py-14 border-b border-[#C89B3C]/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase border border-[#C89B3C]/30 shadow-md">
            GET IN TOUCH
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-[#C89B3C]">Vrindavan Real Estate</span>
          </h1>
          <div className="flex items-center gap-2 text-sm text-slate-300 font-semibold mt-3">
            <Link to="/" className="hover:text-[#C89B3C] transition-colors">Home</Link>
            <span className="text-[#C89B3C]">•</span>
            <span className="text-white font-extrabold">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Cards & Map Section */}
      <section className="py-20 bg-[#ededed]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Side */}
            <div className="space-y-6">
              {/* Representative Office */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border-2 border-slate-200 hover:border-[#C89B3C] rounded-3xl p-8 shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C89B3C]" />
                <span className="px-3.5 py-1 rounded-full bg-[#000000] text-[#C89B3C] font-black text-xs tracking-widest uppercase shadow-md mb-4 inline-block">
                  HEADQUARTERS
                </span>
                <h2 className="text-2xl font-black text-[#000000] mb-4">
                  Representative Office
                </h2>

                <p className="text-base leading-relaxed text-slate-700 font-medium mb-4">
                  A4, Panchsheel Colony, Opp Diamond Tower, Purani Chungi, Ajmer
                  Road, Jaipur - 302019
                </p>

                <a href="tel:+917014289408" className="text-lg font-black text-[#000000] hover:text-[#C89B3C] transition-colors mb-2 block">
                  📞 (+91) 7014289408
                </a>

                <a href="mailto:info@vrindavanrealestate.in" className="text-base font-extrabold text-[#C89B3C] hover:underline">
                  ✉ info@vrindavanrealestate.in
                </a>
              </motion.div>

              {/* Business Contacts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border-2 border-slate-200 hover:border-[#C89B3C] rounded-3xl p-8 shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C89B3C]" />
                <span className="px-3.5 py-1 rounded-full bg-[#000000] text-[#C89B3C] font-black text-xs tracking-widest uppercase shadow-md mb-4 inline-block">
                  DIRECT LINE
                </span>
                <h2 className="text-2xl font-black text-[#000000] mb-4">
                  Business Contacts
                </h2>

                <a href="tel:+917014289408" className="text-lg font-black text-[#000000] hover:text-[#C89B3C] transition-colors mb-2 block">
                  📞 (+91) 7014289408
                </a>

                <a href="mailto:info@vrindavanrealestate.in" className="text-base font-extrabold text-[#C89B3C] hover:underline">
                  ✉ info@vrindavanrealestate.in
                </a>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-lg flex flex-wrap items-center justify-between gap-4"
              >
                <h3 className="text-lg font-black text-[#000000]">
                  Official Social Channels:
                </h3>

                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/vrindavanrealestatejaipur/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#000000] text-[#C89B3C] flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#000000] transition-all shadow-md"><FaFacebookF size={16} /></a>
                  <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#000000] text-[#C89B3C] flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#000000] transition-all shadow-md"><FaTwitter size={16} /></a>
                  <a href="https://www.instagram.com/vrindavan_real_estatejaipur/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#000000] text-[#C89B3C] flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#000000] transition-all shadow-md"><FaInstagram size={16} /></a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#000000] text-[#C89B3C] flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#000000] transition-all shadow-md"><FaLinkedinIn size={16} /></a>
                </div>
              </motion.div>
            </div>

            {/* Right Side Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl border-2 border-slate-200 shadow-xl bg-white p-2"
            >
              <iframe
                title="Vrindavan Real Estate Location"
                src="https://www.google.com/maps?q=Panchsheel+Colony+Jaipur&output=embed"
                width="100%"
                height="560"
                loading="lazy"
                className="border-0 rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-white border-t border-slate-300"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
              SEND MESSAGE
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#000000] mt-3 tracking-tight">
              Feel Free To Contact Us <span className="text-[#C89B3C]">Anytime</span>
            </h2>
            <div className="h-1 w-20 bg-[#C89B3C] mx-auto mt-4 rounded-full" />
          </div>

          <form className="space-y-6 bg-[#ededed] border border-slate-300 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full border border-slate-300 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full border border-slate-300 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="w-full border border-slate-300 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium"
              />
              <input
                type="text"
                placeholder="Subject / Property Name"
                className="w-full border border-slate-300 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium"
              />
            </div>

            <textarea
              placeholder="Your Inquiry Message *"
              rows={5}
              required
              className="w-full border border-slate-300 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 resize-none text-sm font-medium"
            />

            <button
              type="submit"
              className="bg-[#000000] hover:bg-[#C89B3C] text-white hover:text-[#000000] px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-xl transition-all duration-300 cursor-pointer"
            >
              Send Message Now
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}

