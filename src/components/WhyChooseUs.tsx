import { Section } from "./Section";
import { Card } from "./Card";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  HeartHandshake,
  Rocket,
} from "lucide-react";

export const WhyChooseUs = () => {
  const items = [
    {
      title: "Carefully Vetted",
      desc: "Our rigorous 7-step screening process ensures only the top 1% of assistants join our network.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
      className: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "Fast Onboarding",
      desc: "Get matched and started within 24 hours.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      className: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Affordable Scaling",
      desc: "Save up to 70% compared to local hiring without compromising on quality.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      className: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Dedicated Support",
      desc: "Your success is our priority. We provide account managers for every client.",
      icon: <HeartHandshake className="w-8 h-8 text-rose-500" />,
      className: "md:col-span-2 lg:col-span-1",
    },
    {
      title: "Productivity First",
      desc: "Our assistants are trained in the latest AI and productivity tools to maximize efficiency.",
      icon: <Rocket className="w-8 h-8 text-brand-secondary" />,
      className: "md:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <Section id="why-us" className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Why Swiftly Support?</h2>
        <p className="text-muted-foreground text-lg text-balance">
          We've redesigned the Executive Assistant experience to be faster, smarter, and
          more reliable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={item.className}
          >
            <Card className="h-full p-8 space-y-6 border-border hover:border-brand-primary/50 transition-colors rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md">
              <div className="p-3 bg-brand-primary/5 w-fit rounded-lg text-brand-primary">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
