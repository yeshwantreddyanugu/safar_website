import { Fingerprint, Key, MapPin, Shield } from "lucide-react";

const TrustSafetySection = () => {
  const safetyFeatures = [
    {
      icon: Fingerprint,
      title: "e-KYC Verification",
      description: "Aadhaar-based verification for all users",
    },
    {
      icon: Key,
      title: "OTP Security",
      description: "Dual OTP system for pickup and delivery",
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Live GPS tracking of your package",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive coverage for all packages",
    },
  ];

  return (
    <section className="bg-primary py-12 sm:py-16 md:py-24">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
            Trust & Safety First
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto px-4">
            Your security is our top priority. We've built multiple layers of protection into every delivery.
          </p>
        </div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-primary-foreground/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-primary-foreground mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-primary-foreground/80 px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;
