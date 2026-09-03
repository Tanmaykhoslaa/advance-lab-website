import { Headphones, PhoneCall, ArrowRight } from "lucide-react";

export const ServiceBanner = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="relative overflow-hidden bg-card px-8 sm:px-14 py-12 shadow-dark border-2 border-border group hover:border-primary transition-colors">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 blur-[60px] pointer-events-none" />

          {/* Gold top border accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {/* Corner Accents */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-primary transform translate-x-6 -translate-y-6 rotate-45" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 bg-background border border-primary/25 flex items-center justify-center shrink-0 shadow-orange clip-hexagon">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground mb-1">
                  24/7 Service &amp; Support
                </h3>
                <p className="text-muted-foreground text-sm font-bold tracking-widest uppercase">
                  Anywhere in India — anytime you need us.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:+917988927387"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-black uppercase tracking-widest hover:bg-primary/90 shadow-orange hover:shadow-dark transition-all duration-300"
              >
                <PhoneCall className="h-4 w-4" /> Call Now
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background border-2 border-border text-foreground text-sm font-black uppercase tracking-widest hover:bg-card hover:border-primary transition-all duration-300 shadow-dark"
              >
                Send Inquiry <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
