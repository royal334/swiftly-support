import { Section } from "./Section";
import { Card } from "./Card";
import { motion } from "framer-motion";
//import { Globe, Mail, Send } from "lucide-react";

const team = [
  {
    name: "Precious Daniel",
    role: "Founder & Lead Consultant",
    bio: "A seasoned operations manager with deep expertise in business systems, process optimization, and organizational efficiency. Precious founded Swiftly Support to bridge the gap between growing businesses and the operational infrastructure they need to scale.",
    image: "/precious.jfif",
  },
  {
    name: "Excel Ezinna",
    role: "Operations Manager",
    bio: "Excel oversees day-to-day operations and ensures every client engagement is delivered with precision and consistency. His focus on systems and accountability keeps the agency running at peak performance.",
    image: "/excel.jfif",
  },
  {
    name: "Aurora Stephen",
    role: "Client Success Specialist",
    bio: "Aurora is the heartbeat of client relationships at Swiftly Support. She ensures every client feels heard, supported, and consistently delighted — from onboarding through to long-term partnership.",
    image: "/aurora.jfif",
  },
];

export const MeetOurTeam = () => {
  return (
    <Section id="team" className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold"
        >
          Meet the <span className="text-gradient">Experts</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          Our leadership team brings decades of experience from the world's most
          innovative companies.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 space-y-6 h-full flex flex-col group hover:border-brand-primary/30 transition-colors">
              {/* Avatar Placeholder */}
              <div className="aspect-square rounded-2xl bg-brand-primary/5 flex items-center justify-center relative overflow-hidden">
                <span className="text-4xl font-bold text-brand-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <img src={member.image} alt="" className="w-full h-full object-cover" />
                </span>
                {/* <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="p-2 rounded-lg bg-white/10 hover:bg-brand-primary/20 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-lg bg-white/10 hover:bg-brand-primary/20 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-lg bg-white/10 hover:bg-brand-primary/20 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div> */}
              </div>

              <div className="grow space-y-2">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-brand-primary uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
