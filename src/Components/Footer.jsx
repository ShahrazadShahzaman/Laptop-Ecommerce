import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/" },
];

const Footer = () => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-t from-[#244D61] to-[#1e3a4c] text-[#EAEBED] py-14 px-4"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              <Link to="/" className="hover:text-[#75E2FF]">
                LapShop
              </Link>
            </h2>
            <p className="text-[#EAEBED]/90 leading-relaxed">
              Discover the latest and greatest in business, gaming, and student
              laptops-curated for every need.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#75E2FF] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Contact", "Cart"].map((page) => (
                <li key={page}>
                  <Link
                    to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                    className="hover:text-[#75E2FF] transition"
                  >
                    {page}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/categories"
                  className="hover:text-[#75E2FF] transition"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Media & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-[#75E2FF] mb-4">
              Connect&nbsp;With&nbsp;Us
            </h3>

            {/* SOCIAL ICONS MAPPING WITH LINKS */}
            <div className="flex space-x-4 mb-6">
              {[
                {
                  name: "Facebook",
                  icon: Facebook,
                  url: "https://facebook.com/yourpage",
                },
                {
                  name: "Instagram",
                  icon: Instagram,
                  url: "https://instagram.com/yourpage",
                },
                {
                  name: "Twitter",
                  icon: Twitter,
                  url: "https://twitter.com/yourpage",
                },
                {
                  name: "LinkedIn",
                  icon: Linkedin,
                  url: "https://linkedin.com/in/yourpage",
                },
              ].map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="bg-[#5689C0]/20 p-2 rounded-full hover:bg-[#75E2FF]/20 transition"
                >
                  <Icon
                    className="text-[#EAEBED] hover:text-[#75E2FF] transition"
                    size={20}
                  />
                </a>
              ))}
            </div>

            <address className="not-italic text-[#EAEBED]/80">
              123 Tech Avenue
              <br />
              Karachi, Pakistan
            </address>
          </motion.div>
        </div>

        {/* CopyRight */}
        <div className="mt-12 border-t border-[#5689C0]/30 pt-6 text-center text-xs text-[#EAEBED]/60">
          © {new Date().getFullYear()}
          <span className="text-[#75E2FF]">LapShop</span>. All rights reserved.
        </div>
      </motion.footer>
    </>
  );
};
export default Footer;
