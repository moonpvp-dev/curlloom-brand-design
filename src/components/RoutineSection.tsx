import { Droplets, Heart, Sparkles } from "lucide-react";

const RoutineSection = () => {
  const steps = [
    {
      step: 1,
      icon: Droplets,
      product: "Refresh Spray",
      title: "Daily Hydration",
      description: "Start with a light mist to awaken your curls and restore moisture. Perfect for day 2+ curls or as a styling prep on wash day.",
      tip: "Scrunch upward while misting for enhanced volume"
    },
    {
      step: 2,
      icon: Heart,
      product: "Leave-In Conditioner",
      title: "Moisture & Slip",
      description: "Apply generously to damp hair, working from mid-lengths to ends. This is your curl's best friend—providing lasting hydration and easy detangling.",
      tip: "Use a wide-tooth comb for even distribution"
    },
    {
      step: 3,
      icon: Sparkles,
      product: "Curl Cream",
      title: "Definition & Hold",
      description: "Seal in your style with our defining curl cream. Apply to wet hair using praying hands, then scrunch to encourage curl formation.",
      tip: "Less is more—build up as needed"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Your Curl Routine
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            The Crafted Curl
            <span className="text-gradient"> Method</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Three intentional steps to transform your curl game. Simple, effective, elevated.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className="relative flex flex-col md:flex-row items-start gap-8 mb-12 last:mb-0"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 top-24 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-serif text-lg flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-colors duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-sans">
                    {step.product}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-lavender">
                  <Sparkles className="w-4 h-4" />
                  <span className="italic">Pro Tip: {step.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutineSection;
