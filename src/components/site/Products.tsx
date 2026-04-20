import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-[hsl(215_20%_96%)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="section-eyebrow justify-center">
            Our Products
          </p>
          <div className="divider-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(222_55%_18%)] mb-4">
            Complete Range of{" "}
            <span className="text-gold-gradient">Lab Instruments</span>
          </h2>
          <p className="text-[hsl(220_15%_46%)] text-base">
            From analytical to pharmaceutical — every instrument engineered for accuracy
            and built to last.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 stagger">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group flex flex-col bg-white rounded-xl p-5 border border-[hsl(215_20%_88%)] shadow-soft hover:border-[hsl(43_72%_49%/0.4)] hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="h-11 w-11 rounded-lg bg-[hsl(222_55%_14%)] flex items-center justify-center mb-4 group-hover:bg-[hsl(43_72%_49%)] transition-all duration-300 shadow-sm">
                  <Icon className="h-5 w-5 text-[hsl(43_72%_60%)] group-hover:text-[hsl(222_55%_14%)] transition-colors duration-300" />
                </div>

                {/* Category pill */}
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[hsl(43_60%_42%)] mb-1.5">
                  {p.category}
                </span>

                <h3 className="font-semibold text-[hsl(222_40%_18%)] leading-snug text-sm mb-1 group-hover:text-[hsl(222_55%_28%)] transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-[hsl(220_12%_52%)] leading-relaxed flex-1">
                  {p.desc}
                </p>

                {/* Hover CTA */}
                <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-[hsl(43_60%_42%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
