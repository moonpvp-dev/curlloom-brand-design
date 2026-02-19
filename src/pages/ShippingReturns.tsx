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

const ShippingReturns = () => {
  return (
    <>
      <Helmet>
        <title>Shipping & Returns | CurlLoom</title>
        <meta name="description" content="CurlLoom LLC shipping and returns policy. Fast processing, transparent policies, no surprises." />
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

            <div className="mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-3">
                Shipping & <span className="text-gradient">Returns</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-2">
                Clear policies designed to protect product integrity and ensure a smooth experience.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Fast processing. Transparent policies. No surprises.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="processing" className="card-gradient rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="font-serif text-xl hover:no-underline py-6">
                  Order Processing
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed space-y-4">
                  <p>Orders are processed within 2–4 business days (excluding weekends and holidays).</p>
                  <p>You will receive an order confirmation email and a shipping confirmation with tracking information.</p>
                  <p>During high-volume periods, processing times may extend slightly. We prioritize quality control and packaging integrity before shipment.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping" className="card-gradient rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="font-serif text-xl hover:no-underline py-6">
                  Shipping
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed space-y-4">
                  <p>Shipping times vary by carrier and destination. Estimated delivery windows are displayed at checkout.</p>
                  <p>Once an order has been transferred to the shipping carrier, CurlLoom LLC is not responsible for carrier delays.</p>
                  <p>Please verify your shipping address before placing your order. CurlLoom LLC is not responsible for delivery issues caused by incorrect address submission.</p>
                  <p>If your tracking shows "Delivered" but you have not received the package, please contact the carrier first. If additional assistance is needed, contact <a href="mailto:help@curlloom.co" className="text-primary hover:underline">help@curlloom.co</a>.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="damaged" className="card-gradient rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="font-serif text-xl hover:no-underline py-6">
                  Damaged or Defective Items
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed space-y-4">
                  <p>We take packaging integrity seriously.</p>
                  <p>If your product arrives leaking, cracked, broken, or with visible container damage, email <a href="mailto:help@curlloom.co" className="text-primary hover:underline">help@curlloom.co</a> within 5 calendar days of delivery.</p>
                  <p>Include: order number, clear photos of the product, photos of the shipping box, and a description of the issue.</p>
                  <p>If approved, we will issue a replacement or refund at our discretion.</p>
                  <p>Damage occurring after delivery (dropping, improper storage, extreme heat exposure) is not covered.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns" className="card-gradient rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="font-serif text-xl hover:no-underline py-6">
                  Returns & Refunds
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed space-y-4">
                  <p>Due to hygiene and safety standards, opened cosmetic products cannot be returned.</p>
                  <p>Return requests must be submitted within 14 calendar days of delivery. To qualify: product must be unopened, unused, in original packaging, with proof of purchase.</p>
                  <p>Shipping costs are non-refundable.</p>
                  <p>CurlLoom LLC reserves the right to deny returns that do not meet these criteria.</p>
                  <p className="text-sm text-muted-foreground/70 italic">We design our policies to protect product safety and maintain fairness for all customers.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disputes" className="card-gradient rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="font-serif text-xl hover:no-underline py-6">
                  Payment Disputes
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed space-y-4">
                  <p>Before initiating a chargeback with your bank, please contact <a href="mailto:help@curlloom.co" className="text-primary hover:underline">help@curlloom.co</a> so we can resolve the issue quickly.</p>
                  <p>Unauthorized or abusive chargebacks may result in purchase restrictions.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground">
                Questions? Contact <a href="mailto:help@curlloom.co" className="text-primary hover:underline">help@curlloom.co</a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ShippingReturns;
