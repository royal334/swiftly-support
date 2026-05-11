import { Section } from "./Section";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivers",
      role: "CEO at TechFlow",
      text: "Swiftly changed the way we handle operations. Our executive assistant is proactive, skilled, and fits perfectly with our culture.",
      initials: "AR",
    },
    {
      name: "Sarah Chen",
      role: "Founder of Bloom Media",
      text: "The vetting process is incredible. I was skeptical about virtual help, but my assistant handles my inbox better than I do.",
      initials: "SC",
    },
    {
      name: "Marcus Thorne",
      role: "Operations Director",
      text: "Scale was our biggest challenge. Swiftly allowed us to add support staff overnight without the overhead of HR.",
      initials: "MT",
    },
  ];

  return (
    <Section id="testimonials" className="bg-muted/50 backdrop-blur-sm">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold font-display">
          Client Success Stories
        </h2>
        <p className="text-muted-foreground text-lg">
          Don't just take our word for it. Here is what leading entrepreneurs
          have to say about Swiftly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              glass
              className="h-full flex flex-col justify-between p-10 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" />

              <p className="text-xl italic leading-relaxed mb-10 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
