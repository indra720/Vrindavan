import { Link } from "react-router-dom";
import PageHeader from "../shared/PageHeader";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Ultra-Luxury Page Header */}
      <PageHeader 
        badge="GET IN TOUCH"
        title="Contact"
        goldTitle="Vrindavan Real Estate"
        subtitle="Schedule a Property Site Visit or Speak Directly with Our Real Estate Investment Consultants"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Contact Us" }]}
      />

      {/* Contact Cards & Map Section */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA]">
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
                className="bg-white border border-slate-200/80 hover:border-[#C89B3C]/50 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-[#C89B3C]" />
                <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-4">
                  HEADQUARTERS
                </span>
                <h2 className="text-2xl font-bold text-[#000000] mb-3">
                  Representative Office
                </h2>

                <p className="text-base leading-relaxed text-slate-600 font-medium mb-4">
                  A4, Panchsheel Colony, Opp Diamond Tower, Purani Chungi, Ajmer
                  Road, Jaipur - 302019
                </p>

                <a href="tel:+917014289408" className="text-lg font-bold text-[#000000] hover:text-[#C89B3C] transition-colors mb-2 block">
                  📞 (+91) 7014289408
                </a>

                <a href="mailto:info@vrindavanrealestate.in" className="text-base font-semibold text-[#C89B3C] hover:underline">
                  ✉ info@vrindavanrealestate.in
                </a>
              </motion.div>

              {/* Business Contacts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-slate-200/80 hover:border-[#C89B3C]/50 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-[#C89B3C]" />
                <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-4">
                  DIRECT LINE
                </span>
                <h2 className="text-2xl font-bold text-[#000000] mb-3">
                  Business Contacts
                </h2>

                <a href="tel:+917014289408" className="text-lg font-bold text-[#000000] hover:text-[#C89B3C] transition-colors mb-2 block">
                  📞 (+91) 7014289408
                </a>

                <a href="mailto:info@vrindavanrealestate.in" className="text-base font-semibold text-[#C89B3C] hover:underline">
                  ✉ info@vrindavanrealestate.in
                </a>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-wrap items-center justify-between gap-4"
              >
                <h3 className="text-lg font-bold text-[#000000]">
                  Official Social Channels:
                </h3>

                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/vrindavanrealestatejaipur/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#000000] text-[#C89B3C] flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#000000] transition-all shadow-sm"><FaFacebookF size={16} /></a>
                  <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#000000] text-[#C89B3C] flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#000000] transition-all shadow-sm"><FaTwitter size={16} /></a>
                  <a href="https://www.instagram.com/vrindavan_real_estatejaipur/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#000000] text-[#C89B3C] flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#000000] transition-all shadow-sm"><FaInstagram size={16} /></a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-2xl bg-[#000000] text-[#C89B3C] flex items-center justify-center hover:bg-[#C89B3C] hover:text-[#000000] transition-all shadow-sm"><FaLinkedinIn size={16} /></a>
                </div>
              </motion.div>
            </div>

            {/* Right Side Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-sm bg-white p-2.5"
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
        className="py-16 sm:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-3">
              SEND MESSAGE
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] tracking-tight">
              Feel Free To Contact Us <span className="text-[#C89B3C]">Anytime</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#C89B3C] mx-auto mt-3 rounded-full" />
          </div>

          <form className="space-y-6 bg-[#F8F9FA] border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full border border-slate-200 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium transition-all"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full border border-slate-200 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="w-full border border-slate-200 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium transition-all"
              />
              <input
                type="text"
                placeholder="Subject / Property Name"
                className="w-full border border-slate-200 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-sm font-medium transition-all"
              />
            </div>

            <textarea
              placeholder="Your Inquiry Message *"
              rows={5}
              required
              className="w-full border border-slate-200 rounded-2xl p-4 bg-white text-slate-800 outline-none focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 resize-none text-sm font-medium transition-all"
            />

            <button
              type="submit"
              className="bg-[#000000] hover:bg-[#C89B3C] text-white hover:text-[#000000] px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Send Message Now
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}

