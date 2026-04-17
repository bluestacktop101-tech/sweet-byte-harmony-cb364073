import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, BarChart2, Landmark } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeader from "@/components/SectionHeader";

const assetTypes = [
  {
    icon: Building2,
    type: "Real Estate",
    code: "RH-10YYYY",
    items: [
      { name: "Miami Waterfront Commercial Complex", value: "$24,500,000", tokens: "245,000,000", price: "$0.10", status: "Live" },
      { name: "Dubai Marina Residential Tower", value: "$18,000,000", tokens: "180,000,000", price: "$0.10", status: "Coming Soon" },
    ],
    description: "Residential and commercial properties. Backed by title deeds and independent valuations.",
  },
  {
    icon: BarChart2,
    type: "Securities & Funds",
    code: "RH-20YYYY",
    items: [
      { name: "BTC ETF Fund", value: "$100,000,000", tokens: "100,000,000", price: "$1.00", status: "Live" },
      { name: "Nasdaq Stock Portfolio", value: "$1,000,000", tokens: "10,000,000", price: "$0.10", status: "Live" },
    ],
    description: "ETFs, equity portfolios, and other regulated financial products.",
  },
  {
    icon: Landmark,
    type: "Alternative Assets",
    code: "RH-30YYYY",
    items: [
      { name: "Siberian Green Energy BTC Mining Center", value: "$100,000,000", tokens: "100,000,000", price: "$1.00", status: "Live" },
    ],
    description: "Income-producing real assets such as energy and infrastructure projects, supported by formal documentation.",
  },
];

export const Route = createFileRoute("/assets")({
  component: AssetsPage,
  head: () => ({
    meta: [
      { title: "Assets — RWA Hub" },
      { name: "description", content: "Browse real-world investment opportunities — real estate, securities, and alternative assets — starting from $100." },
      { property: "og:title", content: "Available Assets — RWA Hub" },
      { property: "og:description", content: "Three categories of real-world assets you can invest in today." },
    ],
  }),
});

function AssetsPage() {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Marketplace"
            title="Available"
            highlight="Asset Classes"
            description="Three categories of real-world investments — clearly priced, fully documented, and accessible from $100."
          />

          <div className="space-y-8">
            {assetTypes.map((category, ci) => (
              <motion.div
                key={category.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.15 }}
                className="rounded-xl bg-card border border-border overflow-hidden"
              >
                <div className="p-6 border-b border-border flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <category.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{category.type}</h3>
                    <p className="text-xs text-muted-foreground">{category.code} · {category.description}</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground text-left">
                        <th className="px-6 py-3 font-medium">Asset</th>
                        <th className="px-6 py-3 font-medium">Value</th>
                        <th className="px-6 py-3 font-medium">Tokens</th>
                        <th className="px-6 py-3 font-medium">Price</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item) => (
                        <tr key={item.name} className="border-b border-border/50 last:border-0">
                          <td className="px-6 py-4 text-foreground font-medium">{item.name}</td>
                          <td className="px-6 py-4 text-muted-foreground">{item.value}</td>
                          <td className="px-6 py-4 text-muted-foreground">{item.tokens}</td>
                          <td className="px-6 py-4 text-primary font-medium">{item.price}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                              item.status === "Live"
                                ? "bg-primary/10 text-primary"
                                : "bg-accent/10 text-accent"
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
