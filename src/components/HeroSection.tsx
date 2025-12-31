import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Luxurious curly hair" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-glow opacity-50" />
      </div>

      {/* Purple Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amethyst/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-lavender font-sans text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Premium Curl Care
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Crafted Curl Care.
          <span className="block text-gradient mt-2">Elevated.</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Where curl science meets botanical luxury. Intentionally formulated for curly and low-porosity hair that demands performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button variant="hero" size="xl" onClick={() => scrollToSection('products')}>
            Shop Crafted Curl
          </Button>
          <Button variant="glow" size="xl" onClick={() => scrollToSection('ingredients')}>
            Discover the Science
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-lavender/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-lavender/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
