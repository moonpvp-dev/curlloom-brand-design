const IngredientsSection = () => {
  const ingredients = [
    {
      name: "Aloe Vera",
      benefit: "Deep hydration & scalp soothing",
      detail: "Our organic aloe penetrates the hair shaft to deliver moisture where curls need it most."
    },
    {
      name: "Plant Oils",
      benefit: "Nourishment & shine",
      detail: "A curated blend of argan, jojoba, and avocado oils that mimic hair's natural lipids."
    },
    {
      name: "Inulin",
      benefit: "Curl definition & hold",
      detail: "A plant-derived styling agent that defines curls without stiffness or crunch."
    },
    {
      name: "Agave Nectar",
      benefit: "Moisture retention",
      detail: "Natural humectant that draws moisture into the hair and locks it in for lasting hydration."
    },
    {
      name: "Silk Protein",
      benefit: "Strength & smoothness",
      detail: "Repairs and protects the hair cuticle, leaving curls silky smooth and resilient."
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Ingredients Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Nature Meets
              <span className="text-gradient block">Performance</span>
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
              We believe you shouldn't have to choose between clean ingredients and products that actually work. Every CurlLoom formula harnesses the power of botanicals, backed by modern curl science.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-primary/30 text-foreground/80 text-sm">
                Sulfate Free
              </span>
              <span className="px-4 py-2 rounded-full border border-primary/30 text-foreground/80 text-sm">
                Silicone Free
              </span>
              <span className="px-4 py-2 rounded-full border border-primary/30 text-foreground/80 text-sm">
                Cruelty Free
              </span>
              <span className="px-4 py-2 rounded-full border border-primary/30 text-foreground/80 text-sm">
                Vegan Friendly
              </span>
            </div>
          </div>

          {/* Right - Ingredients Grid */}
          <div className="space-y-4">
            {ingredients.map((ingredient, index) => (
              <div 
                key={ingredient.name}
                className="group p-5 rounded-xl card-gradient border border-border/50 hover:border-primary/40 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-1">
                      {ingredient.name}
                    </h4>
                    <p className="text-primary text-sm font-medium mb-2">
                      {ingredient.benefit}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {ingredient.detail}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-serif text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
