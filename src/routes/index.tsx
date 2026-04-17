import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import PageLayout from "@/components/PageLayout";

const stats = [
  { icon: Shield, label: "Regulated & Secure" },
  { icon: Globe, label: "Available Worldwide" },
  { icon: TrendingUp, label: "Start from $100" },
];

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      { title: "RWA Hub — Invest in Real-World Assets from $100" },
      { name: "description", content: "RWA Hub lets you invest in real estate, commodities, and other tangible assets online — starting at $100, with full transparency and regulatory protection." },
      { property: "og:title", content: "RWA Hub — Invest in Real-World Assets from $100" },
      { property: "og:description", content: "Buy a fraction of real assets online. Simple, secure, and accessible from anywhere." },
    ],
  }),
});

function IndexPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-medium tracking-wider uppercase mb-6">
              Real-World Asset Tokenization Protocol
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
          >
            Invest in{" "}
            <span className="text-gradient-primary">real-world assets</span>{" "}
            from <span className="text-gradient-accent">$100</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Buy a fraction of real estate, gold, and other tangible assets online — starting with just $100.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity"
            >
              Explore Assets <ArrowRight size={16} />
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-colors"
            >
              How It Works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-muted-foreground">
                <Icon size={18} className="text-primary" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
