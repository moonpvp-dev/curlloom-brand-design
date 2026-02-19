import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | CurlLoom</title>
        <meta name="description" content="CurlLoom LLC Terms of Service. Read our terms governing the use of curlloom.co and purchase of products." />
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

            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-3">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-muted-foreground mb-2">CurlLoom LLC</p>
            <p className="text-sm text-muted-foreground mb-12">
              Effective Date: February 19, 2026 &middot; Last Updated: February 19, 2026 &middot; Website: curlloom.co
            </p>

            <div className="space-y-10 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using curlloom.co (the "Site"), purchasing products, or interacting with CurlLoom LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Site.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">2. Eligibility</h2>
                <p>You must be at least 18 years old to make purchases. By using this Site, you represent that you meet this requirement or are using the Site under supervision of a legal guardian.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">3. Cosmetic Product Status</h2>
                <p className="mb-3">CurlLoom LLC products are cosmetic products intended for external use only. They are formulated and marketed in compliance with U.S. cosmetic law, including the Federal Food, Drug, and Cosmetic Act and the Modernization of Cosmetics Regulation Act of 2022.</p>
                <p>CurlLoom LLC products are not drugs, are not intended to diagnose, treat, cure, or prevent disease, and do not alter the structure or function of the body. Individual results vary.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">4. Orders & Acceptance</h2>
                <p>All orders are subject to availability and acceptance. CurlLoom LLC reserves the right to refuse or cancel any order, limit quantities, correct pricing or system errors, and discontinue products. Order confirmation does not constitute final acceptance if errors are discovered.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">5. Pricing & Product Accuracy</h2>
                <p>We attempt to ensure that descriptions, ingredient lists, and pricing are accurate. However, typographical errors may occur, packaging may vary slightly, and formulations may be updated. CurlLoom LLC reserves the right to correct errors without prior notice.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">6. Payment</h2>
                <p>Payments are processed securely via third-party payment providers. CurlLoom LLC does not store full credit card numbers. You represent that you are authorized to use the submitted payment method.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">7. Shipping & Risk of Loss</h2>
                <p className="mb-3">Title and risk of loss transfer to the customer upon delivery to the shipping carrier. CurlLoom LLC is not responsible for carrier delays, lost packages after confirmed delivery, or incorrect shipping information provided by the customer.</p>
                <p>If a package is marked "Delivered" by the carrier but not received, customers must contact the carrier directly.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">8. Damaged or Defective Products</h2>
                <p className="mb-3">If a product arrives leaking, cracked, broken, with a damaged container, or materially defective, you must contact <a href="mailto:help@curlloom.co" className="text-primary hover:underline">help@curlloom.co</a> within 5 calendar days of delivery.</p>
                <p className="mb-3">Include: order number, photos of the damage, photos of packaging (including shipping box), and a description of the issue.</p>
                <p className="mb-3">Failure to provide documentation within the stated timeframe may result in denial of replacement. If approved, CurlLoom LLC may issue a replacement or a refund at its discretion.</p>
                <p>Damage caused after delivery (e.g., dropping, improper storage, heat exposure) is not covered.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">9. Returns & Refunds</h2>
                <p className="mb-3">All sales are final unless otherwise stated. If returns are permitted, requests must be submitted within 14 calendar days of delivery. Products must be unused and unopened, and proof of purchase is required. Shipping costs are non-refundable.</p>
                <p>Opened or used cosmetic products are not eligible for return due to hygiene and safety considerations. Excessive or abusive return behavior may result in account restriction.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">10. Proper Use & Assumption of Risk</h2>
                <p className="mb-3">You agree to use products only as directed, perform patch testing, and discontinue use if irritation occurs. All cosmetic products carry potential for individual sensitivity.</p>
                <p>CurlLoom LLC is not liable for allergic reactions, known ingredient sensitivities, misuse, or improper storage.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">11. Adverse Event Reporting</h2>
                <p className="mb-3">If you experience a serious or unexpected reaction — including severe irritation, swelling, blistering, infection, or medical treatment — discontinue use and seek medical attention.</p>
                <p className="mb-3">Report adverse events to <a href="mailto:help@curlloom.co" className="text-primary hover:underline">help@curlloom.co</a>. CurlLoom LLC may document and retain adverse event information as required under the Modernization of Cosmetics Regulation Act of 2022.</p>
                <p>Submission does not constitute admission of liability.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">12. Chargebacks & Payment Disputes</h2>
                <p className="mb-3">Before initiating a chargeback, you agree to contact <a href="mailto:help@curlloom.co" className="text-primary hover:underline">help@curlloom.co</a>. If a chargeback is initiated without prior resolution attempt, CurlLoom LLC may dispute it, fulfillment records may be submitted, and future purchases may be restricted.</p>
                <p>Fraudulent chargebacks violate these Terms.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">13. Wholesale, Resale & MAP Policy</h2>
                <p className="mb-3">Unauthorized resale, relabeling, or repackaging is prohibited. Retail partners may not make medical claims, alter packaging, or sell on third-party marketplaces without written authorization.</p>
                <p>CurlLoom LLC may establish a Minimum Advertised Price (MAP). Violations may result in termination of authorization.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">14. Intellectual Property</h2>
                <p>All content on curlloom.co is the property of CurlLoom LLC and may not be copied or reproduced without permission.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">15. User Submissions</h2>
                <p>Reviews, testimonials, or submitted content grant CurlLoom LLC a non-exclusive, royalty-free license for marketing use.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">16. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, CurlLoom LLC shall not be liable for indirect, incidental, or consequential damages, lost profits, or emotional distress. Total liability shall not exceed the amount paid for the product in dispute.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">17. Class Action Waiver</h2>
                <p>All disputes must be brought individually. You waive the right to participate in class actions, representative actions, or consolidated proceedings.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">18. Dispute Resolution & Arbitration</h2>
                <p>Disputes shall first be addressed through good-faith negotiation. If unresolved, disputes shall be resolved through binding arbitration in the Commonwealth of Virginia. Each party bears its own legal costs unless otherwise required by law.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">19. Force Majeure</h2>
                <p>CurlLoom LLC is not liable for failure to perform due to events beyond reasonable control, including natural disasters, supply chain disruptions, government actions, and carrier interruptions.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">20. Severability</h2>
                <p>If any provision of these Terms is deemed unenforceable, the remaining provisions remain in effect.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">21. Entire Agreement</h2>
                <p>These Terms constitute the entire agreement between you and CurlLoom LLC regarding use of the Site and purchase of products.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">22. Modifications</h2>
                <p>CurlLoom LLC may update these Terms at any time. Continued use of the Site constitutes acceptance of revisions.</p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
