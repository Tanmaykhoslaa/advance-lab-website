import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowRight, Tag } from "lucide-react";

export const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="section-eyebrow justify-center mb-4">
            Our Portfolio
          </p>
          <h2 className="text-5xl sm:text-6xl font-black uppercase text-foreground mb-6 tracking-tight font-serif">
            Complete Range of{" "}
            <span className="text-primary">Lab Instruments</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            From analytical to pharmaceutical — every instrument is engineered for extreme accuracy
            and built to withstand rigorous laboratory environments.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group relative flex flex-col bg-card border-2 border-border shadow-dark hover:border-primary hover:shadow-orange transition-all duration-500 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-[320px] w-full overflow-hidden bg-gradient-to-b from-background to-card px-2 py-1 flex items-center justify-center border-b-2 border-border">
                  {p.mainImage ? (
                    <img
                      src={p.mainImage}
                      alt={p.name}
                      className="w-full h-full object-contain scale-[1.12] transition-transform duration-700 group-hover:scale-[1.18]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-background">
                      <Icon className="h-16 w-16 text-primary opacity-20" />
                    </div>
                  )}

                  {/* Glassmorphism Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-background/80 backdrop-blur-md border border-primary/50 text-foreground text-[10px] font-bold uppercase tracking-widest shadow-md">
                    <Tag className="h-3 w-3 text-primary" /> {p.category}
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute -bottom-6 right-8 h-14 w-14 bg-background flex items-center justify-center text-primary shadow-dark border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 group-hover:rotate-12 z-10 clip-hexagon">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-8 pt-10 flex-grow flex flex-col relative bg-card">
                  <h3 className="text-2xl font-black uppercase text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-8 line-clamp-2">
                    {p.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">
                      Explore Models <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
