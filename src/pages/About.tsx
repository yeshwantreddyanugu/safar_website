import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Building, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => {
  const stats = [
    { value: "5000+", label: "Deliveries Completed" },
    { value: "2000+", label: "Verified Carriers" },
    { value: "50+", label: "Cities Covered" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in the power of community. Our platform connects people, creating opportunities for carriers while serving senders.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Every delivery matters. We've built systems to ensure your packages reach their destination safely and on time.",
    },
    {
      icon: Award,
      title: "Transparency",
      description: "No hidden fees, clear pricing, and real-time updates. We believe trust is built through transparency.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="container-main text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
              About Safar Couriers
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              We're building India's most trusted peer-to-peer delivery network, 
              connecting senders with travelers heading their way.
            </p>
          </div>
        </section>

        {/* Stats Section */}
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

        {/* Mission Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
                  Our Mission
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  Revolutionizing Delivery Across India
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  Safar Couriers Private Limited operates as a technology platform that connects 
                  individuals who need to send packages (Senders) with independent individuals 
                  traveling on those routes (Carriers).
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  We are an intermediary platform, not a courier service. We provide the technology, 
                  verification systems, and secure payment infrastructure that makes peer-to-peer 
                  delivery safe, reliable, and affordable.
                </p>
                <Link to="/how-it-works">
                  <Button variant="default" size="lg">
                    Learn How It Works
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Safar Couriers"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-lg">
                  <div className="text-xl sm:text-2xl font-bold">Since 2023</div>
                  <div className="text-sm text-primary-foreground/80">Serving India</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block px-3 sm:px-4 py-1.5 bg-safar-red-light text-primary text-xs sm:text-sm font-medium rounded-full mb-3 md:mb-4">
                Our Values
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 card-hover">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-safar-red-light rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                    <value.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="bg-card rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 border border-border">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-safar-red-light rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    Safar Couriers Private Limited
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Registered company under the Companies Act, 2013
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Registered Office</h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Contact</h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    support@safarcouriers.com<br />
                    +91 123 456 7890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
