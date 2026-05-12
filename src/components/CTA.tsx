import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

export const CTA = () => {
  return (
    <section
      className="contact-section py-24 px-6 md:px-[60px] bg-midnight"
      id="contact"
    >
      <motion.div
        className="max-w-[1440px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info */}
          <div className="contact-left">
            <div className="section-tag text-[11px] font-bold tracking-[3px] uppercase text-amber mb-4">
              Get In Touch
            </div>
            <h2 className="font-display text-[32px] md:text-[52px] font-extrabold leading-[1.15] text-white mb-8">
              Ready to run your business{" "}
              <em className="text-amber not-italic">smarter?</em>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-[1.7] mb-12 max-w-[500px]">
              Book a free consultation today and let's discuss exactly how
              Swiftly Support can take operations off your plate.
            </p>

            <div className="contact-items space-y-6">
              <a
                href="mailto:swiftlysupport@gmail.com"
                className="contact-item flex items-center group"
              >
                <div className="contact-icon w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber mr-5 group-hover:bg-amber group-hover:text-midnight transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="contact-detail">
                  <div className="label text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">
                    Email Us
                  </div>
                  <div className="value text-white group-hover:text-amber transition-colors">
                    swiftlysupport@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:09054552705"
                className="contact-item flex items-center group"
              >
                <div className="contact-icon w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber mr-5 group-hover:bg-amber group-hover:text-midnight transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="contact-detail">
                  <div className="label text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">
                    Call Us
                  </div>
                  <div className="value text-white group-hover:text-amber transition-colors">
                    09054552705
                  </div>
                </div>
              </a>

              <a
                href="https://x.com/swiftly_support"
                target="_blank"
                className="contact-item flex items-center group"
              >
                <div className="contact-icon w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber mr-5 group-hover:bg-amber group-hover:text-midnight transition-all duration-300">
                  <span className="text-xl font-bold italic">𝕏</span>
                </div>
                <div className="contact-detail">
                  <div className="label text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">
                    Follow Us
                  </div>
                  <div className="value text-white group-hover:text-amber transition-colors">
                    @swiftly_support
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: CTA Boxes */}
          <div className="contact-right">
            <h3 className="font-display text-2xl text-white font-bold mb-8">
              Choose How To <span className="text-amber">Connect</span>
            </h3>
            <div className="cta-boxes space-y-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://wa.me/2349054552705"
                target="_blank"
                className="cta-box flex items-center p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-amber/40 hover:bg-white/8 transition-all duration-300"
              >
                <div className="cta-icon text-3xl mr-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                </div>
                <div className="cta-text">
                  <div className="cta-title text-white font-bold text-lg mb-1">
                    Chat on WhatsApp
                  </div>
                  <div className="cta-sub text-white/40 text-sm">
                    Quick responses — start a conversation now
                  </div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://wa.me/2349054552705?text=Hi%20Swiftly%20Support%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20call."
                target="_blank"
                className="cta-box flex items-center p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-amber/40 hover:bg-white/8 transition-all duration-300"
              >
                <div className="cta-icon text-3xl mr-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-amber" />
                </div>
                <div className="cta-text">
                  <div className="cta-title text-white font-bold text-lg mb-1">
                    Schedule a Call
                  </div>
                  <div className="cta-sub text-white/40 text-sm">
                    Book a free 30-minute discovery session
                  </div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="mailto:swiftlysupport@gmail.com?subject=Service%20Enquiry%20-%20Swiftly%20Support&body=Hello%20Swiftly%20Support%20Team%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20services."
                className="cta-box flex items-center p-6 bg-amber rounded-2xl group transition-all duration-300"
              >
                <div className="cta-icon text-3xl mr-6 bg-midnight/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Mail className="w-8 h-8 text-midnight" />
                </div>
                <div className="cta-text">
                  <div className="cta-title text-midnight font-bold text-lg mb-1">
                    Send an Email
                  </div>
                  <div className="cta-sub text-midnight/60 text-sm font-medium">
                    Detailed enquiries and proposals
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
