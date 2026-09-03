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
    <section id="home" className="relative overflow-hidden bg-background min-h-[92vh] flex flex-col items-center justify-center pt-12 pb-10 lg:pt-24 lg:pb-12">
      {/* Sharp Hexagon/Geometric Background elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-card opacity-50 clip-hexagon transform translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[80vh] bg-card opacity-30 clip-hexagon transform -translate-x-1/3 translate-y-1/3" />
      
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(21 90% 54%) 1px, transparent 1px), linear-gradient(90deg, hsl(21 90% 54%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Left Column: Content */}
        <div className="w-full lg:w-[50%] space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1 mt-6 lg:mt-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 rounded-none border border-primary/40 bg-primary/10 px-3 py-1.5 lg:px-4 lg:py-2">
            <span className="relative flex h-1.5 w-1.5 lg:h-2 lg:w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 lg:h-2 lg:w-2 bg-primary" />
            </span>
            <span className="text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              AN ISO 9001:2015 Certified · Trusted Since 2004
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3 lg:space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[5rem] font-bold leading-[1.1] text-foreground font-serif uppercase tracking-tight">
              ADVANCE LAB <br/><span className="text-primary">EQUIPMENTS</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-light text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0 lg:border-l-2 lg:border-primary lg:pl-4">
              India's trusted manufacturer, importer &amp; exporter of scientific
              and laboratory instruments — built for precision, backed by service.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center justify-center lg:justify-start gap-3 lg:gap-4 mt-2 lg:mt-0">
            <a
              href="/#products"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3.5 lg:px-8 lg:py-4 rounded-none bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest hover:bg-primary/90 shadow-orange hover:shadow-dark transition-all duration-300"
            >
              View Products <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/#contact"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3.5 lg:px-8 lg:py-4 rounded-none border-2 border-border text-foreground text-sm font-bold uppercase tracking-widest hover:bg-card hover:border-primary transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t-2 border-border w-full max-w-md mx-auto lg:mx-0">
            {[
              { icon: ShieldCheck, label: "Quality Assured" },
              { icon: Award, label: "Best Pricing" },
              { icon: Headphones, label: "24/7 Support" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:flex-row gap-2 lg:gap-3 text-center lg:text-left group">
                <div className="bg-card p-2 border border-border group-hover:border-primary transition-colors">
                  <s.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary shrink-0" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground leading-tight group-hover:text-foreground transition-colors">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Carousel Card */}
        <div className="w-full lg:w-[50%] relative max-w-2xl mx-auto lg:mx-0 order-1 lg:order-2">
          {/* Decorative accents */}
          <div className="absolute -inset-1 lg:-inset-4 bg-gradient-to-tr from-primary/30 to-transparent blur-2xl opacity-60 pointer-events-none" />
          
          <div className="absolute -top-6 -right-6 h-32 w-32 border-4 border-primary/20 clip-hexagon bg-card/50 backdrop-blur-3xl hidden lg:block" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 border-4 border-primary/20 clip-hexagon bg-card/50 backdrop-blur-3xl hidden lg:block" />

          {/* The Card */}
          <div className="relative overflow-hidden border-4 border-card shadow-2xl bg-card clip-hexagon">
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
                    <div className="aspect-[4/3] sm:aspect-video lg:aspect-[4/3] w-full relative bg-background">
                      <img 
                        src={src} 
                        alt={`Advance Lab Equipments Slide ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          {/* Floating stat card overlaying the carousel card */}
          <div className="absolute -bottom-4 lg:-bottom-6 right-4 lg:-right-4 bg-card rounded-none p-4 lg:p-5 shadow-dark border-l-4 border-primary flex items-center gap-3 lg:gap-4 z-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-10 w-10 lg:h-12 lg:w-12 bg-primary flex items-center justify-center shrink-0">
              <Award className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-black text-foreground uppercase tracking-tight">5 Lakh+</div>
              <div className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-primary">Instruments Delivered</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll cue (Mobile hidden, desktop visible) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll Down</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
};
