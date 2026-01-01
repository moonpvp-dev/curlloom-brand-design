import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FlaskConical, ArrowLeft } from "lucide-react";

const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Checkout | CurlLoom</title>
        <meta name="description" content="Complete your CurlLoom purchase" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative">
        {/* Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amethyst/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 border border-primary/30 mb-8">
              <FlaskConical className="w-12 h-12 text-primary" />
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Products Under
              <span className="text-gradient block">Testing</span>
            </h1>

            {/* Message */}
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              We're perfecting our formulas to ensure every curl gets the care it deserves. 
              Our products will be available for purchase soon.
            </p>

            {/* Email signup prompt */}
            <div className="bg-card border border-border/50 rounded-2xl p-6 mb-8">
              <p className="text-foreground font-medium mb-2">Want to be the first to know?</p>
              <p className="text-muted-foreground text-sm">
                Sign up for our newsletter to get notified when we launch.
              </p>
            </div>

            {/* Back button */}
            <Link to="/">
              <Button variant="glow" size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
