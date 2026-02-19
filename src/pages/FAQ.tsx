import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqSections = [
  {
    title: "Product Questions",
    items: [
      {
        q: "Are CurlLoom products medical or drug-based?",
        a: "No. CurlLoom products are cosmetic formulations intended for external use only. They are not drugs and are not intended to diagnose, treat, cure, or prevent disease."
      },
      {
        q: "Are your formulas lightweight?",
        a: "Yes. CurlLoom products are intentionally designed to be lightweight, low-buildup, and suitable for active lifestyles."
      },
      {
        q: "Should I patch test?",
        a: "Yes. Apply a small amount to the inner forearm and wait 24 hours before full application."
      },
      {
        q: "Do results vary?",
        a: "Yes. Hair porosity, routine, climate, and individual sensitivity may influence results."
      },
    ],
  },
  {
    title: "Shipping & Orders",
    items: [
      {
        q: "How long does shipping take?",
        a: "Orders process within 2–4 business days. Delivery timelines depend on carrier and location."
      },
      {
        q: "What if my package shows delivered but I don't have it?",
        a: "Please contact the carrier first. If needed, email help@curlloom.co."
      },
    ],
  },
  {
    title: "Returns & Damages",
    items: [
      {
        q: "What if my product arrives damaged?",
        a: "Contact help@curlloom.co within 5 days and include photos of the product and packaging."
      },
      {
        q: "Can I return opened products?",
        a: "No. Opened cosmetic products cannot be returned for hygiene reasons."
      },
    ],
  },
  {
    title: "Ingredients & Safety",
    items: [
      {
        q: "Are your products compliant with U.S. cosmetic regulations?",
        a: "Yes. CurlLoom LLC operates under applicable U.S. cosmetic regulations."
      },
      {
        q: "What if I experience irritation?",
        a: "Discontinue use immediately and contact help@curlloom.co."
      },
    ],
  },
  {
    title: "Wholesale",
    items: [
      {
        q: "Do you offer wholesale partnerships?",
        a: "Yes. Please contact help@curlloom.co for wholesale inquiries."
      },
    ],
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | CurlLoom</title>
        <meta name="description" content="Frequently asked questions about CurlLoom products, shipping, returns, ingredients, and more." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-3">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-2">
                Clear answers about our formulas, usage, and policies.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Transparent. Direct. No inflated claims.
              </p>
            </div>

            <div className="space-y-12">
              {faqSections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-serif text-2xl font-semibold mb-4">{section.title}</h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {section.items.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${section.title}-${index}`}
                        className="card-gradient rounded-xl border border-border/50 px-6"
                      >
                        <AccordionTrigger className="font-sans text-base hover:no-underline py-5 text-left">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground">
                Still have questions? Contact <a href="mailto:help@curlloom.co" className="text-primary hover:underline">help@curlloom.co</a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
