import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
    ],
    support: [
      { name: "Safety", href: "/safety" },
      { name: "Contact Us", href: "/contact" },
      { name: "Send Package", href: "/send-package" },
      { name: "Become Carrier", href: "/become-carrier" },
    ],
    legal: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 md:mb-6">
              <img 
                src={logo} 
                alt="Safar Couriers" 
                className="w-12 h-12 rounded-full object-cover bg-primary-foreground"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Safar</span>
                <span className="text-xs opacity-80 -mt-1">Couriers</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-4 md:mb-6">
              Turn Your Journey Into Earnings. India's trusted peer-to-peer delivery platform.
            </p>
            <div className="space-y-2 md:space-y-3">
              <a href="mailto:support@safarcouriers.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">support@safarcouriers.com</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 123 456 7890
              </a>
              <div className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-base mb-3 md:mb-4">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 md:mb-4">Support</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 md:mb-4">Legal</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm opacity-80 text-center md:text-left">
              <p>© {currentYear} Safar Couriers Private Limited. All rights reserved.</p>
              <p className="mt-1 flex items-center justify-center md:justify-start gap-2">
                <span className="inline-block w-4 h-3 bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-sm"></span>
                Made in India
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
