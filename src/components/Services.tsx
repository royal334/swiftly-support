import { Section } from "./Section";
import { Card, CardHeader, CardContent } from "./Card";
import { motion } from "framer-motion";
import {
  UserRound,
  Briefcase,
  Headphones,
  Calendar,
  ClipboardCheck,
  Clock,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Internal Support",
      desc: "Dedicated onsite professionals for your physical office operations, documentation, and local logistics.",
      icon: "🏢",
      tags: ["Onsite Placement"],
    },
    {
      title: "Operational Support",
      desc: "Expert remote assistance for business process management, scheduling, and project coordination.",
      icon: "⚙️",
      tags: ["Remote Support"],
    },
    {
      title: "Technical Delegation",
      desc: "Specialized support for CRM management, technical documentation, and basic data oversight.",
      icon: "💻",
      tags: ["Remote Support"],
    },
    {
      title: "Strategic Executive Support",
      desc: "High-level administrative partnership for CEOs and founders, managing sensitive communications.",
      icon: "🤝",
      tags: ["Onsite", "Remote"],
    },
    {
      title: "Growth & CRM Management",
      desc: "Driving business stability by managing lead pipelines and maintaining client data integrity.",
      icon: "📈",
      tags: ["Remote Support"],
    },
    {
      title: "Communications",
      desc: "Handling high-volume front-facing communications, including email, chat, and voice support.",
      icon: "📞",
      tags: ["Remote Support"],
    },
  ];

  return (
    <section
      className="services py-24 px-6 md:px-[60px] bg-offwhite"
      id="services"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="section-tag text-[11px] font-bold tracking-[3px] uppercase text-amber mb-4 flex items-center gap-3 after:content-[''] after:h-px after:w-10 after:bg-amber">
          Precision Offerings
        </div>
        <h2 className="font-display text-[42px] md:text-[52px] font-black leading-tight text-midnight mb-4">
          Corporate Support Services
        </h2>
        <p className="text-[17px] text-text-muted leading-relaxed max-w-[560px] mb-16">
          We provide specialized talent tailored to your business needs,
          ensuring every task is handled with precision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-9 border border-transparent hover:border-amber/20 hover:shadow-2xl transition-all relative group overflow-hidden rounded-xl"
            >
              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              <div className="w-14 h-14 bg-amber-pale group-hover:bg-amber flex items-center justify-center text-2xl mb-8 rounded-xl transition-all duration-300 group-hover:scale-105">
                {service.icon}
              </div>

              <h3 className="font-display text-xl font-bold text-midnight mb-3.5 italic not-italic transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold tracking-tight px-3 py-1 bg-amber/10 text-amber rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
