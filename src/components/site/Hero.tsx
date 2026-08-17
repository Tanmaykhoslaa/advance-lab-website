import React from "react";
import { ArrowRight, ShieldCheck, Award, Headphones, ChevronDown } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroImages = [
  "/images/home page/hero image1.jpeg",
  "/images/home page/hero image2.jpeg",
  "/images/home page/hero image3.jpeg",
];

export const Hero = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="home" className="relative overflow-hidden bg-[hsl(222_55%_14%)] min-h-[92vh] flex flex-col items-center justify-center pt-20 pb-12 lg:pt-28">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(43 72% 80%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 72% 80%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[hsl(43_72%_49%/0.06)] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[hsl(222_55%_40%/0.18)] blur-[100px]" />
      </div>

      <div className="container relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Content */}
        <div className="w-full lg:w-[50%] space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1 mt-8 lg:mt-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[hsl(43_72%_49%/0.3)] bg-[hsl(43_72%_49%/0.08)] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[hsl(43_72%_55%)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(43_72%_55%)]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[hsl(43_72%_65%)]">
              AN ISO 9001:2015 Certified · Trusted Since 2004
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] text-white">
              Advance Lab Equipments
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-light text-[hsl(220_15%_75%)] max-w-lg leading-relaxed mx-auto lg:mx-0">
              India's trusted manufacturer, importer &amp; exporter of scientific
              and laboratory instruments — built for precision, backed by service.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="/#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] text-sm font-semibold hover:bg-[hsl(43_80%_55%)] shadow-gold hover:shadow-[0_10px_32px_-8px_hsl(43_80%_45%/0.60)] transition-all duration-300"
            >
              View Products <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 w-full max-w-md mx-auto lg:mx-0">
            {[
              { icon: ShieldCheck, label: "Quality Assured" },
              { icon: Award, label: "Best Pricing" },
              { icon: Headphones, label: "24/7 Support" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:flex-row gap-1.5 lg:gap-2 text-center lg:text-left">
                <s.icon className="h-4 w-4 lg:h-5 lg:w-5 text-[hsl(43_72%_55%)] shrink-0" />
                <span className="text-[10px] sm:text-xs font-medium text-[hsl(220_12%_70%)] leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Carousel Card */}
        <div className="w-full lg:w-[50%] relative max-w-2xl mx-auto lg:mx-0 order-1 lg:order-2">
          {/* Decorative accents */}
          <div className="absolute -inset-1 lg:-inset-4 bg-gradient-to-tr from-[hsl(43_72%_49%/0.3)] to-transparent rounded-[2rem] lg:rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl border border-[hsl(43_72%_49%/0.3)] bg-[hsl(43_72%_49%/0.05)] backdrop-blur-3xl hidden lg:block" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl border border-[hsl(43_72%_49%/0.2)] bg-[hsl(43_72%_49%/0.05)] backdrop-blur-3xl hidden lg:block" />

          {/* The Card */}
          <div className="relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[hsl(222_55%_18%)] ring-1 ring-white/10">
            <Carousel
              plugins={[autoplayPlugin.current]}
              opts={{
                loop: true,
                duration: 40,
              }}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {heroImages.map((src, index) => (
                  <CarouselItem key={index} className="pl-0 basis-full">
                    <div className="aspect-[4/3] sm:aspect-video lg:aspect-[4/3] w-full relative bg-[hsl(222_55%_14%)]">
                      <img 
                        src={src} 
                        alt={`Advance Lab Equipments Slide ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          {/* Floating stat card overlaying the carousel card */}
          <div className="absolute -bottom-4 lg:-bottom-6 right-4 lg:-right-4 bg-white rounded-xl p-3 lg:p-4 shadow-xl border border-gray-100 flex items-center gap-3 lg:gap-4 z-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-[hsl(43_72%_49%)] flex items-center justify-center shrink-0 shadow-inner">
              <Award className="h-5 w-5 lg:h-6 lg:w-6 text-[hsl(222_55%_14%)]" />
            </div>
            <div>
              <div className="text-lg lg:text-xl font-bold text-[hsl(222_55%_18%)] leading-tight">5 Lakh+</div>
              <div className="text-[10px] lg:text-xs font-medium text-[hsl(220_15%_50%)]">Instruments Delivered</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll cue (Mobile hidden, desktop visible) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[hsl(220_12%_55%)] hover:text-[hsl(43_72%_55%)] transition-colors group">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Scroll Down</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
};
