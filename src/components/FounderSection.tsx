import founderImage from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section id="about-founder" className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amethyst/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-primary/30">
                <img 
                  src={founderImage} 
                  alt="Founder of CurlLoom"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl blur-xl -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
                Meet the Founder
              </p>
              
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                The Vision Behind
                <span className="text-gradient block">CurlLoom</span>
              </h2>
              
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                <p>
                  CurlLoom was born from a personal journey—understanding that curly hair isn't just a style, it's an identity. After years of struggling to find products that truly worked for my own curls, I decided to create what I couldn't find.
                </p>
                <p>
                  Every formula in the Crafted Curl line is intentionally designed with natural, high-performance ingredients that honor the science of curly hair while celebrating its natural beauty.
                </p>
                <p>
                  My mission is simple: to help every curl thrive with products that are as intentional as they are effective.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="font-serif text-xl text-foreground italic">
                  "Your curls deserve intention."
                </p>
                <p className="text-primary font-sans text-sm tracking-wide mt-2">
                  — Founder, CurlLoom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
