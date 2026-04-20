import { Plane, BadgeIndianRupee, Network, Wrench, FlaskConical, Users } from "lucide-react";

const services = [
  { icon: Plane, title: "Direct Importers", desc: "We import directly from global brands — no middlemen." },
  { icon: BadgeIndianRupee, title: "Best Prices", desc: "Factory pricing on every instrument we supply." },
  { icon: Network, title: "Wide Dealer Network", desc: "Pan-India distribution and quick fulfilment." },
  { icon: Wrench, title: "After Sales Service", desc: "Installation, calibration & on-site servicing." },
  { icon: FlaskConical, title: "In-house QC & R&D", desc: "Every unit tested before it leaves us." },
  { icon: Users, title: "Technical Support Team", desc: "Expert engineers ready to help anytime." },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative overflow-hidden border border-border rounded-2xl p-7 bg-card shadow-soft hover:shadow-card transition-smooth"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
