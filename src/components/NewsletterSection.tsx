import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const SHEETSDB_API_URL = "https://sheetdb.io/api/v1/s9on8xwntcu7t";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      // Check if email already exists
      const checkRes = await fetch(`${SHEETSDB_API_URL}/search?email=${encodeURIComponent(result.data)}`);
      const existing = await checkRes.json();

      if (Array.isArray(existing) && existing.length > 0) {
        toast.info("You're already subscribed! 💜");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(SHEETSDB_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [{ email: result.data }] }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSubmitted(true);
      toast.success("Welcome to the community! 💜");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amethyst/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="p-10 md:p-14 rounded-3xl card-gradient border border-primary/30 glow-purple-sm text-center">
            {!isSubmitted ? (
              <>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Join the Curl
                  <span className="text-gradient"> Community</span>
                </h2>
                
                <p className="font-sans text-muted-foreground mb-8 max-w-md mx-auto">
                  Be the first to know about new launches, exclusive offers, and expert curl tips. Plus, get 10% off your first order.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/60 h-12 rounded-xl"
                    required
                    maxLength={255}
                  />
                  <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "..." : "Subscribe"}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-6">
                  Unsubscribe anytime. We respect your inbox.
                </p>
              </>
            ) : (
              <div className="py-8">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-fade-in">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  Welcome to the Community!
                </h3>
                <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Check your inbox for your 10% discount code.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
