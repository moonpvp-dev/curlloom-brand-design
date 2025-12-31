import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IngredientsSection = () => {
  const products = {
    refresh: {
      name: "Refresh Spray",
      ingredients: [
        "Distilled Water",
        "Aloe Vera Juice",
        "Vegetable Glycerin",
        "Golden Jojoba Oil",
        "Clear Jojoba Oil",
        "Lavender Essential Oil",
        "Rosemary Essential Oil",
        "Vanilla Extract",
        "Geogard ECT"
      ]
    },
    cream: {
      name: "Curl Cream",
      ingredients: [
        "Shea Butter",
        "Babassu Oil",
        "Grapeseed Oil",
        "Aloe Vera Juice",
        "Inulin",
        "Agave Extract",
        "Hydroxyethylcellulose",
        "Panthenol",
        "Hydrolyzed Silk Protein",
        "Sodium Gluconate",
        "Lavender Essential Oil",
        "Rosemary Essential Oil",
        "Geogard ECT"
      ]
    },
    leavein: {
      name: "Leave-In Conditioner",
      ingredients: [
        "Aloe Vera Gel",
        "Grapeseed Oil",
        "Avocado Oil",
        "Cetearyl Alcohol",
        "Castor Oil",
        "Coco Glucoside",
        "Hydroxyethylcellulose",
        "Panthenol",
        "Hydrolyzed Silk Protein",
        "Inulin",
        "Agave Extract",
        "Sodium Gluconate",
        "Lavender Essential Oil",
        "Rosemary Essential Oil",
        "Geogard ECT"
      ]
    }
  };

  const keyIngredients = [
    {
      name: "Aloe Vera",
      benefit: "Deep hydration & scalp soothing",
      detail: "Our organic aloe penetrates the hair shaft to deliver moisture where curls need it most."
    },
    {
      name: "Plant Oils",
      benefit: "Nourishment & shine",
      detail: "A curated blend of jojoba, grapeseed, avocado, and babassu oils that mimic hair's natural lipids."
    },
    {
      name: "Inulin",
      benefit: "Curl definition & hold",
      detail: "A plant-derived styling agent that defines curls without stiffness or crunch."
    },
    {
      name: "Agave Extract",
      benefit: "Moisture retention",
      detail: "Natural humectant that draws moisture into the hair and locks it in for lasting hydration."
    },
    {
      name: "Hydrolyzed Silk Protein",
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

          {/* Full Ingredient Lists */}
          <div className="card-gradient rounded-2xl border border-border/50 p-8">
            <h3 className="font-serif text-2xl text-foreground text-center mb-8">
              Full Ingredient Lists
            </h3>
            
            <Tabs defaultValue="refresh" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent mb-8">
                <TabsTrigger 
                  value="refresh" 
                  className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Refresh Spray
                </TabsTrigger>
                <TabsTrigger 
                  value="leavein"
                  className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Leave-In Conditioner
                </TabsTrigger>
                <TabsTrigger 
                  value="cream"
                  className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Curl Cream
                </TabsTrigger>
              </TabsList>

              {Object.entries(products).map(([key, product]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="max-w-2xl mx-auto">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {product.ingredients.map((ingredient, index) => (
                        <span 
                          key={ingredient}
                          className="px-4 py-2 rounded-full bg-secondary/50 border border-border/30 text-foreground/80 text-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
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
      </div>
    </section>
  );
};

export default IngredientsSection;
