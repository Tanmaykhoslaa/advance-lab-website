import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Award, Headphones } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden gradient-soft">
      <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div className="space-y-7 animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Trusted since years • ISO Quality Standards
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
            Advance Lab Equipments —{" "}
            <span className="text-gradient">The Name You Can Trust</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl">
            Scientific & Laboratory Instruments Manufacturer, Importer and Exporter — serving labs, hospitals, pharma & research centres across India.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#products">View Products <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/60 max-w-md">
            {[
              { icon: ShieldCheck, label: "Quality Assured" },
              { icon: Award, label: "Best Pricing" },
              { icon: Headphones, label: "24/7 Support" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-20 blur-2xl" />
          <img
            src={heroImg}
            alt="Modern laboratory with scientific instruments by Advance Lab Equipments"
            width={1536}
            height={1024}
            className="relative rounded-2xl shadow-card w-full h-auto animate-float"
          />
        </div>
      </div>
    </section>
  );
};
