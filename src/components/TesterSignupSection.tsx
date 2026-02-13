import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FlaskConical, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const SHEETSDB_API_URL = "https://sheetdb.io/api/v1/786bou01py30i";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  "phone number": z.string().trim().min(7, "Phone number is required").max(20),
  age: z.string().trim().min(1, "Age is required").max(3),
  "hair type": z.string().trim().min(1, "Hair type is required"),
});

const hairTypes = [
  "Straight (Type 1)",
  "Wavy (Type 2A-2C)",
  "Curly (Type 3A-3B)",
  "Coily (Type 3C-4A)",
  "Kinky (Type 4B-4C)",
];

const TesterSignupSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    "phone number": "",
    age: "",
    "hair type": "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      // Check for duplicate email
      const checkRes = await fetch(`${SHEETSDB_API_URL}/search?email=${encodeURIComponent(result.data.email)}`);
      const existing = await checkRes.json();

      if (Array.isArray(existing) && existing.length > 0) {
        toast.info("You've already signed up as a tester! 💜");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(SHEETSDB_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [result.data] }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSubmitted(true);
      toast.success("You're in! We'll be in touch soon. 💜");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              You're on the list!
            </h2>
            <p className="text-muted-foreground text-lg">
              Thank you for signing up as a CurlLoom tester. We'll reach out soon with next steps. 💜
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tester-signup" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amethyst/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FlaskConical className="w-5 h-5 text-primary" />
              <span className="text-primary font-sans text-sm tracking-[0.2em] uppercase">
                Be First to Try
              </span>
            </div>
            <h2 className="font-sf-pro text-4xl md:text-5xl font-semibold text-foreground mb-4">
              CurlLoom <span className="text-gradient">Tester Sign Up</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our products are currently in testing. Sign up to receive free samples and help shape the future of curl care.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border/50 rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-border/50"
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary/50 border-border/50"
                  maxLength={255}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData["phone number"]}
                  onChange={(e) => setFormData({ ...formData, "phone number": e.target.value })}
                  className="bg-secondary/50 border-border/50"
                  maxLength={20}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age" className="text-foreground">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="bg-secondary/50 border-border/50"
                  min={13}
                  max={120}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground">Hair Type</Label>
              <Select
                value={formData["hair type"]}
                onValueChange={(value) => setFormData({ ...formData, "hair type": value })}
              >
                <SelectTrigger className="bg-secondary/50 border-border/50">
                  <SelectValue placeholder="Select your hair type" />
                </SelectTrigger>
                <SelectContent>
                  {hairTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button variant="hero" size="xl" className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Sign Up as Tester"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By signing up, you agree to be contacted about product testing opportunities.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TesterSignupSection;
