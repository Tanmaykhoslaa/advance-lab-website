import { Plane, BadgeIndianRupee, Network, Wrench, FlaskConical, Users } from "lucide-react";

const services = [
  { icon: Plane,             title: "Direct Importers",       desc: "We import directly from global brands — no middlemen, better value for you." },
  { icon: BadgeIndianRupee,  title: "Best Prices",            desc: "Factory pricing on every instrument we supply, guaranteed." },
  { icon: Network,           title: "Wide Dealer Network",    desc: "Pan-India distribution with fast fulfilment and reliable logistics." },
  { icon: Wrench,            title: "After Sales Service",    desc: "Expert installation, calibration & on-site servicing teams." },
  { icon: FlaskConical,      title: "In-house QC & R&D",      desc: "Every unit is rigorously tested before it leaves our facility." },
  { icon: Users,             title: "Technical Support Team", desc: "Experienced engineers ready to assist you anytime, anywhere." },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[hsl(222_55%_14%)]">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(43_72%_49%/0.08)] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(222_55%_30%/0.2)] rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-eyebrow justify-center mb-4 border-white/10 bg-white/5 text-[hsl(43_72%_60%)]">
            Our Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            What Makes Us{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(43_72%_49%)] to-[#ffe680]">Different</span>
          </h2>
          <p className="text-[hsl(220_15%_65%)] text-lg leading-relaxed">
            A full-service partner — from procurement to post-installation support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-[hsl(43_72%_49%/0.4)] hover:shadow-[0_0_40px_-10px_hsl(43_72%_49%/0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Number accent */}
              <span className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.03] group-hover:text-[hsl(43_72%_49%/0.08)] transition-colors duration-500 select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              
              {/* Card bottom glow */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[hsl(43_72%_49%)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative z-10 h-14 w-14 rounded-xl border border-[hsl(43_72%_49%/0.2)] bg-[hsl(43_72%_49%/0.05)] flex items-center justify-center mb-8 group-hover:bg-[hsl(43_72%_49%)] group-hover:border-[hsl(43_72%_49%)] group-hover:shadow-[0_0_20px_0_hsl(43_72%_49%/0.4)] group-hover:rotate-6 transition-all duration-500">
                <s.icon className="h-6 w-6 text-[hsl(43_72%_49%)] group-hover:text-[hsl(222_55%_14%)] transition-colors duration-500" />
              </div>

              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-[hsl(43_72%_49%)] transition-colors duration-300 relative z-10">
                {s.title}
              </h3>
              <p className="text-base text-[hsl(220_15%_60%)] leading-relaxed relative z-10">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
