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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative left stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(43_72%_49%/0)] via-[hsl(43_72%_49%)] to-[hsl(43_72%_49%/0)]" />

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-eyebrow justify-center">Our Services</p>
          <div className="divider-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(222_55%_18%)] mb-4">
            What Makes Us{" "}
            <span className="text-gold-gradient">Different</span>
          </h2>
          <p className="text-[hsl(220_15%_46%)]">
            A full-service partner — from procurement to post-installation support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group relative bg-white border border-[hsl(215_20%_88%)] rounded-xl p-7 hover:border-[hsl(43_72%_49%/0.45)] hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Number accent */}
              <span className="absolute top-5 right-6 text-5xl font-bold text-[hsl(215_20%_93%)] group-hover:text-[hsl(43_72%_49%/0.12)] transition-colors duration-300 select-none leading-none">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="h-12 w-12 rounded-lg border border-[hsl(222_30%_85%)] bg-[hsl(222_30%_97%)] flex items-center justify-center mb-5 group-hover:bg-[hsl(222_55%_18%)] group-hover:border-[hsl(222_55%_18%)] transition-all duration-300">
                <s.icon className="h-5 w-5 text-[hsl(222_45%_35%)] group-hover:text-[hsl(43_72%_60%)] transition-colors duration-300" />
              </div>

              <h3 className="font-bold text-[hsl(222_45%_20%)] text-base mb-2">{s.title}</h3>
              <p className="text-sm text-[hsl(220_15%_48%)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
