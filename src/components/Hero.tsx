import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { Section } from "./Section";
import { Card } from "./Card";

export const Hero = () => {
  return (
    <section className="hero relative min-h-screen bg-midnight flex items-center pt-[120px] pb-20 px-6 md:px-[60px] overflow-hidden">
      {/* Hero Background Effects */}
      <div className="hero-bg absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(26,58,107,0.8)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_20%_80%,rgba(245,166,35,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_20%_40%_at_85%_20%,rgba(245,166,35,0.06)_0%,transparent_60%)]" />
      </div>

      {/* Grid Overlay */}
      <div className="hero-grid absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(245,166,35,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(245,166,35,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[680px]"
        >
          <div className="hero-tag inline-flex items-center gap-2 bg-amber/10 border border-amber/30 text-amber px-[18px] py-2 rounded-full text-xs font-bold tracking-[1.5px] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
            Precision Executive Support
          </div>

          <h1 className="font-display text-[48px] md:text-[82px] font-black leading-[1.05] text-white mb-7 tracking-tight">
            Elevating Business <br />
            <em className="italic not-italic bg-gradient-to-r from-amber via-amber-light to-amber bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
              Expectations
            </em>
          </h1>

          <p className="text-[18px] leading-[1.7] text-white/65 mb-12 max-w-[520px]">
            Swiftly Support provides highly vetted, Nigerian-based business
            professionals for global enterprises. Operational excellence,
            delivered with precision.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-amber hover:bg-amber-light text-midnight px-9 py-4 rounded-[4px] font-bold text-[15px] flex items-center gap-2 transition-all hover:shadow-[0_12px_30px_rgba(245,166,35,0.3)] hover:-translate-y-0.5"
            >
              DEPLOY STAFF <span className="text-xl">→</span>
            </a>
            <a
              href="#services"
              className="bg-transparent text-white border border-white/30 hover:border-amber hover:text-amber px-9 py-4 rounded-[4px] font-bold text-[15px] transition-all"
            >
              VIEW SERVICES
            </a>
          </div>
        </motion.div>

        {/* Hero Decor/Visual */}
        <div className="relative hidden lg:flex justify-center items-center h-[500px]">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[380px] h-[380px] border border-amber/15 rounded-full flex items-center justify-center relative"
          >
            <div className="w-[300px] h-[300px] border border-amber/10 rounded-full flex items-center justify-center relative">
              <div className="w-[220px] h-[220px] border border-amber/5 rounded-full bg-midnight-light/30 backdrop-blur-sm shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/image.png"
                  alt="Operational Excellence"
                  className="w-[85%] h-[85%] object-cover rounded-full opacity-90"
                />
              </div>
            </div>

            {/* Pulsing badges */}
            <div className="absolute top-[20%] right-[-20px] bg-midnight-mid border border-amber/20 px-4 py-3 rounded-lg shadow-2xl">
              <div className="text-amber font-bold text-lg leading-none">
                100%
              </div>
              <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">
                Reliability
              </div>
            </div>

            <div className="absolute bottom-[20%] left-[-40px] bg-midnight-mid border border-amber/20 px-4 py-3 rounded-lg shadow-2xl">
              <div className="text-amber font-bold text-lg leading-none">
                Vetted
              </div>
              <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">
                Professionalism
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute md:right-[60px] md:bottom-20 bottom-10 left-6 md:left-auto flex gap-12 z-20"
      >
        <div className="stat">
          <div className="font-display text-[42px] font-black text-amber leading-none">
            24/7
          </div>
          <div className="text-white/50 text-[11px] uppercase tracking-[1px] mt-1.5">
            Availability
          </div>
        </div>
        <div className="stat">
          <div className="font-display text-[42px] font-black text-amber leading-none">
            100+
          </div>
          <div className="text-white/50 text-[11px] uppercase tracking-[1px] mt-1.5">
            Deployments
          </div>
        </div>
        <div className="stat">
          <div className="font-display text-[42px] font-black text-amber leading-none">
            98%
          </div>
          <div className="text-white/50 text-[11px] uppercase tracking-[1px] mt-1.5">
            Success Rate
          </div>
        </div>
      </motion.div>
    </section>
  );
};
