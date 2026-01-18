import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Truck, Shield, CheckCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  const trustIndicators = [
    { icon: Package, label: "5000+ Deliveries" },
    { icon: CheckCircle, label: "Verified Carriers" },
    { icon: Shield, label: "Insured Packages" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Safar Couriers - Turn Your Journey Into Earnings" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      <div className="container-main relative">
        <div className="py-16 sm:py-20 md:py-28 lg:py-36">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-foreground/10 rounded-full mb-6 sm:mb-8 animate-fade-in">
              <Truck className="w-4 h-4 text-primary-foreground" />
              <span className="text-xs sm:text-sm font-medium text-primary-foreground">Peer-to-Peer Delivery Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-slide-up leading-tight">
              India's Trusted Peer-to-Peer Delivery Platform
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 sm:mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
              Turn Your Journey Into Earnings. Connect with verified carriers traveling your route. 
              Send packages safely, affordably, and with real-time tracking across India.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto min-w-[180px]">
                  <Package className="w-5 h-5 mr-2" />
                  Send a Package
                </Button>
              </Link>
              <Link to="/how-it-works" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto min-w-[180px]">
                  <Truck className="w-5 h-5 mr-2" />
                  Become a Carrier
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
