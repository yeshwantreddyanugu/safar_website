import { Link } from "react-router-dom";
import { Globe, Lock, Building2, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Public Trips",
      description: "Perfect for everyday packages. Carriers traveling on existing routes can deliver your items affordably.",
      features: ["Max value ₹1,000", "Standard insurance ₹500", "Budget-friendly rates"],
      href: "/services#public",
      popular: false,
    },
    {
      icon: Lock,
      title: "Private Trips",
      description: "For valuable or urgent packages. Dedicated carriers with enhanced security and priority handling.",
      features: ["No value limit", "Enhanced insurance", "Priority delivery"],
      href: "/services#private",
      popular: true,
    },
    {
      icon: Building2,
      title: "Commercial Trips",
      description: "Business-to-business delivery solutions with volume discounts and compliance support.",
      features: ["B2B solutions", "Volume discounts", "Commercial permits"],
      href: "/services#commercial",
      popular: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Choose Your Trip Type
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Flexible delivery options designed to meet every need and budget.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-xl md:rounded-2xl p-6 md:p-8 card-hover border-2 ${
                service.popular ? "border-primary" : "border-transparent hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-safar-red-light rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 md:mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to={service.href}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200 text-sm md:text-base"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
