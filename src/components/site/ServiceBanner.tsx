import { Headphones, PhoneCall, ArrowRight } from "lucide-react";

export const ServiceBanner = () => {
  return (
    <section className="py-16 bg-[hsl(215_20%_96%)]">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-[hsl(222_55%_16%)] px-8 sm:px-14 py-12 shadow-navy">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[hsl(43_72%_49%/0.07)] blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[hsl(222_55%_40%/0.15)] blur-[60px] pointer-events-none" />

          {/* Gold top border accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[hsl(43_72%_49%)] to-transparent" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-xl bg-[hsl(43_72%_49%/0.12)] border border-[hsl(43_72%_49%/0.25)] flex items-center justify-center shrink-0 backdrop-blur">
                <Headphones className="h-8 w-8 text-[hsl(43_72%_60%)]" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  24/7 Service &amp; Support
                </h3>
                <p className="text-[hsl(220_15%_70%)] text-sm">
                  Anywhere in India — anytime you need us.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+917988927387"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] text-sm font-semibold hover:bg-[hsl(43_80%_55%)] shadow-gold hover:shadow-[0_10px_28px_-6px_hsl(43_80%_45%/0.55)] transition-all duration-300"
              >
                <PhoneCall className="h-4 w-4" /> Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/8 hover:border-white/35 transition-all duration-300"
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
