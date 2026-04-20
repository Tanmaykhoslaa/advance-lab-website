import { Headphones, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServiceBanner = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 sm:p-12 shadow-glow">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
            <div className="flex items-center gap-5">
              <div className="h-16 w-16 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur">
                <Headphones className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold">24/7 Service & Support</h3>
                <p className="opacity-90 text-sm sm:text-base">Anywhere in India. Anytime you need us.</p>
              </div>
            </div>
            <Button asChild size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <a href="tel:+917988927387"><PhoneCall className="mr-2 h-5 w-5" /> Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
