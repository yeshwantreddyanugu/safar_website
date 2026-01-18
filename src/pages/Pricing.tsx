import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CreditCard, RefreshCcw, Info, ArrowRight } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Public Trip",
      basePrice: "₹49",
      description: "Starting price for short distances",
      details: [
        "Base fare + per km charges",
        "Platform fee: 15%",
        "Insurance: ₹10 (up to ₹500 coverage)",
        "GST as applicable",
      ],
    },
    {
      name: "Private Trip",
      basePrice: "Custom",
      description: "Negotiable with carrier",
      details: [
        "Direct pricing with carrier",
        "Platform fee: 12%",
        "Enhanced insurance options",
        "GST as applicable",
      ],
    },
    {
      name: "Commercial Trip",
      basePrice: "Quote",
      description: "Volume-based pricing",
      details: [
        "Customized rate cards",
        "Platform fee: 10%",
        "Comprehensive insurance",
        "Monthly invoicing",
      ],
    },
  ];

  const paymentMethods = [
    { name: "UPI", logo: "💳" },
    { name: "Credit/Debit Cards", logo: "💳" },
    { name: "Net Banking", logo: "🏦" },
    { name: "Wallets", logo: "👛" },
  ];

  const cancellationPolicy = [
    { timeframe: "Before carrier accepts", refund: "100% refund" },
    { timeframe: "After acceptance, before pickup", refund: "90% refund" },
    { timeframe: "After pickup", refund: "No refund" },
    { timeframe: "Carrier cancels", refund: "100% refund + compensation" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="container-main text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
              Transparent Pricing
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              No hidden fees. Know exactly what you'll pay before you book.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border card-hover"
                >
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-primary">{tier.basePrice}</span>
                    {tier.basePrice !== "Custom" && tier.basePrice !== "Quote" && (
                      <span className="text-sm md:text-base text-muted-foreground">onwards</span>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{tier.description}</p>

                  <ul className="space-y-2 md:space-y-3">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission Structure */}
        <section className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Carrier Commission Structure
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Carriers keep the majority of what they earn. Transparent platform fees.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border">
              <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">85%</div>
                  <div className="text-sm md:text-base text-foreground font-medium">Public Trips</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Carrier earnings</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">88%</div>
                  <div className="text-sm md:text-base text-foreground font-medium">Private Trips</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Carrier earnings</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">90%</div>
                  <div className="text-sm md:text-base text-foreground font-medium">Commercial Trips</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Carrier earnings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="text-center mb-8 md:mb-12">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-safar-red-light rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <CreditCard className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Payment Methods
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Multiple secure payment options for your convenience
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg md:rounded-xl px-4 sm:px-6 md:px-8 py-3 md:py-4 border border-border flex items-center gap-2 md:gap-3"
                >
                  <span className="text-xl md:text-2xl">{method.logo}</span>
                  <span className="text-sm md:text-base font-medium text-foreground">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-8 md:mb-12">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-safar-red-light rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <RefreshCcw className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Cancellation & Refund Policy
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Fair and transparent refund policy
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl md:rounded-2xl overflow-hidden border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left font-semibold text-xs sm:text-sm md:text-base">Timeframe</th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-right font-semibold text-xs sm:text-sm md:text-base">Refund</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cancellationPolicy.map((policy, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border ${
                          index % 2 === 0 ? "bg-card" : "bg-secondary/50"
                        }`}
                      >
                        <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm md:text-base text-foreground">{policy.timeframe}</td>
                        <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-right font-medium text-primary text-xs sm:text-sm md:text-base">
                          {policy.refund}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 md:mt-6 flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-safar-red-light rounded-lg md:rounded-xl">
                <Info className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-foreground">
                  Refunds are processed within 5-7 business days to the original payment method. 
                  For detailed terms, please refer to our <Link to="/refund-policy" className="text-primary underline">Refund Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-24 bg-primary">
          <div className="container-main text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join thousands of Indians who trust Safar Couriers for affordable, reliable delivery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  View Services
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  Contact Us
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

export default Pricing;
