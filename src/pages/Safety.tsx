import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Fingerprint, 
  Key, 
  MapPin, 
  Shield,
  FileCheck,
  Car,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";



const Safety = () => {
  const verificationSystems = [
    {
      icon: Fingerprint,
      title: "Aadhaar e-KYC",
      description: "All users verify their identity through Aadhaar-based e-KYC. This ensures every person on our platform is who they claim to be.",
    },
    {
      icon: FileCheck,
      title: "PAN Verification",
      description: "PAN verification for tax compliance and additional identity confirmation for carriers.",
    },
    {
      icon: Car,
      title: "Vehicle Documents",
      description: "Carriers using vehicles must provide valid driving license, registration, and insurance documents.",
    },
    {
      icon: Shield,
      title: "Background Checks",
      description: "Regular verification checks ensure ongoing compliance and trustworthiness of all carriers.",
    },
  ];

  const otpFlow = [
    { step: "Pickup OTP", description: "Sender shares OTP with carrier at pickup. Confirms package handoff." },
    { step: "Transit", description: "Package tracked in real-time. Both parties can monitor progress." },
    { step: "Delivery OTP", description: "Carrier shares OTP with receiver. Confirms successful delivery." },
  ];

  const insuranceCoverage = [
    { type: "Public Trips", coverage: "Up to ₹500", eligibility: "Packages valued ≤ ₹1,000" },
    { type: "Private Trips", coverage: "Custom", eligibility: "No value limit" },
    { type: "Commercial Trips", coverage: "Comprehensive", eligibility: "As per agreement" },
  ];

  const prohibitedItems = [
    { icon: XCircle, item: "Illegal substances and drugs" },
    { icon: XCircle, item: "Weapons and ammunition" },
    { icon: XCircle, item: "Hazardous materials" },
    { icon: XCircle, item: "Counterfeit goods" },
    { icon: XCircle, item: "Perishable food items" },
    { icon: XCircle, item: "Live animals" },
    { icon: XCircle, item: "Currency and negotiable instruments" },
    { icon: XCircle, item: "Explosives and flammables" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="container-main text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
              Safety & Security
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Your safety is our top priority. Multiple layers of protection 
              ensure every delivery is secure.
            </p>
          </div>
        </section>

        {/* Verification Systems */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
                Verification
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Verification Systems
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Every user on our platform goes through rigorous identity verification
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {verificationSystems.map((system, index) => (
                <div key={index} className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 border border-border card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-safar-red-light rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <system.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                        {system.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {system.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OTP Security */}
        <section className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
                OTP Security
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Dual OTP Verification
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Our unique dual OTP system ensures secure handoffs at both ends
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Flow Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {otpFlow.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-border text-center h-full">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 md:mb-4">
                        <Key className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">
                        {item.step}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {/* Arrow */}
                    {index < otpFlow.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-12 bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  Security Best Practices
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  <li className="text-xs sm:text-sm text-muted-foreground">• Never share OTP before handoff</li>
                  <li className="text-xs sm:text-sm text-muted-foreground">• Verify carrier/sender identity</li>
                  <li className="text-xs sm:text-sm text-muted-foreground">• Report suspicious behavior immediately</li>
                  <li className="text-xs sm:text-sm text-muted-foreground">• Keep app notifications enabled</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Coverage */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
                Insurance
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Insurance Coverage
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Every eligible package is covered by our insurance policy
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl md:rounded-2xl overflow-hidden border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[400px]">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left font-semibold text-xs sm:text-sm md:text-base">Trip Type</th>
                        <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-xs sm:text-sm md:text-base">Coverage</th>
                        <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-right font-semibold text-xs sm:text-sm md:text-base">Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      {insuranceCoverage.map((item, index) => (
                        <tr
                          key={index}
                          className={`border-b border-border ${
                            index % 2 === 0 ? "bg-card" : "bg-secondary/50"
                          }`}
                        >
                          <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 font-medium text-foreground text-xs sm:text-sm md:text-base">{item.type}</td>
                          <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-center text-primary font-semibold text-xs sm:text-sm md:text-base">{item.coverage}</td>
                          <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-right text-muted-foreground text-xs sm:text-sm md:text-base">{item.eligibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 md:mt-8 text-center">
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Contact for Insurance Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Prohibited Items */}
        <section className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-primary text-primary-foreground text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
                <AlertTriangle className="w-3 h-3 md:w-4 md:h-4" />
                Important
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Prohibited Items
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                The following items are strictly prohibited from delivery
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {prohibitedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 md:gap-3 bg-card rounded-lg md:rounded-xl p-3 md:p-4 border border-border"
                  >
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-destructive flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">{item.item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-primary/10 rounded-lg md:rounded-xl border border-primary/20">
                <div className="flex items-start gap-2 md:gap-3">
                  <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Legal Consequences</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Shipping prohibited items may result in immediate account termination, 
                      forfeiture of payments, and potential legal action as per applicable laws.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time Tracking */}
        <section className="py-12 sm:py-16 md:py-24 bg-primary">
          <div className="container-main">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-foreground/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <MapPin className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
                Real-time GPS Tracking
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 mb-6 md:mb-8 px-4">
                Track your package every step of the way. Our GPS tracking system provides 
                live location updates, estimated arrival times, and instant notifications.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {["Live location updates", "Estimated delivery time", "Milestone notifications", "Route visualization"].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-primary-foreground bg-primary-foreground/10 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Safety;
