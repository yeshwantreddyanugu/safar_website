import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Search, 
  CreditCard, 
  Key, 
  MapPin, 
  CheckCircle,
  UserPlus,
  FileCheck,
  Car,
  Wallet,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<"senders" | "carriers">("senders");

  const senderSteps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up with your email or phone number. Complete quick KYC verification with your Aadhaar.",
    },
    {
      icon: Package,
      title: "Enter Package Details",
      description: "Provide pickup and delivery locations, package dimensions, weight, and any special handling instructions.",
    },
    {
      icon: Search,
      title: "Choose a Carrier",
      description: "Browse matched carriers traveling your route. Compare ratings, prices, and delivery times.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay securely through our platform. Your payment is held in escrow until delivery is confirmed.",
    },
    {
      icon: Key,
      title: "OTP Pickup",
      description: "Share the pickup OTP with your carrier. This verifies the handoff and starts tracking.",
    },
    {
      icon: MapPin,
      title: "Track Delivery",
      description: "Monitor your package in real-time. Receive updates at every stage of the journey.",
    },
    {
      icon: CheckCircle,
      title: "Confirm Delivery",
      description: "Verify delivery with the final OTP. Payment is released to the carrier automatically.",
    },
  ];

  const carrierSteps = [
    {
      icon: UserPlus,
      title: "Register as Carrier",
      description: "Create your carrier account and provide basic information about yourself.",
    },
    {
      icon: FileCheck,
      title: "Complete KYC",
      description: "Verify your identity with Aadhaar, PAN, and driving license. Upload vehicle documents if applicable.",
    },
    {
      icon: Car,
      title: "Post Your Trip",
      description: "Share your travel route, available space, and preferred pickup points. Set your own rates.",
    },
    {
      icon: Package,
      title: "Accept Deliveries",
      description: "Browse delivery requests matching your route. Accept packages that fit your schedule and capacity.",
    },
    {
      icon: Key,
      title: "Verify & Pickup",
      description: "Use the OTP system to verify pickup. The package is now in your care with tracking enabled.",
    },
    {
      icon: MapPin,
      title: "Deliver Safely",
      description: "Transport the package safely to the destination. Update your status if there are any delays.",
    },
    {
      icon: Wallet,
      title: "Get Paid",
      description: "Once delivery is confirmed via OTP, payment is automatically transferred to your account.",
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

  const guidelines = [
    "Maintain professional communication with senders",
    "Handle packages with care as per instructions",
    "Keep packages secure at all times",
    "Provide accurate delivery time estimates",
    "Report any issues immediately through the app",
    "Complete deliveries within agreed timelines",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="container-main text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
              How It Works
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Whether you're sending a package or looking to earn as a carrier, 
              our platform makes it simple and secure.
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-background border-b border-border sticky top-16 lg:top-20 z-40">
          <div className="container-main">
            <div className="flex">
              <button
                onClick={() => setActiveTab("senders")}
                className={`flex-1 py-3 md:py-4 text-center text-sm md:text-base font-semibold transition-colors border-b-2 ${
                  activeTab === "senders"
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                For Senders
              </button>
              <button
                onClick={() => setActiveTab("carriers")}
                className={`flex-1 py-3 md:py-4 text-center text-sm md:text-base font-semibold transition-colors border-b-2 ${
                  activeTab === "carriers"
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                For Carriers
              </button>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-background" id={activeTab}>
          <div className="container-main">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                  {activeTab === "senders" ? "Sending a Package" : "Becoming a Carrier"}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
                  {activeTab === "senders"
                    ? "Follow these simple steps to send your package safely"
                    : "Start earning by delivering packages on your regular trips"}
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                {(activeTab === "senders" ? senderSteps : carrierSteps).map((step, index) => (
                  <div key={index} className="flex gap-4 md:gap-6 items-start">
                    {/* Step Number */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg md:text-xl font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      {index < (activeTab === "senders" ? senderSteps : carrierSteps).length - 1 && (
                        <div className="w-0.5 h-12 md:h-16 bg-border mt-3 md:mt-4"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4 md:pb-8">
                      <div className="bg-card rounded-lg md:rounded-xl p-4 md:p-6 border border-border card-hover">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-safar-red-light rounded-lg flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                              {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-8 md:mt-12">
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    {activeTab === "senders" ? "Get Started" : "Become a Carrier"}
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Carrier Requirements (only show for carriers tab) */}
        {activeTab === "carriers" && (
          <section className="py-12 sm:py-16 md:py-24 bg-secondary">
            <div className="container-main">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                {/* Requirements */}
                <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                    Carrier Requirements
                  </h3>
                  <ul className="space-y-3 md:space-y-4">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Guidelines */}
                <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                    Carrier Guidelines
                  </h3>
                  <ul className="space-y-3 md:space-y-4">
                    {guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-foreground">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
