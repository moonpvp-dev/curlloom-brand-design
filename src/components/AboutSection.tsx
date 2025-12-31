import { Sparkles, Leaf, FlaskConical } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: FlaskConical,
      title: "Curl Science",
      description: "Each formula is engineered with precision to work with your curl pattern, not against it. We understand the unique structure of textured hair."
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "Plant-derived actives like aloe, agave, and botanical oils deliver results without compromise. Clean formulas that perform."
    },
    {
      icon: Sparkles,
      title: "Intentional Formulation",
      description: "Nothing extra, nothing missing. Every ingredient serves a purpose in delivering moisture, definition, and lasting hold."
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            The CurlLoom Difference
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Crafted for Curls That
            <span className="text-gradient block">Demand More</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
            We created CurlLoom because curly and low-porosity hair deserves products designed with intention—not afterthought. Our formulas are the result of obsessive attention to curl science and a deep respect for natural ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-serif text-2xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
