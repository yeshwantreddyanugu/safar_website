import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Truck, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Clock,
  CreditCard
} from "lucide-react";

const SendPackage = () => {
  const steps = [
    {
      icon: Package,
      title: "Share Your Package Details",
      description: "Tell us about your package - size, weight, pickup and delivery locations.",
    },
    {
      icon: Truck,
      title: "We Match You with Carriers",
      description: "Our platform connects you with verified carriers traveling your route.",
    },
    {
      icon: MapPin,
      title: "Track in Real-Time",
      description: "Monitor your package every step of the way with live GPS tracking.",
    },
    {
      icon: CheckCircle,
      title: "Safe Delivery Guaranteed",
      description: "OTP-verified handoffs ensure your package reaches safely.",
    },
  ];

  const benefits = [
    { icon: Shield, text: "Insured Packages" },
    { icon: CreditCard, text: "Secure Payments" },
    { icon: Clock, text: "Flexible Scheduling" },
    { icon: CheckCircle, text: "Verified Carriers" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="container-main text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
              Send a Package
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-6 md:mb-8">
              Get your package delivered by trusted carriers traveling your route. 
              Affordable, reliable, and fully tracked.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us to Get Started
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
                Simple Process
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                How It Works
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Sending a package with Safar Couriers is easy
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-safar-red-light rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <step.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Why Send with Safar?
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 bg-card rounded-full px-4 md:px-6 py-2 md:py-3 border border-border"
                >
                  <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-sm md:text-base font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-24 bg-primary">
          <div className="container-main text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              Ready to Send Your Package?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our delivery services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Contact Us
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SendPackage;
