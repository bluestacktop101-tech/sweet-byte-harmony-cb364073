import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, TrendingUp, BadgeCheck, Layers, Wallet, LineChart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import PageLayout from "@/components/PageLayout";

const stats = [
  { icon: Shield, label: "Regulated & Secure" },
  { icon: Globe, label: "Available Worldwide" },
  { icon: TrendingUp, label: "Start from $100" },
];

const steps = [
  { icon: BadgeCheck, title: "Assets are verified", description: "Every asset is reviewed and documented before it's listed." },
  { icon: Layers, title: "Tokenized into shares", description: "Ownership is split into affordable digital shares." },
  { icon: Wallet, title: "Users invest", description: "Buy a share online in minutes, starting from $100." },
  { icon: LineChart, title: "Earn returns and trade", description: "Receive income and trade your shares anytime." },
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
              Real-World Asset Investing
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

      {/* How It Works */}
      <section className="section-padding border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium tracking-wider uppercase mb-4">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              From real asset to your portfolio
            </h2>
            <p className="mt-4 text-muted-foreground">
              A simple, transparent process — from verification to earning returns.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-xl bg-card border border-border p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
