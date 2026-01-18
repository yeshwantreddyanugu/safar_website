import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Wallet, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Users,
  Star
} from "lucide-react";

const BecomeCarrier = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Earn Extra Income",
      description: "Turn your regular trips into earning opportunities. Get paid for deliveries on your route.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work when you want. Accept deliveries that fit your travel plans and schedule.",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "You're covered while making deliveries. Peace of mind on every trip.",
    },
    {
      icon: Users,
      title: "Join a Community",
      description: "Be part of India's growing peer-to-peer delivery network.",
    },
  ];

  const requirements = [
    "Valid Aadhaar card for identity verification",
    "PAN card for tax compliance",
    "Active bank account for payments",
    "Valid driving license (for vehicle carriers)",
    "Vehicle registration and insurance (if using vehicle)",
    "Smartphone with internet connectivity",
  ];

  const stats = [
    { value: "₹15,000+", label: "Avg. Monthly Earnings" },
    { value: "2000+", label: "Active Carriers" },
    { value: "Weekly", label: "Payouts" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="container-main text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
              Become a Carrier
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-6 md:mb-8">
              Turn your journey into earnings. Join India's trusted peer-to-peer delivery network.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Us to Join
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 md:py-12 bg-background border-b border-border">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
                Benefits
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Why Become a Carrier?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-safar-red-light rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  Requirements
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  What you need to become a Safar Carrier
                </p>
              </div>

              <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border">
                <ul className="space-y-3 md:space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground mb-4 md:mb-6 italic px-4">
                "Safar Couriers has been a great way to earn extra income during my regular travels. 
                The platform is easy to use and payments are always on time."
              </blockquote>
              <p className="text-sm md:text-base text-muted-foreground">— A Safar Carrier</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-24 bg-primary">
          <div className="container-main text-center px-4">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Truck className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about becoming a Safar Carrier.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Contact Us
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  Learn More
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

export default BecomeCarrier;
