import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import productRefreshSpray from "@/assets/product-refresh-spray.jpg";
import productLeaveIn from "@/assets/product-leave-in.jpg";
import productCurlCream from "@/assets/product-curl-cream.jpg";

const handleAddToBag = (productName: string) => {
  toast.success(`${productName} added to bag!`, {
    description: "Continue shopping or proceed to checkout.",
  });
};

const ProductSection = () => {
  const products = [
    {
      name: "Refresh Spray",
      tagline: "Daily Curl Revival",
      image: productRefreshSpray,
      purpose: "Revive day 2+ curls with lightweight hydration",
      benefits: ["Instant moisture boost", "Reactivates curl pattern", "Zero buildup formula"],
      usage: "Mist onto dry curls and scrunch to refresh"
    },
    {
      name: "Leave-In Conditioner",
      tagline: "Deep Moisture & Slip",
      image: productLeaveIn,
      purpose: "Provide lasting moisture and detangling power",
      benefits: ["48-hour hydration", "Exceptional slip for detangling", "Seals in moisture"],
      usage: "Apply to damp hair and distribute evenly"
    },
    {
      name: "Curl Cream",
      tagline: "Definition & Hold",
      image: productCurlCream,
      purpose: "Define curls with flexible, lasting hold",
      benefits: ["Long-lasting definition", "No crunch or flaking", "Humidity resistant"],
      usage: "Apply to wet hair and style as desired"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amethyst/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Crafted Curl
            <span className="text-gradient"> Essentials</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                  <span className="text-xs font-sans text-lavender tracking-wide">{product.tagline}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="font-sans text-muted-foreground text-sm mb-4">
                  {product.purpose}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Usage */}
                <p className="text-xs text-muted-foreground italic border-t border-border/50 pt-4">
                  {product.usage}
                </p>

                {/* CTA */}
                <Button 
                  variant="glow" 
                  className="w-full mt-6"
                  onClick={() => handleAddToBag(product.name)}
                >
                  Add to Bag
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-amethyst/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
