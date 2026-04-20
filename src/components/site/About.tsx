import { CheckCircle2 } from "lucide-react";

const points = [
  "Manufacturer, importer & exporter of premium lab instruments",
  "In-house QC and R&D for consistent quality",
  "Pan-India dealer network with rapid delivery",
  "Dedicated technical support & after-sales service",
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Precision Instruments. <span className="text-gradient">Trusted Service.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Based in Chandigarh / Panchkula / Barwala, Advance Lab Equipments is a leading manufacturer
            and supplier of scientific, analytical, laboratory and pharmaceutical instruments. We
            combine global sourcing with local engineering to deliver high-quality equipment at the
            best prices — backed by a service team you can rely on.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { n: "500+", l: "Instruments Delivered" },
            { n: "100+", l: "Happy Labs" },
            { n: "15+", l: "Product Categories" },
            { n: "24/7", l: "Service Support" },
          ].map((s) => (
            <div key={s.l} className="gradient-card border border-border rounded-2xl p-6 shadow-soft text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
