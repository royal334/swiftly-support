import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="about py-24 px-6 md:px-[60px] bg-offwhite" id="about">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-[12px] font-bold tracking-[2px] uppercase text-amber mb-4">
            Defining the New Standard
          </div>
          <h2 className="font-display text-[42px] md:text-[52px] font-black leading-tight text-midnight mb-8">
            Business & Executive Support Specialists
          </h2>
          <p className="text-[17px] leading-[1.8] text-midnight/70 mb-8 max-w-[580px]">
            At Swiftly Support, we bridge the gap between Nigerian talent and
            global enterprises. We don't just provide assistants; we deploy
            dedicated support structures designed to scale with your business
            goals.
          </p>
          <p className="text-[17px] leading-[1.8] text-midnight/70 max-w-[580px]">
            Our rigorous methodology ensures that every professional we place is
            not only skilled but fully integrated into your corporate culture,
            driving efficiency from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 border border-midnight/5 shadow-sm hover:shadow-xl transition-all rounded-sm group"
          >
            <div className="w-12 h-12 bg-midnight flex items-center justify-center text-amber text-xl font-bold mb-6 group-hover:scale-110 transition-transform">
              M
            </div>
            <h3 className="font-display text-xl font-bold text-midnight mb-4">
              Our Mission
            </h3>
            <p className="text-sm leading-relaxed text-midnight/60">
              To empower global leaders by providing high-precision support that
              eliminates operational drag.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-midnight p-8 shadow-2xl rounded-sm group"
          >
            <div className="w-12 h-12 bg-amber flex items-center justify-center text-midnight text-xl font-bold mb-6 group-hover:rotate-12 transition-transform">
              P
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-4">
              The Precision
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              Every deployment follows our SOC-ready protocols, ensuring data
              safety and absolute reliability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
