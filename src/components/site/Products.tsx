import { Link } from "react-router-dom";
import { products } from "@/data/products";

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 stagger">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group gradient-card border border-border rounded-2xl p-5 sm:p-6 shadow-soft lift-on-hover"
              >
                <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow group-hover:scale-110 group-active:scale-95 transition-smooth">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground leading-tight mb-1 group-hover:text-primary transition-smooth">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </Link>
            );
          })}
        </div>
    </section>
  );
};
