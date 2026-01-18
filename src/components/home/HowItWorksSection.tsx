import { Package, Users, MapPin } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: Package,
      title: "Book Delivery",
      description: "Enter your pickup and delivery locations, package details, and preferred delivery date.",
    },
    {
      number: "2",
      icon: Users,
      title: "Match with Carrier",
      description: "Get matched with verified carriers traveling your route. Compare prices and reviews.",
    },
    {
      number: "3",
      icon: MapPin,
      title: "Track & Deliver",
      description: "Track your package in real-time. Secure handoff with OTP verification at both ends.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Sending a package has never been easier. Just three simple steps to get your package delivered safely.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-primary rotate-45 -mr-1.5"></div>
                </div>
              )}

              <div className="text-center relative z-10">
                {/* Step Number Badge */}
                <div className="badge-step mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-safar-red-light rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed px-4 md:px-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
