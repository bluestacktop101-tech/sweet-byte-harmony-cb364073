import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeader from "@/components/SectionHeader";

const team = [
  {
    name: "Robert Beasock",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/robert-beasock-00316027/",
    initials: "RB",
  },
  {
    name: "John O'Connor",
    role: "Co-Founder",
    linkedin: "https://linkedin.com/in/john-o-connor-01940a82",
    initials: "JO",
  },
  {
    name: "Mykhailo Liashenko",
    role: "Chief Technology Officer",
    linkedin: "https://www.linkedin.com/in/mykhailo-liashenko-633615348/",
    initials: "ML",
  },
];

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team — RWA Hub" },
      { name: "description", content: "Meet the team building a simpler, more accessible way to invest in real-world assets." },
      { property: "og:title", content: "Our Team — RWA Hub" },
      { property: "og:description", content: "Experienced leaders in finance, technology, and operations." },
    ],
  }),
});

function TeamPage() {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Leadership"
            title="Meet Our"
            highlight="Founding Team"
            description="Experienced leaders in finance, technology, and operations — building a trusted way to invest in real-world assets."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center p-8 rounded-xl bg-card border border-border hover-lift"
              >
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm mt-1">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
