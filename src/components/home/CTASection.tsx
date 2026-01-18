import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Truck, Smartphone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container-main">
        <div className="bg-primary rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 md:mb-4">
              Ready to Send or Deliver?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
              Join thousands of Indians who trust Safar Couriers for their delivery needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
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

            {/* App Download */}
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Coming soon on iOS & Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
