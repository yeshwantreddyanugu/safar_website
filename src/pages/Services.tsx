import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Lock, Building2, Check, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "public",
      icon: Globe,
      title: "Public Trips",
      subtitle: "Affordable everyday delivery",
      description: "Carriers traveling on their regular routes can deliver your packages at budget-friendly rates. Perfect for non-urgent, everyday shipments.",
      features: [
        "Maximum package value: ₹1,000",
        "Insurance coverage up to ₹500",
        "Standard delivery timeline",
        "Real-time tracking",
        "OTP-verified handoffs",
        "Best for small packages",
      ],
      pricing: "Starting from ₹49",
      popular: false,
    },
    {
      id: "private",
      icon: Lock,
      title: "Private Trips",
      subtitle: "Premium dedicated delivery",
      description: "Dedicated carriers for your valuable or urgent packages. Enhanced security, priority handling, and flexible scheduling.",
      features: [
        "No package value limit",
        "Enhanced insurance coverage",
        "Priority delivery scheduling",
        "Premium carrier selection",
        "Direct communication",
        "Ideal for valuables",
      ],
      pricing: "Custom pricing",
      popular: true,
    },
    {
      id: "commercial",
      icon: Building2,
      title: "Commercial Trips",
      subtitle: "Business delivery solutions",
      description: "Tailored solutions for businesses with regular delivery needs. Volume discounts, compliance support, and dedicated account management.",
      features: [
        "B2B delivery solutions",
        "Commercial permit support",
        "Volume-based discounts",
        "Invoice billing",
        "Dedicated account manager",
        "SLA guarantees",
      ],
      pricing: "Contact for quote",
      popular: false,
    },
  ];

  const comparisonData = [
    { feature: "Package Value Limit", public: "₹1,000", private: "Unlimited", commercial: "Unlimited" },
    { feature: "Insurance Coverage", public: "Up to ₹500", private: "Custom", commercial: "Custom" },
    { feature: "Delivery Priority", public: "Standard", private: "Priority", commercial: "Priority" },
    { feature: "Carrier Selection", public: "Auto-matched", private: "Premium", commercial: "Dedicated" },
    { feature: "Communication", public: "Via platform", private: "Direct", commercial: "Account Manager" },
    { feature: "Bulk Discounts", public: "No", private: "No", commercial: "Yes" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="container-main text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Flexible delivery options designed to meet every need, 
              from everyday packages to business solutions.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`relative bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border-2 ${
                    service.popular ? "border-primary" : "border-border"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <div className="w-12 h-12 md:w-14 md:h-14 bg-safar-red-light rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h2>
                  <p className="text-primary font-medium text-sm md:text-base mb-3 md:mb-4">{service.subtitle}</p>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{service.description}</p>

                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 md:gap-3">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-4 md:pt-6">
                    <p className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                      {service.pricing}
                    </p>
                    <Link to="/contact">
                      <Button
                        variant={service.popular ? "default" : "outline"}
                        className="w-full"
                        size="lg"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Compare Trip Types
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Find the perfect option for your delivery needs
              </p>
            </div>

            <div className="bg-card rounded-xl md:rounded-2xl overflow-hidden border border-border">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left font-semibold text-xs sm:text-sm md:text-base">Feature</th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-xs sm:text-sm md:text-base">Public</th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-xs sm:text-sm md:text-base">Private</th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-xs sm:text-sm md:text-base">Commercial</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border ${
                          index % 2 === 0 ? "bg-card" : "bg-secondary/50"
                        }`}
                      >
                        <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 font-medium text-foreground text-xs sm:text-sm md:text-base">
                          {row.feature}
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center text-muted-foreground text-xs sm:text-sm md:text-base">
                          {row.public}
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center text-muted-foreground text-xs sm:text-sm md:text-base">
                          {row.private}
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center text-muted-foreground text-xs sm:text-sm md:text-base">
                          {row.commercial}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
