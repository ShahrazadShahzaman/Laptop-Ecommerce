import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer, slideLeft, slideRight } from "../Animations/Variants";
import { Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "../Components/PageBanner";


const ContactUs = () => {
  return (
    <>
    <PageBanner title="Contact US" subtitle="Open to Answer Your Questions" />
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-[#F9FAFB]"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={slideRight}
          className="space-y-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#244D61]"
          >
           Let's Talk!
          </h2>
          <p className="text-gray-600">
          Have questions, suggestions, or just want to say hello? Reach out to us and we’ll get back to you soon.
          </p>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <Mail className="text-[#5689C0]"/>
              <span>support@lapshop.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="text-[#5689C0]"/>
              <span>+92 300 1234567</span>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="text-[#5689C0]"/>
              <span>Lahore, Pakistan</span>
            </div>
          </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={slideLeft} className="flex justify-center">
            <motion.form
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full bg-white p-8 rounded-xl shadow-lg space-y-6"
            >
              <motion.input
                variants={fadeIn}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#244D61] focus:outline-none"
              />

              <motion.input
                variants={fadeIn}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#244D61] focus:outline-none"
              />

              <motion.textarea
                variants={fadeIn}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#244D61] focus:outline-none"
              />

              <motion.button
                variants={fadeUp}
                type="submit"
                className="w-full py-3 bg-[#5689C0] text-white rounded-md hover:bg-[#244D61] transition-all duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
export default ContactUs;
