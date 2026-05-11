import { Section } from "./Section";
import { motion } from "framer-motion";
import { Search, UserCheck, Rocket } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Tell us your needs",
      desc: "Fill out a brief form or jump on a call to tell us about your requirements and business goals.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Get matched",
      desc: "We scan our network of vetted assistants and present you with the best matches within 24 hours.",
      icon: <UserCheck className="w-8 h-8" />,
    },
    {
      title: "Start delegating",
      desc: "Your new assistant integrates into your workflow, and you start reclaiming your time immediately.",
      icon: <Rocket className="w-8 h-8" />,
    },
  ];

  return (
    <Section id="how-it-works">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
        <p className="text-muted-foreground text-lg">
          Our streamlined process is designed to get you the help you need
          without the friction of traditional hiring.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="absolute top-10 left-[15%] right-[15%] h-0.5 bg-brand-primary/20 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-primary text-white flex items-center justify-center shadow-2xl shadow-brand-primary/30 relative">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center border-4 border-white dark:border-black">
                  {index + 1}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
