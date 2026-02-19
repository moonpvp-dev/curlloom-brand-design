import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "All Products", href: "/checkout" },
      { name: "Bundles", href: "/checkout" },
      { name: "Gift Cards", href: "/checkout" },
    ],
    help: [
      { name: "Contact Us", href: "/contact" },
      { name: "Shipping & Returns", href: "/shipping-returns" },
      { name: "FAQ", href: "/faq" },
    ],
    company: [
      { name: "Our Story", href: "#" },
      { name: "Ingredients", href: "/ingredients" },
      { name: "Blog", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/curlloom", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const renderLink = (link: { name: string; href: string }) => {
    if (link.href.startsWith("/")) {
      return (
        <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          {link.name}
        </Link>
      );
    }
    return (
      <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        {link.name}
      </a>
    );
  };

  return (
    <footer className="py-16 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-sf-pro text-2xl font-semibold text-foreground">
                Curl<span className="text-gradient">Loom</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Crafted curl. Elevated, premium formulas for curly hair.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sf-pro text-lg text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sf-pro text-lg text-foreground mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sf-pro text-lg text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CurlLoom LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
