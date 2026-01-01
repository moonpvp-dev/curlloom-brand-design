import { Button } from "@/components/ui/button";
import { Star, Package } from "lucide-react";
import { toast } from "sonner";
import bundleImage from "@/assets/bundle-starter-kit.jpg";

const handleShopKit = () => {
  toast.success("Starter Curl Kit added to bag!", {
    description: "You're saving $12 with this bundle.",
  });
};

const BundleSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden border border-primary/30">
                <img 
                  src={bundleImage} 
                  alt="Starter Curl Kit Bundle"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Best Seller Badge */}
              <div className="absolute -top-4 -right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-primary glow-purple-sm">
                <Star className="w-4 h-4 text-primary-foreground fill-current" />
                <span className="text-sm font-semibold text-primary-foreground">Best Seller</span>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-secondary/80 backdrop-blur-sm border border-border/50 flex items-center justify-center animate-float">
                <div className="text-center">
                  <span className="text-2xl font-serif text-primary">15%</span>
                  <p className="text-xs text-muted-foreground">Savings</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-primary" />
                <span className="text-primary font-sans text-sm tracking-[0.2em] uppercase">
                  Value Bundle
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                The Starter
                <span className="text-gradient block">Curl Kit</span>
              </h2>
              
              <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
                Everything you need to begin your elevated curl journey. This curated set includes all three Crafted Curl essentials at an exclusive bundle price.
              </p>

              {/* What's Included */}
              <div className="space-y-3 mb-8">
                <p className="text-sm font-medium text-foreground">Includes:</p>
                <ul className="space-y-2">
                  {["Refresh Spray (8 oz)", "Leave-In Conditioner (8 oz)", "Curl Cream (8 oz)"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="flex items-end gap-4 mb-8">
                <span className="font-serif text-4xl text-foreground">$68</span>
                <span className="text-lg text-muted-foreground line-through">$80</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                  Save $12
                </span>
              </div>

              <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={handleShopKit}>
                Shop the Kit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleSection;
