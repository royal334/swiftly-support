import { Section } from "./Section";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <Section id="cta" className="py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-brand-primary dark:bg-slate-900 border border-transparent dark:border-white/10 rounded-4xl p-12 md:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl dark:shadow-brand-primary/20"
      >
        {/* Subtle Corporate Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto text-white">
            Ready to streamline your <br />
            <span className="opacity-90">business operations?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Contact us today to find the perfect assistant partner for your
            growing business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 bg-white text-brand-primary hover:bg-white/90 dark:bg-brand-primary dark:text-white dark:hover:bg-brand-primary/90 border-none shadow-lg text-lg font-semibold"
              onClick={() =>
                (window.location.href = "mailto:swiftlysupport@gmail.com")
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 border-white/30 text-white hover:bg-white/10 text-lg font-semibold"
              onClick={() =>
                window.open("https://wa.me/2349054552705", "_blank")
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
