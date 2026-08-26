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
    <section id="services" className="py-24 relative overflow-hidden bg-[hsl(222_55%_14%)]">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(43_72%_49%/0.08)] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(222_55%_30%/0.2)] rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-eyebrow justify-center mb-4 border-white/10 bg-white/5 text-[hsl(43_72%_60%)]">
            Our Edge
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight uppercase">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(43_72%_49%)] to-[#ffe680]">Choose Us?</span>
          </h2>
          <p className="text-[hsl(220_15%_65%)] text-lg leading-relaxed font-medium">
            QUALITY. PRECISION. RELIABILITY. <br className="sm:hidden" /> THE NAME YOU CAN TRUST
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger mb-20">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-[hsl(43_72%_49%/0.4)] hover:shadow-[0_0_40px_-10px_hsl(43_72%_49%/0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
            >
              {/* Number accent */}
              <span className="absolute -top-4 -right-2 text-7xl font-black text-white/[0.03] group-hover:text-[hsl(43_72%_49%/0.08)] transition-colors duration-500 select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Card bottom glow */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[hsl(43_72%_49%)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative z-10 h-14 w-14 rounded-full border border-[hsl(43_72%_49%/0.2)] bg-[hsl(43_72%_49%/0.05)] flex items-center justify-center mb-6 group-hover:bg-[hsl(43_72%_49%)] group-hover:border-[hsl(43_72%_49%)] group-hover:shadow-[0_0_20px_0_hsl(43_72%_49%/0.4)] group-hover:rotate-6 transition-all duration-500">
                <s.icon className="h-6 w-6 text-[hsl(43_72%_49%)] group-hover:text-[hsl(222_55%_14%)] transition-colors duration-500" />
              </div>

              <h3 className="font-bold text-lg text-white mb-3 group-hover:text-[hsl(43_72%_49%)] transition-colors duration-300 relative z-10 uppercase">
                {s.title}
              </h3>
              <p className="text-sm text-[hsl(220_15%_60%)] leading-relaxed relative z-10">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <span className="absolute top-4 left-6 text-6xl text-[hsl(43_72%_49%/0.2)] font-serif leading-none">"</span>
          <span className="absolute bottom-[-1rem] right-6 text-6xl text-[hsl(43_72%_49%/0.2)] font-serif leading-none">"</span>
          
          <p className="text-base sm:text-lg text-[hsl(220_15%_75%)] relative z-10 font-medium max-w-3xl mx-auto leading-relaxed">
            These points align with common laboratory-equipment priorities such as calibration/accuracy, quality documentation, technical support, installation and after-sales service.
          </p>
          
          <div className="mt-8 flex flex-col items-center">
            <div className="bg-[hsl(43_72%_49%)] text-[hsl(222_55%_14%)] px-6 py-1.5 rounded-full text-sm font-black tracking-widest uppercase mb-4 shadow-lg shadow-[hsl(43_72%_49%/0.2)]">
              Service Centers
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[hsl(220_15%_70%)] font-bold tracking-wider text-sm sm:text-base">
              {serviceCenters.map((center, idx) => (
                <div key={center} className="flex items-center gap-4">
                  <span>{center}</span>
                  {idx < serviceCenters.length - 1 && (
                    <span className="text-[hsl(43_72%_49%/0.5)]">|</span>
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
