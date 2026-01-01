import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Natural, Clean Ingredients",
      curlLoom: true,
      others: "Often contain silicones, sulfates, and parabens",
    },
    {
      feature: "Formulated for All Hair Porosities",
      curlLoom: true,
      others: "Generic formulas for all hair types",
    },
    {
      feature: "Lightweight, No Buildup",
      curlLoom: true,
      others: "Heavy products that weigh curls down",
    },
    {
      feature: "Science-Backed Curl Care",
      curlLoom: true,
      others: "Marketing-driven claims",
    },
    {
      feature: "Humidity Resistant Hold",
      curlLoom: true,
      others: "Frizz returns in humid conditions",
    },
    {
      feature: "Cruelty-Free & Vegan",
      curlLoom: true,
      others: "May test on animals",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amethyst/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            CurlLoom vs.
            <span className="text-gradient"> Other Brands</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            See why curls everywhere are making the switch to intentional, science-backed curl care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1" />
            <div className="text-center">
              <span className="font-serif text-xl text-foreground">
                Curl<span className="text-gradient">Loom</span>
              </span>
            </div>
            <div className="text-center">
              <span className="font-sans text-muted-foreground">Other Brands</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div
                key={item.feature}
                className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-sans text-foreground text-sm md:text-base">
                  {item.feature}
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground text-xs md:text-sm">
                    {item.others}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="font-serif text-2xl text-foreground mb-2">
              Ready to elevate your curl care?
            </p>
            <p className="text-muted-foreground mb-6">
              Join thousands who have made the switch to intentional formulas.
            </p>
            <a href="#products">
              <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-purple">
                Explore Products
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
