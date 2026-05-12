import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  const items = [
    {
      num: "01",
      title: "No Recruitment Stress",
      desc: "We handle the entire hiring, vetting and training process. You get ready-to-work professionals from day one.",
    },
    {
      num: "02",
      title: "Instantly Replaceable Staff",
      desc: "If a team member underperforms, we replace them seamlessly — no HR headaches, no business disruption.",
    },
    {
      num: "03",
      title: "One Contract, Full Coverage",
      desc: "Remote and onsite support under a single agreement. One invoice, one point of contact, consistent quality everywhere.",
    },
    {
      num: "04",
      title: "Scale Up or Down Monthly",
      desc: "Your business needs change. Our flexible model allows you to adjust your support level every month without penalty.",
    },
    {
      num: "05",
      title: "AI-Enhanced Delivery",
      desc: "We layer automation and AI tools on top of human support — giving you faster results at a fraction of the cost.",
    },
  ];

  return (
    <section className="why-us py-24 px-6 md:px-[60px] bg-midnight" id="why-us">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[80px] items-start">
        {/* Left Column: List */}
        <div className="why-left">
          <div className="section-tag text-[11px] font-bold tracking-[3px] uppercase text-amber mb-4">
            Why Swiftly Support
          </div>
          <h2 className="font-display text-[32px] md:text-[52px] font-extrabold leading-[1.15] text-white mb-12">
            Why businesses choose us over hiring directly
          </h2>

          <div className="why-items flex flex-col">
            {items.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="why-item flex items-start p-6 rounded-2xl hover:bg-white/2 transition-colors group cursor-default"
              >
                <div className="why-num font-display text-[13px] font-bold w-10 h-10 rounded-full border border-amber/40 text-amber flex items-center justify-center shrink-0 transition-all group-hover:bg-amber group-hover:text-midnight">
                  {item.num}
                </div>
                <div className="why-content ml-6">
                  <h4 className="text-white text-[17px] font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-sm leading-[1.7] max-w-[500px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Sticky Cards */}
        <div className="why-visual lg:sticky lg:top-[120px] space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/[0.04] border border-amber/15 p-10 rounded-2xl"
          >
            <h3 className="font-display text-[22px] text-amber mb-4 font-bold italic not-italic">
              Hybrid Delivery Model
            </h3>
            <p className="text-white/60 text-sm leading-[1.7] mb-5">
              The only full-service support agency offering both remote and
              onsite staff deployment under one roof — built for Nigerian
              businesses and global clients alike.
            </p>
            <div className="delivery-modes flex gap-3">
              <span className="px-5 py-2 rounded-full text-[13px] font-semibold bg-amber/15 text-amber border border-amber/30">
                🌐 Remote Support
              </span>
              <span className="px-5 py-2 rounded-full text-[13px] font-semibold bg-white/10 text-white/70 border border-white/15">
                🏢 Onsite Deployment
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/[0.04] border border-amber/15 p-10 rounded-2xl"
          >
            <h3 className="font-display text-[22px] text-amber mb-4 font-bold">
              Vetted & Trained Professionals
            </h3>
            <p className="text-white/60 text-sm leading-[1.7]">
              Every Swiftly Support team member goes through a rigorous vetting
              process, skills assessment, and full onboarding before touching
              any client work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/[0.04] border border-amber/15 p-10 rounded-2xl"
          >
            <h3 className="font-display text-[22px] text-amber mb-4 font-bold">
              Data Protection First
            </h3>
            <p className="text-white/60 text-sm leading-[1.7]">
              All staff sign NDAs. All client data is handled under strict
              confidentiality protocols in line with NDPR compliance standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
