import { ArrowRight, ShieldCheck, Award, Headphones, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[hsl(222_55%_14%)] min-h-[92vh] flex flex-col">
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

      <div className="container relative flex-1 grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">
        {/* Left copy */}
        <div className="space-y-8 animate-fade-in">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[hsl(43_72%_49%/0.3)] bg-[hsl(43_72%_49%/0.08)] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[hsl(43_72%_55%)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(43_72%_55%)]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[hsl(43_72%_65%)]">
              ISO Certified · Trusted Since 2008
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] text-white">
              Advance Lab
              <br />
              <span className="text-gold-gradient">Equipments</span>
            </h1>
            <p className="text-lg sm:text-xl font-light text-[hsl(220_15%_70%)] max-w-lg leading-relaxed">
              India's trusted manufacturer, importer &amp; exporter of scientific
              and laboratory instruments — built for precision, backed by service.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] text-sm font-semibold hover:bg-[hsl(43_80%_55%)] shadow-gold hover:shadow-[0_10px_32px_-8px_hsl(43_80%_45%/0.60)] transition-all duration-300"
            >
              View Products <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/8 hover:border-white/35 backdrop-blur-sm transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-8 pt-2 border-t border-white/10">
            {[
              { icon: ShieldCheck, label: "Quality Assured" },
              { icon: Award,       label: "Best Pricing" },
              { icon: Headphones,  label: "24/7 Support" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <s.icon className="h-5 w-5 text-[hsl(43_72%_55%)]" />
                <span className="text-xs font-medium text-[hsl(220_12%_65%)]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero image */}
        <div className="relative hidden lg:block">
          {/* Decorative frame */}
          <div className="absolute -inset-3 rounded-2xl border border-[hsl(43_72%_49%/0.18)]" />
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-md border border-[hsl(43_72%_49%/0.25)] bg-[hsl(43_72%_49%/0.05)]" />
          <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-md border border-[hsl(43_72%_49%/0.20)] bg-[hsl(43_72%_49%/0.05)]" />

          <img
            src={heroImg}
            alt="Modern laboratory with scientific instruments — Advance Lab Equipments"
            className="relative rounded-xl w-full h-auto object-cover shadow-navy animate-float"
            style={{ maxHeight: "520px" }}
          />

          {/* Floating stat card */}
          <div className="absolute -bottom-5 -left-8 bg-white rounded-xl p-4 shadow-card flex items-center gap-4 min-w-[200px]">
            <div className="h-10 w-10 rounded-lg bg-[hsl(43_72%_49%)] flex items-center justify-center shrink-0">
              <Award className="h-5 w-5 text-[hsl(222_55%_14%)]" />
            </div>
            <div>
              <div className="text-xl font-bold text-[hsl(222_55%_18%)]">500+</div>
              <div className="text-xs text-[hsl(220_15%_50%)]">Instruments Delivered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex justify-center pb-8">
        <a href="#about" className="flex flex-col items-center gap-2 text-[hsl(220_12%_55%)] hover:text-[hsl(43_72%_55%)] transition-colors group">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
