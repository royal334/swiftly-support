import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Discovery",
      desc: "We dive deep into your workflow to identify exactly what can be offloaded to a specialist.",
      icon: "🔍",
    },
    {
      title: "Matching",
      desc: "Our experts hand-pick the best professional from our pool based on skills, time zone, and culture fit.",
      icon: "🤝",
    },
    {
      title: "Onboarding",
      desc: "We match you with the right team, set up tools and communication channels, and get operational within days.",
      icon: "🚀",
    },
    {
      title: "Ongoing Support",
      desc: "Regular performance reports, dedicated check-ins, and the flexibility to scale your package as your needs evolve.",
      icon: "📈",
    },
  ];

  return (
    <section
      className="process-section py-24 px-6 md:px-[60px] bg-midnight relative overflow-hidden"
      id="process"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="process-header text-center mb-20">
          <div className="section-tag text-[11px] font-bold tracking-[3px] uppercase text-amber mb-4">
            Your Journey To Efficiency
          </div>
          <h2 className="font-display text-[32px] md:text-[52px] font-extrabold leading-[1.15] text-white mb-6">
            How It Works
          </h2>
          <p className="max-w-[650px] mx-auto text-white/50 text-sm md:text-base leading-[1.7]">
            We've simplified the onboarding process to get you the professional
            support you need without the usual recruitment friction.
          </p>
        </div>

        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-white/5 z-0">
            <div className="h-full bg-linear-to-r from-transparent via-amber/20 to-transparent w-full"></div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="process-step flex flex-col items-center text-center group cursor-default relative z-10"
            >
              <div className="step-circle w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[32px] mb-8 relative group-hover:border-amber/40 group-hover:bg-white/8 transition-all duration-500 shadow-xl">
                {step.icon}
                <div className="step-num absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber text-midnight text-[13px] font-bold flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>
              </div>
              <h4 className="font-display text-xl text-white font-bold mb-4 tracking-tight group-hover:text-amber transition-colors">
                {step.title}
              </h4>
              <p className="text-white/40 text-sm leading-[1.7] max-w-[280px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
