import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { Section } from "./Section";
import { Card } from "./Card";

export const Hero = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32 min-height-[90vh] flex items-center relative overflow-hidden">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-brand-primary/5 to-transparent" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-brand-primary/5 to-transparent -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-semibold"
          >
            <span>Trusted Operational Support</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground"
          >
            Professional Support <br />
            For <span className="text-brand-primary">Scaling Enterprises</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Maximize your productivity with top-tier executive assistants. We
            match your business with highly vetted specialists to streamline
            your operations and drive growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-lg">
              Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-10 h-14 text-lg"
            >
              Book a Strategy Call
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-x-8 gap-y-4 pt-4"
          >
            {["Vetted Top 1%", "Corporate Standards", "Scalable Teams"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center space-x-2 text-sm font-medium text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span>{item}</span>
                </div>
              ),
            )}
          </motion.div>
        </div>

        {/* Visual Mockup */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-20"
          >
            {/* Main Corporate Card */}
            <Card className="relative z-20 overflow-hidden border-border shadow-xl bg-white dark:bg-slate-900 rounded-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-brand-primary">
                    SS
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      Operational Lead
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Assigned to your account
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-md bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-wider">
                  Verified
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: "Onboarding Progress", value: "100%", percent: 100 },
                  {
                    label: "System Integration",
                    value: "Active",
                    percent: 95,
                  },
                  { label: "Efficiency Gain", value: "40%", percent: 85 },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">
                        {stat.label}
                      </span>
                      <span className="text-foreground">{stat.value}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percent}%` }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-full bg-brand-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Floating Info Tag */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-30"
            >
              <div className="bg-white dark:bg-slate-800 border border-border p-4 py-3 rounded-xl shadow-lg flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">
                    Match Ready
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Vetted Specialist
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
