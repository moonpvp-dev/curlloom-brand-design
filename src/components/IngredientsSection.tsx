import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IngredientsSection = () => {
  const ingredients = [
    "Water",
    "Aloe Vera Juice",
    "Grapeseed Oil",
    "Sunflower Oil",
    "Propanediol",
    "Sodium PCA",
    "Beta-Glucan",
    "Marshmallow Root Extract",
    "Hydroxyethylcellulose",
    "Sodium Gluconate",
    "Geogard ECT",
  ];

  const keyIngredients = [
    {
      name: "Aloe Vera",
      benefit: "Deep hydration & scalp soothing",
      detail: "Organic aloe penetrates the hair shaft to deliver moisture where curls need it most."
    },
    {
      name: "Grapeseed Oil",
      benefit: "Lightweight shine & strength",
      detail: "Rich in vitamin E and linoleic acid, adding shine without heaviness while strengthening the cuticle."
    },
    {
      name: "Marshmallow Root Extract",
      benefit: "Slip & detangling",
      detail: "Provides exceptional slip for easy detangling, reduces breakage, and adds natural softness."
    },
    {
      name: "Beta-Glucan",
      benefit: "Soothing & repair",
      detail: "A polysaccharide derived from oats that soothes the scalp and supports hair repair over time."
    },
    {
      name: "Sodium PCA",
      benefit: "Natural moisture retention",
      detail: "Naturally found in hair, it attracts and binds moisture from the environment for lasting hydration."
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Ingredients Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Nature Meets
              <span className="text-gradient block">Performance</span>
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              We believe you shouldn't have to choose between clean ingredients and products that actually work. Every CurlLoom formula harnesses the power of botanicals, backed by modern curl science.
            </p>
          </div>

          {/* Key Ingredients */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {keyIngredients.map((ingredient, index) => (
              <div 
                key={ingredient.name}
                className="group p-5 rounded-xl card-gradient border border-border/50 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-serif text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">
                      {ingredient.name}
                    </h4>
                    <p className="text-primary text-sm font-medium mb-2">
                      {ingredient.benefit}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {ingredient.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Ingredient List */}
          <div className="card-gradient rounded-2xl border border-border/50 p-8">
            <h3 className="font-serif text-2xl text-foreground text-center mb-8">
              Full Ingredient List
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {ingredients.map((ingredient) => (
                  <span 
                    key={ingredient}
                    className="px-4 py-2 rounded-full bg-secondary/50 border border-border/30 text-foreground/80 text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {["Sulfate Free", "Silicone Free", "Cruelty Free", "Vegan Friendly"].map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-full border border-primary/30 text-foreground/80 text-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
