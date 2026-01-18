import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  User
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "support@safarcouriers.com",
      href: "mailto:support@safarcouriers.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99519 70306",
      href: "tel:+919951970306",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Cuddapah 516444, Andhra Pradesh",
      href: "#",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      href: "#",
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
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out and we'll respond as soon as we can.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="container-main">
            <div className="max-w-4xl mx-auto">
              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-safar-red-light rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-sm md:text-base font-medium text-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Grievance Officer */}
              <div className="bg-secondary rounded-xl md:rounded-2xl p-5 md:p-6 border border-border mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <User className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  <h3 className="text-base md:text-lg font-semibold text-foreground">Grievance Officer</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  For complaints or grievances, you may contact our Grievance Officer:
                </p>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-sm md:text-base text-foreground"><strong>Name:</strong> Grievance Officer</p>
                  <p className="text-sm md:text-base text-foreground"><strong>Email:</strong> grievance@safarcouriers.com</p>
                  <p className="text-sm md:text-base text-foreground"><strong>Response Time:</strong> Within 48 hours</p>
                </div>
              </div>

              {/* Live Chat CTA */}
              <div className="bg-primary rounded-xl md:rounded-2xl p-5 md:p-6 text-primary-foreground text-center">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                  <h3 className="text-base md:text-lg font-semibold">Need Immediate Assistance?</h3>
                </div>
                <p className="text-sm md:text-base text-primary-foreground/80 mb-4 md:mb-6">
                  Reach out to us via email or phone for quick support.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a href="mailto:support@safarcouriers.com">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>
                  </a>
                  <a href="tel:+911234567890">
                    <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-12 sm:py-16 md:py-24 bg-secondary">
          <div className="container-main">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Our Office
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Visit us at our registered office
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-safar-red-light rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <MapPin className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Safar Couriers OPC Private Limited    </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                4/114, Kondapuram(Cuddapah),Muddanur, Cuddapah 516444, Andhra Pradesh
              </p>
              <p className="text-sm text-muted-foreground">
                Registered under the Companies Act, 2013
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
