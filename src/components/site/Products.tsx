import {
  Microscope, Beaker, Thermometer, FlaskRound, Droplets, TestTube,
  Activity, Gauge, Atom, Waves, Sprout, Pill, FlaskConical, Layers, CircleDot,
} from "lucide-react";

const products = [
  { name: "Spectrophotometers", desc: "UV-VIS & Visible range", icon: Atom },
  { name: "pH & Conductivity Meters", desc: "Precise digital readings", icon: Gauge },
  { name: "PCR Thermal Cycler", desc: "Reliable amplification", icon: TestTube },
  { name: "Flame Photometer", desc: "Na, K, Ca, Li analysis", icon: FlaskConical },
  { name: "Karl Fischer Titrator", desc: "Moisture analysis", icon: Droplets },
  { name: "Colorimeter", desc: "Accurate colorimetry", icon: CircleDot },
  { name: "Turbidity Meter", desc: "NTU measurement", icon: Waves },
  { name: "DO Meter", desc: "Dissolved oxygen", icon: Activity },
  { name: "Colony Counter", desc: "Microbial counting", icon: Layers },
  { name: "Centrifuge", desc: "High-speed separation", icon: FlaskRound },
  { name: "Microscope", desc: "Bio & metallurgical", icon: Microscope },
  { name: "Water & Soil Kit", desc: "Field analysis kit", icon: Sprout },
  { name: "Disintegration & Friability", desc: "Pharma test apparatus", icon: Pill },
  { name: "Dry Bath Incubator", desc: "Precision heating", icon: Thermometer },
  { name: "Viscometer", desc: "Fluid viscosity", icon: Beaker },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 gradient-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Products</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Complete Range of <span className="text-gradient">Lab Instruments</span>
          </h2>
          <p className="text-muted-foreground">
            From analytical to pharmaceutical — every instrument engineered for accuracy and built to last.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((p) => (
            <article
              key={p.name}
              className="group gradient-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth cursor-pointer"
            >
              <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground leading-tight mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
