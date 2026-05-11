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
      title: "Virtual Assistant",
      desc: "Comprehensive support for day-to-day tasks, research, and general management.",
      icon: <UserRound className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Executive Assistant",
      desc: "High-level strategic support for founders, CEOs, and busy executives.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "purple",
    },
    {
      title: "Customer Support",
      desc: "Dedicated professionals to handle your customer inquiries and tickets.",
      icon: <Headphones className="w-6 h-6" />,
      color: "rose",
    },
    {
      title: "Calendar & Email",
      desc: "Expert inbox management and scheduling to keep your life organized.",
      icon: <Calendar className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Administrative Ops",
      desc: "Streamlining your internal operations and documentation processes.",
      icon: <ClipboardCheck className="w-6 h-6" />,
      color: "purple",
    },
    {
      title: "Time Management",
      desc: "Helping you reclaim your time by automating repetitive workflows.",
      icon: <Clock className="w-6 h-6" />,
      color: "rose",
    },
  ];

  return (
    <Section id="services">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Premium Services</h2>
        <p className="text-muted-foreground text-lg">
          We provide specialized talent tailored to your business needs,
          ensuring every task is handled with precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full group hover:border-brand-primary transition-all p-8 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all text-brand-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
              {/* Subtler Hover Effect */}
              <div className="absolute inset-0 bg-brand-primary/2 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10" />
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
