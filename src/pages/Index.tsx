import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import RoutineSection from "@/components/RoutineSection";
import IngredientsSection from "@/components/IngredientsSection";
import ComparisonSection from "@/components/ComparisonSection";
import BundleSection from "@/components/BundleSection";
import FounderSection from "@/components/FounderSection";
import TesterSignupSection from "@/components/TesterSignupSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CurlLoom | Crafted Curl</title>
        <meta name="description" content="CurlLoom | Premium Crafted Curl Care. Lightweight, clean formulas with aloe vera, grapeseed oil, marshmallow root, and beta-glucan for curls that demand more." />
        <meta name="keywords" content="curly hair, curl care, natural hair products, low porosity hair, medium porosity hair, high porosity hair, curl cream, leave-in conditioner" />
        <link rel="canonical" href="https://curlloom.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <TesterSignupSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
