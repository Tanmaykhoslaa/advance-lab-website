import { Award, Target, Cpu, Package, Headset, Wrench, Puzzle, ShieldCheck } from "lucide-react";

const services = [
  { icon: Award, title: "Premium Quality", desc: "Reliable, durable and quality-tested laboratory equipment." },
  { icon: Target, title: "Precision & Accuracy", desc: "Engineered for dependable measurements and consistent performance." },
  { icon: Cpu, title: "Advanced Technology", desc: "Modern instruments designed for efficient and accurate laboratory work." },
  { icon: Package, title: "Wide Product Range", desc: "Complete Solutions for Scientific, Analytical, Laboratory & Pharmaceutical applications." },
  { icon: Headset, title: "Expert Technical Support", desc: "Professional guidance for product selection, installation and operation." },
  { icon: Wrench, title: "After-Sales Service", desc: "Dedicated service, maintenance and technical assistance throughout the equipment lifecycle." },
  { icon: Puzzle, title: "Customized Solutions", desc: "Solutions tailored to specific laboratory requirements and applications." },
  { icon: ShieldCheck, title: "Trust & Reliability", desc: "Committed to quality, performance and long-term customer satisfaction." },
];

const serviceCenters = ["BARWALA", "PANCHKULA", "AMBALA", "DELHI", "JAIPUR", "HYDERABAD"];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-card">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-50" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-eyebrow justify-center mb-4 border-primary/20 bg-primary/5 text-primary">
            Our Edge
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-foreground mb-6 tracking-tight uppercase font-serif">
            Why <span className="text-primary">Choose Us?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-bold tracking-widest border-t-2 border-primary pt-4 max-w-md mx-auto">
            QUALITY. PRECISION. RELIABILITY. <br className="sm:hidden" /> THE NAME YOU CAN TRUST
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger mb-20">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group relative bg-background border-2 border-border p-6 hover:bg-card hover:border-primary hover:shadow-orange hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center clip-hexagon"
            >
              {/* Number accent */}
              <span className="absolute -top-4 -right-2 text-7xl font-black text-foreground/5 group-hover:text-primary/10 transition-colors duration-500 select-none font-serif">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Card bottom glow */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              {/* Icon */}
              <div className="relative z-10 h-14 w-14 border border-primary/20 bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary group-hover:shadow-orange group-hover:rotate-12 transition-all duration-500">
                <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>

              <h3 className="font-black text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300 relative z-10 uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed relative z-10">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto bg-background border-2 border-border p-8 sm:p-12 text-center relative overflow-hidden shadow-dark group hover:border-primary transition-colors">
          <span className="absolute top-4 left-6 text-6xl text-primary/20 font-serif leading-none group-hover:text-primary/40 transition-colors">"</span>
          <span className="absolute bottom-[-1rem] right-6 text-6xl text-primary/20 font-serif leading-none group-hover:text-primary/40 transition-colors">"</span>
          
          <p className="text-base sm:text-lg text-foreground relative z-10 font-bold max-w-3xl mx-auto leading-relaxed border-l-4 border-primary pl-4">
            These points align with common laboratory-equipment priorities such as calibration/accuracy, quality documentation, technical support, installation and after-sales service.
          </p>
          
          <div className="mt-8 flex flex-col items-center">
            <div className="bg-primary text-primary-foreground px-6 py-2 text-sm font-black tracking-widest uppercase mb-4 shadow-orange">
              Service Centers
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-muted-foreground font-black tracking-wider text-sm sm:text-base">
              {serviceCenters.map((center, idx) => (
                <div key={center} className="flex items-center gap-4 hover:text-foreground transition-colors cursor-default">
                  <span>{center}</span>
                  {idx < serviceCenters.length - 1 && (
                    <span className="text-primary/50">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
