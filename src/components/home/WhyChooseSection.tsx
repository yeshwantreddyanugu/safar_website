import { Smartphone, Users, CreditCard, Shield } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Technology Platform",
      description: "Our advanced platform uses AI to match your package with the best carrier, optimizing for speed, cost, and reliability.",
    },
    {
      icon: Users,
      title: "Independent Carriers",
      description: "Our network of verified independent carriers provides flexible, personalized service that traditional couriers can't match.",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Your money is held safely in escrow until delivery is confirmed. No hidden fees, transparent pricing every time.",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Every package is covered by our comprehensive insurance policy, giving you peace of mind for valuable items.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
            Why Safar
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Why Choose Safar Couriers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            We combine cutting-edge technology with a trusted carrier network to deliver an unmatched experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-safar-red-light rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
