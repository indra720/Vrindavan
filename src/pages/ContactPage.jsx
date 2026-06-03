import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#2e2c2c] border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="mt-2 text-4xl font-bold text-white">Contact Us</h1>

          <div className="flex items-center gap-2 text-md text-gray-400">
            Home <span>::</span> Contact Us
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div>
              {/* Representative Office */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-[#1d1d1d] mb-8">
                  Representative Office
                </h2>

                <p className="text-xl leading-relaxed text-gray-800 mb-8">
                  A4, Panchsheel Colony, Opp Diamond Tower, Purani Chungi, Ajmer
                  Road, Jaipur - 302019
                </p>

                <p className="text-2xl text-gray-800 mb-8">(+91) 7014289408</p>

                <p className="text-2xl text-gray-800 mb-20">
                  info@vrindavanrealestate.in
                </p>
              </motion.div>

              {/* Business Contacts */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-[#1d1d1d] mb-8">
                  Business Contacts
                </h2>

                <p className="text-2xl text-gray-800 mb-8">(+91) 7014289408</p>

                <p className="text-2xl text-gray-800 mb-20">
                  info@vrindavanrealestate.in
                </p>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex flex-wrap items-center gap-6"
              >
                <h3 className="text-2xl font-bold text-[#0d5bd7]">
                  Social Media:
                </h3>

                <FaFacebookF
                  size={20}
                  className="cursor-pointer hover:text-blue-600 transition"
                />

                <FaTwitter
                  size={20}
                  className="cursor-pointer hover:text-sky-500 transition"
                />

                <FaInstagram
                  size={20}
                  className="cursor-pointer hover:text-pink-500 transition"
                />

                <FaLinkedinIn
                  size={20}
                  className="cursor-pointer hover:text-blue-700 transition"
                />
              </motion.div>
            </div>

            {/* Right Side Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="overflow-hidden shadow-md"
            >
              <iframe
                title="Vrindavan Real Estate Location"
                src="https://www.google.com/maps?q=Panchsheel+Colony+Jaipur&output=embed"
                width="100%"
                height="620"
                loading="lazy"
                className="border-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* form  */}

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[#f5f5f5]"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[#0d5bd7] font-semibold text-xl mb-4"
          >
            Get A Quote
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-2xl md:text-3xl font-bold mb-14"
          >
            Feel Free To Contact
            <br />
            With Us Any Time.
          </motion.h2>

          <form className="space-y-8">
            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.input
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                type="text"
                placeholder="Name"
                className="border border-gray-400 px-5 py-4 w-full outline-none"
              />

              <motion.input
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                type="email"
                placeholder="Email"
                className="border border-gray-400 px-5 py-4 w-full outline-none"
              />
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.input
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                type="text"
                placeholder="Number"
                className="border border-gray-400 px-5 py-4 w-full outline-none"
              />

              <motion.input
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                type="text"
                placeholder="Subject"
                className="border border-gray-400 px-5 py-4 w-full outline-none"
              />
            </div>

            {/* Message */}
            <motion.textarea
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              rows={10}
              placeholder="Message"
              className="border border-gray-400 px-5 py-4 w-full outline-none resize-none"
            />

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#003b82] text-white px-10 py-4 font-semibold"
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
