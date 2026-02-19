import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | CurlLoom</title>
        <meta name="description" content="CurlLoom LLC Privacy Policy. Learn how we collect, use, and protect your personal information." />
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-2">CurlLoom LLC</p>
            <p className="text-sm text-muted-foreground mb-12">
              Effective Date: February 19, 2026 &middot; Last Updated: February 19, 2026
            </p>

            <div className="space-y-10 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  CurlLoom LLC ("Company," "we," "us," or "our") is a U.S.-based cosmetic brand that formulates and distributes topical hair care products intended for external use only.
                </p>
                <p className="mt-3">
                  This Privacy Policy explains how we collect, use, disclose, and safeguard personal information obtained through curlloom.co, online forms, ecommerce transactions, email communications, and marketing subscriptions.
                </p>
                <p className="mt-3">This policy applies solely to website visitors and customers.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="font-serif text-lg font-medium mb-2 text-foreground">A. Information You Provide Voluntarily</h3>
                <p className="mb-3">We may collect personal information when you make a purchase, join our email list, submit a contact form, request updates, or create an account (if enabled). Information may include:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing and shipping address</li>
                  <li>Order details</li>
                  <li>Customer service communications</li>
                </ul>
                <p className="mt-3">CurlLoom LLC does not intentionally collect sensitive medical information.</p>

                <h3 className="font-serif text-lg font-medium mt-6 mb-2 text-foreground">B. Automatically Collected Information</h3>
                <p className="mb-3">When you access our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>IP address, browser type, device type, and operating system</li>
                  <li>Pages visited, time and date of access, and referring URLs</li>
                </ul>
                <p className="mt-3">This data is collected through cookies and analytics technologies.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">3. How We Use Information</h2>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Process and fulfill orders</li>
                  <li>Provide customer service</li>
                  <li>Send transactional emails (order confirmation, shipping updates)</li>
                  <li>Improve website functionality</li>
                  <li>Maintain internal business records</li>
                  <li>Prevent fraud and unauthorized transactions</li>
                  <li>Send marketing communications (if you opt in)</li>
                </ul>
                <p className="mt-3 font-medium text-foreground">We do not sell personal data.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">4. Legal and Regulatory Context</h2>
                <p>
                  CurlLoom LLC operates as a cosmetic manufacturer under U.S. law, including the Federal Food, Drug, and Cosmetic Act, the Modernization of Cosmetics Regulation Act of 2022, and applicable Federal Trade Commission standards.
                </p>
                <p className="mt-3">
                  Personal information collected through the website is used for ecommerce and communication purposes, not for medical or pharmaceutical research.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">5. Cookies and Analytics</h2>
                <p>
                  We may use cookies and similar technologies to maintain website performance, analyze traffic patterns, improve user experience, and remember user preferences. You may disable cookies in your browser settings. Some site functionality may be limited if cookies are disabled.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">6. Payment Processing</h2>
                <p>
                  All payment transactions are processed through secure third-party providers. CurlLoom LLC does not store full credit card numbers on its servers. Payment processors maintain their own privacy and security policies.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">7. Data Sharing</h2>
                <p className="mb-3">We may share personal information with:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Payment processors</li>
                  <li>Shipping carriers</li>
                  <li>Ecommerce hosting platforms</li>
                  <li>Email service providers</li>
                  <li>Analytics providers</li>
                  <li>Legal authorities if required by law</li>
                </ul>
                <p className="mt-3">All third-party vendors are required to implement reasonable security safeguards. We do not sell or rent personal data.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">8. Data Retention</h2>
                <p>
                  We retain personal information only as long as necessary to complete transactions, maintain financial and tax records, comply with regulatory obligations, and resolve disputes. Retention periods may vary depending on legal and operational requirements.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">9. Data Security</h2>
                <p>
                  We implement reasonable administrative, technical, and physical safeguards, including SSL encryption, secure hosting environments, limited internal data access, and password-protected systems. However, no online transmission method is guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">10. Your Privacy Rights</h2>
                <p className="mb-3">
                  Depending on your state of residence (including rights under the Virginia Consumer Data Protection Act), you may have the right to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion (subject to legal retention obligations)</li>
                  <li>Opt out of marketing communications</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, contact <a href="mailto:help@curlloom.co" className="text-primary hover:underline">help@curlloom.co</a>. We may verify identity before processing certain requests.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">11. Children's Privacy</h2>
                <p>
                  CurlLoom's website is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that such information has been collected, we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">12. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">13. Governing Law</h2>
                <p>
                  This Privacy Policy shall be governed by and interpreted in accordance with the laws of the Commonwealth of Virginia.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold mb-4">14. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Updates will be reflected by revising the "Last Updated" date above. Continued use of the website constitutes acceptance of the revised policy.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
