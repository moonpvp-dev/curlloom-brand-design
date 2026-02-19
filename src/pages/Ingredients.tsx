import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const ingredients = [
  {
    name: "Water",
    benefit: "Base & Hydration",
    detail: "Purified water serves as the foundation, delivering lightweight hydration and helping active ingredients absorb evenly into the hair."
  },
  {
    name: "Aloe Vera Juice",
    benefit: "Deep Moisture & Scalp Soothing",
    detail: "Organic aloe vera penetrates the hair shaft to deliver lasting moisture while calming the scalp and reducing irritation."
  },
  {
    name: "Grapeseed Oil",
    benefit: "Lightweight Shine & Strength",
    detail: "Rich in vitamin E and linoleic acid, grapeseed oil adds shine without heaviness and helps strengthen the hair cuticle."
  },
  {
    name: "Sunflower Oil",
    benefit: "Frizz Control & Protection",
    detail: "High in oleic acid, sunflower oil smooths the hair shaft, reduces frizz, and provides a natural barrier against environmental damage."
  },
  {
    name: "Propanediol",
    benefit: "Enhanced Absorption",
    detail: "A plant-derived solvent that improves the spreadability and absorption of active ingredients, leaving hair feeling soft—not sticky."
  },
  {
    name: "Sodium PCA",
    benefit: "Natural Humectant",
    detail: "Naturally found in skin and hair, sodium PCA attracts and binds moisture from the environment, keeping curls hydrated throughout the day."
  },
  {
    name: "Beta-Glucan",
    benefit: "Soothing & Repair",
    detail: "A polysaccharide derived from oats that soothes the scalp, supports the skin barrier, and helps repair damaged hair over time."
  },
  {
    name: "Marshmallow Root Extract",
    benefit: "Slip & Detangling",
    detail: "Provides exceptional slip for easy detangling, reduces breakage, and adds a natural softness to curls without buildup."
  },
  {
    name: "Hydroxyethylcellulose",
    benefit: "Gentle Hold & Texture",
    detail: "A plant-derived thickener that provides light hold and improves product texture without leaving residue or crunch."
  },
  {
    name: "Sodium Gluconate",
    benefit: "Chelation & Freshness",
    detail: "A naturally derived chelating agent that helps remove mineral buildup from hard water, keeping curls clean and bouncy."
  },
  {
    name: "Geogard ECT",
    benefit: "Clean Preservation",
    detail: "An ECOCERT-approved preservative system that keeps the formula safe and stable without parabens, formaldehyde releasers, or harsh chemicals."
  },
];

const Ingredients = () => {
  return (
    <>
      <Helmet>
        <title>Ingredients | CurlLoom</title>
        <meta name="description" content="Explore every ingredient in CurlLoom formulas. Clean, transparent, and designed for curls that demand more." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="text-center mb-16">
              <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
                Full Transparency
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
                Our <span className="text-gradient">Ingredients</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Every ingredient earns its place. Nothing hidden, nothing unnecessary.
              </p>
            </div>

            <div className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <div
                  key={ingredient.name}
                  className="p-6 rounded-xl card-gradient border border-border/50 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-serif text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1">
                        {ingredient.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2">
                        {ingredient.benefit}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {ingredient.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-16">
              {["Sulfate Free", "Silicone Free", "Cruelty Free", "Vegan Friendly"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full border border-primary/30 text-foreground/80 text-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Ingredients;
