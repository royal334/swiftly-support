import { motion } from "framer-motion";

export const MeetOurTeam = () => {
  const team = [
    {
      name: "Precious Daniel",
      role: "Founder & Lead Consultant",
      bio: "A seasoned operations manager with deep expertise in business systems, process optimization, and organizational efficiency. Precious founded Swiftly Support to bridge the gap between growing businesses and the operational infrastructure they need to scale.",
      image: "/precious.jfif",
      isFounder: true,
    },
    {
      name: "Excel Ezinna",
      role: "Operations Manager",
      bio: "Excel oversees day-to-day operations and ensures every client engagement is delivered with precision and consistency. His focus on systems and accountability keeps the agency running at peak performance.",
      image: "/excel.jfif",
      isFounder: false,
    },
    {
      name: "Aurora Stephen",
      role: "Client Success Specialist",
      bio: "Aurora is the heartbeat of client relationships at Swiftly Support. She ensures every client feels heard, supported, and consistently delighted — from onboarding through to long-term partnership.",
      image: "/aurora.jfif",
      isFounder: false,
    },
  ];

  return (
    <section
      className="team-section py-24 px-6 md:px-[60px] bg-[#081529]"
      id="team"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="team-header mb-16">
          <div className="section-tag text-[11px] font-bold tracking-[3px] uppercase text-amber mb-4">
            The People Behind The Work
          </div>
          <h2 className="font-display text-[32px] md:text-[52px] font-extrabold leading-[1.15] text-white">
            Meet the Team
          </h2>
          <p className="max-w-[600px] text-white/50 mt-6 text-sm leading-[1.7]">
            A leadership team built on experience, operational excellence, and a
            shared commitment to client success.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`team-card group bg-white/2 border border-white/5 rounded-2xl p-8 hover:border-amber/30 transition-all duration-500 overflow-hidden relative ${
                member.isFounder ? "border-amber/20" : ""
              }`}
            >
              {/* Founder Badge */}
              {member.isFounder && (
                <div className="absolute top-4 right-4 bg-amber text-midnight text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Founder
                </div>
              )}

              <div className="team-img-wrap mb-8 relative aspect-square rounded-xl overflow-hidden md:grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10 group-hover:border-amber/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="team-info">
                <div className="team-role text-amber text-[12px] font-bold uppercase tracking-widest mb-2 block">
                  {member.role}
                </div>
                <h3 className="team-name font-display text-[24px] text-white font-bold mb-3 tracking-tight">
                  {member.name}
                </h3>
                <p className="team-bio text-white/50 text-sm leading-[1.7]">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
