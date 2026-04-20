import { CheckCircle2 } from "lucide-react";

const points = [
  "Manufacturer, importer & exporter of premium lab instruments",
  "In-house QC and R&D for consistent quality",
  "Pan-India dealer network with rapid delivery",
  "Dedicated technical support & after-sales service",
];

const stats = [
  { n: "500+",  l: "Instruments Delivered" },
  { n: "100+",  l: "Happy Labs" },
  { n: "15+",   l: "Product Categories" },
  { n: "24/7",  l: "Service Support" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(215_20%_96%)] blur-[80px] pointer-events-none" />

      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <div>
          <p className="section-eyebrow">
            <span className="divider-gold mr-2" style={{ display: "inline-block" }} />
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(222_55%_18%)] mb-5 leading-snug">
            Precision Instruments.{" "}
            <span className="text-gold-gradient">Trusted Service.</span>
          </h2>
          <p className="text-[hsl(220_15%_40%)] leading-relaxed mb-8 text-base">
            Based in Chandigarh / Panchkula / Barwala, Advance Lab Equipments is a
            leading manufacturer and supplier of scientific, analytical, laboratory and
            pharmaceutical instruments. We combine global sourcing with local engineering
            to deliver high-quality equipment at the best prices — backed by a service
            team you can rely on.
          </p>
          <ul className="space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[hsl(43_72%_44%)] shrink-0 mt-0.5" />
                <span className="text-[hsl(220_18%_32%)] text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right stats grid */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`rounded-xl p-7 border flex flex-col justify-center ${
                i === 0
                  ? "bg-[hsl(222_55%_18%)] border-[hsl(222_55%_18%)] col-span-1"
                  : "bg-white border-[hsl(215_20%_88%)] shadow-soft"
              }`}
            >
              <div
                className={`text-3xl sm:text-4xl font-bold mb-1 ${
                  i === 0 ? "text-[hsl(43_72%_60%)]" : "text-[hsl(222_55%_22%)]"
                }`}
              >
                {s.n}
              </div>
              <div
                className={`text-sm ${
                  i === 0 ? "text-[hsl(220_15%_72%)]" : "text-[hsl(220_15%_48%)]"
                }`}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
